import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const PinInput = ({ length = 6 }) => {
  const [pin, setPin] = useState(Array(length).fill(''));
  const inputRefs = Array(length).fill(0).map(i => useRef(null));
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (value.length === 1) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      if (index < length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === 'Backspace') {
      const newPin = [...pin];
      newPin[index] = '';
      setPin(newPin);
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const pinCode = pin.join('');
    // Assuming you have a route named '/another-component' where you want to navigate
    navigate('/mood-home'); // Navigate to another component
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-center md:mt-10 mt-28">
        <div className='bg-red-500 md:py-20 py-32 px-10'>
          {pin.map((digit, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleBackspace(e, index)}
              className="md:w-20 md:h-20 w-10 h-12 mx-1 text-center border border-black rounded-lg"
            />
          ))}
        </div>
      </div>
      <button type="submit" className="block mt-20 md:mt-4 mx-auto px-10 py-4 bg-blue-500 text-white ">Submit</button>
    </form>
  );
};

export default PinInput;
