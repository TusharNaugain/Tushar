import React from 'react'

function about() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.1'  className='w-full h-[120vh] py-20 bg-[#FF5677] rounded-tl-3xl rounded-tr-3xl p-5 sm:p-5 md:p-20 z-[99] '>
        <h1 className='font-Sora text-[5vw] sm:text-[3vw] sm:leading-[4vw] md:text-[2vw] leading-[8vw] md:leading-[2.5vw]'> 
        AtBuzz is your go-to squad for making waves in the digital space! Whether you're a blogger trying to flex your influence or a brand looking to level up your marketing game, we’ve got you covered. We’re all about helping bloggers collab with dope brands and getting your PR on point.
        </h1>
        <div className=' flex gap-5 w-full border-t-[2px] mt-10 pt-10 border-[#f08ca0]' >
            <div className='w-1/2'>
            <h1 className=' text-[7vw] sm:text-[3vw]  md:text-[4vw] font-sora' >Our Approach:</h1>
            <button className='flex h-10 w-36  md:gap-5 items-center justify-center px-[2vw] md:px-[1vw] py-[2vw]  md:py-[1vw] bg-[#FDF135] rounded-full text-black mt-36 sm:mt-28 md:mt-5 font-Sora  text-[5vw] sm:text-[2vw] md:text-[1vw]' 
            >Read More
                <div className=' w-0 md:w-2  h-0 md:h-2 bg-black rounded-full'></div>
            </button>
            </div>
            <div className='w-1/2  md:h-[25vw] rounded-xl bg-[#FDF135]'></div>
        </div>
    </div>
  )
}

export default about