// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArticlesData from "../data/ArticlesData";

function Articles() {
  const articles = ArticlesData;  // local data, instant load
  
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   fetch("https://simpledesigns.onrender.com/articles")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("📰 Articles loaded:", data);
  //       setArticles(data);
  //     })
  //     .catch((err) => console.error("Error fetching articles:", err));
  // }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Web Development Articles</h1>

      {articles.length === 0 ? (
        <p className="text-center text-gray-500">No articles yet.</p>
      ) : (
        <div className="grid gap-6">
          {ArticlesData.map((article) => (
            <div
              key={article.id}
              className="border rounded-2xl p-4 hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-3">{article.excerpt}</p>

              <div className="flex gap-3">
                <Link
                  to={`/articles/${article.slug}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read More
                </Link>
                {/* May want removed */}
                {article.affiliateLink && (
                  <a
                    href={article.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-medium hover:underline"
                  >
                    Recommended Tool →
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

