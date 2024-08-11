import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BuyerForm = () => {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [authToken, setAuthToken] = useState("");
    const nav = useNavigate()

    const [buyerData, setBuyerData] = useState({
        name: "",
        contact: "",
        email: "",
        country: "",
        state: "",
        city: "",
    });

    // Fetch auth token when component mounts
    useEffect(() => {
        fetch("https://www.universal-tutorial.com/api/getaccesstoken", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "api-token": "TO2nlih-lgzRPj9M9pIjSiZR53y-J-CJFXYARGo2Fy5DFdHJOzRTCIg8P5CCxcYZ2uw",
                "user-email": "zonerkt@gmail.com"
            }
        })
            .then((res) => res.json())
            .then((res) => setAuthToken(res.auth_token))
            .catch((error) => console.log(error));
    }, []);

    // Fetch countries when authToken is available
    useEffect(() => {
        if (authToken) {
            fetch("https://www.universal-tutorial.com/api/countries/", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${authToken}`,
                    "Accept": "application/json"
                }
            })
                .then((response) => response.json())
                .then((data) => setCountries(data))
                .catch((error) => console.error("Error fetching countries:", error));
        }
    }, [authToken]);

    // Fetch states when a country is selected
    useEffect(() => {
        if (buyerData.country) {
            fetch(`https://www.universal-tutorial.com/api/states/${buyerData.country}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${authToken}`,
                    "Accept": "application/json"
                }
            })
                .then((response) => response.json())
                .then((data) => setStates(data))
                .catch((error) => console.error("Error fetching states:", error));
            setCities([]);
            setBuyerData({ ...buyerData, state: "", city: "" });
        }
    }, [buyerData.country, authToken]);

    // Fetch cities when a state is selected
    useEffect(() => {
        if (buyerData.state) {
            fetch(`https://www.universal-tutorial.com/api/cities/${buyerData.state}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${authToken}`,
                    "Accept": "application/json"
                }
            })
                .then((response) => response.json())
                .then((data) => setCities(data))
                .catch((error) => console.error("Error fetching cities:", error));
            setBuyerData({ ...buyerData, city: "" });
        }
    }, [buyerData.state, authToken]);

    const handleSubmit = () => {
        if (
            !buyerData.name ||
            !buyerData.contact ||
            !buyerData.email ||
            !buyerData.country ||
            !buyerData.state ||
            !buyerData.city
        ) {
            toast.error("Please fill all the details", {
                autoclose: 1000,
                theme: "dark",
            });
        } else {
            console.log(buyerData);
            nav("/")
            toast.success("Form submitted successfully!");
            // Handle form submission, e.g., send the data to an API
        }
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-900">
                <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 shadow-md rounded-xl">
                    <h1 className="text-center text-white text-3xl font-bold mb-6">
                        Buyer Information
                    </h1>
                    <div className="space-y-4">
                        <input
                            className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            type="text"
                            onChange={(e) => setBuyerData({ ...buyerData, name: e.target.value })}
                            placeholder="Enter Your Name"
                        />
                        <input
                            className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            type="text"
                            onChange={(e) => setBuyerData({ ...buyerData, contact: e.target.value })}
                            placeholder="Enter Phone"
                        />
                        <input
                            className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            type="email"
                            onChange={(e) => setBuyerData({ ...buyerData, email: e.target.value })}
                            placeholder="Enter Email"
                        />
                        <select
                            className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                            onChange={(e) => setBuyerData({ ...buyerData, country: e.target.value })}
                            value={buyerData.country}
                        >
                            <option className="bg-gray-800 text-gray-400" value="" disabled>
                                Select Country
                            </option>
                            {Array.isArray(countries) && countries.length > 0 ? (
                                countries.map((country, index) => (
                                    <option key={index} className="bg-gray-800 text-white" value={country.country_name}>
                                        {country.country_name}
                                    </option>
                                ))
                            ) : (
                                <option className="bg-gray-800 text-gray-400" value="" disabled>
                                    Loading countries...
                                </option>
                            )}
                        </select>
                        <select
                            className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                            onChange={(e) => setBuyerData({ ...buyerData, state: e.target.value })}
                            value={buyerData.state}
                            disabled={!buyerData.country}
                        >
                            <option className="bg-gray-800 text-gray-400" value="" disabled>
                                Select State
                            </option>
                            {states.map((state, index) => (
                                <option key={index} className="bg-gray-800 text-white" value={state.state_name}>
                                    {state.state_name}
                                </option>
                            ))}
                        </select>
                        <select
                            className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                            onChange={(e) => setBuyerData({ ...buyerData, city: e.target.value })}
                            value={buyerData.city}
                            disabled={!buyerData.state}
                        >
                            <option className="bg-gray-800 text-gray-400" value="" disabled>
                                Select City
                            </option>
                            {cities.map((city, index) => (
                                <option key={index} className="bg-gray-800 text-white" value={city.city_name}>
                                    {city.city_name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="w-full py-3 mt-6 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default BuyerForm;
