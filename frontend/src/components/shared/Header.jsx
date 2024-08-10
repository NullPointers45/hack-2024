import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import LogoFinal from "../../assets/Logo_Final.png";
import { FaUserCircle, FaProductHunt, FaBuilding, FaSignInAlt, FaUserPlus, FaUserAlt, FaHome } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
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
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white relative">
      <div className="flex items-center space-x-4">
        {/* Logo Section */}
        <img
          className="h-24 w-24 rounded-full object-contain"
          style={{ backgroundColor: "white", borderRadius: "50%" }}
          src={LogoFinal}
          alt="Logo"
        />
        <div className="flex items-center justify-center">
          <div className="text-[40px] font-bold ms-6">फसल Bazaar</div>
          <div className="text-3xl mx-6">|</div>
          <div className="text-lg font-medium mt-2 italic">कृषि Se, किसान Tak</div>
        </div>
      </div>

      {/* Profile Section - Positioned at the end */}
      <div className="ml-auto relative">
        <button
          onClick={toggleMenu}
          className="flex items-center text-white focus:outline-none"
        >
          <FaUserCircle className="text-5xl" />
        </button>

        {isMenuOpen && (
          <div
            className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10 border border-gray-300"
            ref={dropdownRef}
          >
            <ul className="py-1">
              <li>
                <Link
                  to="/"
                  className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300"
                >
                  <FaHome className="mr-2 text-gray-600" />
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#product"
                  className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300"
                >
                  <FaProductHunt className="mr-2 text-gray-600" />
                  Product
                </a>
              </li>

              <li>
                <a
                  href="#company"
                  className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300"
                >
                  <FaBuilding className="mr-2 text-gray-600" />
                  Company
                </a>
              </li>
              {!isUser ? (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300"
                    >
                      <FaSignInAlt className="mr-2 text-gray-600" />
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300"
                    >
                      <FaUserPlus className="mr-2 text-gray-600" />
                      Signup
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/profile">
                    <span className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-300">
                      <FaUserAlt className="mr-2 text-gray-600" />
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
