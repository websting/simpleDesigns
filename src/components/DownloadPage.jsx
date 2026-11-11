
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaCheckCircle,
  FaDownload,
  FaArrowLeft,
  FaShieldAlt,
} from "react-icons/fa";

function DownloadPage() {
  const [templateName, setTemplateName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [isVerifying, setIsVerifying] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const id = query.get("session_id");

    if (!id) {
      setIsVerifying(false);
      return;
    }

    setSessionId(id);

    const fetchSession = async () => {
      try {
        const res = await fetch(
          `https://simpledesigns.onrender.com/checkout-session/${id}`
        );

        const data = await res.json();

        if (data?.template) {
          setTemplateName(data.template);
          setIsValid(true);
        } else {
          console.error("Invalid session data:", data);
        }
      } catch (err) {
        console.error("Error fetching session:", err);
      } finally {
        setIsVerifying(false);
      }
    };

    fetchSession();
  }, []);

  // EXISTING DOWNLOAD AND REDIRECT LOGIC
  const handleDownload = () => {
    setTimeout(() => {
      navigate("/thank-you");
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] px-5 py-20 flex items-center justify-center">

      <div className="w-full max-w-xl mx-auto">

        {isVerifying ? (

          /* VERIFYING PURCHASE */
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 text-center">

            <div className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center mx-auto mb-6">
              <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Verifying Your Purchase
            </h2>

            <p className="text-gray-500 leading-relaxed">
              Please wait while we confirm your payment.
            </p>

          </div>

        ) : isValid ? (

          /* SUCCESSFUL PURCHASE */
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

            {/* SUCCESS HEADER */}
            <div className="px-6 sm:px-10 pt-10 pb-8 text-center">

              <div className="w-20 h-20 rounded-full bg-indigo-50 flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="text-indigo-600 text-4xl" />
              </div>

              <span className="inline-block px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold tracking-widest uppercase mb-4">
                Payment Confirmed
              </span>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                Thank You!
              </h1>

              <p className="text-gray-500 leading-relaxed max-w-md mx-auto">
                Your purchase was successful. Your template is ready to download.
              </p>

            </div>

            {/* PURCHASE INFORMATION */}
            <div className="px-6 sm:px-10 pb-8">

              <div className="bg-[#FAFAF8] rounded-2xl border border-gray-100 p-6">

                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
                  Your Purchase
                </p>

                <h2 className="text-xl font-bold text-gray-900">
                  {templateName}
                </h2>

                <div className="flex items-center gap-2 mt-4 text-sm text-green-600">
                  <FaCheckCircle />
                  <span className="font-medium">
                    Payment verified successfully
                  </span>
                </div>

              </div>

              {/* DOWNLOAD BUTTON */}
              <a
                href={`https://simpledesigns.onrender.com/secure-download/${sessionId}`}
                onClick={handleDownload}
                className="mt-6 w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <FaDownload />
                Download Your Template
              </a>

              <div className="flex items-center justify-center gap-2 mt-5 text-xs text-gray-400">
                <FaShieldAlt className="text-indigo-500" />
                Secure download verified by simpleDesigns
              </div>

            </div>

            {/* FOOTER ACTION */}
            <div className="border-t border-gray-100 px-6 sm:px-10 py-6 text-center">

              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <FaArrowLeft size={12} />
                Browse More Templates
              </Link>

            </div>

          </div>

        ) : (

          /* PURCHASE VERIFICATION FAILED */
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-10 text-center">

            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Purchase Could Not Be Verified
            </h2>

            <p className="text-gray-500 leading-relaxed mb-7">
              We couldn't verify your purchase. Please check your payment confirmation or contact us for assistance.
            </p>

            <Link
              to="/"
              className="inline-flex items-center justify-center px-7 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
            >
              Return to Home
            </Link>

          </div>

        )}

      </div>

    </div>
  );
}

export default DownloadPage;









