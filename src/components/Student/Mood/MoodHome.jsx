import React, { useEffect, useState } from 'react';
import StudentNav from '../StudentNav';
import ChooseMood from './ChooseMood';
import Explanation from './Explanation';
import TakePhoto from './TakePhoto';
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3 } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Authentication/AuthContext';
import BASE_URL from '../../../../apiConfig';

const MoodHome = () => {
  const [progress, setProgress] = useState(1);
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedReasons, setSelectedReasons] = useState([]);
  const [explanation, setExplanation] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const navigate = useNavigate();

  const sessionToken = localStorage.getItem('sessionToken');

  useEffect(() => {
    // Scroll to the top whenever progress changes
    window.scrollTo(0, 0);
  }, [progress]);

  const handleThankYou = () => {
    navigate('/thankyou');
  };

  const handleNextStep = async () => {
    if (progress === 1 && !selectedMood) {
      alert('Please select a mood');
      return;
    }
    if (progress === 2) {
      // Submit mood, reasons, and explanations
      await submitMoodReasonsExplanations();
    }
    if (progress === 3) {
      return;
    }
    setProgress(progress + 1);
  };

  const handleBack = () => {
    if (progress > 1) {
      setProgress(progress - 1);
    }
  };

  const handleReset = () => {
    setProgress(1);
    setSelectedMood(null);
    setSelectedReasons([]);
    setExplanation('');
  };

  const submitMoodReasonsExplanations = async () => {
    try {
      console.log('Request Body:', JSON.stringify({
        selectedMood: selectedMood.label,
        selectedReasons: selectedReasons.filter(reason => reason !== null).map(reason => reason.label),
        explanation: explanation
      }));
  
      const response = await fetch(`${BASE_URL}/mood/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionToken}`,
        },
        body: JSON.stringify({
          selectedMood: selectedMood.label,
          selectedReasons: selectedReasons.filter(reason => reason !== null).map(reason => reason.label),
          explanation: explanation
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to submit mood, reasons, and explanations ${response.status}`);
      }
      console.log('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting mood, reasons, and explanations:', error.message);
      // Handle error
    }
  };

  return (
    <div className='pb-20'>
      <StudentNav />
      <div className="mb-4">
        <h2 className="sr-only">Steps</h2>
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div className={`h-2 rounded-full bg-blue-500`} style={{ width: `${(progress / 3) * 100}%` }}></div>
        </div>
        <ol className="mt-4 grid grid-cols-3 text-sm font-medium text-gray-500">
          <li className={`flex items-center justify-center ${progress >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
            <span className=" text-[23px] inline sm:hidden"> <TbCircleNumber1 /> </span>
            <span className="hidden sm:inline">Choose Mood</span>
          </li>
          <li className={`flex items-center justify-center ${progress >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
            <span className=" text-[23px] inline sm:hidden"> <TbCircleNumber2 /> </span>
            <span className="hidden sm:inline">Explanation</span>
          </li>
          <li className={`flex items-center justify-center ${progress >= 3 ? 'text-blue-600' : 'text-gray-400'}`}>
            <span className=" text-[23px] inline sm:hidden"> <TbCircleNumber3 /> </span>
            <span className="hidden sm:inline">Photo</span>
          </li>
        </ol>
      </div>
      {progress === 1 && (
        <ChooseMood
          onNext={handleNextStep}
          onMoodSelect={setSelectedMood}
          selectedMood={selectedMood}
        />
      )}
      {progress === 2 && selectedMood && (
        <Explanation
          onNext={handleNextStep}
          onBack={handleBack}
          onReset={handleReset}
          onExplanationChange={setExplanation}
          selectedMood={selectedMood}
          selectedReasons={selectedReasons}
          setSelectedReasons={setSelectedReasons}
        />
      )}
      {progress === 3 && (
        <TakePhoto
          onBack={handleBack}
          onThankYou={handleThankYou}
        />
      )}
    </div>
  );
};

export default MoodHome;
