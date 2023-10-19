import React from 'react';

const Results = ({ data }) => {  // Accept the data prop
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Your Results</h1>
      <p className="text-2xl mb-8">Here are your recommended sizes.</p>
      <div className="text-left w-1/2">
        <h2 className="text-3xl font-bold mb-4">Collected Data:</h2>
        {Object.entries(data).map(([key, value], index) => (
          <div key={index}>
            <strong>{key}:</strong> {JSON.stringify(value)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
