import ImageList from "./ImageList";
import { Link } from "react-router-dom";

export default function WebHosting() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* HERO SECTION */}
      <section className="relative z-0 bg-gradient-to-r from-blue-600 to-indigo-700 hover:bg-gradient-to-l from-indigo-700 to-purple-700 text-white py-32 px-8 md:px-32 text-center">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
          Your All-in-One Web Hosting & Design Partner
        </h1>
        <p className="text-xl md:text-2xl mb-3 drop-shadow-md">
          Fast, secure hosting to power your online presence.
        </p>
        <p className="text-white/90 max-w-xl mx-auto drop-shadow-md">
          Launch quickly with dependable hosting, domain, and custom design.
        </p>
      </section>

      {/* FLOATING CARDS */}
      <section className="relative z-10 -mt-24 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-24">
        {/* Website Design Card */}
        <div className="bg-white shadow-xl rounded-xl p-8 border border-slate-100 hover:shadow-2xl transition-shadow duration-300 group cursor-pointer transform hover:-translate-y-1">
          <div className="w-14 h-14 mb-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
            >
              <rect
                x="3"
                y="4"
                width="18"
                height="7"
                rx="2"
                ry="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="3"
                y="13"
                width="18"
                height="7"
                rx="2"
                ry="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="7"
                y1="8"
                x2="7"
                y2="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <line
                x1="7"
                y1="17"
                x2="7"
                y2="17"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">
            Need Hosting to Launch Your Website Quickly?
          </h3>
          <p className="text-slate-600 mb-4 leading-relaxed">
            To establish a strong online presence, your website needs a reliable
            home. Fast, secure web hosting provides the foundation your site
            depends on, delivering stability, speed, and protection so it
            remains accessible and performs well.
          </p>
          <Link
            to={`/blog/key-elements-of-a-web-host`}
            className="text-blue-600 font-semibold mt-3 inline-block hover:text-blue-800 transition-colors duration-200"
          >
            See Key Features →
          </Link>
        </div>

        {/* Domain Setup Card */}
        <div className="bg-white shadow-xl rounded-xl p-8 border border-slate-100 hover:shadow-2xl transition-shadow duration-300 group cursor-pointer transform hover:-translate-y-1">
          <div className="w-14 h-14 mb-6 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2c2.21 2.21 3.79 5.79 4 10-0.21 4.21-1.79 7.79-4 10M12 2C9.79 4.21 8.21 7.79 8 12c0.21 4.21 1.79 7.79 4 10"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">
            Why Your Website Needs a Domain Name
          </h3>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Websites need an address to exist online—a unique domain that
            represents your brand. Coupled with reliable hosting, it gives your
            site a stable home, making it easy for visitors to find, access,
            and engage with your content.
          </p>
          <Link
            to={`/blog/what-is-a-domain-name`}
            className="text-blue-600 font-semibold mt-3 inline-block hover:text-blue-800 transition-colors duration-200"
          >
            Read More →
          </Link>
        </div>

        {/* Featured Complete Package Card */}
        <div className="bg-gradient-to-br from-orange-600 to-indigo-700 text-white shadow-2xl rounded-xl p-8 border border-transparent hover:shadow-[0_8px_30px_rgb(0,0,0,0.35)] transition group relative overflow-hidden cursor-pointer transform hover:-translate-y-1">
          <div className="w-14 h-14 mb-6 rounded-lg bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75l1.5 4.5h4.5l-3.75 2.75 1.5 4.5L12 15.75l-3.75 2.75 1.5-4.5L6 11.25h4.5l1.5-4.5z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">Complete Package</h3>
          <p className="text-white/90 mb-6 leading-relaxed">
            Take advantage of our all-in-one website solution, which includes custom design, domain registration, and fast, secure hosting—all managed for your convenience. Enjoy a stress-free setup and reliable performance, so you can focus on growing your business.
          </p>
          <div className="absolute right-6 top- bg-white text-blue-700 text-xs font-semibold px-3 py-2 rounded-full shadow-lg hover:bg-blue-50 transition cursor-pointer">
            <a href="#how-is-done">How it Works</a>
          </div>
        </div>
      </section>

      {/* HOW IT'S DONE SECTION */}
      <section
        className="w-full bg-gray-50 py-16 px-6"
        id="how-is-done"
        aria-label="How It's Done"
      >
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            How It’s Done
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our simple transparent process gets your website live smoothly and
            on time.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center border-transparent hover:border-2 hover:border-gray-500 rounded-lg p-4 transition hover:cursor-pointer">

            
            <div className="bg-blue-600 hover:bg-blue-400 text-white rounded-full p-5 mb-4 inline-flex shadow-lg">
              {/* Icon: Chat bubble */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8h2a2 2 0 012 2v8a2 2 0 01-2 2H7l-4 4V10a2 2 0 012-2h2"
                />
              </svg>
            </div>
            <Link
            to={`/contact`}
            className=" font-semibold
            bg-gradient-to-r from-yellow-500 to-blue-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500">
            <h3 className="text-xl font-semibold mb-1 hover:text-purple-500">Contact Us</h3>
            </Link>
            <p className="text-gray-600 max-w-xs leading-relaxed">
              Share your business needs and goals so we can craft the ideal solution for you. 
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center border-transparent hover:border-2 hover:border-purple-500 rounded-lg p-4 transition hover:cursor-pointer">
            <div className="bg-yellow-600 hover:bg-yellow-400 text-white rounded-full p-5 mb-4 inline-flex shadow-lg">
              {/* Icon: Quote/Document */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m-6-8h6M5 6h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"
                />
              </svg>
            </div>
            <Link
            to={`/pricing`}
            className=" font-semibold
            bg-gradient-to-r from-yellow-500 to-blue-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500">
            <h3 className="text-xl font-semibold mb-1 hover:text-purple-500">Detailed Quote</h3>
            </Link>
            <p className="text-gray-600 max-w-xs leading-relaxed">
              We’ll send you a detailed quote outlining costs and services, followed by a call or meeting.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center border-transparent hover:border-2 hover:border-blue-500 rounded-lg p-4 transition hover:cursor-pointer">
            <div className="bg-green-600 hover:bg-green-400 text-white rounded-full p-5 mb-4 inline-flex shadow-lg">
              {/* Icon: Server/Cloud */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7v10a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4H7a4 4 0 00-4 4z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 3v4M8 3v4m-3 6h14"
                />
              </svg>
            </div>
            <Link
            to={`#`}
            className=" font-semibold
            bg-gradient-to-r from-yellow-500 to-blue-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat hover:bg-[length:100%_2px] transition-all duration-500">
            <h3 className="text-xl font-semibold mb-1 hover:text-purple-500">Backend</h3>
            </Link>
            <p className="text-gray-600 max-w-xs leading-relaxed">
              Once you approve, we register your domain and set up your hosting.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center border-transparent hover:border-2 hover:border-yellow-500 rounded-lg p-4 transition hover:cursor-pointer">
            <div className="bg-purple-600 hover:bg-purple-400 text-white rounded-full p-5 mb-4 inline-flex shadow-lg">
              {/* Icon: Monitor/Screen */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" ry="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Frontend</h3>
            <p className="text-gray-600 max-w-xs leading-relaxed">
              As soon as the backend step is complete, your website takes shape and goes live on schedule.
            </p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gray-100 rounded-lg text-center shadow-sm max-w-3xl mx-auto">
          <p className="text-lg font-semibold mb-3 text-gray-900">
            Already own a website & domain? No worries, we can migrate both to
            our hosting with zero downtime—all remotely and hassle-free.
          </p>
          <a
            href="/hosting"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
          >
            Get Hosting Now
          </a>
        </div>
      </section>
    </div>
  );
}

