import React, { useState } from 'react';
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import BodyMeasurements from './BodyMeasurements';
import AdditionalQuestions from './AdditionalQuestions';
import EmailCapture from './EmailCapture';
import Results from './Results';
import HomeScreen from './HomeScreen';
import { API } from 'aws-amplify';

function MultiStepForm({ title, subtitle }) {
  const { brand } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const methods = useForm();  // Initialize form methods
  const { handleSubmit, control, getValues, setValue } = methods;

  const displayTitle = brand ? `${brand} Size Guide` : title;
  const displaySubtitle = brand ? "Get your perfect size in seconds" : subtitle;


  

  const handleNextStep = async (fitPreference, data) => {
    setValue('additionalQuestions.fitPreference', fitPreference);  // Update form data
    if (currentStep === 4) {
        console.log("Step 4")
        try {
          const result = await API.post('api9be5c04d', '/size-recommendations', {
            body: data
          });
          console.log(result);
          // Advance to the Results step
          setCurrentStep(currentStep + 1);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.log("Current Step is..", currentStep)
        setCurrentStep(currentStep + 1);
      }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(() => handleNextStep())}>
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
            render={({ field }) => <EmailCapture {...field} onGetResults={() => handleNextStep()} />}
          />
        )}
        {currentStep === 5 && <Results data={getValues()} />}
      </form>
    </FormProvider>
  );
}

export default MultiStepForm;