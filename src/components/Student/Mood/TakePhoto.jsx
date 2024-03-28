import React, { useState } from 'react';
import WebcamCapture from './WebcamCapture'; // Import your WebcamCapture component
import Modal from 'react-modal'; // Import react-modal
import { IoCamera } from "react-icons/io5";

import { IoIosArrowBack } from "react-icons/io";

// Set app element for react-modal
Modal.setAppElement('#root');

function TakePhoto({ onBack, onThankYou }) {
  const [photoUrl, setPhotoUrl] = useState(null);
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const requestUserPermission = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(() => {
        setPermissionGranted(true);
        setModalIsOpen(true); // Open modal when permission is granted
      })
      .catch(error => {
        console.error('Error accessing camera:', error);
        setPermissionGranted(false);
      });
  };

  const handleCapture = (imageSrc) => {
    setPhotoUrl(imageSrc);
  };

  const retakePhoto = () => {
    setPhotoUrl(null);
  };

  const handleSubmit = () => {
    // Here you can perform the action to submit the photo
    // For example, you can send the photoUrl to a backend server
    console.log("Submitting photo:", photoUrl);
    setModalIsOpen(false); // Close modal after submission
    onThankYou();
  };

  const handleNoClick = () => {
    const confirmed = window.confirm("Are you sure you don't want to take a photo?");
    if (confirmed) {
      // Perform action if the user confirms
      onThankYou();
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setPermissionGranted(false); // Reset permission status
  };

  return (
    <div className="flex justify-center  h-[80vh]">
      <button className='absolute left-5 top-40' onClick={onBack}>
        <span className=' text-2xl'><IoIosArrowBack /></span>
      </button>
      <div className="bg-gray-50 p-10 w-full h-full pt-24">
        <h2 className="text-center  font-semibold mb-4 flex justify-center">
            <IoCamera className='text-7xl' />
            </h2>
        <p className="text-center mb-4 mt-10">Do you want to take a photo?</p>
        <div className="flex justify-center mt-14 gap-10">
          <button onClick={requestUserPermission} className="sm:text-xl text-lg font-medium  sm:h-14 h-10 rounded-lg bg-green-100 text-green-600 px-5">
            <span>Yes, I do</span>
          </button>
          <button onClick={handleNoClick} className="sm:text-xl text-lg font-medium  sm:h-14 h-10 rounded-lg bg-red-100 text-red-600 px-5">No, I don't</button>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-full h-full rounded-lg shadow-lg"
          overlayClassName=" fixed inset-0 bg-black opacity-100"
        >
          {photoUrl ? (
            <img src={photoUrl} alt="Captured" className="object-cover w-full h-full" />
          ) : (
            <WebcamCapture onCapture={handleCapture} onCancel={closeModal} />
          )}
          {photoUrl ? (
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
              <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2">Submit</button>
              <button onClick={retakePhoto} className="bg-blue-500 text-white px-4 py-2 ml-4">Retake</button>
            </div>
          ) : null}
        </Modal>
      </div>
    </div>
  );
}

export default TakePhoto;
