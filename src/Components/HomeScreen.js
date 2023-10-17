import React from 'react';

const HomeScreen = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Find My Fit</h1>
      <p className="text-2xl mb-8">Find the perfect fit in 30 seconds</p>
      <button
        onClick={onStart}
        className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600"
      >
        Get Started
      </button>
    </div>
  );
};

export default HomeScreen;
