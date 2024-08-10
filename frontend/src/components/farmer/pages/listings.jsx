import React from "react";

const Listings = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <div className="text-3xl">My Listings</div>
                <a href="#">
                    <button
                        className="bg-white text-gray-800 py-3 px-6 rounded-md"
                        type="submit"
                    >
                        New Listings
                    </button>
                </a>
            </div>
            <div className="mt-5">
                <div className="border border-white rounded p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-between">
                            <div className="font-extrabold  text-xl pe-2">Crop ID :</div>
                            <div>asd956ac9w65a1c9ws56z2x2c9</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-extrabold text-xl pe-2">Variety :</div>
                            <div>Pulses</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-extrabold text-xl pe-2">Quantity (in quintals) :</div>
                            <div>1500 qui.</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center justify-between">
                            <div className="font-extrabold  text-xl pe-2">Opening Bid :</div>
                            <div>₹ 12,000 per quintal</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-extrabold text-xl pe-2">Harvest Date :</div>
                            <div>10/08/2024</div>
                        </div>
                        <div className="flex items-center justify-between me-44">
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center justify-between">
                            <div className="font-extrabold  text-xl pe-2">Bid Starting Date :</div>
                            <div>12/08/2024</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-extrabold  text-xl pe-2">Bid Ending Date :</div>
                            <div>20/08/2024</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-extrabold  text-xl pe-2">Bid Span :</div>
                            <div>8 days</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="font-extrabold  text-xl pe-2">Days Left :</div>
                            <div>5 days</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex">
                            <div className="font-extrabold text-xl pe-2 w-32">Description</div>
                        </div>
                        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fuga corrupti nulla modi reprehenderit tempora consequatur reiciendis temporibus? Rerum rem doloribus at labore, nisi a perspiciatis eos et sed facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem fuga corrupti nulla modi reprehenderit tempora consequatur reiciendis temporibus? Rerum rem doloribus at labore, nisi a perspiciatis eos et sed facilis. </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center justify-between">
                            <div className="font-extrabold  text-xl pe-2">View certifications :</div>
                            <div className="underline text-blue-400"><a href="#">View</a></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center justify-between">
                            <div className="font-extrabold  text-xl pe-2">Bid Status :</div>
                            <div>Active/Expired/Completed</div>
                        </div>
                    </div>
                    <div className="flex items-end justify-end mt-3">
                        <div className="flex items-center justify-between">
                            <a href="#">
                                <button
                                    className="bg-green-700 text-white py-3 px-6 rounded-md me-4"
                                    type="submit"
                                >
                                    Edit
                                </button>
                            </a>
                            <a href="#">
                                <button
                                    className="bg-red-700 text-white py-3 px-6 rounded-md"
                                    type="submit"
                                >
                                    Delete
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listings;