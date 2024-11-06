'use client';
import { useEffect, useState } from "react";
import Scene from "../components/Scene";
import Projects from "../components/Team";
import Lenis from 'lenis';
import gsap from 'gsap'; // Ensure gsap is imported

export default function Home() {
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const main = document.querySelector(".main");
    const cursor = document.querySelector(".cursor");

    const handleMouseMove = (dets) => {
      gsap.to(cursor, {
        x: dets.clientX,
        y: dets.clientY,
      });
    };

    if (main && cursor) {
      main.addEventListener("mousemove", handleMouseMove);
       // Set cursor to none
    }

    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      if (main && cursor) {
        main.removeEventListener("mousemove", handleMouseMove);
      }
      document.body.style.cursor = 'auto'; // Reset cursor on cleanup
    };
  }, []);

  return (
    <main className="main"> {/* Add the main class for styling */}
      <div className="h-[50vh]"></div>
      <Projects setActiveMenu={setActiveMenu} />
      <Scene activeMenu={activeMenu} />
      <div className="h-[50vh]"></div>
    </main>
  );
}
