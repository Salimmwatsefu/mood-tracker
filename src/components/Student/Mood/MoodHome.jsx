import React, { useState } from 'react';
import StudentNav from '../StudentNav';
import ChooseMood from './ChooseMood';
import Explanation from './Explanation';
import TakePhoto from './TakePhoto';
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import ThankYou from './ThankYou';



const MoodHome = () => {
  const [progress, setProgress] = useState(1);
  const [selectedMood, setSelectedMood] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleNext = () => {
    if (progress < 3) {
      setProgress(progress + 1);
    }
  };

  const handleBack = () => {
    if (progress > 1) {
      setProgress(progress - 1);
    }
  };

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const handleReset = () => {
    setProgress(1);
    setSelectedMood(null);
  };

  const handleThankYou = () => {
    setShowThankYou(true);
  }

  if(showThankYou){
    return <ThankYou />
  }

  return (
    <div className='pb-20'>
      <StudentNav />
      

      {/* Progress Indicator */}
      <div className="mb-4">
        <h2 className="sr-only">Steps</h2>
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div className={`h-2 rounded-full bg-blue-500`} style={{ width: `${(progress / 3) * 100}%` }}></div>
        </div>
        <ol className="mt-4 grid grid-cols-3 text-sm font-medium text-gray-500">
          <li className={`flex items-center justify-center ${progress >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
          <span class=" text-[23px] inline sm:hidden"> <TbCircleNumber1 /> </span>
            <span className="hidden sm:inline">Choose Mood</span>
          </li>
          <li className={`flex items-center justify-center ${progress >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
          <span class=" text-[23px] inline sm:hidden"> <TbCircleNumber2 /> </span>
            <span className="hidden sm:inline">Explanation</span>
          </li>
          <li className={`flex items-center justify-center ${progress >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
          <span class=" text-[23px] inline sm:hidden"> <TbCircleNumber3 /> </span>
            <span className="hidden sm:inline">Photo</span>
          </li>
        </ol>
      </div>

      {/* Render Step Components */}
      {progress === 1 && (
        <ChooseMood
          onNext={handleNext}
          onMoodSelect={handleMoodSelect}
          selectedMood={selectedMood}
        />
      )}

{progress === 2 && selectedMood && ( // Render Explanation only if a mood is selected
        <Explanation
          onNext={handleNext}
          onBack={handleBack}
          onReset={handleReset}
          selectedMood={selectedMood}
        />
      )}

      {progress === 3 && (
        <TakePhoto
        onBack={handleBack}
        onThankYou = {handleThankYou}
        />

      )}
    </div>
  );
};

export default MoodHome;
