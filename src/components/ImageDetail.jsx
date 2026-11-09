
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import TabCard from "./TabCard";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY
);

const ImageDetail = () => {
  const { public_id: publicId } = useParams();
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    fetch("/data/images.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find(
          (t) => t.public_id === publicId
        );

        if (selected) setTemplate(selected);
      })
      .catch((err) =>
        console.error("Failed to load JSON:", err)
      );
  }, [publicId]);

  // EXISTING STRIPE CHECKOUT LOGIC
  const handleBuyNowClick = async (template) => {
    const stripe = await stripePromise;

    try {
      console.log("📤 Sending to backend:", {
        templateName: template.title,
        priceId: template.priceId,
      });

      const response = await fetch(
        "https://simpledesigns.onrender.com/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            templateName: template.title,
            priceId: template.priceId,
          }),
        }
      );

      const data = await response.json();

      console.log("📥 Backend response:", data);

      if (!data.sessionId) {
        console.error("❌ No sessionId returned.");
        return;
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId: data.sessionId,
      });

      if (error) {
        console.error("❌ Stripe redirect error:", error);
      }
    } catch (error) {
      console.error(
        "Error creating checkout session:",
        error
      );
    }
  };

  // LOADING STATE
  if (!template) {
    return (
      <div className="min-h-screen bg-[#FAFAF8] px-6 py-12">
        <div className="max-w-5xl mx-auto animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-10"></div>
          <div className="h-[400px] bg-gray-200 rounded-2xl mb-6"></div>
          <div className="h-16 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#FAFAF8] px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-20 md:pb-16">
      <div className="max-w-5xl mx-auto">

        {/* TEMPLATE HEADER */}
        <div className="text-center mb-10">

          <span className="inline-block px-4 py-2 mb-5 rounded-full bg-indigo-50 text-indigo-700 text-xs sm:text-sm font-semibold tracking-wide uppercase">
            Website Template
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            {template.title}
          </h1>

          <p className="max-w-2xl mx-auto mt-4 text-gray-500 text-base md:text-lg leading-relaxed">
            {template.description}
          </p>

        </div>

        {/* TEMPLATE PREVIEW AND ACTIONS */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-10">

          {/* PREVIEW IMAGE */}
          <div className="bg-gray-100 p-2 sm:p-4">
            <img
              src={template.url}
              alt={template.title}
              className="w-full max-h-[600px] object-contain rounded-xl transition-transform duration-300 hover:scale-[1.01]"
            />
          </div>

          {/* ACTION BAR */}
          <div className="flex flex-col sm:flex-row justify-between items-center px-5 sm:px-8 py-6 gap-4">

            <a
              href={template.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:border-indigo-600 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200"
            >
              <FaExternalLinkAlt size={14} />
              Visit Live Demo
            </a>

            <button
              onClick={() => handleBuyNowClick(template)}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Buy Now - {template.price}
            </button>

          </div>
        </div>

        {/* TEMPLATE INFORMATION */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-8">

          <TabCard
            title={template.title}
            description={template.description}
            author={template.author}
            credits={template.credits}
            features={template.features}
            included={template.included}
            price={template.price}
            priceId={template.priceId}
          />

        </div>

      </div>
    </div>
  );
};

export default ImageDetail;



