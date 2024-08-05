// Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoWhiteBg from "../../assets/Logo_BlackBgless.png"; // Ensure the correct path to the logo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between p-2 bg-gray-800">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img className="h-24 w-24" src={LogoWhiteBg} alt="Logo" />
        </div>

        {/* Mobile menu button */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
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

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex lg:flex-grow lg:items-center lg:justify-center">
          <div className="flex space-x-4">
            <a
              href="#product"
              className="text-white hover:text-indigo-400 transition duration-300"
            >
              Product
            </a>
            <a
              href="#features"
              className="text-white hover:text-indigo-400 transition duration-300"
            >
              Features
            </a>
            <a
              href="#marketplace"
              className="text-white hover:text-indigo-400 transition duration-300"
            >
              Marketplace
            </a>
            <a
              href="#company"
              className="text-white hover:text-indigo-400 transition duration-300"
            >
              Company
            </a>
          </div>
        </div>

        {/* Desktop Login Button */}
        <div className="hidden me-8 lg:flex w-full lg:flex-grow lg:items-center lg:justify-end">
          {/* <Link to="/login"> */}
            <button
              className="ml-4 bg-white py-2 px-3 rounded text-black hover:text-indigo-400 transition duration-300"
            >
              Log in
            </button>
          {/* </Link> */}
          {/* <Link to="/login"> */}
            <button
              className="ml-4 bg-white py-2 px-3 rounded text-black hover:text-indigo-400 transition duration-300"
            >
              Signup
            </button>
          {/* </Link> */}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden bg-gray-800 ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center py-2 space-y-2">
          <a
            href="#product"
            className="text-white hover:text-indigo-400 transition duration-300"
          >
            Product
          </a>
          <a
            href="#features"
            className="text-white hover:text-indigo-400 transition duration-300"
          >
            Features
          </a>
          <a
            href="#marketplace"
            className="text-white hover:text-indigo-400 transition duration-300"
          >
            Marketplace
          </a>
          <a
            href="#company"
            className="text-white hover:text-indigo-400 transition duration-300"
          >
            Company
          </a>
          <Link
            to="/login"
          >
            <button className="text-white hover:text-indigo-400 transition duration-300 font-bold cursor-pointer"
            >Login</button>
          </Link>
          <Link
            to="/signup"
            className="text-white hover:text-indigo-400 transition duration-300 font-bold cursor-pointer"
          >
            Signin
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;