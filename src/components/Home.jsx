
import ImageList from "./ImageList";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Header / Title */}
      <div className="text-center py-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Fast Responsive Templates
        </h1>
        <p className="text-gray-500 text-md max-w-xl mx-auto">
          Choose from our collection of high-quality, ready-to-use templates.
        </p>
      </div>
      <div>
        <ImageList />
      </div>
    </div>
  );
};

export default Home;
