// src/components/ArticlePage.jsx
import { useParams, Link } from "react-router-dom";
import ArticlesData from "../data/ArticlesData";
//import { useEffect, useState } from "react";

function ArticleDetail() {
  const { slug } = useParams();
  const article = ArticlesData.find((a) => a.slug === slug);
  
  const { id } = useParams();

   
  // const [article, setArticle] = useState(null);
  // const [related, setRelated] = useState([]);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   // Fetch single article
  //   fetch(`https://simpledesigns.onrender.com/articles/${slug}`)
  //     .then((res) => {
  //       if (!res.ok) throw new Error("Failed to fetch article");
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setArticle(data);
  //       // Fetch related articles (reuse all articles and filter)
  //       return fetch("https://simpledesigns.onrender.com/articles");
  //     })
  //     .then((res) => res.json())
  //     .then((all) => {
  //       const others = all.filter((a) => a.slug !== slug);
  //       setRelated(others.slice(0, 3)); // show up to 3
  //     })
  //     .catch((err) => {
  //       console.error("Error loading article:", err);
  //       setError("Could not load article. Please try again later.");
  //     });
  // }, [slug]);


  if (!article) {
    return <p className="text-center text-gray-500">Loading article...</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Article Header */}
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-500 mb-6">{article.date}</p>

      {/* Article Content */}
      <div className="prose prose-lg">
        dangerouslySetInnerHTML={{ __html: article.content }}
      </div>

      {/* Affiliate Link */}
      {article.affiliateLink && (
        <div className="mt-8 p-4 bg-green-50 border-l-4 border-green-400 rounded-lg">
          <p>
            💡 Check out this recommended tool:{" "}
            <a
              href={article.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 font-semibold underline"
            >
              Visit Partner Site
            </a>
          </p>
        </div>
      )}

      {/* Back Button */}
      <div className="mt-10 text-center">
        <Link
          to="/articles"
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
        >
          ← Back to Articles
        </Link>
      </div>
    </div>
  );
}

export default ArticleDetail;

