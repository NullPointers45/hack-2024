import React from "react";

const EditProfile = () => {
  return (
    <div className="flex flex-col items-start justify-start p-10 bg-gray-700 rounded-2xl max-w-md mx-auto shadow-lg">
      <h2 className="text-white text-2xl font-semibold mb-6">Edit Profile</h2>
      <form className="w-full">
        <div className="flex items-center justify-between mb-5">
          <label htmlFor="name" className="text-white font-medium w-1/4">
            Name
          </label>
          <input
            id="name"
            className="p-3 rounded-xl bg-transparent border-2 border-gray-400 w-3/4 text-white focus:outline-none focus:border-white"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="flex items-center justify-between mb-5">
          <label htmlFor="email" className="text-white font-medium w-1/4">
            Email
          </label>
          <input
            id="email"
            className="p-3 rounded-xl bg-transparent border-2 border-gray-400 w-3/4 text-white focus:outline-none focus:border-white"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="flex items-center justify-between mb-5">
          <label htmlFor="password" className="text-white font-medium w-1/4">
            Password
          </label>
          <input
            id="password"
            className="p-3 rounded-xl bg-transparent border-2 border-gray-400 w-3/4 text-white focus:outline-none focus:border-white"
            type="password"
            placeholder="New Password"
          />
        </div>
        <div className="flex items-center justify-center mt-8">
          <button
            className="bg-white text-gray-800 py-3 px-6 rounded-md"
            type="submit"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
