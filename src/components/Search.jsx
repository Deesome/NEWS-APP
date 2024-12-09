import { useState } from "react";
import searchIcon from '../assets/search.png';

function Search({ onSearch }) {
  const [keywords, setkeywords] = useState("");

  function handleClick() {
    onSearch(keywords);
  }

  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        onChange={(e) => setkeywords(e.target.value)}
        value={keywords}
        className="px-4 py-2 border border-gray-300 rounded-l-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-72 md:w-96"
        placeholder="Search for news..."
      />
      
      {/* Search Icon Button */}
      <img
        onClick={handleClick}
        src=""
        alt="Search"
        className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-500 ml-2"
      />
    </div>
  );
}

export default Search;
