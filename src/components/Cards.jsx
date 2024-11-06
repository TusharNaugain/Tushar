import React from 'react'
import buzz from '../assets/logo.png'

function Cards() {
  return (
    <div className='w-full h-full bg-yellow flex flex-col md:flex-row items-center px-5 md:px-10 gap-5 overflow-hidden rounded-3xl mt-20 ' >
        <div className='cardcontainer h-1/2 w-full md:h-[50vh] md:w-1/2'>
        <div className='card relative rounded-md w-full h-full flex items-center justify-center  bg-yellow-300'>
            <img className='w-40' src={buzz} alt="" />
            <button className='absolute left-10 px-5 py-1 rounded-3xl border-2 bottom-10 text-xl font-founders  '>&copy; Connect</button>
        </div>
        </div>
        <div className='cardcontainer flex gap-5 h-1/2 md:h-[50vh] w-full md:w-1/2'>
        <div className='card w-1/2 rounded-md h-full  bg-yellow-200'></div>
        <div className='card w-1/2 rounded-md h-full  bg-yellow-300'></div>
        </div>
    </div>
  )
}

export default Cards