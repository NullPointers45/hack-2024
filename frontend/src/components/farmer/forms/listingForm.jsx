import React from "react";

const ListingsForm = () => {
    return (
        <div className="flex items-start justify-center min-h-screen">
            <div className="bg-gray-700 rounded-2xl w-full max-w-6xl shadow-lg p-10">
                <h2 className="text-white text-3xl font-semibold mb-8 text-center">Crop Listings</h2>
                <form className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col">
                            <label htmlFor="cropName" className="text-white font-medium mb-2">
                                Crop Name <span className="text-red-700">*</span>
                            </label>
                            <input
                                id="cropName"
                                className="p-3 rounded-xl bg-transparent border-2 border-gray-400 text-white focus:outline-none focus:border-white"
                                type="text"
                                placeholder="Enter crop name"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="cropVariety" className="text-white font-medium mb-2">
                                Crop Variety<span className="text-red-700">*</span>
                            </label>
                            <input
                                id="cropVariety"
                                className="p-3 rounded-xl bg-transparent border-2 border-gray-400 text-white focus:outline-none focus:border-white"
                                type="text"
                                placeholder="e.g., Jeerasar, Basmati"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="harvestDate" className="text-white font-medium mb-2">
                                Harvest Date<span className="text-red-700">*</span>
                            </label>
                            <input
                                id="harvestDate"
                                className="p-3 rounded-xl bg-transparent border-2 border-gray-400 text-white focus:outline-none focus:border-white"
                                type="date"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="quantity" className="text-white font-medium mb-2">
                                Quantity (in quintals)<span className="text-red-700">*</span>
                            </label>
                            <input
                                id="quantity"
                                className="p-3 rounded-xl bg-transparent border-2 border-gray-400 text-white focus:outline-none focus:border-white"
                                type="number"
                                placeholder="Enter quantity"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="openingBidPrice" className="text-white font-medium mb-2">
                                Opening Bid Price (per quintal)<span className="text-red-700">*</span>
                            </label>
                            <input
                                id="openingBidPrice"
                                className="p-3 rounded-xl bg-transparent border-2 border-gray-400 text-white focus:outline-none focus:border-white"
                                type="number"
                                placeholder="Enter opening bid price"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="bidStartDate" className="text-white font-medium mb-2">
                                Bid Start Date<span className="text-red-700">*</span>
                            </label>
                            <input
                                id="bidStartDate"
                                className="p-3 rounded-xl bg-transparent border-2 border-gray-400 text-white focus:outline-none focus:border-white"
                                type="date"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="endDate" className="text-white font-medium mb-2">
                                End Date<span className="text-red-700">*</span>
                            </label>
                            <input
                                id="endDate"
                                className="p-3 rounded-xl bg-transparent border-2 border-gray-400 text-white focus:outline-none focus:border-white"
                                type="date"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="description" className="text-white font-medium mb-2">
                                Description
                            </label>
                            <textarea
                                id="description"
                                className="p-3 rounded-xl bg-transparent border-2 border-gray-400 text-white focus:outline-none focus:border-white"
                                placeholder="Enter description"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="certifications" className="text-white font-medium mb-2">
                                Upload Certifications
                            </label>
                            <input
                                id="certifications"
                                className="p-3 rounded-xl bg-transparent border-2 border-gray-400 text-white focus:outline-none focus:border-white"
                                type="file"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="status" className="text-white font-medium mb-2">
                                Status<span className="text-red-700">*</span>
                            </label>
                            <select
                                id="status"
                                className="bg-transparent border border-gray-600 text-white p-3 w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
                            >
                                <option className="bg-gray-800 text-gray-400" value="" disabled selected>
                                    Select Status
                                </option>
                                <option className="bg-gray-800 text-white" value="Active">Active</option>
                                <option className="bg-gray-800 text-white" value="Expired">Expired</option>
                                <option className="bg-gray-800 text-white" value="Completed">Completed</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-center mt-8">
                        <button
                            className="bg-white text-gray-800 py-3 px-6 rounded-md"
                            type="submit"
                        >
                            Submit Listing
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ListingsForm;
