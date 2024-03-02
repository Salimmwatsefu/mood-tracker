import React from 'react'

function Homehero() {
  return (
    <div className=' '>
        <div className=' md:grid-cols-2 grid md:h-[100vh]'>
        <div className=' md:pt-20  lg:ml-28 '>
            <h1 className=' lg:text-7xl text-6xl leading-snug font-semibold hidden md:block mt-20 '>Moodly<span className='text-[#549CE1]'>.</span></h1>

            <p className='md:text-xl text-3xl md:mt-10 -mt-8 md:text-gray-700 text-black font-bold mx-2 text-center md:text-left'>Track your mood with Moodly</p>
            <p className='md:mt-14 mt-3 md:text-xl text-2xl text-gray-400 text-center md:text-left  '>Moodly is a free and easy to use daily mood tracker </p>

            <div className='flex justify-center items-center  mt-10 gap-5'>

            <button className='  bg-[#FF4967] rounded-full p-[2px] md:w-[180px] w-[150px] h-[70px] px-8 py-3' >

<p className=' text-white text-center mx-auto font-medium'>Instructor</p>


</button>

<button className='    bg-white text-[#FF4967] border-2 border-[#FF4967] rounded-full p-[2px] md:w-[180px] w-[150px] h-[70px] px-8 py-3' >

<p className=' text-center mx-auto font-medium'>Student</p>


</button>

</div>
        </div>

        <div className=' order-first md:order-last overflow-hidden md:mt-1 mt-10'>

            <div className=' md:w-[1000px] w-[500px] -ml-16  '>
                <img
                src={"/mood4.png"}
                alt='contacts1'
                className='md:w-[750px]  '
                />
            </div>
            
        </div>
        </div>

    
       

        
    </div>
  )
}

export default Homehero