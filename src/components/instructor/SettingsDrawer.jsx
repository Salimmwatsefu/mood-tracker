import React from 'react'
import { useAuth } from '../Authentication/AuthContext';
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';


function SettingsDrawer({ isOpen, onClose }) {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
  
    const extractFirstLetter = (str) => {
      return str ? str.charAt(0).toUpperCase() : '';
    };
  
    const handleLogout = () => {
      // Use the built-in confirmation dialog
      const confirmLogout = window.confirm('Are you sure you want to logout?');
  
      if (confirmLogout) {
        // Call the logout function from the authentication context
        logout();
        // Navigate to the home page
        navigate('/');
        // Optionally, close the settings drawer
        onClose();
      }
    };



  return (
    <div>
        <div className='mt-10 flex gap-5   border-b-2 border-gray-300 pb-4 '>
        <div className="h-16  w-16  bg-[#FF4967] text-white flex items-center justify-center rounded-full -mt-1"
         >
         {/* Extract the first letter from user.name and capitalize it */}
         <span className="text-xl font-semibold">{extractFirstLetter(user)}</span>
        
       </div>

       <div>
       <p className=' font-medium text-xl mt-1'>{user}</p>
       <p className=' text-red-500'>Edit Account</p>
       </div>

       </div>

       <div>
        <div className=' flex mt-10 gap-3' onClick={handleLogout}>
            <BiLogOut className=' text-3xl' />
            <p className=' text-xl'>Logout</p>
        </div>

       </div>

       
    </div>
  )
}

export default SettingsDrawer