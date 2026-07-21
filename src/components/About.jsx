import profilePic from "../assets/profilePic.jpg";

const About = () => {
  return (
    <div className="w-full bg-gray-50">

      {/* HEADER */}
      <section className="bg-white pt-20 pb-28 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-white pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">

          <span className="inline-block mb-4 text-xl font-semibold tracking-wide text-indigo-600 uppercase">
            About simpleDesigns
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Templates Built for Real Projects.
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
            We help developers, freelancers, and businesses launch websites faster with clean code, responsive layouts, and flexible customization.
          </p>

        </div>
      </section>


      {/* CONTENT */}
      <section className="relative max-w-4xl mx-auto -mt-16 bg-white rounded-xl shadow-xl shadow-indigo-100/40 px-8 py-12 mb-24">


        {/* MISSION */}
        {/* <div className="text-center mb-12">

          <h2 className="text-3xl font-bold mb-5 text-gray-900">
            Our Mission
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Great websites shouldn't require endless hours of repetitive work.
            simpleDesigns provides ready-to-use templates that are fast,
            customizable, and built with modern web standards.
          </p>

        </div> */}


        {/* <div className="border-t border-gray-200 my-12" /> */}


        {/* CREATOR */}
        <div className="mb-16 mt-12">

          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Meet the Creator
          </h2>


          <div className="flex flex-col md:flex-row items-center gap-8">

            <img
              src={profilePic}
              alt="Creator of simpleDesigns"
              className="w-32 h-32 rounded-full shadow-md border border-gray-200"
            />


            <p className="text-gray-700 text-lg leading-relaxed">
              Hi, I'm the creator behind simpleDesigns. As a developer, I know
              how much time goes into building polished front-end experiences.
              I created simpleDesigns to provide developers and creators with
              high-quality templates that are easy to customize and ready for
              real projects.
            </p>

          </div>

        </div>


        {/* VALUES */}
        <div className="mb-16">

          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            What You Can Expect
          </h2>


          <div className="grid md:grid-cols-2 gap-6">

            <div className="p-5 rounded-lg bg-gray-50">
              <h3 className="font-bold text-lg mb-2">
                Clean Code
              </h3>
              <p className="text-gray-600">
                Organized HTML, CSS, and JavaScript that is easy to understand
                and modify.
              </p>
            </div>


            <div className="p-5 rounded-lg bg-gray-50">
              <h3 className="font-bold text-lg mb-2">
                Modern Design
              </h3>
              <p className="text-gray-600">
                Professional layouts built with current design trends and best
                practices.
              </p>
            </div>


            <div className="p-5 rounded-lg bg-gray-50">
              <h3 className="font-bold text-lg mb-2">
                Responsive First
              </h3>
              <p className="text-gray-600">
                Templates designed to look great across desktop, tablet, and
                mobile devices.
              </p>
            </div>


            <div className="p-5 rounded-lg bg-gray-50">
              <h3 className="font-bold text-lg mb-2">
                Continuous Improvement
              </h3>
              <p className="text-gray-600">
                New templates and improvements based on feedback and evolving
                web standards.
              </p>
            </div>

          </div>

        </div>


        {/* VISION */}
        <div className="mb-12">

          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Our Vision
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            The goal of simpleDesigns is simple: make professional web design
            more accessible through quality templates that save time without
            sacrificing creativity.
          </p>

        </div>


        {/* FINAL MESSAGE */}
        <div className="text-center">

          <p className="text-xl font-semibold text-indigo-600">
            Build faster. Design better. Launch sooner.
          </p>

        </div>


      </section>

    </div>
  );
};

export default About;




