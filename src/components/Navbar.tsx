'use client'
import { useState } from 'react';


export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-black text-white">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">
        <a href="" className="hover:text-red-500 transition-colors duration-300">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 40"
            width="180"
            height="60"
            fill="none"
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
        </a>
      </div>
      <div className="hidden md:flex space-x-8 items-center">
        <a href="#" className="hover:text-red-500 transition-colors duration-300">
          Home
        </a>
        <a href="#" className="hover:text-red-500 transition-colors duration-300">
          Scan
        </a>
        <a href="#" className="hover:text-red-500 transition-colors duration-300">
          Dashboard
        </a>
        <a href="#" className="hover:text-red-500 transition-colors duration-300">
          Help
        </a>
        <a href="#" className="hover:text-red-500 transition-colors duration-300">
          Account
        </a>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="text-white hover:text-red-500 focus:outline-none transition-colors duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <div className="md:hidden bg-black">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#" className="block text-white hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            Home
          </a>
          <a href="#" className="block text-white hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            About
          </a>
          <a href="#" className="block text-white hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            Services
          </a>
          <a href="#" className="block text-white hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            Blog
          </a>
          <a href="#" className="block text-white hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            Portfolio
          </a>
          <a href="#" className="block text-white hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
            Contact
          </a>
        </div>
      </div>
    )}
  </nav>
);
};
