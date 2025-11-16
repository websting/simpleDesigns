import { useParams, Link } from "react-router-dom";
import ArticlesData from "../data/ArticlesData";

function ArticleDetail() {
  const { slug } = useParams();
  const article = ArticlesData.find((a) => a.slug === slug);

  const related = ArticlesData.filter((a) => a.slug !== slug).slice(0, 3);

  if (!article) {
    return <p className="text-center text-gray-500">Article not found.</p>;
  }

  // Dynamic CTA copy based on article
  let ctaTitle = "Launch Your Website Today";
  let ctaDescription = "Fast, secure Canadian servers • Free SSL • 24/7 expert support";
  let ctaButton = "Start Now";
  let ctaProof = "Trusted by thousands of users";

  if (article.slug.includes("notion")) {
    ctaTitle = "Organize Your Business & Projects";
    ctaDescription = "All your tasks, clients, and content in one clean workspace";
    ctaButton = "Try Notion Free";
    ctaProof = "Used by creative teams and entrepreneurs worldwide";
  } else if (article.slug.includes("shopify")) {
    ctaTitle = "Start Your Online Store Fast";
    ctaDescription = "Easy setup, mobile-ready, and integrated with top payment gateways";
    ctaButton = "Launch Your Store";
    ctaProof = "Powering thousands of successful online stores";
  }

  return (
    <div className="p-6 mx-auto max-w-5xl">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Article Section */}
        <div className="max-w-3xl mx-auto flex-1">
          {/* Article Header */}
          <h1 className="font-Audiowide text-3xl sm:text-4xl text-gray-800 text-center mb-4">
            {article.title}
          </h1>
          <p className="text-gray-500 mb-6">{article.date}</p>

          {/* Article Content */}
          <div
            className="prose prose-lg"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* ⭐ Mobile Banner (small, above CTA) */}
          {article.sidebarBannerHtml && (
            <div className="lg:hidden my-6 flex justify-center">
              <div
                className="rounded-lg shadow-sm overflow-hidden"
                style={{ maxWidth: "250px" }}
                dangerouslySetInnerHTML={{ __html: article.sidebarBannerHtml }}
              />
            </div>
          )}

          {/* Affiliate Link / CTA */}
          {article.affiliateLink && (
            <div className="mt-8 p-4 bg-green-50 border-l-4 border-green-400 rounded-lg text-center">
              <p className="text-lg font-semibold mb-2">{ctaTitle}</p>
              <p className="text-gray-700 mb-4">{ctaDescription}</p>
              <a
                href={article.affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-yellow-800 transition transform hover:scale-105 shadow"
              >
                {ctaButton}
              </a>
              <p className="text-sm text-gray-500 mt-2">{ctaProof}</p>
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
              <h2 className="text-2xl mb-4">Related Articles</h2>
              <div className="grid gap-4">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/articles/${rel.slug}`}
                    className="block border rounded-xl p-4 hover:shadow-md transition"
                  >
                    <h3 className="text-lg">{rel.title}</h3>
                    <p className="text-gray-600 text-sm">{rel.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Desktop Aside Section */}
        <aside className="w-full lg:w-64 flex-shrink-0 hidden lg:block">
          <div className="border rounded-xl p-4 mt-60 shadow-sm bg-white text-center">
            <h3 className="font-semibold mb-3">Sponsored</h3>
            {article.sidebarBannerHtml && (
              <div
                className="mt-2"
                dangerouslySetInnerHTML={{ __html: article.sidebarBannerHtml }}
              />
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default ArticleDetail;



