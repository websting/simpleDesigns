import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 hover:translate-y-1 ">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <p className="text-sm text-gray-400 mb-1">{post.date}</p>
        <h2 className="text-lg text-gray-700 mb-2">{post.title}</h2>
        <p className="text-gray-500 text-sm">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="text-blue-600 font-medium mt-3 inline-block hover:underline"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
