// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArticlesData from "../data/ArticlesData";

function Articles() {
  const articles = ArticlesData;  // local data, instant load

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="font-Audiowide text-3xl sm:text-4xl text-gray-800 text-center mb-4">Recomended Tools & Resources</h1>

      {articles.length === 0 ? (
        <p className="text-center text-gray-500">No articles yet.</p>
      ) : (
        <div className="grid gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="border rounded-2xl p-4 hover:shadow-md transition"
            >
              <h2 className="text-lg text-gray-700 mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-3">{article.excerpt}</p>

              <div className="flex gap-3">
                <Link
                  to={`/articles/${article.slug}`}
                  className="text-blue-600 font-medium hover:text-indigo-800"
                >
                  Read More →
                </Link>
                {/* May want removed */}
                {article.affiliateLink && (
                  <a
                    href={article.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-medium hover:text-yellow-800"
                  >
                  Explore Our Partner’s Website 
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Articles;

