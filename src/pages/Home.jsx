import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import LandingPage from '../components/Landingpage'
import Marq from '../components/Marq'
import'../assets/fonts.css'
import About from '../components/About'
import Buzz from '../components/Buzz'


import Cards from '../components/Cards'
import LocomotiveScroll from 'locomotive-scroll'; 
import gsap from 'gsap'
import Corousel from '../components/Corousel'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'


function App() {
  
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
      document.body.style.cursor = 'none';
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
      <div className='cursor fixed top-0 left-0 w-[15px] h-[15px] bg-black rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 ease-linear'></div>
      <div className='hidden md:block' >
      <Navbar />
      </div>
      <div className='block md:hidden' >
      <Sidebar />
      </div>
      <LandingPage/>
      <Marq/>
      <About/>
      <div className=' hidden md:block'>
      <Corousel/>
      </div>
      <Cards/>
      <Footer/>
    </div>
    </div>
  )
}

export default App