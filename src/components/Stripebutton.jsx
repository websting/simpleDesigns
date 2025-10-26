// StripeButton.jsx
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';

// Load Stripe with your public key
const stripePromise = loadStripe('your-publishable-key-here');

const Stripebutton = ({ total, templateTitle }) => {
  const navigate = useNavigate();

  const handleCheckout = async () => {
    try {
      // Call your backend to create a checkout session
      const response = await fetch('/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price: total,
          templateTitle: templateTitle,
        }),
      });

      const session = await response.json();

      // Redirect to Stripe Checkout
      const { error } = await stripePromise.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        console.error('Error redirecting to checkout:', error);
      }
    } catch (err) {
      console.error('Error creating checkout session:', err);
    }
  };

  return (
    <div className="mt-6 w-full max-w-md mx-auto">
      <button
        onClick={handleCheckout}
        className="
          w-full
          py-3
          text-white
          font-semibold
          rounded-md
          bg-gradient-to-r from-blue-500 to-blue-600
          hover:from-blue-600 hover:to-blue-700
          focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1
          transition-all duration-150
        "
      >
        Pay with Stripe
      </button>
    </div>
  );
};

export default Stripebutton;

