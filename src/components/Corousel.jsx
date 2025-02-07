import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Zap, Target, Users, Megaphone } from 'lucide-react';

const services = [
  {
    name: "Social Media",
    description: "At ATBuzz, we specialize in crafting unique, audience-focused social media strategies that bring your brand's voice to life.",
    icon: <Users className="w-12 h-12" />,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Performance Marketing",
    description: "ATBuzz delivers results-driven performance marketing, focusing on high ROI through paid search, display ads, and affiliate marketing.",
    icon: <Target className="w-12 h-12" />,
    color: "from-cyan-500 to-blue-500"
  },
  {
    name: "Influencer Marketing",
    description: "At ATBuzz, we specialize in influencer marketing, creating campaigns that connect brands with the right audience.",
    icon: <Zap className="w-12 h-12" />,
    color: "from-yellow-500 to-orange-500"
  },
  {
    name: "Public Relations",
    description: "ATBuzz is dedicated to building trust and credibility for your brand through strategic, impactful PR.",
    icon: <Megaphone className="w-12 h-12" />,
    color: "from-green-500 to-emerald-500"
  }
];

function ServiceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + services.length) % services.length);
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl animate-pulse -top-48 -left-48"></div>
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-pink-500 to-red-500 rounded-full blur-3xl animate-pulse -bottom-48 -right-48"></div>
      </div>

      {/* Navigation Buttons */}
      <motion.button
        className="absolute left-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(-1)}
      >
        <ArrowLeft className="w-6 h-6" />
      </motion.button>

      <motion.button
        className="absolute right-4 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => paginate(1)}
      >
        <ArrowRight className="w-6 h-6" />
      </motion.button>

      {/* Carousel */}
      <div className="relative w-full max-w-4xl h-[600px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full"
          >
            <div className="w-full px-4">
              <motion.div
                className={`w-full h-[500px] rounded-2xl bg-gradient-to-br ${services[currentIndex].color} p-8 text-white shadow-2xl backdrop-blur-lg border border-white/10`}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="h-full flex flex-col items-center justify-between">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="p-6 bg-white/10 rounded-full backdrop-blur-sm"
                  >
                    {services[currentIndex].icon}
                  </motion.div>

                  {/* Content */}
                  <div className="text-center space-y-6">
                    <motion.h2
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-4xl font-bold tracking-tight"
                    >
                      {services[currentIndex].name}
                    </motion.h2>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg text-white/90 max-w-2xl"
                    >
                      {services[currentIndex].description}
                    </motion.p>
                  </div>

                  {/* Progress Dots */}
                  <div className="flex space-x-2">
                    {services.map((_, index) => (
                      <motion.div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentIndex ? 'bg-white' : 'bg-white/30'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        onClick={() => {
                          const direction = index - currentIndex;
                          setDirection(direction);
                          setCurrentIndex(index);
                        }}
                        style={{ cursor: 'pointer' }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ServiceCarousel;