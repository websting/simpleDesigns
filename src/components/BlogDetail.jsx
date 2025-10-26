import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogPosts from '../data/BlogPosts';

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center pt-20">
        <h1 className="text-2xl font-bold text-gray-800">Post not found</h1>
        <Link to="/blog" className="text-blue-600 underline mt-4 inline-block">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 pt-20 pb-10">
      <Link to="/blog" className="text-blue-600 underline text-sm mb-4 inline-block">
        ← Back to Blog
      </Link>
      <img src={post.image} alt={post.title} className="rounded-lg mb-6 w-full h-64 object-cover" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <div
        className="text-gray-700 space-y-4 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
};

export default BlogDetail;
