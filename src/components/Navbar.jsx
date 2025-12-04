import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  // mobile menu will be hidden by default so initial value is set to false
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    // main wrapper
    <div className="absolute top-0 left-0 w-full z-10 bg-stone-300">
      {/* logo */}
      <div
        className="container mx-auto flex justify-between items-center py-4 px-6
        md:px-20 lg:px-32 cursor-pointer"
      >
        <Link to="/">
        <a href="#" className="text-2xl">
          simpleDesigns
        </a>
        </Link>
        {/* Desktop links */}
        <ul className="hidden md:flex gap-7">
          <Link to="/">
            <li className="cursor-pointer hover:text-gray-500">Home</li>
          </Link>

          <Link to="/webhosting">
            <li className="cursor-pointer hover:text-gray-500">Web-Hosting</li>
          </Link>
          
          <Link to="/blog">
            <li className="cursor-pointer hover:text-gray-500">Blog</li>
          </Link>
          
          <Link to="/about">
            <li className="cursor-pointer hover:text-gray-500">About</li>
          </Link>
          
          <Link to="/services">
            <li className="cursor-pointer hover:text-gray-500">Services</li>
          </Link>
        </ul>
        
        {/* button hide on small device*/}
        <button className="hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer hover:text-gray-500">
          Login
        </button>

        {/* mobile menu icon / hidden by default */}
        <RxHamburgerMenu
          className="md:hidden w-7 text-2xl"
          onClick={() => setShowMobileMenu(true)}
        />
      </div>
      {/* movible menu / hidden by default*/}
      <div>
        {/* if on small screens is tru show menu otherwise hide menu */}
        <div
          className={`md:hidden ${
            showMobileMenu ? "fixed w-50" : "h-0 w-0"
          } right-0 top-0 bottom-0 overflow-hidden bg-white/90 transition-all`}
        >
          {/* mobile close button */}
          <div
            className="flex justify-end text-2xl p-6 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          >
            {/* mobile close icon */}
            <AiOutlineClose />
          </div>
          {/* mobile links / when clicked menu closes */}
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg text-blue-800 font-medium">
            <Link to="/">
            <a
              href="home"
              className="px-4 py-2 rounded-full inline-block hover:text-purple-800"
              onClick={() => setShowMobileMenu(false)}
            >
              Home
            </a>
            </Link>
            <Link to="/blog">
            <a
              href="blog"
              className="px-4 py-2 rounded-full inline-block hover:text-purple-800"
              onClick={() => setShowMobileMenu(false)}
            >
              Blog
            </a>
            </Link>
            <Link to="/webhosting">
            <a
              href="templates"
              className="px-4 py-2 rounded-full inline-block hover:text-purple-800"
              onClick={() => setShowMobileMenu(false)}
            >
              Web-Hosting
            </a>
            </Link>
            <Link to="/about">
            <a
              href="about"
              className="px-4 py-2 rounded-full inline-block hover:text-purple-800"
              onClick={() => setShowMobileMenu(false)}
            >
              About
            </a>
            </Link>
            <Link to="/services">
            <a
              href="services"
              className="px-4 py-2 rounded-full inline-block hover:text-purple-800"
              onClick={() => setShowMobileMenu(false)}
            >
              Services
            </a>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
