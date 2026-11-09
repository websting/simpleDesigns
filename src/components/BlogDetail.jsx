
import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/BlogPosts";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 bg-[#FAFAF8] text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Post Not Found
        </h1>

        <p className="text-gray-500 mb-6">
          Sorry, we couldn't find the article you're looking for.
        </p>



        

        <Link
          to="/blog"
          className="inline-flex items-center px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FAFAF8]">

      {/* ARTICLE HEADER */}
      <section className="px-6 pt-10 pb-6 md:pt-10 md:pb-8">
        <div className="max-w-4xl mx-auto">

          <Link
            to="/blog"
            className="mt-12 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors mb-8"
          >
            ← Back to Articles
          </Link>

          <div className="text-center">

            <span className="inline-block px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6">
              simpleDesigns Blog
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900 mb-6">
              {post.title}
            </h1>

            <p className="text-sm text-gray-400">
              {post.date}
            </p>

          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="px-4 sm:px-6 pb-12">
        <div className="max-w-5xl mx-auto">

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-52 sm:h-64 md:h-[340px] object-cover rounded-2xl shadow-sm border border-gray-100"
          />

        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <section className="px-6 pb-20">
        <article className="max-w-3xl mx-auto">

          <div
            className="
              text-gray-600
              text-base md:text-lg
              leading-8
              space-y-6
              [&_h2]:text-2xl
              [&_h2]:md:text-3xl
              [&_h2]:font-bold
              [&_h2]:text-gray-900
              [&_h2]:mt-10
              [&_h2]:mb-4
              [&_h3]:text-xl
              [&_h3]:font-semibold
              [&_h3]:text-gray-900
              [&_h3]:mt-8
              [&_h3]:mb-3
              [&_p]:mb-5
              [&_ul]:list-disc
              [&_ul]:pl-6
              [&_ol]:list-decimal
              [&_ol]:pl-6
              [&_li]:mb-2
              [&_a]:text-indigo-600
              [&_a]:underline
              [&_a:hover]:text-indigo-800
              [&_strong]:text-gray-900
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* ARTICLE FOOTER */}
          <div className="mt-16 pt-8 border-t border-gray-200">

            <div className="bg-white border border-gray-100 rounded-2xl p-7 md:p-8 text-center">

              <p className="text-gray-900 font-semibold text-lg mb-2">
                Enjoyed this article?
              </p>

              <p className="text-gray-500 text-sm mb-6">
                Explore more tutorials, guides, and insights from simpleDesigns.
              </p>

              <Link
                to="/blog"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-indigo-600 text-white font-semibold hover:bg-indigo-700 hover:shadow-lg transition-all duration-200"
              >
                Explore More Articles →
              </Link>

            </div>

          </div>

        </article>
      </section>

    </div>
  );
};

export default BlogDetail;


