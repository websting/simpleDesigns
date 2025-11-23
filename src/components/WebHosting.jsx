import ImageList from "./ImageList";
import { Link } from "react-router-dom";

export default function WebHosting() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* HERO SECTION */}
      <section className="relative z-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-32 px-32 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Web Hosting & Design Service
        </h1>
        <p className="text-xl md:text-2xl mb-2">
          Best Design, Domain & Hosting in the Area
        </p>
        <p className="text-white/90 max-w-xl mx-auto">
          Everything you need to get online — fast, secure, and stress-free.
        </p>
      </section>

      {/* FLOATING CARDS */}
      <section className="relative z-10 -mt-24 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 px-4 pb-24">
        {/* Website Design Card */}
        <div className="bg-white shadow-xl rounded-xl p-6 border border-slate-100 hover:shadow-2xl transition group">
          <div className="w-12 h-12 mb-4 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-200 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.6"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a2.25 2.25 0 113.182 3.183L8.75 19.963l-4.5 1.125 1.125-4.5L16.862 4.487z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-3">
            Website Design
          </h3>
          <p className="text-slate-600 mb-2">
            We can import your existing website or design a brand-new one from
            scratch. Whether you prefer a custom layout or a WordPress-based
            build, we create fast, modern, and mobile-friendly websites tailored
            perfectly to your needs.
          </p>
          <Link
            to={`/blog/what-makes-a-good-website`}
            className="text-blue-600 font-medium mt-3 inline-block hover:underline"
          >
            Read more →
          </Link>
        </div>

        {/* Domain Setup Card */}
        <div className="bg-white shadow-xl rounded-xl p-6 border border-slate-100 hover:shadow-2xl transition group">
          <div className="w-12 h-12 mb-4 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center group-hover:bg-purple-200 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.6"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9 9 0 100-18 9 9 0 000 18z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.522 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.478 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-slate-800 mb-3">
            Domain Setup
          </h3>
          <p className="text-slate-600 mb-2">
            We can help you purchase, register, and fully configure your domain.
            From choosing the right name to setting up DNS records, we ensure it
            connects correctly and securely to your website without any
            technical confusion.
          </p>
          <Link
            to={`/blog/what-is-a-domain-name`}
            className="text-blue-600 font-medium mt-3 inline-block hover:underline"
          >
            Read more →
          </Link>
        </div>

        {/* Featured Complete Package Card */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-2xl rounded-xl p-6 border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.25)] transition group relative overflow-hidden">
          <div className="absolute top-4 right-4 bg-white text-blue-700 text-xs font-semibold px-3 py-1 rounded-full shadow">
            Most Popular
          </div>
          <div className="w-12 h-12 mb-4 rounded-lg bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.6"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75l1.5 4.5h4.5l-3.75 2.75 1.5 4.5L12 15.75l-3.75 2.75 1.5-4.5L6 11.25h4.5l1.5-4.5z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-3">Complete Package</h3>
          <p className="text-white/90 mb-2">
            Get everything done for you — design, hosting, and domain setup
            handled end to end. Ideal for anyone not tech-savvy who wants a full
            website solution without dealing with servers, backend settings, or
            configuration work.
          </p>
        </div>
      </section>

      {/* HOW IT'S DONE SECTION */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            How It’s Done
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our simple, transparent process gets your website live smoothly and
            on time.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-600 text-white rounded-full p-4 mb-4 inline-flex">
              {/* Icon: Chat bubble */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
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
            <h3 className="text-xl font-semibold mb-2">Discuss Your Needs</h3>
            <p className="text-gray-600 max-w-xs">
              Contact us to discuss your specific requirements, goals, and
              timeline.
            </p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-yellow-600 text-white rounded-full p-4 mb-4 inline-flex">
              {/* Icon: Chat bubble */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
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
            <h3 className="text-xl font-semibold mb-2">Detiled Quote</h3>
            <p className="text-gray-600 max-w-xs">
              We provide a clear, detailed quote outlining all costs and
              services included.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-green-600 text-white rounded-full p-4 mb-4 inline-flex">
              {/* Icon: Server/Cloud */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
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
            <h3 className="text-xl font-semibold mb-2">
              Setup Domain & Hosting
            </h3>
            <p className="text-gray-600 max-w-xs">
             once approved We register, and configure your domain and hosting for
              smooth performance.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-purple-600 text-white rounded-full p-4 mb-4 inline-flex">
              {/* Icon: Monitor/Screen */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" ry="2" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 21h8m-4-4v4"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Watch Web Site Built Live
            </h3>
            <p className="text-gray-600 max-w-xs">
              Once backend setup is complete, you can watch your website take shape in
              real time.
            </p>
          </div>
        </div>
        <div class="mt-10 p-6 bg-gray-100 rounded-lg text-center">
          <p class="text-lg font-semibold mb-3">
            Already own a website & domain? No worries, we can migrate both to our hosting with zero
            downtime!
          </p>
          <a
            href="/hosting"
            class="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
          >
            Get Hosting Now
          </a>
        </div>
      </section>
    </div>
  );
}
