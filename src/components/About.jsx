// src/pages/About.jsx

import profilePic from '../assets/profilePic.jpg'; // adjust path if needed

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-4xl font-extrabold mb-6 leading-tight text-center">Mission & Vision</h1>

      <p className="mb-4 text-lg leading-relaxed text-gray-500">
        At <span className="font-semibold">simpleDesigns</span>, the idea is that great design shouldn't slow down development.
        Founded with tech-savies in mind, the mission is simple:
        <span className="italic"> to help you build faster by handling the front-end design for you.</span>
      </p>

      

      <p className="mb-4 text-lg leading-relaxed text-gray-500">
        Whether you're spinning up a new project or scaling an existing one, our collection of clean, responsive templates
        allows you to skip the styling and jump straight into the dynamic work. Built with <span className="font-medium">React</span>, <span className="font-medium">Tailwind CSS</span>, and <span className="font-medium">Vite</span>,
        every template is optimized for performance, scalability, and developer experience.
      </p>

      <p className="mb-4 text-lg leading-relaxed text-gray-500">
        Why spend hours tweaking UI when you could be shipping features?
      </p>

      <div className="border-t border-gray-300 my-10"></div>

      <h2 className="text-2xl mb-4">Meet the Creator</h2>

<div className="flex items-center gap-4 mb-6">
  <img
    src={profilePic}
    alt="Creator"
    className="w-16 h-16 rounded-full object-center shadow"
  />
  <p className="text-lg leading-relaxed text-gray-500">
    Hi! I'm the solo creator behind simpleDesigns — a self thought developer who knows how time-consuming front-end work can be when all you want is to focus on functionality.
    I built this platform to make your dev process smoother by offering templates that are clean, fast, and easy to integrate.
  </p>
</div>

      <h2 className="text-2xl mb-4">New Templates, Regularly</h2>
      <p className="mb-4 text-lg leading-relaxed text-gray-500">
        I’m constantly adding new templates — usually every few weeks — based on what developers are asking for most. Got an idea? I’m always open to suggestions.
      </p>

      <h2 className="text-2xl mb-4">My Vision</h2>
      <p className="text-lg leading-relaxed text-gray-500">
        My vision for simpleDesigns is to help developers build faster by embracing <span className="font-medium">speed</span>, <span className="font-medium">simplicity</span>, and <span className="font-medium">modern tools</span>. That means lightweight code, scalable components, and designs that don’t get in your way.
      </p>
      <br />
      <h2 className="text-2xl mb-4">My Mode</h2>
      <p className="text-lg leading-relaxed text-gray-500">
        The web is already out there—lets make it better.
      </p>
    </div>
  );
};

export default About;

