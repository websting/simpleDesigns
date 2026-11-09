
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
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

          {filteredTemplates.map((template) => (
            <Link
              key={template.public_id}
              to={`/details/${encodeURIComponent(template.public_id)}`}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* TEMPLATE PREVIEW */}
              <div className="overflow-hidden">
                <img
                  src={template.url}
                  alt={template.title}
                  loading="lazy"
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* PREVIEW ICON */}
              <div className="absolute top-3 right-3 bg-white/95 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                <FaArrowUpRightFromSquare className="w-4 h-4 text-gray-700" />
              </div>

              {/* TEMPLATE INFORMATION */}
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {template.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                  {template.description || "A modern responsive template."}
                </p>
              </div>
            </Link>
          ))}

        </div>
      ) : (
        <div className="text-center py-16 bg-[#FAFAF8] rounded-2xl">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No templates found
          </h3>

          <p className="text-gray-500">
            Try selecting another category.
          </p>
        </div>
      )}

    </div>
  );
};

export default ImageList;


