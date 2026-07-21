import { useState } from "react";
import ImageList from "../components/ImageList";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="w-full">

 {/* ========================= */}
{/* CATEGORY NAVIGATION */}
{/* ========================= */}
<section className="bg-white border-b border-gray-200 px-4 py-4">
  <div className="max-w-6xl mx-auto">

    <div
      className="
        flex 
        gap-3 
        overflow-x-auto 
        scrollbar-hide
        md:justify-center
        pb-1
      "
    >

      <CategoryNavItem
        title="All"
        active={selectedCategory === "all"}
        onClick={() => setSelectedCategory("all")}
      />

      <CategoryNavItem
        title="Business"
        active={selectedCategory === "business"}
        onClick={() => setSelectedCategory("business")}
      />

      <CategoryNavItem
        title="Portfolio"
        active={selectedCategory === "portfolio"}
        onClick={() => setSelectedCategory("portfolio")}
      />

      <CategoryNavItem
        title="Landing Pages"
        active={selectedCategory === "landing-pages"}
        onClick={() => setSelectedCategory("landing-pages")}
      />

      <CategoryNavItem
        title="Agency"
        active={selectedCategory === "agency"}
        onClick={() => setSelectedCategory("agency")}
      />

      <CategoryNavItem
        title="Multi-Purpose"
        active={selectedCategory === "multi-purpose"}
        onClick={() => setSelectedCategory("multi-purpose")}
      />

      <CategoryNavItem
        title="Blog"
        active={selectedCategory === "blog"}
        onClick={() => setSelectedCategory("blog")}
      />

    </div>

  </div>
</section>

      {/* ========================= */}
      {/* TEMPLATES */}
      {/* ========================= */}
      <section
        id="templates"
        className="pt-10 pb-16 px-6 bg-gray-50 text-center"
      >
        <div className="relative max-w-5xl mx-auto">
          <h1 className="inline-block mb-5 mt-2 text-xl font-semibold tracking-wide text-indigo-600 uppercase">
            Professional HTML Website Templates
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Launch your website faster with modern, responsive,
            SEO-friendly templates built for businesses,
            freelancers, and creators.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <ImageList category={selectedCategory} />
        </div>
      </section>

      {/* ========================= */}
      {/* WHY CHOOSE US */}
      {/* ========================= */}
      <section className="py-8 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">
          Why simpleDesigns?
        </h2>

        <ul className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 text-gray-700 text-lg">
          <li>✔ Mobile Responsive</li>
          <li>✔ SEO Optimized</li>
          <li>✔ Clean HTML/CSS/JavaScript</li>
          <li>✔ Easy to Customize</li>
          <li>✔ Fast Performance</li>
          <li>✔ Lifetime Updates</li>
        </ul>
      </section>

    </div>
  );
}

/* ========================= */
/* CATEGORY BUTTON */
/* ========================= */

function CategoryNavItem({ title, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex-shrink-0
        px-5 py-2
        rounded-full
        border
        text-sm
        font-medium
        whitespace-nowrap
        transition-all
        duration-200

        ${
          active
            ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
            : "bg-white text-gray-700 border-gray-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-600"
        }
      `}
    >
      {title}
    </button>
  );
}
