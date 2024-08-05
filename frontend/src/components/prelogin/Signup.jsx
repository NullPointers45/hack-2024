import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const Signup = () => {
  const [showPassword, setShowPassword] = useState("password");

  useEffect(() => { }, [
    showPassword
  ]);

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const sendData = () => {
    if (userData.username == "" || userData.email == "" || userData.password == "" || userData.confirmPassword == "") {
      toast.error('Fill all the details',
        {
          autoclose: 1000,
          theme: "dark"
        }

      );
    }
    else if (userData.password != userData.confirmPassword) {
      toast.error('Password didn\'t match');
    }
    else {
      console.log(userData)
      toast.success('Signin successfully');
    }
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-[calc(80vh-160px)] bg-gray-900">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-md rounded-xl">
          <h1 className="text-center text-white text-3xl font-bold mb-6">
            Register
          </h1>
          <div className="space-y-4">
            <input
              className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              onChange={(e) => {
                setUserData({ ...userData, username: e.target.value })
              }}
              placeholder="Enter Your Name"
            />
            <input
              className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value })
              }}
              placeholder="Enter Email"
            />
            <input
              className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type={showPassword}
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value })
              }}
              placeholder="Create Password"
            /><input
              className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type={showPassword}
              onChange={(e) => {
                setUserData({ ...userData, confirmPassword: e.target.value })
              }}
              placeholder="Re-enter Password"
            />
          </div>
          <div className="flex justify-end items-end text-white">
            <div>
              <input
                type="checkbox"
                onClick={(e) => {
                  e.target.checked ? setShowPassword("text") : setShowPassword("password")
                }}
                name=""
                id=""
              />
              <span className="text-center mx-3 text-white">Show Password</span>
            </div>
          </div>
          <button
            onClick={sendData}
            className="w-full py-3 mt-6 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Sign up
          </button>
          <div className="text-center text-gray-400 mt-4">
            Already have an account?
            {/* <Link to="/login"> */}
            <span
              className="underline hover:text-white transition duration-300"
            >
              Login
            </span>
            {/* </Link> */}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;