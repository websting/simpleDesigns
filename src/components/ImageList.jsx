import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


const ImageList = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    fetch('/data/images.json')
    .then((res) => res.json())
    .then((data) => setTemplates(data));
  },[]);
  
  return (
    // twiak footer as needed 520 or less
    <div className="min-h-[calc(100vh-520px)] bg-white">
      {/* Template Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <Link
              key={template.public_id}
              to={`/details/${encodeURIComponent(template.public_id)}`}
              className="group relative bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden"
            >
              {/* Image */}
              <img
                src={template.url}
                alt={template.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />

              {/* Overlay icon */}
              <div className="absolute top-2 right-2 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity shadow">
                <FaArrowUpRightFromSquare className="w-5 h-5 text-gray-700" />
              </div>

              {/* Text content */}
              <div className="p-4">
                <h3 className="text-lg  text-gray-700">{template.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {template.description || "A modern responsive template."}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
      
export default ImageList;
