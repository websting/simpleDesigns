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

// ✅ Allow frontend origins
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

// =============================
// Load templates
// =============================
const templatesPath = path.join(process.cwd(), "..", "public", "data", "images.json");

let templates = [];
try {
  const data = fs.readFileSync(templatesPath, "utf-8");
  templates = JSON.parse(data);
  console.log(`✅ Loaded ${templates.length} templates from images.json`);
} catch (err) {
  console.error("❌ Failed to load templates:", err);
}

// =============================
// STRIPE ROUTES                
// =============================

// Route 1: Create checkout session
app.post("/create-checkout-session", async (req, res) => {
  const { templateName, priceId } = req.body;
  console.log("📦 Incoming checkout request:", { templateName, priceId });

  if (!priceId) return res.status(400).json({ error: "Missing priceId" });

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

// Route 2: Retrieve checkout session
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

// Route 3: Secure download
app.get("/secure-download/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return res.status(403).json({ error: "Unauthorized. Payment not verified." });
    }

    const templateName = session.metadata?.template;
    if (!templateName) return res.status(400).json({ error: "Template info missing." });

    // Find template in images.json
    const template = templates.find(t => t.title === templateName);
    if (!template) {
      console.error("❌ Template not found for:", templateName);
      console.log("Available template titles:", templates.map(t => t.title));
      return res.status(404).json({ error: "Template not found in template list." });
    }

    const fileName = template.fileName || `${templateName}.zip`;
    const filePath = path.join(process.cwd(), "downloads", fileName);


    console.log("🔍 Checking path:", filePath);

    if (!fs.existsSync(filePath)) {
      console.error("❌ File missing at:", filePath);
      return res.status(404).json({ error: "File not found on server." });
    }

    res.download(filePath, fileName, (err) => {
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

// =============================
// SERVER START
// =============================
app.listen(port, () => {
  console.log(`🚀 Stripe server listening at http://localhost:${port}`);
});



