import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState("password");
  const nav = useNavigate();

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
    name: "",
    email: "",
    contact: "",
    password: "",
    role: "",
  });

  const sendData = () => {
    if (
      userData.name === "" ||
      userData.email === "" ||
      userData.password === "" ||
      userData.contact === ""
    ) {
      toast.error("Fill all the details", {
        autoclose: 1000,
        theme: "dark",
      });
    } else if (userData.password !== userData.confirmPassword) {
      toast.error("Password didn't match");
    } else {
      console.log(userData);
      fetch("http://localhost:5555/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.error) {
            toast.error(data.error);
          } else {
            console.log(data);
            if (localStorage.getItem("user")) {
              setUser(localStorage.getItem("user"));
              if (user.role == "Farmer") {
                nav("/farmer/listings")
              }
              else {
                nav("/farmer/listings/add-edit")
              }
            }

            localStorage.setItem("user", data)
            toast.success("Signin successfully");
          }
        })
        .catch((error) => {
          console.error("Error signing in:", error);
          toast.error("Network error, please try again.");
        });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-md rounded-xl">
          <h1 className="text-center text-white text-3xl font-bold mb-6">
            Register
          </h1>
          <div className="space-y-4">
            <input
              className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              onChange={(e) => {
                setUserData({ ...userData, name: e.target.value });
              }}
              placeholder="Enter Your Name"
            />
            <input
              className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
              placeholder="Enter Email"
            />
            <input
              className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="text"
              onChange={(e) => {
                setUserData({ ...userData, contact: e.target.value });
              }}
              placeholder="Enter Phone"
            />
            <select
              className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
              onChange={(e) => {
                setUserData({ ...userData, role: e.target.value });
              }}
            >
              <option className="bg-gray-800 text-gray-400" defaultValue={""} disabled>
                Select Role
              </option>
              <option className="bg-gray-800 text-white" value={"Farmer"}>Farmer</option>
              <option className="bg-gray-800 text-white" value={"Buyer"}>Buyer</option>
              <option className="bg-gray-800 text-white" value={"Transport"}>
                Logistics/Transport
              </option>
            </select>
            <input
              className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type={showPassword}
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
              placeholder="Create Password"
            />
            <input
              className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type={showPassword}
              onChange={(e) => {
                setUserData({ ...userData, confirmPassword: e.target.value });
              }}
              placeholder="Re-enter Password"
            />
          </div>
          <div className="flex justify-end items-end text-white">
            <div>
              <input
                type="checkbox"
                onClick={(e) => {
                  e.target.checked
                    ? setShowPassword("text")
                    : setShowPassword("password");
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
            <Link to="/login">
              <span className="underline hover:text-white transition duration-300">
                Login
              </span>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
