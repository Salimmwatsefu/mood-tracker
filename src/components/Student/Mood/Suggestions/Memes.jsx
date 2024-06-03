import { Card } from '@tremor/react'
import React from 'react'

function Memes() {
  return (
    <div className=' '>
        <div className=' border-black'>
            <Card className='w-[450px] bg-black border-black'>
                
                <div className=' w=[450px] justify-center items-center flex '>
      <iframe
        allow="fullscreen"
        frameBorder="0"
        height="300"
        src="https://giphy.com/embed/702ybfQFkrkrWnIByR/video"
        width="450"
      ></iframe>
    </div>
              
            </Card>
        </div>
    </div>
  )
}

export default Memes