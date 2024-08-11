import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ListingsForm = () => {
    const nav = useNavigate();
    const [listingData, setListingData] = useState({
        cropType: "",
        variety: "",
        description: "",
        quantity: 0,
        priceExpectation: 0,
        harvestDate: new Date(),
        startDate: new Date(),
        endDate: new Date(),
        status: ""
    });

    const addListing = (event) => {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
        if (listingData.cropType === "" || listingData.variety === "" || listingData.description === "" || listingData.quantity === 0 || listingData.priceExpectation === 0 || listingData.harvestDate === null || listingData.startDate === null || listingData.endDate === null) {
            toast.error("Fill all the details");
        } else {
            console.log(listingData);
            fetch("http://localhost:5555/crop", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(listingData)
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  if (data.error) {
                    toast.error(data.error);
                  } else {
                    nav("/farmer/listings")
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
        <div className="flex items-start justify-center min-h-screen">
            <div className="bg-gray-700 rounded-2xl w-full max-w-6xl shadow-lg p-10">
                <h2 className="text-white text-3xl font-semibold mb-8 text-center">Crop Listings</h2>
                <form className="w-full" onSubmit={addListing}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col">
                            <label htmlFor="cropName" className="text-white font-medium mb-2">
                                Crop Name<span className="text-red-700">*</span>
                            </label>
                            <input
                                id="cropName"
                                className="p-3 rounded-xl bg-transparent border-2 border-gray-400 text-white focus:outline-none focus:border-white"
                                type="text"
                                placeholder="Enter crop name"
                                onChange={(e) => {
                                    setListingData({ ...listingData, cropType: e.target.value })
                                }}
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
                                onChange={(e) => {
                                    setListingData({ ...listingData, variety: e.target.value })
                                }}
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
                                onChange={(e) => {
                                    setListingData({ ...listingData, harvestDate: e.target.value })
                                }}
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
                                onChange={(e) => {
                                    setListingData({ ...listingData, quantity: e.target.value })
                                }}
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
                                onChange={(e) => {
                                    setListingData({ ...listingData, priceExpectation: e.target.value })
                                }}
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
                                onChange={(e) => {
                                    setListingData({ ...listingData, startDate: e.target.value })
                                }}
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
                                onChange={(e) => {
                                    setListingData({ ...listingData, endDate: e.target.value })
                                }}
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
                                onChange={(e) => {
                                    setListingData({ ...listingData, description: e.target.value })
                                }}
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
                                onChange={(e) => {
                                    setListingData({ ...listingData, status: e.target.value })
                                }}
                            >
                                <option className="bg-gray-800 text-gray-400" value="" disabled>
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
