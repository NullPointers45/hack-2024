// Header.js
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import LogoWhiteBg from "../../assets/Logo_BlackBgless.png";
import { FaUserCircle } from "react-icons/fa";
import { GoRocket } from "react-icons/go";

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
    <>
      <nav className="flex items-center justify-between p-2 bg-gray-800">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img className="h-24 w-24" src={LogoWhiteBg} alt="Logo" />
          <label className="text-3xl ps-3">Null Pointers | Hackathon 2024</label>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center me-10 text-2xl text-white">
            <Link to="/chatbot">
              <button className="flex items-center justify-center bg-white text-gray-800 py-2 px-4 rounded-md">
                <span className="me-2">AI</span>
                <GoRocket className="text-2xl" />
              </button>
            </Link>

          </div>
          <div className="relative">
            <button
              onClick={toggleMenu}
              className="flex items-center text-white focus:outline-none pe-7"
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
                      <Link
                        to="/profile"
                      >
                        <span className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300">My Profile</span>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
