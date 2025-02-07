import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define the array of links
  const links = [
    { name: "Services", href: "/services" },
    { name: "Work", href: "/work" },
    { name: "About Us", href: "/about" },
    { name: "Blogger", href: "/blogger" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="relative z-40 ">
      <nav className="bg-[#FF5677] h-[65px] relative">
        {/* Menu Icon */}
        <div className="flex flex-col p-6 space-y-1 cursor-pointer z-[999]" onClick={() => setIsOpen(!isOpen)}>
          <span className={`block w-7 h-0.5 transform transition duration-500 ${isOpen ? "rotate-45 translate-y-[2px] bg-[#FF5677]" : "bg-white"}`}></span>
          <span className={`block w-7 h-0.5 transform transition duration-500 ${isOpen ? "opacity-0 bg-[#FF5677]" : "bg-white"}`}></span>
          <span className={`block w-7 h-0.5 transform transition duration-500 ${isOpen ? "-rotate-45 -translate-y-[2px] bg-[#FF5677]" : "bg-white"}`}></span>
        </div>

        {/* Overlay to darken background when sidebar is open */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ${
            isOpen ? "opacity-100 z-30" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)} // Close sidebar when overlay is clicked
        ></div>
        
        {/* Sidebar Menu */}
        <ul
          className={`fixed top-0 left-0 h-full w-[250px] bg-gray-100 shadow-lg transform transition-transform duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] p-6 pt-[125px] z-40 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {links.map((link, index) => (
            <li key={index} className="py-2 text-gray-900 text-lg font-normal hover:opacity-50 transition-opacity duration-200">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
