import { Link } from "react-router-dom";
import ImageList from "../components/ImageList";

export default function Home() {
  return (
    <div className="w-full">

      {/* ========================= */}
{/* HERO / CATEGORY NAVIGATION */}
{/* ========================= */}
<section className="bg-white border-b border-gray-200 px-6">
  <div className="max-w-7xl mx-auto mb-4">
    <div
      className="
        flex flex-nowrap gap-3 overflow-x-auto
        md:grid md:grid-cols-6 md:overflow-visible text-center
      "
    
    
    >
      <div className="min-w-max text-sm sm:text-base">
        <CategoryNavItem title="Business" link="/business" />
      </div>

      <div className="min-w-max text-sm sm:text-base">
        <CategoryNavItem title="Portfolio" link="/portfolio" />
      </div>

      <div className="min-w-max text-sm sm:text-base">
        <CategoryNavItem title="Landing Pages" link="/landing-pages" />
      </div>

      <div className="min-w-max text-sm sm:text-base">
        <CategoryNavItem title="Agency" link="/agency" />
      </div>

      <div className="min-w-max text-sm sm:text-base">
        <CategoryNavItem title="Multi-Purpose" link="/multi-purpose" />
      </div>

      <div className="min-w-max text-sm sm:text-base">
        <CategoryNavItem title="Blog" link="/blog-templates" />
      </div>
    </div>
  </div>
</section>



      {/* ========================= */}
{/* TEMPLATES / IMAGE LIST */}
{/* ========================= */}
<section id="templates" className="pt-10 pb-16 px-6 bg-gray-50 text-center">

  <div className="relative max-w-5xl mx-auto">
    <span className="inline-block mb-5 mt-2 text-sm font-semibold tracking-wide text-indigo-600 uppercase">
      RESPONSIVE HTML5 Web Designs
    </span>

    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-1 leading-tight">
      Premium Website Templates <br className="hidden md:block" />
    </h1>

    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
      Modern — fully customizable,
      SEO-friendly, and ready for real-world projects.
    </p>
  </div>
  
  <div className="max-w-6xl mx-auto">
    <ImageList />
  </div>
</section>

      {/* ========================= */}
      {/* NEW SECTION: WHY CHOOSE US */}
      {/* ========================= */}
      <section className="py-0 px-6 bg-gray-50">
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
/* CATEGORY NAV ITEM  (small-screens)      */
/* ========================= */
function CategoryNavItem({ title, link }) {
  return (
    <a
      href={link}
      className="
        block rounded-lg border px-4 py-2 mb-3
        text-sm sm:text-base font-medium
        whitespace-nowrap
        hover:bg-gray-500 hover:text-white
        transition-colors duration-200
      "
    >
      {title}
    </a>
  );
}











