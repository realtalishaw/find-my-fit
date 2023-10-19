import React, { useEffect } from 'react';
import Cookies from 'js-cookie';

const HomeScreen = ({ title, subtitle, onNext }) => {
  
  useEffect(() => {
    // Check if the cookie already exists
    if (!Cookies.get('userIdentifier')) {
      // Generate a unique identifier
      const uniqueIdentifier = `user_${new Date().getTime()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // Set the unique identifier in a cookie
      Cookies.set('userIdentifier', uniqueIdentifier, { expires: 7 });  // Cookie will expire in 7 days
    }
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-2xl mb-8">{subtitle}</p>
      <button
        onClick={onNext}
        className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600"
      >
        Get Started
      </button>
    </div>
  );
};

export default HomeScreen;
