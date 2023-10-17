import React from 'react';

const BodyMeasurements = ({ onCapture }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Capture Your Measurements</h1>
      <p className="text-2xl mb-8">Take two photos to get started.</p>
      <iframe
        title="Measurement App"
        src="https://aimirr-staging.herokuapp.com/MeasurementApp/stagingMay21/dist/navigation.html?tenant=findmysize#"
        width="600"
        height="1250"
        allow="camera;microphone"
      />
      <button
        onClick={onCapture}
        className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 mt-4"
      >
        Capture Photos
      </button>
    </div>
  );
};

export default BodyMeasurements;
