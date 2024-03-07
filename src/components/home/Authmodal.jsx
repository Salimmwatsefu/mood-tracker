import React, { Children } from 'react';
import { IoCloseCircleSharp } from "react-icons/io5";

const Authmodal = ({ children, onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full z-50 bg-black bg-opacity-90" onClick={handleOverlayClick}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-[35px] p-6 md:w-[700px] w-[350px] md:h-[400px]">
        <button className="absolute top-3 right-5 text-gray-600 cursor-pointer text-2xl" onClick={onClose}>
        <IoCloseCircleSharp />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Authmodal;