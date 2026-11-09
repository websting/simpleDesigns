
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const closeMobileMenu = () => setShowMobileMenu(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 lg:px-10">

        {/* Brand */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          simple<span className="text-indigo-600">Designs</span>
          <span className="text-indigo-600">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-9">
          <Link
            to="/"
            className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Home
          </Link>

          <Link
            to="/blog"
            className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
          >
            Blog
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
          >
            About
          </Link>
        </nav>

        {/* Desktop Action */}
        <div className="hidden md:flex items-center">
          <button className="bg-indigo-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-indigo-700 hover:shadow-md transition-all duration-200">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMobileMenu(true)}
          className="md:hidden text-gray-800 p-2"
          aria-label="Open navigation menu"
        >
          <RxHamburgerMenu className="text-2xl" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-black/30 transition-opacity duration-300 ${
          showMobileMenu
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      >
        <div
          className={`absolute right-0 top-0 h-full w-72 max-w-[85%] bg-white shadow-xl transition-transform duration-300 ${
            showMobileMenu ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Header */}
          <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="text-xl font-bold text-gray-900"
            >
              simple<span className="text-indigo-600">Designs</span>.
            </Link>

            <button
              onClick={closeMobileMenu}
              className="text-gray-600 text-2xl p-1"
              aria-label="Close navigation menu"
            >
              <AiOutlineClose />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col px-6 py-8 gap-3">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-600 transition"
            >
              Home
            </Link>

            <Link
              to="/blog"
              onClick={closeMobileMenu}
              className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-600 transition"
            >
              Blog
            </Link>

            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-600 transition"
            >
              About
            </Link>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
