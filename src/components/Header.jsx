import { Link, NavLink } from "react-router";


function Header() {
    return (
        <>
            <div className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-lg sticky">
              
                <Link className="text-xl font-bold text-gray-800 hover:text-gray-600">
                    Logo
                </Link>

                

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-lg font-medium ${
                                isActive
                                    ? "text-blue-500 underline"
                                    : "text-gray-700 hover:text-blue-500"
                            }`
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/category"
                        className={({ isActive }) =>
                            `text-lg font-medium ${
                                isActive
                                    ? "text-blue-500 underline"
                                    : "text-gray-700 hover:text-blue-500"
                            }`
                        }
                    >
                        Category
                    </NavLink>
                </div>

                {/* Login Button */}
                <div>
                    <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                        LogIn
                    </button>
                </div>
            </div>
        </>
    );
}

export default Header;
