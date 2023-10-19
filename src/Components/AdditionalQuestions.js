import React, {useState} from 'react';
import { Controller } from 'react-hook-form';

const AdditionalQuestions = ({ onNext, control, setValue }) => {
  const [fitPreference, setFitPreference] = useState('');

  const handleNext = () => {
    onNext(fitPreference); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Additional Questions</h1>
      <p className="text-2xl mb-8">Tell us more about your preferences.</p>
      <div className="mb-8">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fitPreference">
          Fit Preference
        </label>
        <Controller
          name="additionalQuestions.fitPreference"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <div className="mt-2">
              <label className="inline-flex items-center">
              <input
          type="radio"
          value="Tight"
          checked={fitPreference === 'Tight'}
          onChange={() => setFitPreference('Tight')}
          className="form-radio"
        />
                <span className="ml-2">Tight</span>
              </label>
              <label className="inline-flex items-center ml-6">
              <input
          type="radio"
          value="Average"
          checked={fitPreference === 'Average'}
          onChange={() => setFitPreference('Average')}
          className="form-radio"
        />

                <span className="ml-2">Average</span>
              </label>
              <label className="inline-flex items-center ml-6">
              <input
          type="radio"
          value="Loose"
          checked={fitPreference === 'Loose'}
          onChange={() => setFitPreference('Loose')}
          className="form-radio"
        />

                <span className="ml-2">Loose</span>
              </label>
            </div>
          )}
        />
      </div>
      <button
        onClick={handleNext}
        className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 mt-4"
      >
        Next
      </button>
    </div>
  );
};

export default AdditionalQuestions;
