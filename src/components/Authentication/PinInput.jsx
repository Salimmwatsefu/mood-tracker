import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BASE_URL from '../../../apiConfig';

const PinInput = ({ length = 6 }) => {
  const [pin, setPin] = useState(Array(length).fill(''));
  const inputRefs = Array(length).fill(0).map(() => useRef(null));
  const navigate = useNavigate();
  const { studentLogin } = useAuth();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const code = pin.join(''); // Combine pin digits into code
    try {
      const response = await fetch(`${BASE_URL}/auth/register_anonymous`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ code })
      });
      if (response.ok) {
        const data = await response.json();
        const { session_token } = data;
        studentLogin(session_token); // Login the student with the received session token
        toast.success('Successfully logged in!');
        navigate('/mood-home'); // Redirect to mood-home page
      } else {
        const error = await response.json();
        console.error(error);
        toast.error('Failed to login. Please try again.');
        setPin(Array(length).fill('')); // Clear the pin input fields
        inputRefs[0].current.focus(); // Focus on the first input field
      }
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      toast.error('An unexpected error occurred. Please try again.');
      setPin(Array(length).fill('')); // Clear the pin input fields
      inputRefs[0].current.focus(); // Focus on the first input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <div className="flex justify-center md:mt-10 mt-28">
        <div className='bg-[#231a36] md:py-20 py-32 px-5'>
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
      <button type="submit" className="block mt-20 md:mt-4 mx-auto px-10 py-4 bg-white text-[#231a36] font-semibold">Submit</button>
    </form>
  );
};

export default PinInput;
