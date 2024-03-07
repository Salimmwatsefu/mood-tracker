import React from 'react'
import Authmodal from './Authmodal'
import { Link } from 'react-router-dom'

function Authmodalcontent({ onClose }) {
  return (
    <div>
        <Authmodal onClose={onClose}>


            <div className=' '>
                <div className='flex justify-center'>
                    <img 
                    src='/logom.png'
                    alt='logo'
                    className='w-[80px]'
                    />
                </div> 

                <div className='flex justify-center'>
                    <p className=' text-2xl font-bold text-gray-700'>Log in for Moodly as a...</p>
                </div>

                <div className='md:flex justify-center gap-14 mt-8 '>
                    <Link to={'/instructor-login'}>
                    <div className=' border-2 border-gray-100 w-[200px] rounded-2xl mx-auto md:mx-0'>
                        <img 
                        src='/teacher1.png'
                        alt='instructor'
                        className=' w-40 mx-auto'
                        />
                        <p className=' text-center font-semibold'>Instructor</p>
                    </div>
                    </Link>

                    <Link to={'/student-login'}>
                    <div className=' border-2 border-gray-100 w-[200px] rounded-2xl mx-auto md:mx-0 md:mt-0 mt-10'>
                        <img 
                        src='/student.png'
                        alt='student'
                        className='w-24 mx-auto mt-5 '
                        />
                        <p className=' text-center mt-11 font-semibold'>Student</p>
                    </div>
                    </Link>
                </div>
                
            </div>
        </Authmodal>
    </div>
  )
}

export default Authmodalcontent