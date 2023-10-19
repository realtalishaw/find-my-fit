import React, { useState } from 'react';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import BodyMeasurements from './BodyMeasurements';
import AdditionalQuestions from './AdditionalQuestions';
import EmailCapture from './EmailCapture';
import Results from './Results';
import HomeScreen from './HomeScreen';

function MultiStepForm({ title, subtitle }) {
  const { brand } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const methods = useForm();  // Initialize form methods
  const { handleSubmit, control, getValues, setValue } = methods;

  const displayTitle = brand ? `${brand} Size Guide` : title;
  const displaySubtitle = brand ? "Get your perfect size in seconds" : subtitle;

  const onSubmit = (data, event) => {
    console.log("Form data submitted:", data);
    if (event) event.preventDefault();
  
    if (currentStep === 4) {
           // Call your API with the collected data
      console.log(data);
      // Advance to the Results step
      setCurrentStep(currentStep + 1)
      
    } else {
        console.log("Current Step is..", currentStep)
        setCurrentStep(currentStep + 1);
    }
  };
  
  
  

  const handleNextStep = (fitPreference) => {
    setValue('additionalQuestions.fitPreference', fitPreference);  // Update form data
    setCurrentStep(currentStep + 1);  // Proceed to the next step
  };

  return (
    <FormProvider {...methods}>  {/* Spread form methods into FormProvider */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {currentStep === 1 && <HomeScreen title={displayTitle} subtitle={displaySubtitle} onNext={() => setCurrentStep(currentStep + 1)} />}
        {currentStep === 2 && (
          <Controller
            name="bodyMeasurements"
            control={control}
            render={({ field }) => (
              <BodyMeasurements {...field} setValue={setValue} onCapture={handleNextStep} />
            )}
          />
        )}
        {currentStep === 3 && (
          <Controller
            name="additionalQuestions"
            control={control}
            render={({ field }) => (
              <AdditionalQuestions {...field} control={control} setValue={setValue} onNext={handleNextStep} />
            )}
          />
        )}
{currentStep === 4 && (
      <Controller
        name="emailCapture"
        control={control}
        render={({ field }) => <EmailCapture {...field} onGetResults={() => setCurrentStep(5)} />}
      />
    )}

        {currentStep === 5 && <Results data={getValues()} />}
        {currentStep < 5 && <button type="submit">Next</button>}
        {currentStep > 1 && <button type="button" onClick={() => setCurrentStep(currentStep - 1)}>Back</button>}
      </form>
    </FormProvider>
  );
}

export default MultiStepForm;
