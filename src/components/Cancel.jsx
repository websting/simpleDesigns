
import { Link } from "react-router-dom";
import { FaCircleXmark, FaArrowLeft, FaRotateRight } from "react-icons/fa6";

const Cancel = () => {
  return (
    <div className="min-h-[80vh] bg-[#FAFAF8] flex items-center justify-center px-6 py-16">

      <div className="w-full max-w-xl bg-white rounded-3xl border border-gray-100 shadow-sm px-7 py-12 sm:px-12 text-center">

        {/* STATUS ICON */}
        <div className="w-20 h-20 mx-auto mb-7 rounded-full bg-indigo-50 flex items-center justify-center">
          <FaCircleXmark className="text-indigo-600" size={38} />
        </div>

        {/* HEADING */}
        <span className="text-sm font-semibold tracking-widest uppercase text-indigo-600">
          Checkout Update
        </span>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-5">
          Payment Cancelled
        </h1>

        {/* MESSAGE */}
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-9">
          Your checkout was cancelled and no payment was completed.
          No worries! Your template is still waiting for you whenever
          you're ready.
        </p>

        {/* ACTIONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:shadow-lg transition-all duration-200"
          >
            <FaArrowLeft size={14} />
            Return Home
          </Link>

          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-gray-200 text-gray-700 font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all duration-200"
          >
            <FaRotateRight size={14} />
            Browse Templates
          </Link>

        </div>

        {/* FOOTER MESSAGE */}
        <p className="text-sm text-gray-400 mt-9">
          Need help? We're happy to assist.
        </p>

      </div>

    </div>
  );
};

export default Cancel;

