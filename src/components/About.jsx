// src/pages/About.jsx

import profilePic from '../assets/profilePic.jpg'; // adjust path if needed

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">About simpleDesigns</h1>

      <p className="mb-4 text-lg leading-relaxed">
        At <span className="font-semibold">simpleDesigns</span>, we believe that great design shouldn't slow down development.
        Founded with tech-savvy developers in mind, our mission is simple:
        <span className="italic"> to help you build faster by handling the front-end design for you.</span>
      </p>

      

      <p className="mb-4 text-lg leading-relaxed">
        Whether you're spinning up a new project or scaling an existing one, our collection of clean, responsive templates
        allows you to skip the styling and jump straight into the dynamic work. Built with <span className="font-medium">React</span>, <span className="font-medium">Tailwind CSS</span>, and <span className="font-medium">Vite</span>,
        every template is optimized for performance, scalability, and developer experience.
      </p>

      <p className="mb-4 text-lg leading-relaxed">
        Why spend hours tweaking UI when you could be shipping features?
      </p>

      <div className="border-t border-gray-300 my-10"></div>

      <h2 className="text-2xl font-semibold mb-4">Meet the Creator</h2>

<div className="flex items-center gap-4 mb-6">
  <img
    src={profilePic}
    alt="Creator"
    className="w-16 h-16 rounded-full object-center shadow"
  />
  <p className="text-lg leading-relaxed">
    Hi! I'm the solo creator behind simpleDesigns — a developer who knows how time-consuming front-end work can be when all you want is to focus on functionality.
    I built this platform to make your dev process smoother by offering templates that are clean, fast, and easy to integrate.
  </p>
</div>

      <h2 className="text-2xl font-semibold mb-4">New Templates, Regularly</h2>
      <p className="mb-4 text-lg leading-relaxed">
        I’m constantly adding new templates — usually every few weeks — based on what developers are asking for most. Got an idea? I’m always open to suggestions.
      </p>

      <h2 className="text-2xl font-semibold mb-4">My Vision</h2>
      <p className="text-lg leading-relaxed">
        My vision for simpleDesigns is to help developers build faster by embracing <span className="font-medium">speed</span>, <span className="font-medium">simplicity</span>, and <span className="font-medium">modern tools</span>. That means lightweight code, scalable components, and designs that don’t get in your way.
      </p>
      <br />
      <h2 className="text-2xl font-semibold mb-4">My Mode</h2>
      <p className="text-lg leading-relaxed">
        The web is already out there.  Lets make it better!
      </p>
    </div>
  );
};

export default About;

