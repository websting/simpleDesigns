import ImageList from "./ImageList";
import { Link } from "react-router-dom";

export default function WebHosting() {
  return (
    <div className="w-full flex flex-col items-center bg-gray-50">

      {/* HERO */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-28 px-6 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Your All-in-One Web Hosting & Design Partner
        </h1>
        <p className="text-xl md:text-2xl mb-4 opacity-95">
          Fast, secure hosting to power your online presence.
        </p>
        <p className="max-w-2xl mx-auto text-white/90">
          Launch quickly with dependable hosting, domain, and custom design.
        </p>
      </section>

      {/* FLOATING CARDS */}
      <section className="relative w-full max-w-6xl -mt-20 z-20 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-24">

        {/* CARD 1 */}
        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-slate-200 p-8 transition hover:-translate-y-1">
          <div className="w-14 h-14 mb-6 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none"
              viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
              <rect x="3" y="4" width="18" height="7" rx="2" ry="2" />
              <rect x="3" y="13" width="18" height="7" rx="2" ry="2" />
              <circle cx="7" cy="8" r="1" />
              <circle cx="7" cy="17" r="1" />
            </svg>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Need Hosting to Launch Your Website Quickly?
          </h3>

          <p className="text-gray-600 leading-relaxed mb-5">
            To establish a strong online presence, your website needs a reliable
            home. Fast, secure web hosting gives your site the stability, speed,
            and protection it needs.
          </p>

          <Link
            to={`/blog/key-elements-of-a-web-host`}
            className="text-blue-600 font-semibold hover:text-blue-800 transition"
          >
            See Key Features →
          </Link>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-slate-200 p-8 transition hover:-translate-y-1">
          <div className="w-14 h-14 mb-6 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none"
              viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20" />
              <path d="M12 2c2.3 2.2 3.9 5.8 4 10-.1 4.2-1.7 7.8-4 10M12 2C9.8 4.2 8.2 7.8 8 12c.2 4.2 1.8 7.8 4 10" />
            </svg>
          </div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Why Your Website Needs a Domain Name
          </h3>

          <p className="text-gray-600 leading-relaxed mb-5">
            Websites need an address—a unique domain that represents your brand.
            With hosting and a domain working together, visitors can easily
            access your site.
          </p>

          <Link
            to={`/blog/what-is-a-domain-name`}
            className="text-blue-600 font-semibold hover:text-blue-800 transition"
          >
            Read More →
          </Link>
        </div>

        {/* CARD 3 — FEATURED */}
        <div className="bg-gradient-to-br from-orange-600 to-indigo-700 text-white rounded-2xl shadow-2xl p-8 relative overflow-hidden hover:-translate-y-1 transition">
          <div className="absolute right-6 top-6 bg-white text-blue-700 px-3 py-1 text-xs font-semibold rounded-full shadow">
            <a href="#initial-setup">How it works</a>
          </div>

          <div className="w-14 h-14 mb-6 rounded-xl bg-white/20 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none"
              viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor">
              <path d="M12 6.75l1.5 4.5h4.5l-3.75 2.75 1.5 4.5L12 15.75l-3.75 2.75 1.5-4.5L6 11.25h4.5l1.5-4.5z" />
            </svg>
          </div>

          <h3 className="text-2xl font-semibold mb-4 text-white">
            Complete Managed Web Hosting Package
          </h3>

          <p className="text-white/90 leading-relaxed">
            Our all-in-one solution includes domain registration, fast & secure
            hosting, and a fully managed WordPress website—so you can focus on
            growing your business.
          </p>
        </div>
      </section>

      {/* HOW IT'S DONE */}
      <section id="initial-setup" className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Initial Setup Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-14">
            Our simple, transparent process gets your website live smoothly and on time.
          </p>
        </div>

        {/* STEPS */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-600 text-white p-5 rounded-full shadow-lg mb-4">
              <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-10 w-10"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="2"
  stroke="currentColor"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.876-1.423L3 20l1.423-4.876A9.863 9.863 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
  />
</svg>
            </div>
            <Link
              to="/contact"
              className="text-xl font-semibold mb-2 text-blue-600 hover:underline"
            >
              Contact
            </Link>
            <p className="text-gray-600 max-w-xs">
              Reach out via our contact form to discuss your web hosting needs.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-600 text-white p-5 rounded-full shadow-lg mb-4">
              <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-10 w-10"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="2"
  stroke="currentColor"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 12h6m-6 4h6m-6-8h6M7 3h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"
  />
</svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Proposal
            </h3>
            <p className="text-gray-600 max-w-xs">
              Next we provide a quote outlining the hosting plan and costs.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-600 text-white p-5 rounded-full shadow-lg mb-4">
              <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-10 w-10"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="2"
  stroke="currentColor"
>
  <rect x="3" y="4" width="18" height="7" rx="2" ry="2" />
  <rect x="3" y="13" width="18" height="7" rx="2" ry="2" />
  <circle cx="7" cy="8" r="1" />
  <circle cx="7" cy="17" r="1" />
</svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Backend
            </h3>
            <p className="text-gray-600 max-w-xs">
              Once approved, we set up your domain and hosting environment.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-purple-600 text-white p-5 rounded-full shadow-lg mb-4">
              <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-10 w-10"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="2"
  stroke="currentColor"
>
  <rect x="2" y="6" width="20" height="12" rx="2" ry="2" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4" />
</svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              Frontend
            </h3>
            <p className="text-gray-600 max-w-xs">
              Finally, we launch your website and ensure everything runs smoothly.
            </p>
          </div>
        </div>

        {/* CALL TO ACTION */}
        <div className="max-w-3xl mx-auto mt-16 p-8 bg-gray-100 rounded-xl shadow-md text-center">
          <p className="text-lg font-semibold mb-4 text-gray-800">
            Already own a website & domain? We can migrate both to our hosting with
            zero downtime—all remotely and hassle-free.
          </p>
          <a
            href="/services"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Hosting Now
          </a>
        </div>

      </section>
    </div>
  );
}


