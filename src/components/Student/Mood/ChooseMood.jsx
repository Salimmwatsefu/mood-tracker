import React, { useState } from 'react';

const ChooseMood = ({ onNext, onMoodSelect, selectedMood }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const moods = [
    { emoji: "😊", label: "Happy" },
    { emoji: "😢", label: "Sad" },
    { emoji: "😃", label: "Excited" },
    { emoji: "😡", label: "Angry" },
    { emoji: "😔", label: "Tired" },
    { emoji: "😩", label: "Stressed" },
    { emoji: "😴", label: "Sleepy" },
    { emoji: "😋", label: "Hungry" },
    { emoji: "😷", label: "Sick" },
    { emoji: "😱", label: "Scared" },
  ];

  const handleMoodSelect = (mood) => {
    const isConfirmed = window.confirm(`Are you sure you want to select ${mood.label}?`);
    if (isConfirmed) {
      onMoodSelect(mood);
      onNext();
    }
  };

  return (
    <div>
      <div className="text-center mt-10 mb-4 ">
        <h1 className="text-2xl font-semibold">How are you feeling right now?</h1>
        <div className='flex justify-center md:mt-5 mt-10 text-gray-600'>
          <p className='text-base w-[450px] mb-4'>Evaluate how you are feeling today and express your emotion in the way that works best for you</p>
        </div>
      </div>
   
      <div className="flex justify-center items-center md:mt-1 mt-10">
        <div className="grid gap-3 md:grid-cols-5 grid-cols-3">
          {moods.map((mood, index) => (
            <div key={index} onClick={() => handleMoodSelect(mood)}>
              <div className={`p-6 border rounded-lg cursor-pointer justify-center items-center text-3xl ${selectedMood === mood ? 'bg-red-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
                <p role="img" aria-label={mood.label} className="mr-2 text-center md:text-7xl text-5xl">{mood.emoji}</p>
                <p className='text-center text-sm mt-4'>{mood.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseMood;
