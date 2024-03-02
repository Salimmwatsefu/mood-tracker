import React from 'react'
import { Link } from 'react-router-dom'

function HomeNav() {
  return (
    <div className=''>
         <div className='absolute  w-full z-10 '>
        <div className='md:mt-8 mt-4 md:ml-24 ml-5 flex'>
          <Link href={'/'}>
            <div className='flex'>
                <img
                src={"/logom.png"}
                alt='Logo'
                className='w-[50px] '
                />
                <p className='mt-[16px] md:mt-2 md:ml-1 ml-3 md:text-xl text-xl  font-bold  '>Moodly</p>
            </div>
            </Link>

            <button className='mt-2 absolute md:right-[250px] right-5 flex bg-[#FF4967] rounded-full p-[2px] md:w-[120px]  md:h-[50px] px-8 py-3' >

                <p className=' text-white text-center mx-auto font-medium'>Log in</p>


            </button>

            <button className='mt-2 absolute md:right-[80px] right-[160px] flex rounded-full p-[2px] md:w-[125px] h-[50px] px-8 py-3 border-2 border-[#FF4967] md:block hidden'>
            <p className=' text-[#FF4967] text-center mx-auto font-medium'>Sign up</p>
            
            </button>
        </div>

      
    </div>

    
    </div>
  )
}

export default HomeNav