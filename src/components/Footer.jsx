import { Facebook, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10 flex ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Section - Brand & Copy */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-white">MyWebsite</h2>
          <p className="text-sm mt-1">&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>

        {/* Middle Section - Links */}
        <div className="flex space-x-6">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex space-x-5">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <Github className="w-5 h-5" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
