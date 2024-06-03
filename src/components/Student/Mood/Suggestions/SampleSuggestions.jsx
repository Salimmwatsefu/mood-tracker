import React from 'react'
import { Card } from '@tremor/react';

function SampleSuggestions() {
  return (
    <div>
        <div>
            <Card className=' w-[750px] h-[500px]'>
                <h1 className=' text-center -mt-2 text-xs'>Here are some suggestions based on your reasons and mood</h1>
                <div className='flex justify-center  items-center '>
                  <div className='  text-center mt-5'>
                  <h1 className=' font-semibold text-red-400'>Gratitude List: </h1>
                  <p className=' font-bold text-2xl mx-10'>Write down three things you're grateful for to shift your focus to the positive</p>
                  <div className='flex justify-center mt-5'>
                  <img
                  src='/Suggestions-images/3d-grateful.png'
                  className=' w-[300px]'
                  />
                  </div>
                </div>
                </div>
            </Card>
        </div>
    </div>
  )
}

export default SampleSuggestions