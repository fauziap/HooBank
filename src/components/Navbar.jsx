import React, { useState } from "react";
import {logo} from "./assets/logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between lg:mx-20">
        {/* Logo Section */}
        <a href="#">
          <div className="flex -ml-10 items-center gap-2">
            <img
              className="w-6"
              src={logo}
              alt="HooBank Logo"
            />
            <h1 className="text-xl font-bold">
              Hoo<span className="text-cyan-500">Bank</span>
            </h1>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex text-sm font-light gap-10">
          <a
            href="#"
            className="transition-all duration-300 hover:text-cyan-500"
          >
            Home
          </a>
          <a
            href="#"
            className="transition-all duration-300 hover:text-cyan-500"
          >
            About Us
          </a>
          <a
            href="#"
            className="transition-all duration-300 hover:text-cyan-500"
          >
            Features
          </a>
          <a
            href="#"
            className="transition-all duration-300 hover:text-cyan-500"
          >
            Solution
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-24 left-0 right-0 bg-gray-800 p-4 z-50 lg:hidden">
            <div className="flex flex-col items-center space-y-4">
              <a
                href="#"
                className="text-white text-sm transition-all duration-300 hover:text-cyan-500"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white text-sm transition-all duration-300 hover:text-cyan-500"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-white text-sm transition-all duration-300 hover:text-cyan-500"
              >
                Features
              </a>
              <a
                href="#"
                className="text-white text-sm transition-all duration-300 hover:text-cyan-500"
              >
                Solution
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
