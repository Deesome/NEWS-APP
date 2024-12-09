
import { useState } from "react"


function Search({ onSearch }) {

    const [keywords, setkeywords] = useState("")

    function handleClick() {
        onSearch(keywords)
    }

    return (
        <>
            <div className="flex items-center">

                <input
                    type="text"
                    onChange={(e) => setkeywords(e.target.value)}
                    value={keywords}
                    className="px-4 py-2 border border-gray-300 rounded-l-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-72"
                    placeholder="Search for news..."
                />

                {/* Search Icon Button */}
                <img
                    onClick={handleClick}
                    src="../assets/search.png"
                    alt="Search"
                    className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-500 ml-2"
                />
            </div>




        </>
    )
}

export default Search