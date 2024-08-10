import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useCookies } from "react-cookie";

const Login = () => {
  const [showPassword, setShowPassword] = useState("password");
  const nav = useNavigate()
  const [cookies] = useCookies([])
  const [user, setUser] = useState({});

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(localStorage.getItem("user"));
      if (user.role == "Farmer") {
        nav("/farmer/listings")
      }
      else {
        nav("/farmer/listings/add-edit")
      }
    }
  }, [showPassword, nav]);

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const sendData = () => {
    if (userData.email == "" || userData.password == "") {
      toast.error("Fill all the details")
    }
    else {
      console.log(userData)
      fetch("http://localhost:5555/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.error) {
            toast.error(data.error);
          } else {
            console.log(data);
            localStorage.setItem("user", data)
            setUser(localStorage.getItem("user"));
            if (user.role == "Farmer") {
              nav("/farmer/listings")
            }
            else {
              nav("/farmer/listings/add-edit")
            }
            toast.success(data.message);
          }
        })
        .catch((error) => {
          // Handle network errors
          console.error("Error signing in:", error);
          toast.error("Network error, please try again.");
        });

    }
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        {/* min-h-[calc(85vh-160px)] */}
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-md rounded-xl">
          <h1 className="text-center text-white text-3xl font-bold mb-6">
            Login
          </h1>
          <div className="space-y-4">
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
            <Link to="/signup">
              <span className="underline hover:text-white transition duration-300">Signup</span>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
