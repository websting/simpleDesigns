import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    business: "",
    businessDescription: "",
    email: "",
    phone: "",
    hasWebsite: false,
    services: [],
    hasDomain: "",
    domainName: "",
    timeline: "",
    budget: "",
    referral: "",
    message: "",
  });

  const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbywXrxOO3nv4kx2v7xkLMIETgJrfXcR2HqH-jMQDTPQ7DE_EOPx6CGQKLfr7AlMVvJQ/exec";

  const serviceOptions = [
    { label: "Website", value: "website" },
    { label: "Hosting", value: "hosting" },
    { label: "Domain", value: "domain" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // When user checks "I already own a website"
    if (type === "checkbox" && name === "hasWebsite") {
      setFormData((prev) => ({
        ...prev,
        hasWebsite: checked,
        services: checked ? ["hosting", "domain"] : [],
      }));
      return;
    }

    // Handle service checkboxes
    if (type === "checkbox") {
      setFormData((prev) => {
        const newServices = checked
          ? [...prev.services, value]
          : prev.services.filter((s) => s !== value);
        return { ...prev, services: newServices };
      });
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("Form submitted! We'll be in touch soon.");

      // Redirect to homepage
      window.location.href = "/";

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        business: "",
        businessDescription: "",
        email: "",
        phone: "",
        hasWebsite: false,
        services: [],
        hasDomain: "",
        domainName: "",
        timeline: "",
        budget: "",
        referral: "",
        message: "",
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong submitting the form.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-xl rounded-xl mt-16 mb-24">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Tell Us About Your Business
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* NAME FIELDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* BUSINESS NAME */}
        <input
          type="text"
          name="business"
          placeholder="Business Name"
          value={formData.business}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
        />

        {/* BUSINESS DESCRIPTION */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Briefly describe your business
          </label>
          <textarea
            name="businessDescription"
            placeholder="Tell us what your business does..."
            value={formData.businessDescription}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 w-full h-28 resize-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* EMAIL + PHONE */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (optional)"
          value={formData.phone}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
        />

        {/* HAS WEBSITE */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="hasWebsite"
            checked={formData.hasWebsite}
            onChange={handleChange}
            className="w-4 h-4 accent-blue-600"
          />
          <span className="text-gray-700">I already own a website</span>
        </div>

        {/* SERVICE OPTIONS */}
        <div className="space-y-2">
          <p className="text-gray-700 font-medium">
            What services are you looking for?
          </p>
          {serviceOptions.map((option) => {
            if (formData.hasWebsite && option.value === "website") return null;
            return (
              <label key={option.value} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={option.value}
                  checked={formData.services.includes(option.value)}
                  onChange={handleChange}
                  className="w-4 h-4 accent-blue-600"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            );
          })}
        </div>

        {/* DOMAIN SECTION */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Do you already have a domain?
          </label>
          <select
            name="hasDomain"
            value={formData.hasDomain}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select one</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="not-sure">Not sure</option>
          </select>
        </div>

        {formData.hasDomain === "yes" && (
          <input
            type="text"
            name="domainName"
            placeholder="Your domain name (e.g. mybusiness.com)"
            value={formData.domainName}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
          />
        )}

        {/* TIMELINE */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            When do you need project completed?
          </label>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select one</option>
            <option value="asap">ASAP</option>
            <option value="1-2-weeks">1–2 weeks</option>
            <option value="30-days">Within 30 days</option>
            <option value="researching">Just researching for now</option>
          </select>
        </div>

        {/* REFERRAL */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            How did you hear about us?
          </label>
          <select
            name="referral"
            value={formData.referral}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-3 w-full focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Choose one</option>
            <option value="google">Google Search</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="friend">Friend or referral</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* MESSAGE */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Anything else you'd like to tell us? If not, we'll reach out soon!"
          className="border border-gray-300 rounded-md p-3 w-full h-28 resize-none focus:ring-2 focus:ring-blue-500"
        />

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white text-lg py-3 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}


