
export default function WhyChooseUs() {
  const features = [
    {
      title: "Mobile Responsive",
      description:
        "Beautiful layouts that work seamlessly across desktop, tablet and mobile devices.",
      icon: "📱",
    },
    {
      title: "Easy to Customize",
      description:
        "Clean HTML, CSS and JavaScript that make personalizing your website straightforward.",
      icon: "🎨",
    },
    {
      title: "Fast Performance",
      description:
        "Lightweight templates designed with performance and usability in mind.",
      icon: "⚡",
    },
    {
      title: "SEO Friendly",
      description:
        "Well-structured pages with a solid foundation for search engine optimization.",
      icon: "🔍",
    },
    {
      title: "Clean Code",
      description:
        "Organized code that is easy to understand, maintain and build upon.",
      icon: "💻",
    },
    {
      title: "Lifetime Updates",
      description:
        "Access future template updates as they become available.",
      icon: "↗️",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#FAFAF8] border-t border-gray-100">
      <div className="max-w-5xl mx-auto text-center">

        <span className="text-sm font-semibold tracking-widest uppercase text-indigo-600">
          Why simpleDesigns?
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-12">
          Everything You Need to Get Started
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-7 rounded-2xl bg-white border border-gray-100 text-left hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-3xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-sm leading-relaxed text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
