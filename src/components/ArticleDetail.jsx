import { useParams, Link } from "react-router-dom";
import ArticlesData from "../data/ArticlesData";

function ArticleDetail() {
  const { slug } = useParams();
  const article = ArticlesData.find((a) => a.slug === slug);

  // ✅ Define simple "related" articles from local data
  const related = ArticlesData.filter((a) => a.slug !== slug).slice(0, 3);

  if (!article) {
    return <p className="text-center text-gray-500">Article not found.</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Article Header */}
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-500 mb-6">{article.date}</p>

      {/* Article Content */}
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

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

      {/* Related Articles */}
      {related.length > 0 && (
        <div className="mt-12 border-t pt-6">
          <h2 className="text-2xl font-semibold mb-4">Related Articles</h2>
          <div className="grid gap-4">
            {related.map((rel) => (
              <Link
                key={rel.id}
                to={`/articles/${rel.slug}`}
                className="block border rounded-xl p-4 hover:shadow-md transition"
              >
                <h3 className="text-lg font-semibold">{rel.title}</h3>
                <p className="text-gray-600 text-sm">{rel.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ArticleDetail;


