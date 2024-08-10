import React from "react";

const ListingsForm = () => {
    return (
        <>
            <div className="flex flex-col items-start justify-start p-10 bg-gray-700 rounded-2xl max-w-md mx-auto shadow-lg">
                <h2 className="text-white text-2xl font-semibold mb-6">Add Crop Listings</h2>
                <form className="w-full">
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-between mb-5">
                            <label htmlFor="name" className="text-white font-medium">
                                Crop Name
                            </label>
                            <input
                                id="name"
                                className="p-3 rounded-xl bg-transparent border-2 border-gray-400 text-white focus:outline-none focus:border-white"
                                type="text"
                                placeholder="Enter here"
                            />
                        </div>
                        <div className="flex items-center justify-between mb-5">
                            <label htmlFor="name" className="text-white font-medium">
                                Crop Variety
                            </label>
                            <input
                                id="name"
                                className="p-3 rounded-xl bg-transparent border-2 border-gray-400 text-white focus:outline-none focus:border-white"
                                type="text"
                                placeholder="eg. for Rice (Jeerasar, Basmati)"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-between mb-5">
                            <label htmlFor="name" className="text-white font-medium">
                                Harvest Date
                            </label>
                            <input
                                id="name"
                                className="p-3 rounded-xl bg-transparent border-2 border-gray-400 text-white focus:outline-none focus:border-white"
                                type="date"
                            />
                        </div>
                        <div className="flex items-center justify-between mb-5">
                            <label htmlFor="name" className="text-white font-medium">
                                Quantity
                            </label>
                            <input
                                id="name"
                                className="p-3 rounded-xl bg-transparent border-2 border-gray-400 text-white focus:outline-none focus:border-white"
                                type="number"
                                placeholder="Enter here (in quintals)"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-between mb-5">
                            <label htmlFor="name" className="text-white font-medium">
                                Opening Bid Price (per quintal)
                            </label>
                            <input
                                id="name"
                                className="p-3 rounded-xl bg-transparent border-2 border-gray-400 text-white focus:outline-none focus:border-white"
                                type="number"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="flex items-center justify-between mb-5">
                            <label htmlFor="name" className="text-white font-medium">
                                Bid Start Date
                            </label>
                            <input
                                id="name"
                                className="p-3 rounded-xl bg-transparent border-2 border-gray-400 text-white focus:outline-none focus:border-white"
                                type="date"
                            />
                        </div>
                        <div className="flex items-center justify-between mb-5">
                            <label htmlFor="name" className="text-white font-medium">
                                End Date
                            </label>
                            <input
                                id="name"
                                className="p-3 rounded-xl bg-transparent border-2 border-gray-400 text-white focus:outline-none focus:border-white"
                                type="date"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center mt-8">
                        <button
                            className="bg-white text-gray-800 py-3 px-6 rounded-md"
                            type="submit"
                        >
                            Edit Profile
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default ListingsForm