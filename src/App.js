import React, { useState } from 'react';
import HomePage from './Components/HomeScreen';
import BodyMeasurements from './Components/BodyMeasurements'; 
import AdditionalQuestions from './Components/AdditionalQuestions';
import EmailCapture from './Components/EmailCapture'; 
import Results from './Components/Results';


function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const handleStart = () => {
    setCurrentScreen('bodyMeasurements');
  };

  const handleCapture = () => {
    setCurrentScreen('additionalQuestions');
  };

  const handleNext = () => {
    setCurrentScreen('emailCapture');
  };

  const handleGetResults = () => {
    setCurrentScreen('results');
  };

  return (
    <div className="App">
      {currentScreen === 'home' && <HomePage onStart={handleStart} />}
      {currentScreen === 'bodyMeasurements' && <BodyMeasurements onCapture={handleCapture} />}
      {currentScreen === 'additionalQuestions' && <AdditionalQuestions onNext={handleNext} />}
      {currentScreen === 'emailCapture' && <EmailCapture onGetResults={handleGetResults} />}
      {currentScreen === 'results' && <Results />}
    </div>
  );
}

export default App;