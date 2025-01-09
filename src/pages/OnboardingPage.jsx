import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';

const OnboardingScreen = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const onboardingData = [
    {
      title: 'Your Wardrobe, Your Way',
      description: 'Effortlessly organize your wardrobe with our smart grid system.',
      image: 'VectorImage/Onboarding 1.png',
    },
    {
      title: 'AI-Powered Outfit Ideas',
      description: 'Discover AI-powered outfit recommendations tailored to your style.',
      image: 'VectorImage/Onboarding 2.png',
    },
    {
      title: 'Get Creative',
      description: 'Shuffle your items clueless-style to create outfits. Keep clothes in play.',
      image: 'VectorImage/Onboarding 3.png',
    },
    {
      title: 'Plan Outfits Daily',
      description: 'Plan your outfits ahead of time. Schedule your looks by day and stay ready for every occasion.',
      image: 'VectorImage/Onboarding 4.png',
    },
  ];

  const handleNext = () => {
    if (currentStep < onboardingData.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGetStarted = () => {
    navigate('/LoginScreen');
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  return (
    <div
      {...swipeHandlers}
      className="relative flex flex-col items-center justify-between min-h-screen bg-gray-100 overflow-hidden"
    >
      {/* Progress Bar */}
      <div className="absolute top-14 w-full flex justify-center px-8 mb-8">
        {onboardingData.map((_, index) => (
          <div
            key={index}
            className={`h-2 flex-1 mx-1 rounded-full transition-all duration-500 ease-in-out ${index <= currentStep ? 'bg-green-800' : 'bg-gray-300'
              }`}
          />
        ))}
      </div>

      {/* Onboarding Content */}
      <div className="text-center px-6 mt-28"> {/* Memberi jarak dengan progress bar */}
        <h1 className="text-xl font-bold text-green-800">{onboardingData[currentStep].title}</h1>
        <p className="text-gray-600 mt-2">{onboardingData[currentStep].description}</p>
        <img
          src={onboardingData[currentStep].image}
          alt="Onboarding Illustration"
          className="w-96 h-96 mx-auto mt-6"
        />
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-6 w-full px-8">
          {currentStep > 0 && (
            <button
              className="py-2 px-4 text-gray-600 border border-gray-400 rounded-md hover:bg-gray-200"
              onClick={handlePrevious}
            >
              Back
            </button>
          )}
          {currentStep < onboardingData.length - 1 ? (
            <button
              className="ml-auto py-2 px-4 bg-green-800 text-white rounded-md hover:bg-green-900"
              onClick={handleNext}
            >
              Next
            </button>
          ) : (
            <button
              className="ml-auto py-2 px-4 bg-green-800 text-white rounded-md hover:bg-green-900"
              onClick={handleGetStarted} // Use the new function
            >
              Get Started
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;