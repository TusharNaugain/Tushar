import React from 'react'
import { motion } from 'framer-motion'

function marq() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1'   className='w-full py-30 rounded-tl-3xl rounded-tr-3xl bg-white'>
      <div  className='text border-t-2 border-b-2 border-black flex whitespace-nowrap overflow-hidden'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:10}} className='text-[30vh] leading-none font-founders uppercase pt-2 -mt-6 pr-10 '>ATBUZZ</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:10}} className='text-[30vh] leading-none font-founders uppercase pt-2 -mt-6 pr-10'>ATBUZZ</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:10}} className='text-[30vh] leading-none font-founders uppercase pt-2 -mt-6 pr-10'>ATBUZZ</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:10}} className='text-[30vh] leading-none font-founders uppercase pt-2 -mt-6 pr-10'>ATBUZZ</motion.h1>
      </div>

    </div>

  )
}

export default marq