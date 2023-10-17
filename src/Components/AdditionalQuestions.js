import React from 'react';

const AdditionalQuestions = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Additional Questions</h1>
      <p className="text-2xl mb-8">Tell us more about your preferences.</p>
      {/* Here you can add form fields for additional questions */}
      <button
        onClick={onNext}
        className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 mt-4"
      >
        Next
      </button>
    </div>
  );
};

export default AdditionalQuestions;
