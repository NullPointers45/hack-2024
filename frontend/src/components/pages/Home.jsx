import React from "react";
import { Link } from "react-router-dom";
import heroimage from "../../assets/heroimage.png";
import Farmer from "../../assets/Farmer.jpg";
import { FaUser, FaSeedling, FaDollarSign, FaCheckCircle } from "react-icons/fa";
import { FaHandshake, FaClock, FaLock, FaTruck } from "react-icons/fa";

import Buyer from "../../assets/Buyer.jpg";

const HomePage = () => {
  return (
    <div className="font-sans antialiased text-gray-900">
      {/* Header Component */}
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroimage})` }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 bg-black bg-opacity-40">
          <h1 className="text-5xl font-bold mb-4">
            Empowering Farmers with Fair Crop Prices
          </h1>
          <p className="text-xl mb-16">
            A platform connecting farmers directly with buyers.
          </p>
          <Link
            to="/signup"
            className="bg-green-500 hover:bg-black text-white py-3 px-6 rounded-lg text-lg"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">Why Choose Our Platform?</h2>
        <div className="flex justify-between items-stretch overflow-x-auto">
          <div className="w-64 p-6 text-center bg-white shadow-lg rounded-lg hover:bg-green-50 transition duration-300 transform hover:scale-105 mx-4">
            <div className="text-5xl mb-4 text-green-600">
              <FaHandshake />
            </div>
            <div className="text-xl font-semibold mb-2 text-gray-800">Direct Bidding</div>
            <p className="text-gray-600">Connects farmers and buyers without middlemen.</p>
          </div>
          <div className="w-64 p-6 text-center bg-white shadow-lg rounded-lg hover:bg-green-50 transition duration-300 transform hover:scale-105 mx-4">
            <div className="text-5xl mb-4 text-green-600">
              <FaClock />
            </div>
            <div className="text-xl font-semibold mb-2 text-gray-800">Real-time Auctions</div>
            <p className="text-gray-600">Live bidding for fresh crops.</p>
          </div>
          <div className="w-64 p-6 text-center bg-white shadow-lg rounded-lg hover:bg-green-50 transition duration-300 transform hover:scale-105 mx-4">
            <div className="text-5xl mb-4 text-green-600">
              <FaLock />
            </div>
            <div className="text-xl font-semibold mb-2 text-gray-800">Secure Payments</div>
            <p className="text-gray-600">Ensures safe and timely transactions.</p>
          </div>
          <div className="w-64 p-6 text-center bg-white shadow-lg rounded-lg hover:bg-green-50 transition duration-300 transform hover:scale-105 mx-4">
            <div className="text-5xl mb-4 text-green-600">
              <FaTruck />
            </div>
            <div className="text-xl font-semibold mb-2 text-gray-800">Logistics Support</div>
            <p className="text-gray-600">Integrated transport options for easy delivery.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
        <div className="flex flex-wrap justify-center items-start">
          <div className="w-full md:w-1/4 p-6 text-center bg-white shadow-lg rounded-lg hover:bg-green-50 transition duration-300 transform hover:scale-105">
            <div className="text-4xl mb-4 text-green-600">
              <FaUser />
            </div>
            <div className="text-xl font-semibold mb-2 text-gray-800">Step 1</div>
            <p className="text-gray-600">Register as a Farmer or Buyer.</p>
          </div>
          <div className="w-full md:w-1/4 p-6 text-center bg-white shadow-lg rounded-lg hover:bg-green-50 transition duration-300 transform hover:scale-105 mt-8 md:mt-0">
            <div className="text-4xl mb-4 text-green-600">
              <FaSeedling />
            </div>
            <div className="text-xl font-semibold mb-2 text-gray-800">Step 2</div>
            <p className="text-gray-600">Post or Bid on Crops.</p>
          </div>
          <div className="w-full md:w-1/4 p-6 text-center bg-white shadow-lg rounded-lg hover:bg-green-50 transition duration-300 transform hover:scale-105 mt-8 md:mt-0">
            <div className="text-4xl mb-4 text-green-600">
              <FaDollarSign />
            </div>
            <div className="text-xl font-semibold mb-2 text-gray-800">Step 3</div>
            <p className="text-gray-600">Secure Payment and Delivery.</p>
          </div>
          <div className="w-full md:w-1/4 p-6 text-center bg-white shadow-lg rounded-lg hover:bg-green-50 transition duration-300 transform hover:scale-105 mt-8 md:mt-0">
            <div className="text-4xl mb-4 text-green-600">
              <FaCheckCircle />
            </div>
            <div className="text-xl font-semibold mb-2 text-gray-800">Step 4</div>
            <p className="text-gray-600">Complete the Transaction.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="flex flex-wrap justify-around items-center">
          <div className="w-80 p-4">
            <img 
              src={Farmer} 
              alt="Farmer" 
              className="rounded-full mx-auto mb-4 w-40 h-40 object-cover" 
            />
            <p>
              "This platform has revolutionized the way I sell my crops. No more
              middlemen!" - Farmer A
            </p>
          </div>
          <div className="w-80 p-4">
            <img 
              src={Buyer} 
              alt="Buyer" 
              className="rounded-full mx-auto mb-4 w-40 h-40 object-cover" 
            />
            <p>
              "I get fresh produce directly from farmers at the best prices." -
              Buyer B
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-grey-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Join the Future of Agriculture</h2>
        <p className="text-xl mb-8">Start bidding and selling today.</p>
        <Link to="/signup" className="bg-white text-green-500 py-3 px-6 rounded-lg text-lg">
          Sign Up Now
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="mb-4">
          <Link to="/terms" className="text-gray-400 hover:text-white mx-2">Terms of Service</Link>
          <Link to="/privacy" className="text-gray-400 hover:text-white mx-2">Privacy Policy</Link>
          <Link to="/help" className="text-gray-400 hover:text-white mx-2">Help Center</Link>
        </div>
        <div className="mb-4">
          <a href="https://facebook.com" className="text-gray-400 hover:text-white mx-2">Facebook</a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-white mx-2">Twitter</a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-white mx-2">Instagram</a>
        </div>
        <p>© 2024 फसल Bazaar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
