import React from 'react';
import BlogCard from '../components/BlogCard';
import blogPosts from '../data/BlogPosts';

const Blog = () => {
  return (
    <div className="bg-gray-50 min-h-[calc(100vh-520px)] pt-10 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="font-Audiowide text-3xl sm:text-4xl text-gray-800 mb-2 text-center">Latest articles</h1>
        <p className="text-gray-500 mb-12">Read insights, tutorials, and design tips from our team.</p>
      </div>

      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
