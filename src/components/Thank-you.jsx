
import { Link } from "react-router-dom";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] px-5 py-20 flex items-center justify-center">

      <div className="w-full max-w-xl bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

        {/* SUCCESS MESSAGE */}
        <div className="px-6 sm:px-10 pt-12 pb-10 text-center">

          <div className="w-20 h-20 rounded-full bg-indigo-50 flex items-center justify-center mx-auto mb-7">
            <FaCheckCircle className="text-indigo-600 text-4xl" />
          </div>

          <span className="inline-block px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold tracking-widest uppercase mb-5">
            Order Complete
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-5">
            Thank You for Your Purchase!
          </h1>

          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
            Your download was successful. We appreciate your support and hope you enjoy building with your new template!
          </p>

          {/* RETURN HOME */}
          <Link
            to="/"
            className="mt-9 inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Browse More Templates
            <FaArrowRight size={14} />
          </Link>

        </div>

        {/* BOTTOM MESSAGE */}
        <div className="border-t border-gray-100 bg-[#FAFAF8] px-6 py-5 text-center">
          <p className="text-sm text-gray-400">
            Thank you for choosing{" "}
            <span className="font-semibold text-gray-600">
              simpleDesigns
            </span>
            .
          </p>
        </div>

      </div>

    </div>
  );
}
