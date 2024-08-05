import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const Login = () => {
  const [showPassword, setShowPassword] = useState("password");

  useEffect(() => { }, [
    showPassword
  ]);

  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });

  const sendData = () => {
    if(userData.username == "" || userData.password == ""){
      toast.error("Fill all the details")
    }
    else{
      console.log(userData)
      toast.success("Login Successfully")
    }
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-[calc(85vh-160px)] bg-gray-900">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-md rounded-xl">
          <h1 className="text-center text-white text-3xl font-bold mb-6">
            Login
          </h1>
          <div className="space-y-4">
            <input
              className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              onChange={(e) => {
                setUserData({ ...userData, username: e.target.value })
              }}
              placeholder="Enter Email"
            />
            <input
              className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type={showPassword}
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value })
              }}
              placeholder="Enter Password"
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
            className="w-full py-3 mt-6 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition duration-300">
            Login
          </button>
          <div className="text-center text-gray-400 mt-4">
            Didn't have an account?
            <Link to="/signin">
              <span className="underline hover:text-white transition duration-300">Signin</span>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
