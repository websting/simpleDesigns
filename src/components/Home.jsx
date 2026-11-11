
import { useState } from "react";
import { Link } from "react-router-dom";
import ImageList from "../components/ImageList";

import {
  FaMobileScreenButton,
  FaPalette,
  FaBolt,
  FaMagnifyingGlass,
  FaCode,
  FaArrowsRotate,
} from "react-icons/fa6";

const categories = [
  { title: "All Templates", value: "all" },
  { title: "Business", value: "business" },
  { title: "Portfolio", value: "portfolio" },
  { title: "Landing Pages", value: "landing-pages" },
  { title: "Agency", value: "agency" },
  { title: "Multi-Purpose", value: "multi-purpose" },
  { title: "Blog", value: "blog" },
];

const features = [
  {
    title: "Mobile Responsive",
    description:
      "Beautiful layouts that work seamlessly across desktop, tablet and mobile devices.",
    icon: FaMobileScreenButton,
  },
  {
    title: "Easy to Customize",
    description:
      "Clean HTML, CSS and JavaScript that make personalizing your website straightforward.",
    icon: FaPalette,
  },
  {
    title: "Fast Performance",
    description:
      "Lightweight templates designed with performance and usability in mind.",
    icon: FaBolt,
  },
  {
    title: "SEO Friendly",
    description:
      "Well-structured pages with a solid foundation for search engine optimization.",
    icon: FaMagnifyingGlass,
  },
  {
    title: "Clean Code",
    description:
      "Organized code that is easy to understand, maintain and build upon.",
    icon: FaCode,
  },
  {
    title: "Lifetime Updates",
    description:
      "Access future template updates as they become available.",
    icon: FaArrowsRotate,
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="w-full bg-[#FAFAF8]">

      {/* HERO SECTION */}
      <section className="min-h-[calc(100svh-58px)] flex items-center px-6 py-20 md:py-24">
        <div className="max-w-5xl mx-auto text-center">

          <span className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full bg-indigo-50 text-indigo-700 text-xs sm:text-sm font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
            PROFESSIONAL WEBSITE TEMPLATES
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.12] text-gray-900 mb-7">
            Beautiful Websites.
            <br />
            Built for Your{" "}
            <span className="text-indigo-600">
              Next Big Idea.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-xl leading-relaxed text-gray-500 mb-9">
            Discover professionally designed, responsive HTML templates
            that help businesses, freelancers and creators build their
            online presence.
          </p>

          {/* HERO BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

            <a
              href="#templates"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Explore Templates
              <span className="ml-2">→</span>
            </a>

            <Link
              to="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-gray-300 text-gray-700 font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all duration-200"
            >
              Learn About Us
            </Link>

          </div>

          {/* WHY CHOOSE US LINK */}
          <div className="mt-7">
            <a
              href="#why-simpledesigns"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
            >
              <span>↓</span>
              Why Choose simpleDesigns?
            </a>
          </div>

          <p className="mt-7 text-sm text-gray-400">
            ✓ Responsive Designs
            <span className="mx-3">•</span>
            ✓ Clean Code
            <span className="mx-3">•</span>
            ✓ Easy to Customize
          </p>

        </div>
      </section>

      {/* TEMPLATE COLLECTION */}
      <section
        id="templates"
        className="pt-24 md:pt-28 pb-20 px-4 sm:px-6 bg-white border-t border-gray-100"
      >
        <div className="max-w-7xl mx-auto">

          {/* COLLECTION HEADING */}
          <div className="mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-indigo-600">
              Our Collection
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Find Your Perfect Template
            </h2>

            <p className="text-gray-500 text-base md:text-lg max-w-2xl">
              Explore our collection of modern website templates
              designed to make building your website easier.
            </p>
          </div>

          {/* SIDEBAR + TEMPLATE GALLERY */}
          <div className="grid grid-cols-1 lg:grid-cols-[220px_minmax(0,1fr)] gap-8 lg:gap-10">

            {/* CATEGORY SIDEBAR */}
            <aside className="lg:sticky lg:top-24 lg:self-start">

              <div className="mb-4">
                <h3 className="text-sm font-bold text-gray-900">
                  Browse Categories
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                  Find a design that fits your needs.
                </p>
              </div>

              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-hide">

                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`
                      flex-shrink-0 w-auto lg:w-full text-left
                      px-4 py-3 rounded-xl text-sm font-medium
                      transition-all duration-200
                      ${
                        selectedCategory === category.value
                          ? "bg-indigo-50 text-indigo-700 border border-indigo-100"
                          : "bg-white text-gray-600 border border-transparent hover:bg-gray-50 hover:text-gray-900"
                      }
                    `}
                  >
                    <span className="flex items-center justify-between gap-3">
                      {category.title}

                      {selectedCategory === category.value && (
                        <span className="hidden lg:block w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
                      )}
                    </span>
                  </button>
                ))}

              </div>
            </aside>

            {/* TEMPLATE GALLERY */}
            <div className="min-w-0">

              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {categories.find(
                    (category) => category.value === selectedCategory
                  )?.title}
                </h3>

                <span className="text-sm text-gray-400">
                  Explore our designs
                </span>
              </div>

              <ImageList category={selectedCategory} />

            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        id="why-simpledesigns"
        className="py-20 px-6 bg-[#FAFAF8] border-t border-gray-100 scroll-mt-20"
      >

        <div className="max-w-5xl mx-auto text-center">

          <span className="text-sm font-semibold tracking-widest uppercase text-indigo-600">
            Why simpleDesigns?
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-12">
            Everything You Need to Get Started
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="p-7 rounded-2xl bg-white border border-gray-100 text-left hover:shadow-md transition-shadow duration-200"
                >

                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-5">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-gray-500">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

    </div>
  );
}


