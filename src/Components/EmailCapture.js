import React from 'react';
import { useFormContext } from 'react-hook-form';

const EmailCapture = ({ onGetResults }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Email Capture</h1>
      <p className="text-2xl mb-8">Enter your email to receive your sizing recommendations.</p>
      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Enter your email"
        className={`px-4 py-2 rounded-md mb-4 ${errors.email && 'border-red-500 border'}`}
      />
      {errors.email && <p className="text-red-500">Email is required</p>}
      <button
        onClick={onGetResults}
        className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600"
      >
        Get Results!
      </button>
    </div>
  );
};

export default EmailCapture;
