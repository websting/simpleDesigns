import profilePic from '../assets/profilePic.jpg'; // adjust path if needed

const About = () => {
  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 py-16 px-6">

      {/* HERO SECTION */}
      <section className="max-w-4xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400">
          Mission & Vision
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          At simpleDesigns, our mission is to help you build faster with clean, modern websites, eliminating design bottlenecks so you can focus on growing your business. Our vision goes beyond great UI—we also offer streamlined web-hosting services, ensuring your projects move seamlessly from concept to deployment.
        </p>
        <p className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
          By combining reliable design with robust hosting, we create a development experience that is faster, smoother, and truly end-to-end.
        </p>
      </section>

      {/* WHY SECTION */}
      <section className="max-w-4xl mb-16 text-center">
        <p className="text-lg text-gray-600 italic">
          Why spend hours tweaking UI when you could be shipping features?
        </p>
      </section>

      <div className="w-full max-w-4xl border-t-2 border-pink-200 my-12"></div>

      {/* CREATOR SECTION */}
      <section className="max-w-4xl mb-16">
        <h2 className="text-3xl font-bold mb-6 text-purple-600">Meet the Creator</h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={profilePic}
            alt="Creator"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg border-4 border-purple-300"
          />
          <p className="text-gray-700 text-lg leading-relaxed">
            Hi! I’m the solo creator behind simpleDesigns—a self-taught developer who knows how time-consuming front-end work can be when all you want is to focus on functionality. I built this platform to make your development process smoother by offering services that are clean, fast, and easy to integrate.
          </p>
        </div>
      </section>

      {/* UPDATES SECTION */}
      <section className="max-w-4xl mb-16">
        <h2 className="text-3xl font-bold mb-4 text-pink-600">New Templates, Regularly</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          I’m constantly adding new templates — usually every few weeks — based on what developers are asking for most. Got an idea? I’m always open to suggestions.
        </p>
      </section>

      {/* VISION SECTION */}
      <section className="max-w-4xl mb-16">
        <h2 className="text-3xl font-bold mb-4 text-indigo-600">My Vision</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          My vision for simpleDesigns is to help you build faster by embracing <span className="font-semibold text-purple-500">speed</span>, <span className="font-semibold text-pink-500">simplicity</span>, and <span className="font-semibold text-orange-500">modern tools</span>. That means lightweight code, scalable components, and designs that don’t get in your way.
        </p>
      </section>

      {/* MODE SECTION */}
      <section className="max-w-4xl mb-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-600">My Mode</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          The web is already out there—let’s make it better.
        </p>
      </section>

    </div>
  );
};

export default About;


