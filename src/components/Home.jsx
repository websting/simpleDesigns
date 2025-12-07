import { Link } from "react-router-dom";
import ImageList from "../components/ImageList";

export default function Home() {
  return (
    <div className="w-full">

      {/* ========================= */}
      {/* HERO SECTION */}
      {/* ========================= */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-28 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
            Premium HTML5 Website Templates for Professionals
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-md">
            Modern, responsive starter templates that save you time — fully customizable, SEO-friendly, and ready to deploy.
          </p>

          <a
            href="#templates"
            className="border border-white text-white px-8 py-4 rounded-lg text-lg hover:bg-white hover:text-gray-900 transition font-semibold"
          >
            Browse Templates
          </a>
        </div>
      </section>

      {/* ========================= */}
      {/* TEMPLATES / IMAGE LIST */}
      {/* ========================= */}
      <section id="templates" className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-5">Designed for Freelancers & Agencies</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Deliver high-quality client projects faster with clean HTML5 templates that are easy to customize, visually modern,
            and built with flexibility in mind. Reduce development time and boost client satisfaction with professional layouts
            and reusable components.
        </p>
        <div className="max-w-6xl mx-auto">
          <ImageList />
        </div>
      </section>


      {/* ========================= */}
      {/* NEW SECTION: TEMPLATE CATEGORIES */}
      {/* ========================= */}
      <section className="bg-gray-50 px-6 -mt-16">
  <h2 className="text-3xl font-bold text-center mb-6">Explore Template Categories</h2>

  <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
    <CategoryCard title="Business Templates" link="/business" />
    <CategoryCard title="Portfolio Templates" link="/portfolio" />
    <CategoryCard title="Landing Pages" link="/landing-pages" />
    <CategoryCard title="Freelancer & Agency" link="/agency" />
    <CategoryCard title="Multi-Purpose Templates" link="/multi-purpose" />
    <CategoryCard title="Blog & Content Templates" link="/blog-templates" />
  </div>
</section>

      {/* ========================= */}
      {/* NEW SECTION: WHY CHOOSE US */}
      {/* ========================= */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Templates?</h2>

        <ul className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-gray-700 text-lg">
          <li>✔ Clean, semantic HTML5 structure</li>
          <li>✔ Modern, professional UI design</li>
          <li>✔ Fully responsive across devices</li>
          <li>✔ Fast-loading, optimized performance</li>
          <li>✔ Easy customization for any project</li>
          <li>✔ Ideal for developers, freelancers, agencies, and small businesses</li>
        </ul>
      </section>

    </div>
  );
}

/* ========================= */
/* CATEGORY CARD COMPONENT   */
/* ========================= */
function CategoryCard({ title, link }) {
  return (
    <a
      href={link}
      className="block bg-white p-6 shadow rounded-lg hover:bg-gray-50 transition"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
    </a>
  );
}










