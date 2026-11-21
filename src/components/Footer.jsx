
import {
  Facebook,
  Twitter,
  Instagram,
  Github,
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#263B65] border-t border-[#344B78]">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div className="max-w-sm text-center md:text-left">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight text-white">
                simple<span className="text-indigo-400">Designs</span>
              </span>
            </Link>

            <p className="mt-4 text-sm text-blue-100 leading-relaxed">
              The home of simplicity.
              <br />
              Beautiful, practical website templates
              designed to make your next project easier.
            </p>
          </div>

          {/* EXPLORE */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Explore
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-blue-100 hover:text-indigo-300 transition-colors"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-sm text-blue-100 hover:text-indigo-300 transition-colors"
              >
                About
              </Link>

              <Link
                to="/blog"
                className="text-sm text-blue-100 hover:text-indigo-300 transition-colors"
              >
                Blog
              </Link>

              <Link
                to="/"
                className="text-sm text-blue-100 hover:text-indigo-300 transition-colors"
              >
                Templates
              </Link>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Follow Us
            </h3>

            <div className="flex justify-center md:justify-start gap-3">
              {[
                {
                  Icon: Facebook,
                  url: "https://facebook.com",
                  label: "Facebook",
                },
                {
                  Icon: Twitter,
                  url: "https://twitter.com",
                  label: "Twitter",
                },
                {
                  Icon: Instagram,
                  url: "https://instagram.com",
                  label: "Instagram",
                },
                {
                  Icon: Github,
                  url: "https://github.com",
                  label: "GitHub",
                },
              ].map(({ Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-indigo-500 hover:border-indigo-500 transition-all duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/20 mt-12 pt-7">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-blue-100 text-center">
              &copy; {new Date().getFullYear()} simpleDesigns. All rights reserved.
            </p>

            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 text-xs text-white hover:text-indigo-300 transition-colors"
            >
              Back to Top
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


