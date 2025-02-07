import React from 'react';
import { ChevronRight, Sparkles, Target, Zap } from 'lucide-react';

function About() {
  return (
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed='-0.1' 
      className='w-full min-h-[120vh] py-20 bg-[#FF5677] rounded-tl-3xl rounded-tr-3xl p-5 sm:p-5 md:p-20 z-[99] relative overflow-hidden'
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 animate-spin-slow">
        <Sparkles className="w-12 h-12 text-[#FDF135]" />
      </div>
      <div className="absolute bottom-20 left-10 animate-bounce-slow">
        <Target className="w-16 h-16 text-[#FDF135] opacity-50" />
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto">
        <h1 className='font-Sora text-[5vw] sm:text-[3vw] sm:leading-[4vw] md:text-[2vw] leading-[8vw] md:leading-[2.5vw] animate-fade-in'> 
          <span className="text-[#FDF135]">AtBuzz</span> is your go-to squad for making waves in the digital space! Whether you're a blogger trying to flex your influence or a brand looking to level up your marketing game, we've got you covered. We're all about helping bloggers collab with dope brands and getting your PR on point.
        </h1>

        <div className='flex flex-col md:flex-row gap-10 w-full border-t-[2px] mt-16 pt-10 border-[#f08ca0]'>
          <div className='w-full md:w-1/2 space-y-8'>
            <h1 className='text-[7vw] sm:text-[3vw] md:text-[4vw] font-sora text-[#FDF135]'>
              Our Approach:
            </h1>
            
            {/* Feature cards */}
            <div className="space-y-4">
              {[
                { icon: Zap, title: "Lightning Fast Results" },
                { icon: Target, title: "Targeted Strategies" },
                { icon: Sparkles, title: "Creative Solutions" }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="bg-[#f08ca0] bg-opacity-20 p-4 rounded-lg flex items-center gap-4 transform hover:translate-x-2 transition-transform duration-300"
                  >
                    <Icon className="w-6 h-6 text-[#FDF135]" />
                    <span className="text-white font-medium">{feature.title}</span>
                  </div>
                );
              })}
            </div>

            <button className='group flex items-center gap-2 px-8 py-3 bg-[#FDF135] rounded-full text-black font-Sora text-sm md:text-base transition-all duration-300 hover:gap-4 hover:pr-10'> 
              Read More
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </button>
          </div>

          <div className='w-full md:w-1/2 h-[50vh] md:h-[25vw] rounded-xl bg-[#FDF135] relative overflow-hidden group transition-all duration-500 hover:shadow-2xl'>
            {/* Interactive elements inside the yellow box */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 p-8 w-full h-full">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div 
                    key={i}
                    className="bg-[#FF5677] bg-opacity-10 rounded-lg transform transition-transform duration-300 hover:scale-110"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;