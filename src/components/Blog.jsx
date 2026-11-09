
import BlogCard from "../components/BlogCard";
import blogPosts from "../data/BlogPosts";

const Blog = () => {
  return (
    <div className="w-full bg-[#FAFAF8]">

      {/* BLOG HERO */}
      <section className="bg-[#FAFAF8] px-6 py-20 md:py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">

          <span className="inline-block mb-5 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold tracking-wide uppercase">
            simpleDesigns Blog
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-gray-900 mb-6">
            Latest Articles
            <br />
            & <span className="text-indigo-600">Insights.</span>
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-xl leading-relaxed">
            Tutorials, guides, and practical tips to help you build faster,
            design better, and grow your online presence.
          </p>

          <div className="mt-8 flex justify-center items-center gap-3 text-sm text-gray-400">
            <span>Design</span>
            <span>•</span>
            <span>Development</span>
            <span>•</span>
            <span>Inspiration</span>
          </div>

        </div>
      </section>

      {/* BLOG ARTICLES */}
      <section className="px-4 sm:px-6 pt-8 md:pt-10 pb-20">

        <div className="max-w-7xl mx-auto">

          {/* SECTION HEADING */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-indigo-600">
                From the Blog
              </span>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
                Explore Our Latest Posts
              </h2>
            </div>

            <span className="hidden sm:block text-sm text-gray-400">
              Ideas to inspire your next project
            </span>
          </div>

          {/* ARTICLE GRID */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                className="shadow-sm hover:shadow-xl transition-all duration-300"
              />
            ))}

          </div>

        </div>
      </section>

    </div>
  );
};

export default Blog;



