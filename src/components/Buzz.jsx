import React, { useEffect, useState } from 'react'

function buzz() {
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let deltaX = mouseX - window.innerWidth / 4;
            let deltaY = mouseY - window.innerHeight / 4;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

            setRotate(angle )

        })
    })
    return (
        <div   className='buzz   flex w-full h-full'>
            <div  className="w-full h-full  bg-[#FDF135] rounded-t-3xl "
            >
                
                <div className=' absolute text-[12vw] leading-none font-founders uppercase -ml-[5.8vw]  top-[7vw] left-[20vw]  text-[#FF5677]  '>
                AT
            </div>
                <div className=" absolute top-[30vw] left-[20vw] -translate-x-[50%] -translate-y-[50%] " >
                <div className= '  bg-black  w-[12vw] rounded-md '>
                    <div className=' flex items-center  rounded-full justify-center w-[18vw] h-[12vw]  bg-black' >
                        <div className='relative w-[15vw] h-[10vw]  rounded-r-full bg-[#FDF135]' >
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  h-20'>
                                <div className='absolute w-[2vw] h-[1vw] rounded-r-md bg-black'>
                                </div>
                            </div>
                        </div>


                    </div>




                    <div className=' flex items-center  rounded-full justify-center w-[19vw] h-[12vw]  bg-black' >
                        <div className='relative w-[15vw] h-[10vw] rounded-r-full bg-[#FDF135]' >
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]   h-20'>
                                <div className='absolute w-[2vw] h-[1vw] rounded-r-md  bg-black'>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

    )
}

export default buzz 