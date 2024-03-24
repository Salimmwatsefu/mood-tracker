import { Card } from '@tremor/react'
import React from 'react'
import { FaQuoteLeft } from "react-icons/fa6";


function ClassQuote() {
  return (
    <div>
        <Card className='mx-auto md:ml-2 ml-auto'>
            <div>
                <div>
                    <span className=' text-2xl text-teal-500'><FaQuoteLeft /></span>
                </div>
                <div>
                    <p className=' text-lg text-gray-600 font-mono'>Folks are usually about as happy as they make their minds up to be."</p>
                    <p className='absolute right-4 text-xs bottom-2 italic text-gray-400'> -Abraham Lincoln</p>
                </div>
            </div>

        </Card>
    </div>
  )
}

export default ClassQuote