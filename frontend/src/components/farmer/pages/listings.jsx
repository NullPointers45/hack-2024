import React, { useState } from "react";

const Listings = () => {
    const [showConfirm, setShowConfirm] = useState(false);
    const [selectedTab, setSelectedTab] = useState("All Bids");


    const handleDeleteClick = () => {
        setShowConfirm(true);
    };

    const handleConfirmYes = () => {
        console.log("Data is deleted");
        setShowConfirm(false);
    };

    const handleConfirmNo = () => {
        setShowConfirm(false);
    };

    return (
        <>
            <nav className="p-3">
                <div className="flex items-center justify-between space-x-4">
                    <div>
                        <button
                            className={`px-3 py-2 rounded ${selectedTab === "All Bids" ? "bg-gray-200 text-gray-800" : ""}`}
                            onClick={() => setSelectedTab("All Bids")}
                        >
                            My Bids
                        </button>
                        <button
                            className={`px-3 py-2 rounded ${selectedTab === "Unprocess Bids" ? "bg-gray-200 text-gray-800" : ""}`}
                            onClick={() => setSelectedTab("Unprocess Bids")}
                        >
                            Unprocess Bids
                        </button>
                        <button
                            className={`px-3 py-2 rounded ${selectedTab === "Completed Bids" ? "bg-gray-200 text-gray-800" : ""}`}
                            onClick={() => setSelectedTab("Completed Bids")}
                        >
                            Completed Bids
                        </button>
                    </div>
                    <a href="#">
                        <button
                            className="bg-white text-gray-800 py-3 px-6 rounded-md shadow-md"
                            type="button"
                        >
                            New Listings
                        </button>
                    </a>
                </div>
            </nav>
            <div className="border border-gray-200 rounded-md p-4 shadow-md">
                <div className="grid grid-cols-2 gap-4">
                    {/* Listing details */}
                    <div className="flex items-center">
                        <span className="font-bold text-xl">Crop ID:</span>
                        <span className="ml-2">asd956ac9w65a1c9ws56z2x2c9</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-bold text-xl">Harvest Date:</span>
                        <span className="ml-2">10/08/2024</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-bold text-xl">Crop Type:</span>
                        <span className="ml-2">Pulses</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-bold text-xl">Crop Name:</span>
                        <span className="ml-2">Wheat</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-bold text-xl">Quantity (in quintals):</span>
                        <span className="ml-2">1500 qui.</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-bold text-xl">Opening Bid:</span>
                        <span className="ml-2">₹ 12,000 per quintal</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-bold text-xl">Bid Starting Date:</span>
                        <span className="ml-2">12/08/2024</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-bold text-xl">Bid Ending Date:</span>
                        <span className="ml-2">20/08/2024</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-bold text-xl">Bid Span:</span>
                        <span className="ml-2">8 days</span>
                    </div>
                    <div className="flex items-center">
                        <span className="font-bold text-xl">Days Left:</span>
                        <span className="ml-2">5 days</span>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="font-bold text-xl">Description:</h3>
                    <p className="mt-2 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fuga corrupti nulla modi reprehenderit tempora consequatur reiciendis temporibus? Rerum rem doloribus at labore, nisi a perspiciatis eos et sed facilis.
                    </p>
                </div>
                <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="font-bold text-xl">View Certifications:</span>
                        <a href="#" className="underline text-blue-400 ml-2">View</a>
                    </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="font-bold text-xl">Bid Status:</span>
                        <span className="ml-2">Active/Expired/Completed</span>
                    </div>
                    <div className="flex space-x-2">
                        <a href="#">
                            <button
                                className="bg-green-700 text-white py-2 px-4 rounded-md"
                                type="button"
                            >
                                Edit
                            </button>
                        </a>
                        <button
                            className="bg-red-700 text-white py-2 px-4 rounded-md"
                            type="button"
                            onClick={handleDeleteClick}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>

            {/* Confirmation Pop-up */}
            {showConfirm && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white rounded-md shadow-lg p-8">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Confirm Deletion</h3>
                        <p className="mb-6 text-gray-800">Are you sure you want to delete this listing?</p>
                        <div className="flex justify-end space-x-4">
                            <button
                                className="bg-gray-500 text-white py-2 px-4 rounded-md"
                                onClick={handleConfirmNo}
                            >
                                No
                            </button>
                            <button
                                className="bg-red-700 text-white py-2 px-4 rounded-md"
                                onClick={handleConfirmYes}
                            >
                                Yes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Listings;
