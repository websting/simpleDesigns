
import ImageList from "./ImageList";
import { Link } from "react-router-dom";

const Templates = () => {
  return (
    <div>
      {/* Header / Title */}
      <div className="text-center px-4">
        <h1 className="text-4xl font-extrabold mb-6 leading-tight">
          Website Templates for Developers, Designers & Freelancers
        </h1>
        <p className="text-gray-500 text-md max-w-xl mx-auto">
          Save time with responsive, SEO-friendly HTML5 templates that look great on any device.
        </p>
      </div>
      <div>
        <ImageList />
      </div>
    </div>
  );
};

export default Templates;
