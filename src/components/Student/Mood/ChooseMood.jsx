import React, { useState, useEffect } from 'react';
import StudentNav from '../StudentNav';

const ChooseMood = () => {
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

  const [selectedMood, setSelectedMood] = useState(null);
  const [explanation, setExplanation] = useState('');

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
  };

  const handleExplanationChange = (e) => {
    setExplanation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any further processing here, like submitting to a backend or updating state
    console.log("Selected Mood:", selectedMood);
    console.log("Explanation:", explanation);
  };

  useEffect(() => {
    if (selectedMood) {
      scrollToExplanationForm();
    }
  }, [selectedMood]);

  const scrollToExplanationForm = () => {
    const explanationForm = document.getElementById('explanation-form');
    if (explanationForm) {
      explanationForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className=' pb-20'>
      <StudentNav />
      <div className="text-center mt-10 mb-4 ">
        <h1 className="text-2xl font-semibold">How are you feeling right now?</h1>
        <div className=' flex justify-center md:mt-5 mt-10 text-gray-600'>
          <p className=' text-base w-[450px] mb-4'>Evaluate how you are feeling today and express your emotion in the way that works best for you</p>
        </div>
      </div>
      <div className="flex justify-center items-center md:mt-1 mt-10">
        <div className="grid gap-3 md:grid-cols-5 grid-cols-3">
          {moods.map((mood, index) => (
            <div key={index} onClick={() => handleMoodSelect(mood)}>
              <div className={`p-6 border rounded-lg cursor-pointer justify-center items-center text-3xl ${selectedMood === mood ? 'bg-red-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
                <p role="img" aria-label={mood.label} className="mr-2 text-center md:text-7xl text-5xl">{mood.emoji}</p>
                <p className=' text-center text-sm mt-4'>{mood.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Explanation form */}
      {selectedMood && (
        <div id="explanation-form" className="mt-40 flex justify-center  ">
          <div className=' md:w-[50%] w-[90%] bg-gray-100 p-10'>
          <h2 className="text-center font-semibold mb-4">Explanation for {selectedMood.label}</h2>
          <p className=' text-6xl text-center'>{selectedMood.emoji} </p>
          <p className=' text-center mt-2 text-sm'> {selectedMood.label}</p>
          <form onSubmit={handleSubmit} className=' mt-10'>
            <textarea
              className="mt-4 p-2 w-full h-52 border "
              placeholder="Explain your mood here..."
              value={explanation}
              onChange={handleExplanationChange}
            />
            <div className=' flex justify-center'>
            <button type="submit" className="mt-20 bg-pink-600 hover:bg-blue-700 text-white font-bold py-5 px-10 ">
              Submit
            </button>
            </div>
          </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChooseMood;
