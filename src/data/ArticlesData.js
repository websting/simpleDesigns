const ArticlesData = [
  {
    id: 1,
    slug: "whc-hosting-cta",
    title: "Fast, Secure Canadian Web Hosting – WHC",
    excerpt:
      "Fast & Secure Canadian Web Hosting. Ideal for beginnners, entrepreneurs, and small businesses.",
    link: "/articles/whc-cta",
    content: `
        <section class="cta-block">
            <h2>🚀 Ready to Launch Your Website?</h2>
            <p><strong>WHC (Web Hosting Canada)</strong> offers fast, secure Canadian web hosting with free SSL certificates, 1-click WordPress installation, and 24/7 expert support — perfect for beginners, entrepreneurs, and small businesses in 2025.</p>

            <div class="cta-wrapper">
                <a
                  href="https://clients.whc.ca/aff.php?aff=7398"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="atc-button inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
>
                    🛒 Get started today with WHC’s
                </a>
                <small>affordable plans and reliable servers!</small>
            </div>
        </section>
    `,
    affiliateLink: "https://clients.whc.ca/aff.php?aff=7398",

    // ⭐ Sidebar banner for WHC
    sidebarBannerHtml: `
      <a href="https://whc.ca/canadian-web-hosting?aff=7398" 
         target="_blank" 
         rel="noopener">
        <img 
          src="https://s.whc.ca/affiliates/banners/web-hosting-medium-rectangle.png" 
          alt="Web Hosting Canada Banner" 
          style="width:100%; height:auto; border-radius:8px;"
        />
      </a>
    `,

    date: "2025-10-19",
  },

  {
    id: 2,
    slug: "organize-your-business-and-projects-with-notion",
    title: "Organize Your Business and Projects with Notion",
    excerpt:
      "From client tracking to content planning, Notion helps creatives and entrepreneurs stay on top of everything.",
    link: "/articles/tailwind-guide",
    content: `
      <p><strong>Notion</strong> isn’t just a note app — it’s your entire business hub. You can manage projects, client info, and templates all in one workspace.</p>

      <p>For designers and developers, it’s perfect for keeping track of deliverables and linking your design files directly. Use Notion templates to quickly set up dashboards, content calendars, and task systems.</p>

      <p>💡 <em>Tip:</em> Pair Notion with your favorite design tools for a simple, visual workflow that keeps clients impressed.</p>
    `,
    affiliateLink: "https://affiliate-link.com/tool",

    // ⭐ Example banner for Notion (replace with real banner if you have one)
    sidebarBannerHtml: `
      <a href="https://affiliate-link.com/tool" 
         target="_blank" 
         rel="noopener">
        <img 
          src="/images/banners/notion-banner-placeholder.png" 
          alt="Notion Banner" 
          style="width:100%; height:auto; border-radius:8px;"
        />
      </a>
    `,

    date: "2025-10-19",
  },

  {
    id: 3,
    slug: "start-your-online-store-fast-with-shopify",
    title: "Start Your Online Store Fast with Shopify",
    excerpt: "Shopify makes selling online easy — no tech experience needed.",
    link: "/articles/sell-templates",
    content: `
      <p><strong>Shopify</strong> is one of the most trusted and beginner-friendly ecommerce platforms available today...</p>
    `,
    affiliateLink: "https://clients.whc.ca/aff.php?aff=7398",

    // ⭐ Example Shopify banner (replace with an actual affiliate banner)
    sidebarBannerHtml: `
      <a href="https://shopify.com/?ref=YOUR-ID" 
         target="_blank" 
         rel="noopener">
        <img 
          src="/images/banners/shopify-banner-placeholder.png" 
          alt="Shopify Banner"
          style="width:100%; height:auto; border-radius:8px;"
        />
      </a>
    `,

    date: "2025-10-19",
  },
];

export default ArticlesData;
