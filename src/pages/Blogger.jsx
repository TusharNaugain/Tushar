import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import video from "../assets/atbuzz-b1FtR2aR.mp4";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img6 from "../assets/img6.jpg";
import photo from '../assets/photoshoot.png'
import img4 from "../assets/frontbm 3.28.57 PM.png";
import img5 from "../assets/partners.png";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Define inline styles here to be used in the components
const styles = {
  fullScreen: {
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: '#f8f8f8',
    padding: '20px',
    boxSizing: 'border-box'
  },
  fullWidth: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    padding: '20px 0',
    margin: '0 auto',
    boxSizing: 'border-box'
  },
  header: {
    position: 'fixed',
    top: 40,
    left: 0,
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 1000,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    boxSizing: 'border-box'
  },
  content: {
    paddingTop: '60px',
    paddingBottom: '20px'
  },
  logo: {
    maxWidth: '1000px',
    maxHeight: '1200px',
    display: 'block',
    margin: 'auto'
  }
};

const App = () => {
  return (
    <div style={styles.fullScreen}>
      <div style={styles.header}>
        <Navbar />
      </div>
      <div style={styles.content}>
        <HeroSection />
        <ContentAndImpactSections />
       <BloggersSection/>
       <Bloggers/>
        <CollaborationCarousel />
      </div>
      <Footer />
    </div>
  );
};

const HeroSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative h-screen">
      <video ref={videoRef} className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <button onClick={togglePlayPause}>
          {isPlaying ? (
            <span>Pause</span>
          ) : (
            <span>Play</span>
          )}
        </button>
      </div>
    </div>
  );
};

const ContentAndImpactSections = () => {
  return (
    <div style={styles.fullWidth}>
      <div className="max-w-7xl mx-auto">
        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
          <h1 className="text-[7vw] sm:text-[3vw] md:text-[4vw] font-sora">Let's Talk About it!</h1>
            <p className="text-lg text-gray-800">

              Bloggers' Mela has hosted vibrant meet-and-greet events across <span className="text-blue-600 underline">seven</span> cities, 
              creating a unique space for bloggers to connect and swap personal stories. Beyond just networking, 
              it's a lively spot where bloggers can gain insights and inspiration from more experienced peers. 
              This platform lets bloggers collaborate on projects, build meaningful relationships, and open doors 
              to fresh opportunities as they navigate the ever-evolving blogging world.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src={img2}
              alt="Happy bloggers meeting"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute inset-0 border-[3px] border-yellow-400 rounded-lg transform rotate-3 -z-10"></div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={photo}
              alt="Group of bloggers at an event"
              className="rounded-lg shadow-xl w-full"
            />
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">THE STUDIO OF CREATIVITY</h2>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-4 bg-black rounded-full"></div>
                <h3 className="text-xl font-semibold">Ensuring seamless collaboration and faster turnaround times. Our In-house studio is a creative hub where ideas come to life. It's where strategy meets artistry, crafting campaigns that transform brands into unforgettable stories.</h3>
              </div>
              
            
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
          </div>
          </div>
          </div>
          </div>
          </div>
          
  );
};

const BloggersSection = () => {
  const [showDetail, setShowDetail] = useState({
    networking: false,
    knowledge: false,
    motivation: false
  });

  // Function to handle mouse enter and leave events
  const handleHover = (section, isVisible) => {
    setShowDetail(prev => ({ ...prev, [section]: isVisible }));
  };

  return (
    <div className="w-full h-screen py-20 bg-white rounded-tl-3xl rounded-tr-3xl p-5 sm:p-5 md:p-20 z-99 font-Sora mb-20">
       <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
          <h1 className="text-[7vw] sm:text-[3vw] md:text-[4vw] font-sora">Let's Talk About it!</h1>
            <p className="text-lg text-gray-800">

              Bloggers' Mela has hosted vibrant meet-and-greet events across <span className="text-blue-600 underline">seven</span> cities, 
              creating a unique space for bloggers to connect and swap personal stories. Beyond just networking, 
              it's a lively spot where bloggers can gain insights and inspiration from more experienced peers. 
              This platform lets bloggers collaborate on projects, build meaningful relationships, and open doors 
              to fresh opportunities as they navigate the ever-evolving blogging world.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src={img3}
              alt="Happy bloggers meeting"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute inset-0 border-[3px] border-yellow-400 rounded-lg transform rotate-3 -z-10"></div>
          </div>
        </div>
      <div className="md:flex gap-5 pt-14">
        <div className="w-full md:w-1/2 md:h-[22vw] rounded-xl">
          <img className="rounded-xl" src={img2} alt="bloggers" />
        </div>
        <div className="w-full md:w-1/2 overflow-hidden mt-10 md:mt-0">
          <h1 className="text-[7vw] sm:text-[3vw] md:text-[2vw] font-sora mb-5">How is it impacting the bloggers' community?</h1>
          <div className="w-full">
            <button 
              className="w-full border-b-2 border-gray-300 pb-6 text-left focus:outline-none" 
              onMouseEnter={() => handleHover('networking', true)}
              onMouseLeave={() => handleHover('networking', false)}
            >
              <div className="text-lg font-semibold">Networking Opportunities</div>
              {showDetail.networking && <div className="mt-3 text-gray-700">Expand your network by meeting new people in the industry.</div>}
            </button>
            <button 
              className="w-full border-b-2 border-gray-300 pb-6 text-left mt-6 focus:outline-none" 
              onMouseEnter={() => handleHover('knowledge', true)}
              onMouseLeave={() => handleHover('knowledge', false)}
            >
              <div className="text-lg font-semibold">Knowledge Sharing & Learning</div>
              {showDetail.knowledge && <div className="mt-3 text-gray-700">Gain insights and learn from the experiences of others.</div>}
            </button>
            <button 
              className="w-full border-b-2 border-gray-300 pb-6 text-left mt-6 focus:outline-none" 
              onMouseEnter={() => handleHover('motivation', true)}
              onMouseLeave={() => handleHover('motivation', false)}
            >
              <div className="text-lg font-semibold">Motivation and Inspiration</div>
              {showDetail.motivation && <div className="mt-3 text-gray-700">Get inspired to take your blogging to the next level.</div>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Bloggers = () => {
  const [showDetail, setShowDetail] = useState({
    networking: false,
    knowledge: false,
    motivation: false
  });

  // Function to handle mouse enter and leave events
  const handleHover = (section, isVisible) => {
    setShowDetail(prev => ({ ...prev, [section]: isVisible }));
  };

  return (
    <div className="w-full h-screen py-20 bg-white rounded-tl-3xl rounded-tr-3xl p-5 sm:p-5 md:p-20 z-99 font-Sora mb-20">
       <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
          <h1 className="text-[7vw] sm:text-[3vw] md:text-[4vw] font-sora">Let's Talk About it!</h1>
            <p className="text-lg text-gray-800">

              Bloggers' Mela has hosted vibrant meet-and-greet events across <span className="text-blue-600 underline">seven</span> cities, 
              creating a unique space for bloggers to connect and swap personal stories. Beyond just networking, 
              it's a lively spot where bloggers can gain insights and inspiration from more experienced peers. 
              This platform lets bloggers collaborate on projects, build meaningful relationships, and open doors 
              to fresh opportunities as they navigate the ever-evolving blogging world.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src={img1}
              alt="Happy bloggers meeting"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute inset-0 border-[3px] border-yellow-400 rounded-lg transform rotate-3 -z-10"></div>
          </div>
        </div>
      <div className="md:flex gap-5 pt-14">
        <div className="w-full md:w-1/2 md:h-[22vw] rounded-xl">
        <img
            className="rounded-xl"
                 src={img6}
                  alt="bloggers"

                 ></img>
     </div>
        <div className="w-full md:w-1/2 overflow-hidden mt-10 md:mt-0">
          <h1 className="text-[7vw] sm:text-[3vw] md:text-[2vw] font-sora mb-5">How is it impacting the Blogger's Brands?

</h1>
          <div className="w-full">
            <button 
              className="w-full border-b-2 border-gray-300 pb-6 text-left focus:outline-none" 
              onMouseEnter={() => handleHover('networking', true)}
              onMouseLeave={() => handleHover('networking', false)}
            >
              <div className="text-lg font-semibold">Increased visibility

</div>
              {showDetail.networking && <div className="mt-3 text-gray-700">Attending blogger events helps bloggers get noticed within their community and the industry.


</div>}
            </button>
            <button 
              className="w-full border-b-2 border-gray-300 pb-6 text-left mt-6 focus:outline-none" 
              onMouseEnter={() => handleHover('knowledge', true)}
              onMouseLeave={() => handleHover('knowledge', false)}
            >
              <div className="text-lg font-semibold">Networking with brands</div>
              {showDetail.knowledge && <div className="mt-3 text-gray-700">These events attract brands seeking influencer collaborations and partnerships.</div>}
            </button>
            <button 
              className="w-full border-b-2 border-gray-300 pb-6 text-left mt-6 focus:outline-none" 
              onMouseEnter={() => handleHover('motivation', true)}
              onMouseLeave={() => handleHover('motivation', false)}
            >
              <div className="text-lg font-semibold">Establishing authority and expertise</div>
              {showDetail.motivation && <div className="mt-3 text-gray-700">Speaking or participating in panels at events can position a blogger as an
                expert in their niche.</div>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CollaborationCarousel = () => {
  // Adding padding at the top and possibly adjusting other styles
  const carouselStyle = {
    ...styles.fullWidth,
    paddingTop: '100px',  // Adjust this value as needed to move the carousel down
    paddingBottom: '100px'  // Optional: Adds padding at the bottom if needed
  };

  return (
    <div style={carouselStyle}>
      <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={3000}>
        <div>
          <img src={img5} alt="Company Logo 1" style={styles.logo} />
        </div>
        <div>
          <img src={img4} alt="Company Logo 2" style={styles.logo} />
        </div>
        <div>
          <img src={img5} alt="Company Logo 3" style={styles.logo} />
        </div>
      </Carousel>
    </div>
  );
};


export default App;
