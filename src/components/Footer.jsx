import React from 'react';
import { MapPin } from 'lucide-react';
import logo from '../assets/footerlogo.png';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Addresses Section */}
        <div className="space-y-6 flex-1">
          {/* Delhi Address */}
          <div className="group">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="text-[#E91E63] h-5 w-5" />
              <h3 className="text-[#E91E63] font-semibold">Delhi</h3>
            </div>
            <p className="text-gray-300 pl-7 transform transition-all duration-300 group-hover:translate-x-2">
              LG, I-1773, Block I, Chittaranjan Park,<br />
              New Delhi, Delhi 110019
            </p>
          </div>

          {/* Kolkata Address */}
          <div className="group">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="text-[#E91E63] h-5 w-5" />
              <h3 className="text-[#E91E63] font-semibold">Kolkata</h3>
            </div>
            <p className="text-gray-300 pl-7 transform transition-all duration-300 group-hover:translate-x-2">
              8/1/38, West Kamalapur,<br />
              West Bengal 700028
            </p>
          </div>
          <div className="group">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="text-[#E91E63] h-5 w-5" />
              <h3 className="text-[#E91E63] font-semibold">Mumbai</h3>
            </div>
            <p className="text-gray-300 pl-7 transform transition-all duration-300 group-hover:translate-x-2">
               Runwal Bliss, 604 KanjUrmarg East <br />
              Mumbai 4000422
       
            </p>
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex-1 flex flex-col items-center space-y-4">
          <img 
            src={logo}
            alt="AtBuzz Logo" 
            className="max-w-[390px] h-auto animate-fade-in"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;