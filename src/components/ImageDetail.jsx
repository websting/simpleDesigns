import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from 'react-icons/fa';
import TabCard from "./TabCard";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const ImageDetail = () => {
  const { public_id: publicId } = useParams();
  const [template, setTemplate] = useState(null);

  useEffect(() => {
    fetch("/data/images.json")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((t) => t.public_id === publicId);
        if (selected) setTemplate(selected);
      })
      .catch((err) => console.error("Failed to load JSON:", err));
  }, [publicId]);

  const handleBuyNowClick = async (template) => {
    const stripe = await stripePromise;

    try {
    console.log("📤 Sending to backend:", {
      templateName: template.title,
      priceId: template.priceId
    });

      const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          templateName: template.title,        // You can adjust this as needed
          priceId: template.priceId            // Make sure your JSON has this
        }),
      });

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
      console.error('Error creating checkout session:', error);
    }
  };

  if (!template)
    return (
      <div className="max-w-6xl mx-auto p-6 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
        <div className="h-96 bg-gray-100 rounded mb-6"></div>
        <div className="flex justify-between">
          <div className="h-10 bg-gray-200 rounded w-1/4"></div>
          <div className="h-10 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>
    );

  return (
    <div className="bg-white min-h-screen pt-10 px-4 sm:px-6 lg:px-20">
      {/* Tweak image size as needed */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-semibold text-center text-gray-800 mb-10">
          {template.title}
        </h1>



        <div className="bg-gray-50 rounded-xl shadow-md overflow-hidden mb-12">
          <img
            src={template.url}
            alt={template.title}
            className="w-full h-auto object-cover transition duration-300 hover:scale-[1.01]"
          />

          <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-6 gap-4">
            <a
              href={template.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-200 transition"
            >
              <FaExternalLinkAlt />
              Visit Live Demo
            </a>

            <button
              onClick={() => handleBuyNowClick(template)}
              className="px-8 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-lg"
            >
              Buy Now - {template.price}
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
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

