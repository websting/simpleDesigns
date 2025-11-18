export default function WebHosting() {
  return (
    <div className="font-sans text-gray-800">

      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto px-6 mb-15">
        <h1 className="text-4xl font-extrabold mb-6 leading-tight" >
          Web Hosting & Website Services
        </h1>

        <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
          Everything you need to get online — fast, secure, and stress-free, including hosting, domain setup, and complete website creation.
        </p>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold mb-10 text-center">🫴 What I Offer</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-blue-50 shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Web Hosting</h3>
            <p className="text-gray-600 leading-relaxed">
              Fast, reliable hosting for small business and personal websites — fully set up, configured, and maintained for you.
            </p>
          </div>

          <div className="bg-indigo-50 shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Need Domain | Own a Domain</h3>
            <p className="text-gray-600 leading-relaxed">
              I help you choose the right domain and connect it properly to your hosting and website.
            </p>
          </div>

          <div className="bg-slate-50 shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Website Design</h3>
            <p className="text-gray-600 leading-relaxed">
              Modern, mobile-friendly website design using my templates or WordPress — tailored to your business.
            </p>
          </div>

          <div className="bg-gray-50 shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Web Design & Web Hosting</h3>
            <p className="text-gray-600 leading-relaxed">
              Complete setup from scratch: hosting, domain, pages, SSL, and launch — everything you need to go live.
            </p>
          </div>

          <div className="bg-green-50 shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">WordPress Install</h3>
            <p className="text-gray-600 leading-relaxed">
              Professional WordPress setup including theme installation, plugins, security, backups, and performance optimization.
            </p>
          </div>

          <div className="bg-red-50 shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Website Refresh</h3>
            <p className="text-gray-600 leading-relaxed">
              Give your existing site a modern update with improved layout, styling, and performance.
            </p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-3xl mx-auto px-6 mb-24">
  <h2 className="text-3xl font-bold mb-6 text-center">How It Works 🤔</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
  <div className="space-y-6">

    <div className="p-5 rounded-lg bg-gray-50">
      <h3 className="font-semibold text-lg">1. Tell Me What You Need</h3>
      <p className="text-gray-700">
        Hosting? A new site? Domain setup? I’ll guide you through the options.
      </p>
    </div>

    <div className="p-5 rounded-lg bg-gray-50">
      <h3 className="font-semibold text-lg">2. Clear Plan & Pricing</h3>
      <p className="text-gray-700">
        You get a simple proposal tailored to your budget and goals.
      </p>
    </div>

    <div className="p-5 rounded-lg bg-gray-50">
      <h3 className="font-semibold text-lg">3. Setup & Build</h3>
      <p className="text-gray-700">
        After hosting and domain are ready, I begin designing your website.
        You’ll receive a live preview link to follow the progress.
      </p>
    </div>

    <div className="p-5 rounded-lg bg-gray-50">
      <h3 className="font-semibold text-lg">4. Launch & Support</h3>
      <p className="text-gray-700">
        Your site goes live — and I’m available for support and improvements.
      </p>
    </div>

  </div>
</section>


      {/* CTA */}
      <section className="text-center mb-32">
        <h2 className="text-4xl font-extrabold mb-4">Ready to Get Online?</h2>
        <p className="text-gray-600 text-lg mb-8">
          Let’s set up your website, hosting, and domain the right way.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </section>

    </div>
  );
}
