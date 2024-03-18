import React from 'react'
import { Card, Title } from '@tremor/react'
import { FaRegSquareCaretDown } from "react-icons/fa6";

function InsActivities() {
  return (
    <div>
        <Card className='sm:w-[470px] w-[370px] md:mx-2 mx-auto bg-tremor-background'>
            <Title>Engagement Features</Title>

            <div className=' mt-5'>
              <div className=' flex border border-gray-100 p-1 rounded-xl'>
                <img src="yoga.png" alt="" />
             
                <p className='mt-2 text-lg ml-1 '>Suggested Activities</p>
                <p className='absolute right-10 mt-4'><FaRegSquareCaretDown /></p>
              </div>

              <div className=' flex border border-gray-100 p-1 my-10 rounded-xl'>
                <img src="love.png" alt="" className='w-14' />
             
                <p className='mt-3 text-lg ml-1 '>Positive Reinforcement</p>
                <p className='absolute right-10 mt-5'><FaRegSquareCaretDown /></p>
              </div>


              <div className=' flex border border-gray-100 p-1 rounded-xl'>
                <img src="leaves.png" alt="" className='w-12' />
             
                <p className='mt-2 text-lg ml-1 '>Motivational Quotes</p>
                <p className='absolute right-10 mt-4'><FaRegSquareCaretDown /></p>
              </div>

            </div>

        </Card>
    </div>
  )
}

export default InsActivities