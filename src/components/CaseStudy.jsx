import React, { useState } from 'react';
import dm from '../assets/dm.jpg';
import { motion, useAnimation } from 'framer-motion';
import { Power3 } from 'gsap';
import { useInView } from 'react-intersection-observer';

function Services() {
    const [hoveredId, setHoveredId] = useState(null); // Track the hovered card's ID
    const [selectedId, setSelectedId] = useState(null);

    // Dummy data for services
    const servicesData = [
        {
            id: '1',
            title: 'OLA',
            subtitle: 'Boost your online presence',
            image: dm,
        },
        {
            id: '2',
            title: 'Blink It',
            subtitle: 'Manage your public image',
            image: dm,
        },
        {
            id: '3',
            title: 'LensKart',
            subtitle: 'Boost your online presence',
            image: dm,
        },
        {
            id: '4',
            title: 'Adobe',
            subtitle: 'Manage your public image',
            image: dm,
        },
        // You can add more items here
    ];

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full h-fit py-10 md:py-20 bg-white overflow-hidden z-[9]'>
            {/* Mapping over the servicesData array */}
            <div className='w-full h-full flex-row'>
                <div className="cards w-full grid md:grid-cols-2 gap-10 mt-10 px-4 md:px-20">
                    {servicesData.map((service) => (
                        <Card 
                            key={service.id} 
                            service={service} 
                            hoveredId={hoveredId}
                            setHoveredId={setHoveredId}
                        />
                    ))}
                </div>
            </div>

            {/* Modal or expanded view for the selected card */}
        </div>
    );
}

const Card = ({ service, hoveredId, setHoveredId }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    React.useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { ease: Power3.easeInOut, duration: 0.6 }
            });
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
            onMouseEnter={() => setHoveredId(service.id)} // Set hovered ID on enter
            onMouseLeave={() => setHoveredId(null)} // Reset hovered ID on leave
            className='cardcontainer relative h-[80vw] md:h-[65vh] rounded-lg cursor-pointer'
        >
            <h1 className='absolute flex text-rose-400 h-full w-full justify-center items-center text-9xl tracking-tight font-founders'>
                {service.title.split('').map((letter, index) => (
                    <motion.span
                        className="inline-block"
                        initial={{ y: "100%" }}
                        animate={hoveredId === service.id ? { y: "0" } : { opacity: "0" }} // Animate based on hovered card
                        transition={{ ease: Power3.easeInOut, delay: index * .06 }}
                        key={index}
                    >
                        {letter}
                    </motion.span>
                ))}
            </h1>
            <div className='w-full h-full rounded-lg overflow-hidden'>
                <img className='w-full h-full bg-cover' src={service.image} alt={service.title} />
            </div>
        </motion.div>
    );
};

export default Services;
