import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import { MdCancel, MdCamera, MdClose } from "react-icons/md";
import { BsRecordCircleFill } from "react-icons/bs";

function WebcamCapture({ onCapture, onCancel }) {
  const webcamRef = useRef(null);

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
  };

  return (
    <div className="text-center h-screen ">
      <button onClick={onCancel} className="absolute  text-black text-3xl z-10 left-6 mt-5"><MdClose /></button>
      <h2 className="font-semibold mb-4 mt-5 absolute text-sm z-10 left-[40%]">Take a Photo</h2>
      <div className="w-full h-full relative">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="object-cover w-full h-full"
        />

<div className="absolute bottom-20 left-0 w-full text-center">
        <button onClick={capturePhoto} className="text-gray-100 text-7xl px-4 py-2 mx-auto"><BsRecordCircleFill /></button>
      </div>
      </div>
      
    </div>
  );
}

export default WebcamCapture;
