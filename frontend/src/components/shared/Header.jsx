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
          style={{ padding: "4px", backgroundColor: "white", borderRadius: "50%" }} // Adding a white background for contrast
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
          <FaUserCircle className="text-3xl" />
        </button>

        {isMenuOpen && (
          <div
            className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
            ref={dropdownRef}
          >
            <ul className="py-1">
              <li>
                <a
                  href="#product"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300"
                >
                  Product
                </a>
              </li>

              <li>
                <a
                  href="#company"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300"
                >
                  Company
                </a>
              </li>
              {!isUser ? (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300"
                    >
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300"
                    >
                      Signup
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/profile">
                    <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300">
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