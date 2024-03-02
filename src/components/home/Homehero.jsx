import React from 'react'

function Homehero() {
  return (
    <div className=' '>
        <div className=' md:grid-cols-2 grid overflow-hidden'>
        <div className=' md:pt-20 lg:ml-28 '>
            <h1 className=' lg:text-7xl text-6xl leading-snug font-semibold hidden md:block '>Moodly<span className='text-[#549CE1]'>.</span></h1>

            <p className='w-[40%] md:text-xl text-3xl mt-10 md:text-gray-700 text-black font-bold mx-2 text-center'>Track your mood with Moodly</p>
            <p className='md:mt-14 mt-10 md:text-xl text-2xl text-gray-400 text-center  w-[400px] '>Moodly is a free to use and daily mood tracker </p>

            <div className='flex justify-center items-center w-[400px] mt-10'>

            <button className='mt-20 absolute   bg-[#FF4967] rounded-full p-[2px] w-[180px] h-[70px] px-8 py-3' >

<p className=' text-white text-center mx-auto font-medium'>Get started</p>


</button>

</div>
        </div>

        <div className=' order-first'>

            <div className=' md:w-[1200px] w-[900px] h-full'>
                <img
                src={"/mood1.png"}
                alt='contacts1'
                className='md:ml-40 md:w-[850px] w-[750px] '
                />
            </div>
            
        </div>
        </div>

    
       

        
    </div>
  )
}

export default Homehero