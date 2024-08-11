import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FarmerForm = () => {
  const [formData, setFormData] = useState({
    farmerName: '',
    state: '',
    city: '',
    country: '',
    cropListing: '',
    role: 'Farmer',
    userID: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (Object.values(formData).some((field) => field === '')) {
      toast.error("Please fill in all fields");
      return;
    }

    console.log(formData);
    // Add your form submission logic here

    toast.success("Form submitted successfully");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-lg p-8 space-y-6 bg-gray-800 shadow-md rounded-xl">
        <h1 className="text-center text-white text-3xl font-bold mb-6">Farmer Form</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            name="farmerName"
            value={formData.farmerName}
            onChange={handleChange}
            placeholder="Farmer Name"
          />
          <input
            className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            placeholder="State"
          />
          <input
            className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
          />
          <input
            className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="Country"
          />
          <input
            className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            name="cropListing"
            value={formData.cropListing}
            onChange={handleChange}
            placeholder="Crop Listing"
          />
          <input
            className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            type="text"
            name="userID"
            value={formData.userID}
            onChange={handleChange}
            placeholder="User ID"
          />
          <div className="space-y-2">
            <label className="text-white">Role</label>
            <select
              className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="Farmer">Farmer</option>
              <option value="Buyer">Buyer</option>
              <option value="Transport">Logistics/Transport</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default FarmerForm;
