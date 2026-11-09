
import profilePic from "../assets/profilePic.jpg";

import {
  FaCode,
  FaPalette,
  FaMobileScreenButton,
  FaArrowsRotate,
} from "react-icons/fa6";

const About = () => {
  const values = [
    {
      title: "Clean Code",
      description:
        "Organized HTML, CSS, and JavaScript that is easy to understand and modify.",
    icon: FaCode,
    },
    {
      title: "Modern Design",
      description:
        "Professional layouts built with current design trends and best practices.",
      icon: FaPalette,
    },
    {
      title: "Responsive First",
      description:
        "Templates designed to look great across desktop, tablet, and mobile devices.",
      icon: FaMobileScreenButton,
    },
    {
      title: "Continuous Improvement",
      description:
        "New templates and improvements based on feedback and evolving web standards.",
      icon: FaArrowsRotate,
    },
  ];

  return (
    <div className="w-full bg-[#FAFAF8]">

      {/* ABOUT HERO */}
      <section className="px-6 py-20 md:py-24 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">

          <span className="inline-block mb-5 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold tracking-wide uppercase">
            About simpleDesigns
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-gray-900 mb-6">
            Templates Built for{" "}
            <span className="text-indigo-600">
              Real Projects.
            </span>
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-xl leading-relaxed">
            We help developers, freelancers, and businesses launch websites
            faster with clean code, responsive layouts, and flexible
            customization.
          </p>

        </div>
      </section>

      {/* MEET THE CREATOR */}
      <section className="px-6 py-20 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto">

          <div className="grid md:grid-cols-[240px_1fr] gap-10 md:gap-16 items-center">

            <div className="flex justify-center">
              <img
                src={profilePic}
                alt="Creator of simpleDesigns"
                className="w-48 h-48 md:w-56 md:h-56 rounded-2xl object-cover object-[85%_center] shadow-lg border border-gray-100"
              />
            </div>

            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-indigo-600">
                The Person Behind the Brand
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Meet the Creator
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Hi, I'm the creator behind simpleDesigns. As a developer, I know
                how much time goes into building polished front-end experiences.
                I created simpleDesigns to provide developers and creators with
                high-quality templates that are easy to customize and ready for
                real projects.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WHAT YOU CAN EXPECT */}
      <section className="px-6 py-20 md:py-24 bg-[#FAFAF8] border-y border-gray-100">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-indigo-600">
              Our Commitment
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              What You Can Expect
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto">
              Every template is designed with quality, usability, and
              flexibility in mind.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="p-7 md:p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all duration-300"
                >

                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 mb-5">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed">
                    {value.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* OUR VISION */}
      <section className="px-6 py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center">

          <span className="text-sm font-semibold tracking-widest uppercase text-indigo-600">
            Looking Ahead
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-6">
            Our Vision
          </h2>

          <p className="text-gray-500 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
            The goal of simpleDesigns is simple: make professional web design
            more accessible through quality templates that save time without
            sacrificing creativity.
          </p>

          <div className="mt-10 inline-block px-7 py-4 rounded-full bg-indigo-50 border border-indigo-100">
            <p className="text-lg md:text-xl font-semibold text-indigo-600">
              Build faster. Design better. Launch sooner.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;






