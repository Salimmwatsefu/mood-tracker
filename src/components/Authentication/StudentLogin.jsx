import React from 'react'
import PinInput from './PinInput'
import HomeNav from '../home/HomeNav'
import StudentNav from '../Student/StudentNav'

function StudentLogin() {
  return (
    <div className=' bg-[#49497D] h-screen'>
      <StudentNav />
      <div className=' '>
        <div >
          <h1 className=' text-center mt-20 text-3xl'>Enter your class text code</h1>
        </div>
      <PinInput />
      </div>
    </div>
  )
}

export default StudentLogin