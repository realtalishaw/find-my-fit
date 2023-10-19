import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MultiStepForm from './Components/MultiStepForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={<MultiStepForm title="Find Your Fit" subtitle="Get personalized size recommendations" />} 
          />
          <Route 
            path="/:brand" 
            element={<MultiStepForm />}  // No props passed here
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
