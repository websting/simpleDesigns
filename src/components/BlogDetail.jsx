import React from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../data/BlogPosts";

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center pt-20 ">
        <h1 className="text-2xl font-bold text-gray-800">Post not found</h1>
        <Link to="/blog" className="text-blue-600 underline mt-4 inline-block">
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 pt-20 pb-10">
      <Link
        to="/blog"
        className="text-blue-600 hover:underline text-sm mb-4 inline-block"
      >
        ← Back to Articles
      </Link>
      <img
        src={post.image}
        alt={post.title}
        className="rounded-lg mb-6 w-full h-64 object-cover"
      />
      <h1 className="text-2xl font-extrabold text-center mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <div
        className="text-gray-600 leading-relaxed space-y-4"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <Link
        to="/blog"
        className="text-blue-600 text-sm mb-4 hover:underline inline-block mr-4"
      >
        ← Back to Articles
      </Link>
      <span className="text-gray-500 mr-4">|</span>
      <Link
        to={`/webhosting`}
        className="text-blue-600 text-sm mt-3 inline-block hover:underline"
      >
        Back to Hosting →
      </Link>
    </div>
  );
};

export default BlogDetail;
