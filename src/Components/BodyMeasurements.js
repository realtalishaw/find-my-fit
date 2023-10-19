import React from 'react';

const BodyMeasurements = ({ onCapture, setValue }) => {

  const hardcodedMeasurements = {
    bust: 36,
    waist: 28,
    hips: 38,
    shoulder_width: 16,
    left_thigh: 22,
    right_thigh: 22,
    left_arm: 30,
    right_arm: 30,
    height: 70,
    weight: 150
  };

  const handleCapture = () => {
    // Set the hardcoded measurements in the form
    for (const [key, value] of Object.entries(hardcodedMeasurements)) {
      setValue(`bodyMeasurements.${key}`, value);
    }
    onCapture();  // Proceed to the next step
  };

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
        onClick={handleCapture}  // Updated to call handleCapture
        className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 mt-4"
      >
        Capture Photos
      </button>
    </div>
  );
};

export default BodyMeasurements;
