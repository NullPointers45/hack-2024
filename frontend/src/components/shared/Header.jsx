import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import LogoFinal from "../../assets/Logo_Final.png";
import { MdMenu, MdClose } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setIsUser(true);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative flex items-center justify-between p-4 bg-gray-800 text-white">
      {/* Left Section: Logo and Titles */}
      <div className="flex items-center flex-shrink-0 space-x-4">
        <img
          className="h-20 w-20 object-contain"
          style={{ padding: '4px', backgroundColor: 'white', borderRadius: '50%' }} // Adding a white background for contrast
          src={LogoFinal}
          alt="Logo"
        />
        <div className="flex flex-col justify-center">
          <div className="text-3xl font-bold">फसल Bazaar</div>
          <div className="text-lg mt-1 italic">कृषि Se, किसान Tak</div>
        </div>
      </div>

      {/* Right Section: User Menu and Dropdown */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <button
            onClick={toggleMenu}
            className="flex items-center text-white focus:outline-none"
          >
            <FaUserCircle className="text-3xl" />
          </button>

          {isMenuOpen && (
            <div
              className="absolute top-full right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-10"
              ref={dropdownRef}
            >
              <ul className="py-1">
                <li>
                  <a
                    href="#product"
                    className="block px-4 py-2 hover:bg-gray-200 transition duration-300"
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a
                    href="#company"
                    className="block px-4 py-2 hover:bg-gray-200 transition duration-300"
                  >
                    Company
                  </a>
                </li>
                {!isUser ? (
                  <>
                    <li>
                      <Link
                        to="/login"
                        className="block px-4 py-2 hover:bg-gray-200 transition duration-300"
                      >
                        Log in
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signup"
                        className="block px-4 py-2 hover:bg-gray-200 transition duration-300"
                      >
                        Signup
                      </Link>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link
                      to="/profile"
                    >
                      <span className="block px-4 py-2 hover:bg-gray-200 transition duration-300">My Profile</span>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none md:hidden"
        >
          {isMenuOpen ? <MdClose className="text-2xl" /> : <MdMenu className="text-2xl" />}
        </button>

        {isMenuOpen && (
          <div
            className="absolute top-16 right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-20"
            ref={dropdownRef}
          >
            <ul className="py-1">
              <li>
                <a href="#product" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">
                  Product
                </a>
              </li>
              <li>
                <a href="#company" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">
                  Company
                </a>
              </li>
              {!isUser ? (
                <>
                  <li>
                    <Link to="/login" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link to="/signup" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">
                      Signup
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/profile">
                    <span className="block px-4 py-2 hover:bg-gray-200 transition duration-300">
                      My Profile
                    </span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
