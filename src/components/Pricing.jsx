export default function PricingPage() {
  const plans = [
    {
      title: "Website Design (WordPress)",
      price: "$699+",
      features: [
        "Custom WordPress Build",
        "Responsive Mobile Design",
        "SEO-Ready Setup",
        "Basic Plugins Included"
      ]
    },
    {
      title: "Web Hosting",
      price: "$19/mo",
      features: [
        "Fast, Secure Hosting",
        "SSL Certificate Included",
        "Daily Backups",
        "99.9% Uptime"
      ]
    },
    {
      title: "Domain Registration",
      price: "$12/yr",
      features: [
        "Your Domain Name",
        "DNS Setup Included",
        "Domain Privacy Option",
        "Fast Registration"
      ]
    }
  ];

  const popularPlan = {
    title: "All in One Package",
    price: "$749+",
    subtitle: "Most Popular",
    features: [
      "Custom WordPress Website",
      "Fast, Secure Hosting",
      "Domain Registration",
      "SSL Setup + Backups Included",
      "Full Deployment Included"
    ]
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* PAGE HEADER */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Our Packages
      </h1>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-16">
        Simple, affordable options for your website needs. Choose a single
        service or bundle everything with our most popular package.
      </p>

      

      {/* 3 SERVICE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="bg-white border rounded-2xl p-8 shadow-md hover:shadow-xl transition hover:scale-[1.02]"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {plan.title}
            </h2>

            <p className="text-3xl font-extrabold text-blue-600 mb-6">
              {plan.price}
            </p>

            <ul className="space-y-3 mb-8">
              {plan.features.map((item) => (
                <li key={item} className="text-gray-700 flex items-start gap-2">
                  <span className="text-blue-600">✔</span> {item}
                </li>
              ))}
            </ul>

            <a
              href="/contact"
              className="block w-full text-center bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Select
            </a>
          </div>
        ))}
      </div>

      {/* MOST POPULAR CARD */}
      <div className="mb-20 mt-16">
        <div className="relative max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-10 border border-blue-500 hover:scale-[1.02] transition">
          <span className="absolute top-4 right-4 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
            {popularPlan.subtitle}
          </span>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {popularPlan.title}
          </h2>
          <p className="text-3xl font-extrabold text-blue-600 mb-6">
            {popularPlan.price}
          </p>

          <ul className="space-y-3 mb-8">
            {popularPlan.features.map((item) => (
              <li key={item} className="text-gray-700 flex items-start gap-2">
                <span className="text-blue-600">✔</span> {item}
              </li>
            ))}
          </ul>

          <a
            href="/contact"
            className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
