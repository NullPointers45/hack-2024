import React from 'react';

const FarmerIssues = () => {
    const issuesList = [];

    return (
        <div className="mt-5">
            {issuesList && issuesList.length > 0 ? (
                <>
                    <h2 className="text-2xl font-extrabold mb-4">Buyer Issues</h2>
                    {issuesList.map((issue, index) => (
                        <div key={index} className="border border-gray-300 rounded p-4 mb-3">
                            <div className="font-bold">Issue #{index + 1}</div>
                            <p className="text-gray-700">{issue}</p>
                        </div>
                    ))}
                </>
            ) : (
                <div className="text-gray-600 flex justify-center items-center text-6xl mt-44">No Issues Raised</div>
            )}
        </div>
    );
};

export default FarmerIssues;
