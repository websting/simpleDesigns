import React from "react";
import BlogCard from "../components/BlogCard";
import blogPosts from "../data/BlogPosts";

const Blog = () => {
  return (
    <div className="w-full flex flex-col items-center bg-gray-50">

      {/* HERO SECTION */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-42 text-center shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Latest Articles & Insights
        </h1>
        <p className="text-white/90 max-w-2xl mx-auto text-lg md:text-xl">
          Read tutorials, guides, and tips to help you build and grow your online presence.
        </p>
      </section>

      {/* BLOG GRID */}
      <section className="relative w-full max-w-6xl -mt-20 z-20 px-4 pb-24">
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

