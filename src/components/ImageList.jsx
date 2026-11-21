
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const ImageList = ({ category }) => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch("/data/images.json")
      .then((res) => res.json())
      .then((data) => setTemplates(data))
      .catch((error) => {
        console.error("Error loading templates:", error);
      });
  }, []);

  const filteredTemplates =
    category === "all"
      ? templates
      : templates.filter(
          (template) => template.category === category
        );

  return (
    <div className="w-full min-h-[300px]">

      {filteredTemplates.length > 0 ? (

        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">

          {filteredTemplates.map((template) => (

            <Link
              key={template.public_id}
              to={`/details/${encodeURIComponent(template.public_id)}`}
              aria-label={`View ${template.title} details`}
              className="group relative flex flex-col bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-indigo-100/70 hover:-translate-y-1.5 transition-all duration-300"
            >

              {/* TEMPLATE IMAGE */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">

                <img
                  src={template.url}
                  alt={template.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* CATEGORY BADGE */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-xs font-semibold text-gray-700 shadow-sm capitalize">
                    {template.category}
                  </span>
                </div>

                {/* PREVIEW ICON */}
                <div className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/95 text-gray-800 shadow-sm opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 transition-all duration-300">
                  <FaArrowUpRightFromSquare className="w-3.5 h-3.5" />
                </div>

              </div>

              {/* TEMPLATE INFORMATION */}
              <div className="flex flex-col flex-1 p-5 sm:p-6 text-left">

                <div className="flex-1">

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
                    {template.title}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {template.description || "A modern, responsive website template designed to help you launch your next project."}
                  </p>

                </div>

                {/* CARD FOOTER */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">

                  <span className="text-sm font-semibold text-indigo-600 group-hover:text-indigo-700">
                    View Details
                  </span>

                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-200">
                    <FaArrowUpRightFromSquare className="w-3 h-3" />
                  </span>

                </div>

              </div>

            </Link>

          ))}

        </div>

      ) : (

        <div className="text-center py-20 px-6 bg-white border border-gray-100 rounded-2xl">

          <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 text-2xl">
            ✦
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2">
            No templates found
          </h3>

          <p className="text-gray-500 text-sm">
            Try selecting another category to explore our designs.
          </p>

        </div>

      )}

    </div>
  );
};

export default ImageList;



