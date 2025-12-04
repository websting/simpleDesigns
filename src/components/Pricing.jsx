export default function HostingLandingPage() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-28 px-6 text-center shadow-lg">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Fast, Secure, Fully-Managed Hosting in Canada
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            No confusing plans. No hidden upsells. Just fast hosting and personal support
            from someone who actually cares about your website.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <a href="#pricing" 
               className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg shadow hover:bg-blue-50 transition">
              View Plans
            </a>
            <a href="/contact"
               className="border border-white text-white px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-gray-900 transition font-semibold">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITIONS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-xl font-bold mb-3">Canadian Hosting</h3>
            <p className="text-gray-600">
              Your website is stored in Canadian data centres — fast, compliant, and secure.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Full Management</h3>
            <p className="text-gray-600">
              We handle updates, backups, security, optimization, and monitoring.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Real Human Support</h3>
            <p className="text-gray-600">
              No ticket queues. No outsourcing. Just real help when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-18 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Simple, Honest Pricing</h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-14">
          Choose Web Hosting or an all-in-one solution. No hidden fees. No contracts.
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Web Hosting Plan */}
          <div className="bg-white border rounded-2xl p-8 shadow hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Web Hosting</h3>
            <p className="text-gray-600 mb-6">
              Fast, secure hosting for blogs, freelancers, and small businesses.
            </p>
            <p className="text-4xl font-extrabold text-blue-600 mb-2">$12<span className="text-xl font-normal">/mo</span></p>
            <p className="text-sm text-gray-500 mb-6">(DIY Hosting — You manage your own site)</p>

            <ul className="space-y-3 mb-8">
              {[
                "5 GB SSD Storage",
                "15 GB Monthly Bandwidth",
                "SSL Certificate Included",
                "Daily Backups",
                "Canadian Servers",
                "DDoS Protection",
                "Email Support"
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600">✔</span> {f}
                </li>
              ))}
            </ul>

            <a href="/contact" 
               className="block w-full text-center bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              Get Hosting
            </a>
          </div>

          {/* All-In-One */}
          <div className="relative bg-white border border-blue-400 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition">
            <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 text-sm rounded-full font-semibold">
              Most Popular
            </span>

            <h3 className="text-2xl font-bold text-gray-800 mb-2">All-In-One Package</h3>
            <p className="text-gray-600 mb-6">
              Website design + hosting + security. Perfect for businesses who want everything done for them.
            </p>

            <p className="text-4xl font-extrabold text-blue-600 mb-2">$749</p>
            <p className="text-sm text-gray-500 mb-6">Initial Setup Fee — Includes full website build</p>
            <p className="text-xl font-bold text-gray-800 mb-2">$66.12<span className="text-lg">/mo</span></p>
            <p className="text-sm text-gray-500 mb-6">(Managed Hosting Included)</p>

            <ul className="space-y-3 mb-8">
              {[
                "Custom WordPress Website",
                "Canadian Hosting",
                "Daily Backups",
                "SSL + Security Included",
                "WordPress Updates Managed",
                "Plugin Monitoring",
                "Full Deployment + Optimization",
                "Human Support Whenever You Need It"
              ].map((f) => (
                <li key={f} className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-600">✔</span> {f}
                </li>
              ))}
            </ul>

            <a href="/contact" 
               className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Get Started
            </a>
          </div>

        </div>
      </section>

      {/* WHY NOT 3.99 */}
      <section className="py-20 px-6 bg-gray-50 border-t border-red-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Why Our Hosting Isn’t $3.99/mo (And Why it's a Good Thing)
          </h2>

          <ul className="space-y-3 text-red-900 bg-white p-6 rounded-xl border border-red-200 shadow mb-10">
            <li>• $3.99/mo requires a 3-year contract</li>
            <li>• Price increases dramatically when renewing</li>
            <li>• Backups, SSL, malware scans cost extra</li>
            <li>• Support is ticket-based and slow</li>
          </ul>

          <p className="text-gray-700 text-lg text-center max-w-xl mx-auto">
            What looks like $3.99/mo quickly becomes $25–$40/mo — before you do any actual maintenance.
          </p>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-24 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">How We Compare</h2>

        <div className="overflow-x-auto max-w-5xl mx-auto border rounded-xl shadow">
          <table className="w-full text-left text-sm md:text-base">
            <thead className="bg-gray-100 font-semibold text-gray-700">
              <tr>
                <th className="p-4">Feature</th>
                <th className="p-4">Cheap Hosts</th>
                <th className="p-4">Our Hosting</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                ["Real Monthly Cost", "$25–$40/mo", "$66.12/mo"],
                ["SSL", "+$5/mo", "Included"],
                ["Backups", "+$4/mo", "Included"],
                ["Security", "Minimal", "Included"],
                ["WP Updates", "Not included", "Included"],
                ["Support", "Ticket Queue", "Human Support"],
                ["Upfront Payment", "1–3 Years", "None"]
              ].map(([feature, cheap, ours]) => (
                <tr key={feature}>
                  <td className="p-4">{feature}</td>
                  <td className="p-4">{cheap}</td>
                  <td className="p-4 font-semibold text-blue-600">{ours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-gray-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-10">
          Whether you want simple hosting or a full done-for-you website solution — we’ve got you covered.
        </p>
        <a href="/contact" 
           className="bg-blue-600 hover:bg-blue-700 transition px-10 py-4 rounded-lg text-lg font-semibold">
          Contact Us Today
        </a>
      </section>

    </div>
  );
}






