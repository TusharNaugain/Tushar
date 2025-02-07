import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Brain, Code, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import NavBar from '../components/Navbar'

const images = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200",
  "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&w=1200",
];


const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (

    <div>
    < NavBar/>
 


    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section with Carousel */}
      <div className="relative h-[60vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full object-cover"
            alt="Tech showcase"
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black">
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
            <button
              onClick={prevImage}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-600"
            >
              ATBUZZ

            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300"
            >
      WHERE CREATIVITY MEETS STRATEGY Thriving on authentic connections and compelling storytelling to elevate brands, delivering creative, tailored solutions that resonate and drive results.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <Rocket className="w-8 h-8" />,
              title: "Creative Services",
              description: "From Ideas to Impact: Turning Challenges Into Solutions",
            },
            {
              icon: <Brain className="w-8 h-8" />,
              title: "Marketing & Branding",
              description: "You've worked hard to build your brand. Now, let us help you take it to the next level. From shaping your identity to creating campaigns that truly resonate, we ensure your brand not only stands out but stays in the hearts of your audience.",
            },
            {
              icon: <Code className="w-8 h-8" />,
              title: "Marketing & Branding",
              description: "You've worked hard to build your brand. Now, let us help you take it to the next level. From shaping your identity to creating campaigns that truly resonate, we ensure your brand not only stands out but stays in the hearts of your audience",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-all duration-300"
            >
              <div className="mb-4 text-purple-400">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 py-20"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 inline-flex items-center gap-2">
            Our Vision <Sparkles className="w-8 h-8 text-yellow-400" />
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
          To be the most trusted partner, bridging brands and audiences with innovative strategies and authentic connections.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-lg"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
          Empowering businesses to build meaningful brand-audience connections through innovative strategies, creativity, and data-driven insights, ensuring measurable success.
          </p>
        </motion.div>
      </motion.div>
    </div>
    </div>
  );
};

export default About;