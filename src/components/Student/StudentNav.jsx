import React from 'react'
import { Link } from 'react-router-dom'

import { useState } from 'react';

function StudentNav() {

  




  return (
    <div className=' bg-white'>
         <div className='  w-full z-10  border-b'>
        <div className='md:my-2 my-1  flex justify-center'>
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

           
        </div>

      
    </div>


    
    </div>
  )
}

export default StudentNav