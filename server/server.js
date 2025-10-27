import express from "express";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";

dotenv.config();
const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const port = process.env.PORT || 4242;

// ✅ Update this to match your Netlify frontend URL
const allowedOrigins = [
  'https://ahsimpledesigns.netlify.app',
  'http://localhost:5173' // keep for local dev
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error('❌ CORS blocked for:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.use(express.json());

// 
// =============================
// STRIPE ROUTES                
// =============================

// ✅ Route 1: Create checkout session
app.post("/create-checkout-session", async (req, res) => {
  const { templateName, priceId } = req.body;

  console.log("📦 Incoming checkout request:", { templateName, priceId });

  if (!priceId) {
    console.error("❌ Missing priceId in request body");
    return res.status(400).json({ error: "Missing priceId" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/download?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
      metadata: { template: templateName },
    });

    console.log("✅ Stripe session created:", session.id);
    res.json({ sessionId: session.id });
  } catch (error) {
    console.error("❌ Stripe session creation failed:", error.message);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
});

// ✅ Route 2: Retrieve checkout session for verification
app.get("/checkout-session/:sessionId", async (req, res) => {
  const { sessionId } = req.params;

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const template = session.metadata.template;

    if (session.payment_status === "paid") {
      res.json({ template });
    } else {
      res.status(403).json({ error: "Payment not completed." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Invalid session." });
  }
});

// ✅ Route 3: Secure download route
app.get("/secure-download/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return res.status(403).json({ error: "Unauthorized. Payment not verified." });
    }

    const templateName = session.metadata?.template;
    if (!templateName) {
      return res.status(400).json({ error: "Template information missing." });
    }

    const filePath = path.join(process.cwd(), "server", "downloads", `${templateName}.zip`);
    console.log("🔍 Checking path:", filePath);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ error: "File not found on server." });
    }

    res.download(filePath, `${templateName}.zip`, (err) => {
      if (err) {
        console.error("Download failed:", err);
        res.status(500).json({ error: "File download failed." });
      }
    });
  } catch (err) {
    console.error("Error in secure download route:", err);
    res.status(500).json({ error: "Something went wrong while verifying payment." });
  }
});

//
// =================================
// ARTICLE ROUTES
// ===================================

// ✅ Route 4: Serve all articles
app.get("/articles", (req, res) => {
  const filePath = path.join(process.cwd(), 'server', "articles.json");

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading articles:", err);
      return res.status(500).json({ error: "Unable to load articles." });
    }

    res.json(JSON.parse(data));
  });
});

// ✅ Route 5: Fetch a single article dynamically by slug
app.get("/articles/:slug", (req, res) => {
  const filePath = path.join(process.cwd(), "articles.json");
  const { slug } = req.params;

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) return res.status(500).json({ error: "Unable to load article." });

    const articles = JSON.parse(data);
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
      return res.status(404).json({ error: "Article not found." });
    }

    res.json(article);
  });
});

//
// =============================
// SERVER START
// ============================

app.listen(port, () => {
  console.log(`🚀 Stripe server listening at http://localhost:${port}`);
});


