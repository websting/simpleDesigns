import { useLocation } from 'react-router-dom';
import Personalinfo from './Personalinfo';
import Stripebutton from './Stripebutton';

const OrderSummary = () => {
  const location = useLocation();
  // const navigate = useNavigate();

  // Extract template data from location.state
  const { template } = location.state || {};  // Default to an empty object if no state provided

  // Tax calculation + Total
  const taxRate = 0.13; // 13% HST for simplicity
  const cost = parseFloat(template?.price?.replace('C$', '')) || 0; // Ensure price is parsed to a float
  const tax = cost * taxRate;
  const total = cost + tax;

  if (!template || !template.title || !template.price) {
    return <div>Template data is missing.</div>;
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-6 sm:p-8 bg-white shadow-2xl rounded-xl border border-gray-200 space-y-8">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 text-center">
        Template Payment Details
      </h1>

      {/* Order Summary */}
      <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl sm:text-2xl font-medium text-gray-700 mb-4">Order Summary</h2>

        <div className="flex justify-between mb-2 text-gray-700">
          <span className="text-sm sm:text-base">Template</span>
          <span className="text-sm sm:text-base">{template.title}</span>
        </div>

        <div className="flex justify-between mb-2 text-gray-700">
          <span className="text-sm sm:text-base">Price</span>
          <span className="text-sm sm:text-base">C${cost.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-2 text-gray-700">
          <span className="text-sm sm:text-base">Tax (13%)</span>
          <span className="text-sm sm:text-base">C${tax.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mt-3 font-semibold text-gray-900 text-base sm:text-lg">
          <span>Total</span>
          <span>C${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Personal Info Header */}
      <h2 className="text-xl sm:text-2xl font-medium text-gray-700 text-center border-b border-gray-200 pb-4">
        Personal Information
      </h2>

      {/* Personal Info Form */}
      <Personalinfo />

      {/* Stripe Checkout Button */}
      <div className="mt-4">
        <Stripebutton />
      </div>
    </div>
  );
};

export default OrderSummary;

