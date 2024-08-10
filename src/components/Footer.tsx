export const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Logo and Description */}
      <div className="flex flex-col items-center md:items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 40"
          width="50"
          height="50"
          fill="none"
          className="mb-4"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ff416c', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#ff4b2b', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="none" />
          <g>
            {/* Brain Outline */}
            <path
              d="M 30 15 C 25 10, 25 20, 30 25 C 35 30, 45 30, 50 25 C 55 20, 55 10, 50 15 Z"
              fill="none"
              stroke="url(#grad1)"
              strokeWidth="2"
            />
            <path
              d="M 35 15 C 33 13, 33 17, 35 19"
              fill="none"
              stroke="url(#grad1)"
              strokeWidth="1.5"
            />
            <path
              d="M 45 15 C 47 13, 47 17, 45 19"
              fill="none"
              stroke="url(#grad1)"
              strokeWidth="1.5"
            />
            <path
              d="M 40 10 C 38 8, 38 12, 40 14"
              fill="none"
              stroke="url(#grad1)"
              strokeWidth="1.5"
            />
            <path
              d="M 40 20 C 38 18, 38 22, 40 24"
              fill="none"
              stroke="url(#grad1)"
              strokeWidth="1.5"
            />
          </g>
          <text
            x="60"
            y="25"
            fontFamily="Verdana"
            fontSize="10"
            fill="url(#grad1)"
            fontWeight="bold"
          >
            CyberAI
          </text>
          {/* Circuit Lines */}
          <path
            d="M 50 15 L 55 10"
            stroke="url(#grad1)"
            strokeWidth="2"
          />
          <circle cx="55" cy="10" r="2" fill="url(#grad1)" />
          <path
            d="M 50 25 L 55 30"
            stroke="url(#grad1)"
            strokeWidth="2"
          />
          <circle cx="55" cy="30" r="2" fill="url(#grad1)" />
        </svg>
        <p className="text-center md:text-left text-sm">
          CyberAI - Innovating the future of artificial intelligence with cutting-edge solutions.
        </p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="hover:text-red-500 transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500 transition-colors duration-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500 transition-colors duration-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500 transition-colors duration-300">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500 transition-colors duration-300">
              Blog
            </a>
          </li>
        </ul>
      </div>

      {/* Social Media Links */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-red-500 transition-colors duration-300">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.46 6c-.77.35-1.6.58-2.46.69a4.18 4.18 0 001.82-2.31 8.3 8.3 0 01-2.65 1.02A4.14 4.14 0 0015.5 5c-2.28 0-4.14 1.85-4.14 4.14 0 .32.04.63.1.93-3.44-.17-6.5-1.82-8.54-4.31-.36.61-.57 1.33-.57 2.1 0 1.45.74 2.73 1.85 3.48a4.07 4.07 0 01-1.88-.52v.05c0 2.02 1.44 3.71 3.36 4.1-.35.09-.73.14-1.11.14-.27 0-.54-.03-.8-.08.54 1.67 2.11 2.89 3.97 2.92a8.33 8.33 0 01-5.14 1.77c-.33 0-.65-.02-.97-.06a11.75 11.75 0 006.29 1.84c7.54 0 11.66-6.25 11.66-11.67 0-.18 0-.35-.01-.53a8.34 8.34 0 002.04-2.12z"
              />
            </svg>
          </a>
          <a href="#" className="hover:text-red-500 transition-colors duration-300">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 2.88 8.17 6.84 9.49.5.09.66-.21.66-.47 0-.23-.01-.84-.01-1.65-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.45-1.1-1.45-.9-.61.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.89 1.51 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.03-2.7-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03A9.52 9.52 0 0112 6.8a9.52 9.52 0 012.5.33c1.91-1.3 2.75-1.03 2.75-1.03.55 1.37.2 2.39.1 2.64.64.71 1.03 1.61 1.03 2.7 0 3.83-2.34 4.68-4.57 4.92.36.31.69.93.69 1.87 0 1.35-.01 2.43-.01 2.76 0 .26.17.57.67.47 3.96-1.32 6.84-5.07 6.84-9.49 0-5.52-4.48-10-10-10z"
              />
            </svg>
          </a>
          <a href="#" className="hover:text-red-500 transition-colors duration-300">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM8.09 19.5H5.5V10.5h2.59v9zm-1.3-10.31c-.83 0-1.5-.68-1.5-1.5s.68-1.5 1.5-1.5 1.5.68 1.5 1.5-.67 1.5-1.5 1.5zm12.71 10.31h-2.58v-4.43c0-1.06-.02-2.42-1.47-2.42s-1.7 1.15-1.7 2.34v4.51h-2.58V10.5h2.48v1.23h.04c.35-.66 1.22-1.36 2.51-1.36 2.69 0 3.18 1.77 3.18 4.08v5.06z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="mt-8 text-center text-sm text-gray-500">
      © 2024 CyberAI. All rights reserved.
    </div>
  </footer>
  );
};
