import { Link, NavLink } from "react-router";

function Header() {
  return (
    <header className="sticky top-0 bg-gray-100 shadow-lg">
      <div className="flex items-center justify-between px-6 py-4">

        
        <Link to="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
          Yellow Button Creation
        </Link>

        
        <div className="md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg font-medium ${isActive ? "text-blue-500 underline" : "text-gray-700 hover:text-blue-500"}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/category"
            className={({ isActive }) =>
              `text-lg font-medium ${isActive ? "text-blue-500 underline" : "text-gray-700 hover:text-blue-500"}`
            }
          >
            Category
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
