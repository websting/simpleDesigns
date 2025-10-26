import { IoSearch } from "react-icons/io5";

const Searchbar = ({ search, setSearch }) => {
  return (
    <div className="mt-[100px] mb-12 max-w-xl mx-auto px-4">
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search templates..."
          className="w-full py-3 pl-5 pr-12 text-sm sm:text-base border border-gray-300 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <IoSearch
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          size={20}
        />
      </div>
    </div>
  );
};

export default Searchbar;
