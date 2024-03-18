import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Authentication/AuthContext'
import Drawer from '../Drawer';
import SettingsDrawer from './SettingsDrawer';




function InsNav() {
  const { user } = useAuth();

  const extractFirstLetter = (str) => {
    return str ? str.charAt(0).toUpperCase() : ''; // Make sure to capitalize the first letter
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

 

  return (
    <div className='bg-white w-full z-10 pb-2 pt-5'>
      <div className=''>
        <div className='md:ml-24 ml-5 flex'>
          <Link to={'/'}>
            <div className='flex'>
              <img
                src={"/logom.png"}
                alt='Logo'
                className='w-[50px] -mt-3'
              />
              <p className='md:ml-1 ml-3 md:text-xl text-xl font-bold'>Moodly</p>
            </div>
          </Link>

          {/* Ensure that user is not null before accessing its properties */}
          {user && (
            <button className="h-10 absolute right-1 w-10 md:mr-14 mr-5 bg-[#FF4967] text-white flex items-center justify-center rounded-full -mt-1"
              onClick={openMenu}
            >
              {/* Extract the first letter from user.name and capitalize it */}
              <span className="text-xl font-semibold">{extractFirstLetter(user)}</span>
            </button>
          )}

        </div>
      </div>

      <Drawer isOpen={isMenuOpen} onClose={closeMenu}>
        <SettingsDrawer isOpen={isMenuOpen} />
      </Drawer>

    </div>
  )
}

export default InsNav;
