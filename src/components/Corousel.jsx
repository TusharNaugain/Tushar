import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import 'tailwindcss/tailwind.css';

const PropertyThumbnails = () => {
  const galRef = useRef(null);
  const [mX2, setMX2] = useState(0);
  const [posX, setPosX] = useState(0);

  // Array containing the labels for the boxes and their respective descriptions
  const services = [
    { name: "Social Media", description: "Boost your brand visibility through tailored social media strategies.", bgColor: "#FDF135" },
    { name: "Performance Marketing", description: "Maximize ROI with data-driven performance marketing campaigns.", bgColor: "#FDF135" },
    { name: "Influencer", description: "Leverage the power of influencers to amplify your message.", bgColor: "#FDF135" },
    { name: "Public Relations", description: "Build trust and maintain your brand image with effective PR strategies.", bgColor: "#FDF135" },
  ];

  useEffect(() => {
    const $gal = galRef.current;
    const galW = $gal.offsetWidth;
    const galSW = $gal.scrollWidth;
    const wDiff = galSW / galW - 1; // Widths difference ratio
    const mPadd = 60; // Mousemove Padding
    const damp = 20; // Mousemove response softness
    const mmAA = galW - mPadd * 2; // The mousemove available area
    const mmAAr = galW / mmAA; // Get available mousemove difference ratio

    const handleMouseMove = (e) => {
      const mX = e.pageX - $gal.getBoundingClientRect().left;
      const modifiedMX2 = Math.min(Math.max(0, mX - mPadd), mmAA) * mmAAr;
      setMX2(modifiedMX2);
    };

    $gal.addEventListener('mousemove', handleMouseMove);

    const intervalId = setInterval(() => {
      setPosX((prevPosX) => prevPosX + (mX2 - prevPosX) / damp);
      $gal.scrollLeft = posX * wDiff;
    }, 10);

    return () => {
      $gal.removeEventListener('mousemove', handleMouseMove);
      clearInterval(intervalId);
    };
  }, [mX2, posX]);

  return (
    <div className="relative m-auto w-full h-[90vh] overflow-hidden">
      <motion.div
        ref={galRef}
        className="relative w-[1250px] h-[60vw] whitespace-nowrap overflow-x-scroll scrollbar-hidden"
      >
        {/* Map through the services array to dynamically create boxes */}
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`card inline-block h-[50vw] w-[33vw] align-middle bg-zinc-50  border-x-[1px] border-black relative`}
            whileHover={{
              scale: 1.1,
              backgroundColor: service.bgColor,
              color: '#fff',
              transition: { duration: 0.3 }
              
            }}
          >
            {/* Container for the heading and description */}
            <div className="relative text-center text-xl h-full">
              {/* Service name */}
              <motion.div className="absolute service-name mb-2 mt-[12vw] w-full font-founders text-[4vw] ">
                {service.name}
              </motion.div>
              
              {/* Service description, hidden by default, becomes visible on hover */}
              <motion.div
                className=" desc absolute service-description opacity-0 transition-opacity duration-300 ease-in-out over font-founders leading-tight w-full h-full  text-[3vh] pt-[20vw] "
                whileHover={{ opacity: 1 }}
              >
                {service.description}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PropertyThumbnails;
