import React from 'react'
import SampleSuggestions from './SampleSuggestions'
import Info from './Info'
import Memes from './Memes'
import Chatbox from './Chatbox'
import Quotes from './Quotes'

function Suggestions() {
  return (
    <div className=' bg-pink-200'>
      <div className='p-5 flex gap-7'>
      <div className=''>
      <Memes />
      <Chatbox />
      
      </div>
      <div className=''>
      <SampleSuggestions />
      <Quotes />
        
      </div>

      </div>
      
      
    </div>
  )
}

export default Suggestions