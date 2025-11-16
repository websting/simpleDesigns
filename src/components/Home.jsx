
import ImageList from "./ImageList";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Header / Title */}
      <div className="text-center py-10 px-4">
        <h1 className="font-Audiowide text-3xl sm:text-4xl text-gray-800 mb-2">
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

export default Home;
