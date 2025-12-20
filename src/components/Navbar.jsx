import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  // mobile menu will be hidden by default so initial value is set to false
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    // main wrapper
    <div className="absolute top-0 left-0 w-full z-10
                bg-stone-300 dark:bg-gray-900
                text-gray-900 dark:text-gray-100">
      {/* logo */}
      <div
        className="container mx-auto flex justify-between items-center py-4 px-6
        md:px-20 lg:px-32 cursor-pointer"
      >
        <Link to="/" className="font-bold text-2xl">
          simpleDesigns
        </Link>
        {/* Desktop links */}
        <ul className="hidden md:flex gap-7">
          <Link to="/">
            <li className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300">Home</li>
          </Link>

          <Link to="/blog">
            <li className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300">Blog</li>
          </Link>
          
          <Link to="/about">
            <li className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300">About</li>
          </Link>
          
        </ul>
        
        {/* button hide on small device*/}
        <div className="hidden md:flex items-center gap-3">


  <button className="bg-white dark:bg-gray-800 px-8 py-2 rounded-full cursor-pointer
                     hover:text-gray-500 dark:text-gray-200
                     dark:hover:bg-gray-700 transition">
    Login
  </button>
</div>



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
            <Link to="/about">
            <a
              href="about"
              className="px-4 py-2 rounded-full inline-block hover:text-purple-800"
              onClick={() => setShowMobileMenu(false)}
            >
              About
            </a>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
