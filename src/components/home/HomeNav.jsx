import React from 'react'
import { Link } from 'react-router-dom'

function HomeNav() {
  return (
    <div className='hidden md:block'>
         <div className='absolute  w-full z-10 '>
        <div className='mt-8 md:ml-10 ml-5 flex'>
          <Link href={'/'}>
            <div className='flex'>
                <img
                src={"/favicon.ico"}
                alt='Logo'
                />
                <p className='  mt-2 md:ml-1 ml-3 text-xl font-bold  '>Moodly</p>
            </div>
            </Link>

            <button className='mt-2 absolute md:right-[250px] right-10 flex bg-[#FF4967] rounded-full p-[2px] w-[120px] h-[50px] px-8 py-3' >

                <p className=' text-white text-center mx-auto font-medium'>Log in</p>


            </button>

            <button className='mt-2 absolute md:right-[80px] flex rounded-full p-[2px] w-[125px] h-[50px] px-8 py-3 border-2 border-[#FF4967]'>
            <p className=' text-[#FF4967] text-center mx-auto font-medium'>Sign up</p>
            
            </button>
        </div>

      
    </div>

    <hr className='border-b border-black pt-32 flex items-center justify-center w-4/5 mx-auto' />
    </div>
  )
}

export default HomeNav