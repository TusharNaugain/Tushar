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

  return (
    <div className="relative m-auto w-full h-full overflow-hidden">
     
        {/* Map through the services array to dynamically create boxes */}
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`card inline-block h-[40vw] w-full align-middle bg-zinc-50  border-x-[1px] border-black relative`}
          >
            {/* Container for the heading and description */}
            <div className="relative text-left ml-8 text-xl h-full">
              {/* Service name */}
              <div className="absolute service-name mb-2 mt-[5vw] w-full font-founders text-[10vw] ">
                {service.name}
              </div>
              
              {/* Service description, hidden by default, becomes visible on hover */}
              <div
                className=" desc absolute service-description transition-opacity duration-300 ease-in-out over font-founders leading-tight w-[70vw] h-full  text-[5vw] pt-[20vw] "
                
              >
                {service.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    
  );
};

export default PropertyThumbnails;
