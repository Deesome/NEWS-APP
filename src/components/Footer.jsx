import { NavLink } from "react-router";
function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 px-8 py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400">
            We are dedicated to providing top-notch services to help you achieve
            your goals. Follow us on social media for updates and insights.
          </p>
          
        </div>

        {/* Navigation Links */}
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

        {/* Contact Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <ul className="space-y-2 text-gray-400">
            <li>Kanchan Royal , Paliwal nagar , Indore</li>
            <li>Email: yellowbutton-creation.com</li>
            <li>Phone: 9407201910</li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-gray-500 text-sm">
          © 2024 Yellow Button Creation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
