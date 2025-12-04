import { Link } from "react-router-dom";
import ImageList from "../components/ImageList"; // Adjust the path if needed

export default function Home() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-28 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
            Website Templates for Developers Designers & Freelancers
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md">
            Modern, responsive HTML5 templates that save you time — fully customizable, SEO-friendly, and ready to deploy. Plus, fast and reliable web hosting to launch your projects instantly.
          </p>

          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <a
              href="#templates"
              className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg shadow hover:bg-blue-50 transition"
            >
              Browse Templates
            </a>
            <Link
              to="/webhosting"
              className="border border-white text-white px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-gray-900 transition font-semibold"
            >
              Explore Hosting
            </Link>
          </div>
        </div>
      </section>

      {/* TEMPLATES / IMAGE LIST */}
      <section id="templates" className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Our Templates</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Hand-picked, modern templates designed to save you time and effort while maintaining high quality and flexibility.
        </p>
        <div className="max-w-6xl mx-auto">
          <ImageList />
        </div>
      </section>

      {/* FEATURE HIGHLIGHTS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-xl font-bold mb-3">Fully Responsive</h3>
            <p className="text-gray-600">
              All templates adapt perfectly to mobile, tablet, and desktop screens.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">SEO Optimized</h3>
            <p className="text-gray-600">
              Templates follow best practices to help your site rank high on search engines.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Fast & Reliable Hosting</h3>
            <p className="text-gray-600">
              Launch your site instantly on Canadian servers with full support included.
            </p>
          </div>
        </div>
      </section>

      {/* OPTIONAL CTA */}
      <section className="py-24 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Build?</h2>
        <p className="text-white/90 max-w-xl mx-auto mb-10">
          Whether you want a modern template or full hosting support, we make it fast, easy, and reliable.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-lg shadow hover:bg-blue-50 transition"
        >
          Contact Us Today
        </Link>
      </section>

    </div>
  );
}









