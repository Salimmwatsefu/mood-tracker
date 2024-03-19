import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component

const ChooseMood = () => {
  // Common mood options with emojis
  const moods = [
    { label: "😊 Happy" },
    { label: "😢 Sad" },
    { label: "😃 Excited" },
    { label: "😌 Calm" },
    { label: "😡 Angry"},
    { label: "😔 Tired"},
    { label: "😩 Stressed"},
    { label: "😕 Confused" },
    { label: "😍 Love" },
    { label: "😎 Cool"},
    { label: "😜 Silly" },
    { label: "😇 Grateful" },
    { label: "😴 Sleepy"},
    { label: "😋 Hungry" },
    { label: "😷 Sick" },
    { label: "😱 Scared"},
    // Add more feelings here
  ];

  // State to track the selected moods
  const [selectedMoods, setSelectedMoods] = useState([]);

  // Function to handle mood selection
  const handleMoodSelect = (mood) => {
    if (selectedMoods.includes(mood)) {
      // If mood is already selected, remove it
      setSelectedMoods(selectedMoods.filter(selected => selected !== mood));
    } else {
      // If mood is not selected, add it
      setSelectedMoods([...selectedMoods, mood]);
    }
  };

  // Placeholder function for handling intensity measurement
  const handleIntensityMeasure = () => {
    console.log(selectedMoods); // Placeholder for intensity measurement logic
  };

  // Function to render a single mood option
  const renderMood = (mood, key) => (
    <div key={key} onClick={() => handleMoodSelect(mood.label)}>
      <div className={`p-6 border rounded-lg cursor-pointer flex justify-center items-center text-3xl ${selectedMoods.includes(mood.label) ? 'bg-red-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>
        {mood.label}
      </div>
    </div>
  );

  return (
    <div className=''>
      {/* Image */}
      <div className="mb-10 text-center md:mb-5 pb-3 bg-gray-800 text-white">
          <nav className="flex justify-between items-center py-4 px-6">
            <div>
              <Link to="/" className="flex items-center text-lg font-semibold">
                <img
                  src="/logom.png"
                  alt="logo"
                  className="w-8 mr-2"
                />
                Moodly
              </Link>
            </div>
          </nav>
        </div>


      {/* Date, day, and prompt */}
      <div className="text-center mt-2 mb-4 ">
        {/* <p className='pb-3'>{currentDate}</p> */}
        <h1 className="text-3xl">How are you feeling today?</h1>
        {selectedMoods.length > 0 && (
          <p className="text-lg my-4">Selected Moods: {selectedMoods.join(', ')}</p>
        )}
      </div>

      {/* Mood options */}
      <div className="flex justify-center items-center">
        <div className="grid gap-3 grid-cols-3">
          {moods.map((mood, index) => (
            renderMood(mood, index)
          ))}
        </div>
      </div>

      {/* Button for intensity measurement */}
      <div className="text-center mt-6 mb-6">
        <Link to={{ pathname: '/choose-mood/Thank-you', state: { selectedMoods: selectedMoods } }}>
          <button onClick={handleIntensityMeasure} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded w-40">
            Choose Mood
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ChooseMood;
