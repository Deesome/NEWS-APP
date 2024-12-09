function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-100 py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-gray-400">
              We are dedicated to providing top-notch services to help you achieve
              your goals. Follow us on social media for updates and insights.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-facebook-f"></i> {/* Example icons */}
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
  
          {/* Navigation Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
  
          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-2 text-gray-400">
              <li>123 Main Street, City, Country</li>
              <li>Email: contact@example.com</li>
              <li>Phone: +123 456 7890</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Your Company Name. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  