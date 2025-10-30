import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-red-600">Payment Cancelled</h1>
      <p className="mb-6 text-gray-700">
        It looks like your payment didn’t go through. You can try again anytime!
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        Return Home
      </Link>
    </div>
  );
};

export default Cancel;
