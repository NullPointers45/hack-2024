import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// Replace with your own publishable key
const stripePromise = loadStripe('your_publishable_key');

const PaymentPage = () => (
  <Elements stripe={stripePromise}>
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-gray-900">
      <div className="w-full max-w-md p-10 space-y-8 bg-gray-800 shadow-lg rounded-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-center text-white text-4xl font-extrabold mb-8">Secure Payment</h1>
        <p className="text-center text-gray-400 mb-6">
          Please enter your payment details below.
        </p>
        <div className="bg-gray-700 p-6 rounded-lg">
          <CheckoutForm />
        </div>
        <p className="text-center text-gray-500 text-sm mt-4">
          Powered by <span className="text-blue-500 font-semibold">WE4</span>
        </p>
      </div>
    </div>
  </Elements>
);

export default PaymentPage;
