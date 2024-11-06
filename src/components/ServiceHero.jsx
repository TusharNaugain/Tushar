import React from 'react'
import { easeInOut, motion } from 'framer-motion'

function landingpage() {
  motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.3'  className='w-full h-screen bg-white pt-1'>
<div  className=' textstructure mt-32  '>
    {["Our" ,"Services"].map((item,index)=>{
       return <div className=" masker overflow-hidden mx-10  md:mx-20 " >
        <div className=" flex items-end overflow-hidden  md:w-1/3 bg-[#FDF135] " >
        <h1 className="uppercase text-[24vw] leading-[14vw] sm:text-[6vw] sm:leading-[5vw]  md:text-[6vw] md:leading-[5vw] font-founders tracking-tight font-medium ">{item}</h1> 
        </div> 
        </div>
    })}
    <div className=' mt-[10vh] w-full h-[0.1vh] bg-zinc-400  '></div>
    <div className=' w-fit overflow-hidden text-[8vw] sm:text-[3vw] sm:leading-[4vw]  md:text-[2.5vw]  font-Sora leading-[8vw] md:leading-[3vw] mt-[2vh] mx-5 md:mx-20'>
    Our services focus on delivering cutting-edge solutions that streamline business processes and enhance operational efficiency. 
    </div> 
    <div className=' mt-[2vh] w-full h-[0.1vh] bg-zinc-400  '></div>
</div>
    </div>
  )
}

export default landingpage