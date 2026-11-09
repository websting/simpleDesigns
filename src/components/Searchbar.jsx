
import { IoSearch } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const Searchbar = ({ search, setSearch }) => {
  return (
    <div className="w-full max-w-xl mx-auto px-4 mb-9">
      <div className="relative group">

        <IoSearch
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-indigo-600 transition-colors"
          size={21}
        />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Find your perfect website template..."
          aria-label="Search website templates"
          className="w-full h-14 pl-14 pr-12 text-sm sm:text-base bg-white border border-gray-200 rounded-2xl shadow-sm outline-none placeholder:text-gray-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all duration-200"
        />

        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            aria-label="Clear search"
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition"
          >
            <AiOutlineClose size={19} />
          </button>
        )}

      </div>
    </div>
  );
};

export default Searchbar;

