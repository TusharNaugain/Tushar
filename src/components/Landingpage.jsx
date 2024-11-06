import React from 'react'
import { easeInOut, motion } from 'framer-motion'

function landingpage() {
  motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.3'  className='w-full h-screen bg-white pt-1'>
<div  className='textstructure mt-32 px-5 sm:px-20 '>
    {["Digital Buzz" ,"That Resonates" ,"Worldwide!"].map((item,index)=>{
       return <div className="masker overflow-hidden w-full bg-[#FDF135]" >
        <div className="  w-fit flex items-end overflow-hidden" >
            {index===1&&(<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.83, 0, 0.17, 1],duration:1}} className=" w-[8vw] sm:w-[12vw] md:w-[7vw]  rounded-md h-[12vw] md:h-[6vw] sm:h-[10vw] bg-[#FF5677] "></motion.div>)}
        <h1 className="uppercase text-[16vw] leading-[14vw] md:text-[9vw] sm:text-[12vw] md:leading-[7vw] sm:leading-[10vw] font-founders tracking-tight font-medium ">{item}</h1> 
        </div>
        </div>
    })}
    
</div>
{/* <div className='w-full bg-white mt-10'>
<div className='text border-t-2 border-b-2 border-[#FF5677] gap-40 flex whitespace-nowrap overflow-hidden'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:10}} className='text-[10vh] leading-none font-founders uppercase pt-2 -mt-3  '>time to buzz</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:10}} className='text-[10vh] leading-none font-founders uppercase pt-2 -mt-3 '>time to buzz</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:10}} className='text-[10vh] leading-none font-founders uppercase pt-2 -mt-3 '>time to buzz</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:10}} className='text-[10vh] leading-none font-founders uppercase pt-2 -mt-3 '>time to buzz</motion.h1>
      </div>

</div> */}
    </div>
  )
}

export default landingpage