// NavbarComponent.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="container mx-auto px-1">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-gray-800 font-bold text-lg">
              <a href="#header">
                <h1>KA</h1>
              </a>
            </div>
          </div>

          {/* Navigation Links (Hidden on Mobile) */}
          <div className="hidden md:flex md:items-center">
            <a
              href="#skills"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 border-none rounded-md ml-8 font-bold text-lg tracking-wider"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 border-none rounded-md ml-8 font-bold text-lg tracking-wider"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 border-none rounded-md ml-8 font-bold text-lg tracking-wider"
            >
              Contact
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              className="text-gray-800 focus:outline-none"
              onClick={toggleNavbar}
              aria-label="Toggle navigation"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Responsive Navigation Links */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col">
              <a
                href="#skills"
                className="text-gray-800 hover:text-gray-600 px-4 py-2 border-b-2 border-transparent"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-800 hover:text-gray-600 px-4 py-2 border-b-2 border-transparent"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-800 hover:text-gray-600 px-4 py-2 border-b-2 border-transparent"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
