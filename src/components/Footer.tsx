export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 text-center">
        {/* Company Info */}
        <div className="w-full mb-8 md:mb-0">
          <h2 className="text-white text-xl font-bold mb-4">CyberAI</h2>
          <p className="text-gray-400">
            CyberAI is your go-to platform for cutting-edge AI solutions, driving innovation and efficiency in every industry.
          </p>
        </div>

        {/* Useful Links */}
        <div className="w-full mb-8 md:mb-0">
          <h2 className="text-white text-xl font-bold mb-4">Useful Links</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-white transition-colors">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white transition-colors">Services</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="w-full mb-8 md:mb-0">
          <h2 className="text-white text-xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-500"
            />
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="w-full">
          <h2 className="text-white text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-red-500 transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.16 4.16 0 001.82-2.28 8.4 8.4 0 01-2.63 1 4.17 4.17 0 00-7.1 3.8 11.8 11.8 0 01-8.56-4.35 4.17 4.17 0 001.3 5.57 4.1 4.1 0 01-1.88-.53v.05a4.18 4.18 0 003.34 4.09 4.2 4.2 0 01-1.88.07 4.18 4.18 0 003.9 2.9A8.35 8.35 0 012 19.54 11.77 11.77 0 006.29 21c7.55 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.52A8.36 8.36 0 0022.46 6z" />
              </svg>
            </a>
            <a href="#" className="hover:text-red-500 transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM8.09 19.5H5.5V10.5h2.59v9zm-1.3-10.31c-.83 0-1.5-.68-1.5-1.5s.68-1.5 1.5-1.5 1.5.68 1.5 1.5-.67 1.5-1.5 1.5zm12.71 10.31h-2.58v-4.43c0-1.06-.02-2.42-1.47-2.42s-1.7 1.15-1.7 2.34v4.51h-2.58V10.5h2.48v1.23h.04c.35-.66 1.22-1.36 2.51-1.36 2.69 0 3.18 1.77 3.18 4.08v5.06z" />
              </svg>
            </a>
            <a href="#" className="hover:text-red-500 transition-colors duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.41 2.88 8.15 6.84 9.49.5.09.68-.21.68-.48v-1.68c-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.6.07-.6 1.01.07 1.54 1.04 1.54 1.04.9 1.54 2.36 1.1 2.94.84.09-.66.35-1.1.63-1.35-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.29.1-2.7 0 0 .84-.27 2.75 1.02a9.56 9.56 0 012.5-.34c.85 0 1.71.11 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.41.2 2.44.1 2.7.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.67.91.67 1.84v2.73c0 .27.18.58.69.48A10.02 10.02 0 0022 12.04c0-5.52-4.48-10-10-10z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-500">
        <p>&copy; 2024 CyberAI. All rights reserved.</p>
        <p>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a> |{' '}
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </p>
      </div>
    </div>
  </footer>
  );
};
