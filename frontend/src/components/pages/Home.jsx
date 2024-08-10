import React from "react";
import { Link } from "react-router-dom";
import Header from "../shared/Header";  // Importing the header you provided

const HomePage = () => {
  return (
    <div className="font-sans antialiased text-gray-900">
      {/* Header Component */}
      {/* <Header /> */}

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path/to/hero-image.jpg')" }}>
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white p-4">
          <h1 className="text-5xl font-bold mb-4">Empowering Farmers with Fair Crop Prices</h1>
          <p className="text-xl mb-8">A platform connecting farmers directly with buyers.</p>
          <Link to="/signup" className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg text-lg">
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Our Platform?</h2>
        <div className="flex flex-wrap justify-around items-center">
          <div className="w-80 p-4">
            <div className="text-2xl font-bold mb-2">Direct Bidding</div>
            <p>Connects farmers and buyers without middlemen.</p>
          </div>
          <div className="w-80 p-4">
            <div className="text-2xl font-bold mb-2">Real-time Auctions</div>
            <p>Live bidding for fresh crops.</p>
          </div>
          <div className="w-80 p-4">
            <div className="text-2xl font-bold mb-2">Secure Payments</div>
            <p>Ensures safe and timely transactions.</p>
          </div>
          <div className="w-80 p-4">
            <div className="text-2xl font-bold mb-2">Logistics Support</div>
            <p>Integrated transport options for easy delivery.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="flex flex-wrap justify-around items-center">
          <div className="w-60 p-4 text-center">
            <div className="text-2xl font-bold mb-2">Step 1</div>
            <p>Register as a Farmer or Buyer.</p>
          </div>
          <div className="w-60 p-4 text-center">
            <div className="text-2xl font-bold mb-2">Step 2</div>
            <p>Post or Bid on Crops.</p>
          </div>
          <div className="w-60 p-4 text-center">
            <div className="text-2xl font-bold mb-2">Step 3</div>
            <p>Secure Payment and Delivery.</p>
          </div>
          <div className="w-60 p-4 text-center">
            <div className="text-2xl font-bold mb-2">Step 4</div>
            <p>Complete the Transaction.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="flex flex-wrap justify-around items-center">
          <div className="w-80 p-4">
            <img src="/path/to/farmer.jpg" alt="Farmer" className="rounded-full mx-auto mb-4" />
            <p>"This platform has revolutionized the way I sell my crops. No more middlemen!" - Farmer A</p>
          </div>
          <div className="w-80 p-4">
            <img src="/path/to/buyer.jpg" alt="Buyer" className="rounded-full mx-auto mb-4" />
            <p>"I get fresh produce directly from farmers at the best prices." - Buyer B</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-green-500 text-white text-center">
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
