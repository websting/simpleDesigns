import React from "react";
import BlogCard from "../components/BlogCard";
import blogPosts from "../data/BlogPosts";

const Blog = () => {
  return (
    <div className="w-full bg-gray-50">

      {/* ========================= */}
      {/* BLOG HEADER */}
      {/* ========================= */}
      <section className="bg-white pt-18 pb-32 px-6 text-center relative overflow-hidden">
        {/* subtle background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block mb-4 text-sm font-semibold tracking-wide text-indigo-600 uppercase">
            simpleDesigns Blog
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Latest Articles & Insights
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
            Tutorials, guides, and practical tips to help you build faster,
            design better, and grow your online presence.
          </p>
        </div>
      </section>

      {/* ========================= */}
      {/* BLOG GRID */}
      {/* ========================= */}
      <section className="relative w-full max-w-6xl mx-auto -mt-20 z-10 px-6 pb-24">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Blog;


