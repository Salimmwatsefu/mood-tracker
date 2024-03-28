import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";

const Explanation = ({ onBack, onNext, selectedMood, selectedReasons, setSelectedReasons, onExplanationChange }) => {
  const [explanation, setExplanation] = useState('');

  const reasons = [
    { label: "Family issues", emoji: "👨‍👩‍👧" },
    { label: "Work stress", emoji: "💼" },
    { label: "School pressure", emoji: "🎓" },
    { label: "Health concerns", emoji: "⚕️" },
    { label: "Relationship problems", emoji: "💔" },
    { label: "Financial problems", emoji: "💸" },
    // Add more reasons as needed
  ];

  const toggleReason = (reason) => {
    if (!reason) return;
    if (selectedReasons.some(item => item.label === reason.label)) {
      setSelectedReasons(selectedReasons.filter(item => item.label !== reason.label));
    } else {
      setSelectedReasons([...selectedReasons, reason]);
    }
  };

  const handleExplanationChange = (e) => {
    setExplanation(e.target.value);
    onExplanationChange(e.target.value);
  };

  const handleNext = () => {
    const confirmed = window.confirm("Are you sure you want to proceed?");
    if (confirmed) {
      handleSubmit();
      onNext();
    }
  };

  const handleSubmit = () => {
    // You can perform any further processing here, like submitting to a backend or updating state
    console.log("Selected Mood:", selectedMood);
    console.log("Selected Reasons:", selectedReasons);
    console.log("Explanation:", explanation);
  };

  return (
    <div className="flex justify-center">
      <div className='bg-gray-50 p-10'>
        <button className='absolute left-5' onClick={onBack}>
          <span className='text-2xl'><IoIosArrowBack /></span>
        </button>
        <h2 className="text-center font-semibold mb-4 mt-5">Please share more about why you are {selectedMood?.label}</h2>
        <p className='sm:text-6xl text-5xl text-center'>{selectedMood?.emoji} </p>
        
        {/* Render reason boxes */}
        <div className="grid sm:grid-cols-5 grid-cols-2 gap-4 mt-10">
          {reasons.map((reason, index) => (
              <div
              key={index}
              onClick={() => toggleReason(reason)}
              className={`p-4 border rounded-lg cursor-pointer ${selectedReasons.some(item => item.label === reason.label) ? 'bg-blue-200' : 'bg-gray-200 hover:bg-gray-400'}`}
            >
              <p className="text-center text-4xl sm:text-6xl mb-2">{reason.emoji}</p>
              <p className="text-center text-sm">{reason.label}</p>
            </div>
          ))}
        </div>

        <textarea
          className="mt-20 p-2 w-full h-52 border"
          placeholder="Please share more about how you're feeling today..."
          value={explanation}
          onChange={handleExplanationChange}
        />

        <div className='flex justify-center mt-4'>
          <button type="button" onClick={handleNext} className="bg-pink-600 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explanation;
