
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
<section
  id="hero"
  className="relative overflow-hidden bg-[#fafaff] px-6 py-20 md:py-24"
>
  {/* Background decorations */}
  <div className="absolute top-10 right-0 w-72 h-72 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none"></div>
  <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-100/40 rounded-full blur-3xl pointer-events-none"></div>

  <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE - CONTENT */}
    <div className="text-center lg:text-left animate-zoom-in-left">

      <span className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs sm:text-sm font-semibold tracking-wide">
        <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
        PREMIUM WEBSITE TEMPLATES
      </span>

      
<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.12] text-gray-900 mb-7">
  <span className="block">Build Something</span>
  <span className="block text-indigo-600">Beautiful.</span>
  <span className="block">Launch Something</span>
  <span className="block">Great.</span>
</h1>


      <p className="max-w-xl mx-auto lg:mx-0 text-base md:text-lg leading-relaxed text-gray-500 mb-9">
        Beautiful, responsive website templates with clean code
        and easy customization. Everything you need to bring
        your next project to life.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">

        <a
          href="#templates"
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          Explore Templates
          <span className="ml-2">→</span>
        </a>

        <Link
          to="/about"
          className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-gray-300 bg-white/70 text-gray-700 font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
        >
          Learn About Us
        </Link>

      </div>

      {/* TRUST POINTS */}
      <div className="mt-9 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-gray-500">
        <span>✓ Responsive Designs</span>
        <span>✓ Clean Code</span>
        <span>✓ Easy to Customize</span>
      </div>

    </div>

    {/* RIGHT SIDE - VISUAL SHOWCASE */}
    <div className="relative max-w-xl mx-auto w-full">

      {/* Decorative background */}
      <div className="absolute inset-4 bg-indigo-200/40 rounded-[2.5rem] rotate-3"></div>

      {/* Main preview window */}
      <div className="relative bg-white rounded-2xl shadow-2xl shadow-indigo-200/50 border border-gray-200 overflow-hidden">

        {/* Browser toolbar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
          <div className="flex-1 mx-4 bg-white rounded-md px-3 py-1 text-center text-xs text-gray-400">
            your-next-project.com
          </div>
        </div>

        {/* Website preview illustration */}
        <div className="p-5 sm:p-7">

          <div className="flex justify-between items-center mb-10">
            <div className="font-bold text-gray-900 text-lg">
              YourBrand<span className="text-indigo-600">.</span>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-2 rounded bg-gray-200"></div>
              <div className="w-10 h-2 rounded bg-gray-200"></div>
              <div className="w-10 h-2 rounded bg-gray-200"></div>
            </div>
          </div>

          <div className="text-center py-8">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-[10px] font-semibold mb-4">
              YOUR NEXT BIG IDEA
            </div>

            <div className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              Design That
              <br />
              Makes An Impact.
            </div>

            <div className="w-3/4 mx-auto h-2 bg-gray-100 rounded mt-4"></div>
            <div className="w-1/2 mx-auto h-2 bg-gray-100 rounded mt-2"></div>

            <div className="mt-6 inline-block px-6 py-2.5 rounded-full bg-indigo-600 text-white text-xs font-semibold">
              Get Started →
            </div>
          </div>

          {/* Preview cards */}
          <div className="grid grid-cols-3 gap-3 mt-5">
            <div className="h-20 sm:h-24 rounded-xl bg-indigo-50 p-3">
              <div className="w-7 h-7 rounded-lg bg-indigo-200 mb-3"></div>
              <div className="h-1.5 w-4/5 bg-indigo-200 rounded"></div>
              <div className="h-1.5 w-1/2 bg-indigo-100 rounded mt-2"></div>
            </div>

            <div className="h-20 sm:h-24 rounded-xl bg-purple-50 p-3">
              <div className="w-7 h-7 rounded-lg bg-purple-200 mb-3"></div>
              <div className="h-1.5 w-4/5 bg-purple-200 rounded"></div>
              <div className="h-1.5 w-1/2 bg-purple-100 rounded mt-2"></div>
            </div>

            <div className="h-20 sm:h-24 rounded-xl bg-blue-50 p-3">
              <div className="w-7 h-7 rounded-lg bg-blue-200 mb-3"></div>
              <div className="h-1.5 w-4/5 bg-blue-200 rounded"></div>
              <div className="h-1.5 w-1/2 bg-blue-100 rounded mt-2"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating label */}
      <div className="absolute -bottom-5 -left-4 sm:-left-8 bg-white shadow-xl border border-gray-100 rounded-xl px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
            ✓
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900">Ready to Launch</p>
            <p className="text-xs text-gray-400">Clean & responsive code</p>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -top-5 -right-3 sm:-right-5 bg-white shadow-lg border border-gray-100 rounded-xl px-4 py-3">
        <p className="text-xs font-semibold text-indigo-600">
          ✦ Built for Creators
        </p>
      </div>

    </div>

  </div>
</section>


      
{/* TEMPLATE COLLECTION */}
<section
  id="templates"
  className="relative py-24 md:py-28 px-4 sm:px-6 bg-[#fafaff] border-t border-gray-100"
>
  <div className="max-w-7xl mx-auto">

    {/* COLLECTION HEADING */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">

      <div>
        <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-indigo-600">
          <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
          Explore Our Collection
        </span>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mt-4 mb-4">
          Find Your Perfect{" "}
          <span className="text-indigo-600">Template.</span>
        </h2>

        <p className="text-gray-500 text-base md:text-lg max-w-2xl leading-relaxed">
          Discover beautifully designed website templates
          built to help you create something great.
        </p>
      </div>

      <div className="hidden md:flex items-center gap-2 text-sm text-gray-400 pb-2">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        Ready-to-use designs
      </div>

    </div>

    {/* CATEGORY FILTERS */}
    <div className="mb-10">

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
        <div>
          <h3 className="text-sm font-bold text-gray-900">
            Browse Categories
          </h3>
          <p className="text-xs text-gray-400 mt-1">
            Choose a category to explore.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2">

        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            aria-pressed={selectedCategory === category.value}
            className={`
              px-5 py-3 rounded-full text-sm font-semibold
              border transition-all duration-200
              ${
                selectedCategory === category.value
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200"
                  : "bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50"
              }
            `}
          >
            {category.title}
          </button>
        ))}

      </div>

    </div>

    {/* TEMPLATE GALLERY */}
    <div>

      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200">

        <div>
          <h3 className="text-xl font-bold text-gray-900">
            {categories.find(
              (category) => category.value === selectedCategory
            )?.title}
          </h3>

          <p className="text-sm text-gray-400 mt-1">
            Explore our latest designs
          </p>
        </div>

        <span className="hidden sm:inline-flex items-center gap-2 text-sm text-indigo-600 font-medium">
          <span>✦</span>
          Designed for your next project
        </span>

      </div>

      <ImageList category={selectedCategory} />

    </div>

  </div>
</section>


      

{/* WHY CHOOSE US */}
<section
  id="why-simpledesigns"
  className="relative overflow-hidden py-24 md:py-28 px-6 bg-[#F5F3FF] border-t border-indigo-100 scroll-mt-20"
>

  <div className="max-w-7xl mx-auto">

    {/* SECTION HEADING */}
    <div className="max-w-2xl mx-auto text-center mb-14">

      <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-indigo-600">
        <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
        Why simpleDesigns?
      </span>

      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mt-4 mb-5">
        More Than Just
        <span className="text-indigo-600"> Templates.</span>
      </h2>

      <p className="text-gray-500 text-base md:text-lg leading-relaxed">
        Everything you need to build, customize and launch
        a professional website with confidence.
      </p>

    </div>

    {/* FEATURE GRID */}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

      {features.map((feature, index) => {
        const Icon = feature.icon;
        const featured = index === 0;

        return (
          <div
            key={feature.title}
            className={`
              group relative overflow-hidden rounded-3xl p-7 md:p-8
              border transition-all duration-300
              hover:-translate-y-1
              ${
                featured
                  ? "sm:col-span-2 lg:col-span-2 bg-gradient-to-br from-indigo-100 via-purple-50 to-white border-indigo-200 hover:shadow-xl hover:shadow-indigo-100"
                  : "bg-white border-indigo-100/70 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-100/60"
              }
            `}
          >

            {/* FEATURED DECORATION */}
            {featured && (
              <div className="absolute -right-12 -top-16 w-72 h-72 rounded-full bg-indigo-200/30 blur-3xl"></div>
            )}

            <div className="relative z-10">

              {/* ICON */}
              <div
                className={`
                  w-14 h-14 rounded-2xl flex items-center justify-center
                  mb-7 transition-transform duration-300
                  group-hover:scale-110
                  ${
                    featured
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                      : "bg-indigo-50 text-indigo-600"
                  }
                `}
              >
                <Icon size={25} />
              </div>

              {/* TITLE */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm leading-relaxed text-gray-500 max-w-lg">
                {feature.description}
              </p>

              {/* FEATURED LABEL */}
              {featured && (
                <div className="mt-8 flex items-center gap-3">
                  <span className="w-8 h-1 rounded-full bg-indigo-600"></span>

                  <span className="text-xs font-semibold tracking-widest uppercase text-indigo-600">
                    Designed for every screen
                  </span>
                </div>
              )}

            </div>

          </div>
        );
      })}
    </div>

  </div>
</section>



    </div>
  );
}


