
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* MAIN FOOTER */}
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* BRAND */}
          <div className="max-w-sm text-center md:text-left">

            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight text-gray-900">
                simple<span className="text-indigo-600">Designs</span>
              </span>
            </Link>

            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              The home of simplicity.
              <br />
              Beautiful, practical website templates
              designed to make your next project easier.
            </p>

          </div>

          {/* NAVIGATION */}
          <div className="text-center md:text-left">

            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Explore
            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="text-sm text-gray-500 hover:text-indigo-600 transition-colors"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-sm text-gray-500 hover:text-indigo-600 transition-colors"
              >
                About
              </Link>

              <Link
                to="/blog"
                className="text-sm text-gray-500 hover:text-indigo-600 transition-colors"
              >
                Blog
              </Link>

            </div>

          </div>

          {/* SOCIAL LINKS */}
          <div className="text-center md:text-left">

            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Follow Us
            </h3>

            <div className="flex justify-center md:justify-start gap-3">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-indigo-600 hover:text-white transition-all duration-200"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-indigo-600 hover:text-white transition-all duration-200"
              >
                <Twitter size={18} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-indigo-600 hover:text-white transition-all duration-200"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-indigo-600 hover:text-white transition-all duration-200"
              >
                <Github size={18} />
              </a>

            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200 mt-10 pt-6">

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">

            <p className="text-xs text-gray-500 text-center">
              &copy; {new Date().getFullYear()} simpleDesigns.
              All rights reserved.
            </p>

            <p className="text-xs text-gray-400">
              The home of simplicity.
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;

