import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";

const Explanation = ({ onBack, onNext, selectedMood }) => {
  const [explanation, setExplanation] = useState('');
  const [selectedReasons, setSelectedReasons] = useState([]);

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
    if (selectedReasons.includes(reason)) {
      setSelectedReasons(selectedReasons.filter(item => item !== reason));
    } else {
      setSelectedReasons([...selectedReasons, reason]);
    }
  };

  const handleExplanationChange = (e) => {
    setExplanation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any further processing here, like submitting to a backend or updating state
    console.log("Selected Mood:", selectedMood);
    console.log("Selected Reasons:", selectedReasons);
    console.log("Explanation:", explanation);
  };

  return (
    <div className=" flex justify-center">
      <div className=' bg-gray-50 p-10'>
      <button className='absolute left-5  ' onClick={onBack}>
            <span className=' text-2xl'><IoIosArrowBack /></span>
        </button>
        <h2 className="text-center font-semibold mb-4 mt-5">I am {selectedMood?.label}</h2>
        <p className='sm:text-6xl text-5xl text-center'>{selectedMood?.emoji} </p>
       

        {/* Render reason boxes */}
        <div className="grid sm:grid-cols-5 grid-cols-2 gap-4 mt-10">
          {reasons.map((reason, index) => (
            <div key={index} onClick={() => toggleReason(reason)} className={`p-4 border rounded-lg cursor-pointer ${selectedReasons.includes(reason) ? 'bg-blue-200' : 'bg-gray-200 hover:bg-gray-400'}`}>
              <p className="text-center text-4xl sm:text-6xl mb-2">{reason.emoji}</p>
              <p className="text-center text-sm">{reason.label}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className='mt-10'>
          <textarea
            className="mt-4 p-2 w-full h-52 border"
            placeholder="Explain your mood here..."
            value={explanation}
            onChange={handleExplanationChange}
          />
          <div className='flex justify-center mt-4'>
            <button type="submit" className="bg-pink-600 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2">
              Submit
            </button>
            
            <button className="bg-red-500 text-white px-4 py-2" onClick={onNext}>Next</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Explanation;
