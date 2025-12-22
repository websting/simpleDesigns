import profilePic from "../assets/profilePic.jpg";

const About = () => {
  return (
    <div className="w-full bg-gray-50">

      {/* ========================= */}
      {/* HEADER */}
      {/* ========================= */}
      <section className="bg-white pt-18 pb-32 px-6 text-center relative overflow-hidden">
        {/* subtle background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block mb-4 text-sm font-semibold tracking-wide text-indigo-600 uppercase">
            About simpleDesigns
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
            Mission & Vision
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            My mission at simpleDesigns is to help you build faster with clean,
            modern templates that eliminate design bottlenecks—so you can focus
            on functionality and user experience.
          </p>
        </div>
      </section>

      {/* ========================= */}
      {/* CONTENT */}
      {/* ========================= */}
      <section className="relative max-w-4xl mx-auto -mt-20 bg-white rounded-xl shadow-sm px-8 py-12 mb-24">

        {/* WHY */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 italic leading-relaxed">
            Why spend hours tweaking UI when you could be shipping features?
            simpleDesigns templates are lightweight, easy to customize, and
            visually polished—so you deliver faster without sacrificing quality.
          </p>
        </div>

        <div className="border-t border-gray-200 my-12" />

        {/* CREATOR */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Meet the Creator
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={profilePic}
              alt="Creator of simpleDesigns"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full shadow-md border border-gray-200"
            />

            <p className="text-gray-700 text-lg leading-relaxed">
              Hi! I’m the solo creator behind simpleDesigns—a self-taught
              developer who understands how time-consuming front-end work can
              be. I built this platform to remove friction from your workflow
              by offering templates that are clean, fast, and easy to integrate.
            </p>
          </div>
        </div>

        {/* UPDATES */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            New Templates, Regularly
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            I’m constantly releasing new templates based on user feedback and
            modern design trends—so your projects stay fresh, relevant, and
            production-ready.
          </p>
        </div>

        {/* VISION */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            My Vision
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            My vision for simpleDesigns is built on{" "}
            <span className="font-semibold text-indigo-600">speed</span>,{" "}
            <span className="font-semibold text-pink-500">simplicity</span>, and{" "}
            <span className="font-semibold text-orange-500">modern tools</span>.
            That means lightweight code, scalable components, and designs that
            stay out of your way.
          </p>
        </div>

        {/* MODE */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            My Mode
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            The web is already out there—let’s make it better.
          </p>
        </div>

      </section>

    </div>
  );
};

export default About;




