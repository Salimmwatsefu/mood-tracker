import React from 'react';
import { useAuth } from '../Authentication/AuthContext';
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';
import 'sweetalert2/src/sweetalert2.scss'; // Ensure you have the SweetAlert2 CSS file

function SettingsDrawer({ isOpen, onClose }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const extractFirstLetter = (str) => {
    return str ? str.charAt(0).toUpperCase() : '';
  };

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'No, stay logged in',
      customClass: {
        confirmButton: 'swal2-confirm-button',
        cancelButton: 'swal2-cancel-button'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Call the logout function from the authentication context
        logout();
        // Show success toast
        toast.success('Successfully logged out!');
        // Navigate to the home page after a short delay to allow the toast to show
        setTimeout(() => {
          navigate('/');
          // Optionally, close the settings drawer
          onClose();
        }, 2000);
      }
    });
  };

  return (
    <div>
      <ToastContainer />
      <div className='mt-10 flex gap-5 border-b-2 border-gray-300 pb-4'>
        <div className="h-16 w-16 bg-[#FF4967] text-white flex items-center justify-center rounded-full -mt-1">
          {/* Extract the first letter from user.name and capitalize it */}
          <span className="text-xl font-semibold">{extractFirstLetter(user?.name)}</span>
        </div>
        <div>
          <p className='font-medium text-xl mt-1'>{user?.name}</p>
          <p className='text-red-500'>Edit Account</p>
        </div>
      </div>
      <div>
        <div className='flex mt-10 gap-3 cursor-pointer' onClick={handleLogout}>
          <BiLogOut className='text-3xl' />
          <p className='text-xl'>Logout</p>
        </div>
      </div>
    </div>
  );
}

export default SettingsDrawer;

// Add the custom CSS to style the confirm button
const swalStyle = document.createElement('style');
swalStyle.innerHTML = `
  .swal2-confirm-button {
    background-color: red !important;
    color: white !important;
  }
  .swal2-cancel-button {
    background-color: grey !important;
    color: white !important;
  }
`;
document.head.appendChild(swalStyle);
