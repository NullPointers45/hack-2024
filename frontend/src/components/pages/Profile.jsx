import React from "react";

const Profile = () => {
    return (
        <>
            <div className="flex flex-col items-start justify-start p-10 bg-gray-700 rounded-2xl max-w-md mx-auto shadow-lg">
                <h2 className="text-white text-2xl font-semibold mb-6">Profile</h2>
                <form className="w-full">
                    <div className="flex items-center justify-between mb-5">
                        <label htmlFor="name" className="text-white font-medium w-1/4">
                            Name
                        </label>
                        <input
                            id="name"
                            className="p-3 rounded-xl bg-transparent border-2 border-gray-400 w-3/4 text-white focus:outline-none focus:border-white"
                            type="text"
                            placeholder="Name from data"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-5">
                        <label htmlFor="email" className="text-white font-medium w-1/4">
                            Email
                        </label>
                        <input
                            id="email"
                            className="p-3 rounded-xl bg-transparent border-2 border-gray-400 w-3/4 text-white focus:outline-none focus:border-white"
                            type="email"
                            placeholder="Email from data"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-5">
                        <label htmlFor="password" className="text-white font-medium w-1/4">
                            Password
                        </label>
                        <input
                            id="password"
                            className="p-3 rounded-xl bg-transparent border-2 border-gray-400 w-3/4 text-white focus:outline-none focus:border-white"
                            type="password"
                            placeholder="Current password from data"
                        />
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
};

export default Profile;
