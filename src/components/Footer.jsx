import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-10 flex ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Section - Brand & Copy */}
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-white">The home of simplicity</p>
          <p className="text-xs mt-1">&copy; {new Date().getFullYear()} simpleDesigns. All rights reserved.</p>
        </div>

        {/* Middle Section - Links */}
        <div className="list-none flex space-x-6">
          <Link to="/">
            <li className="cursor-pointer hover:text-gray-500">Home</li>
          </Link>
          <Link to="/about">
            <li className="cursor-pointer hover:text-gray-500">About</li>
          </Link>
          <Link to="/blog">
            <li className="cursor-pointer hover:text-gray-500">Blog</li>
          </Link>
          <Link to="/articles">
            <li className="cursor-pointer hover:text-gray-500">Articles</li>
          </Link>
        </div>

        {/* Right Section - Social Icons */}
        <div className="flex space-x-5">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-whit
          
          
          e transition">
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
