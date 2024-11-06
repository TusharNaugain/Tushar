import React, { useState, useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import'../assets/fonts.css'
import LocomotiveScroll from 'locomotive-scroll'; 
import gsap from 'gsap';
import AboutHero from '../components/AboutHero'
import Buzz from '../components/Buzz';
import TeamProject from './TeamProject';
import Testimonials from '../components/Testimonial/Testimonials';


function Work() {
  const [activeMenu, setActiveMenu] = useState(null)
  useEffect(() => {
    const main = document.querySelector(".main");
    const cursor = document.querySelector(".cursor");

    if (main && cursor) {
      main.addEventListener("mousemove", (dets) => {
        gsap.to(cursor, {
          x: dets.clientX,
          y: dets.clientY
          
        });
      });
      
    }

    const locomotiveScroll = new LocomotiveScroll();
    return () => {
      // Cleanup event listeners if necessary
      main.removeEventListener("mousemove", () => {});
      locomotiveScroll.destroy(); // Clean up LocomotiveScroll instance
    };
  }, []);
  return (
    <div>
     
    <div className=' main w-full h-screen text-black bg-white '>
      <div className='cursor fixed top-0 left-0 w-[15px] h-[15px] bg-black rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-linear'></div>
      <Navbar />
      <Buzz/>
      <AboutHero/>
      <TeamProject/>  
      <Testimonials/>

    </div>
    </div>
  )
}

export default Work