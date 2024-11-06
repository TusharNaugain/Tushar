import React from 'react';
import { teamMembers } from './Data';

export default function Projects({ setActiveMenu }) {
  return (
    <div id="team" className="section relative pt-20 pb-8 md:pt-16 w-full font-Sora  bg-white ">
      <div className="container xl:max-w-full px-4 ">
        {/* Section header */}
        <header className="text-center mx-auto mb-12 w-full items-center justify-center">
          <h2 className="text-6xl leading-normal mb-2 font-bold  text-grey-800 ">
            <span className="font-light">Our</span> Team
          </h2>
        </header>
        {/* Row */}
        <div className="flex flex-wrap flex-row  justify-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex-shrink max-w-full w-full sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-0 border-[1px]">
              <div className="relative overflow-hidden bg-[#FDF135]  hover-grayscale-0">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    className="w-full h-full   bg-gray-50 grayscale"
                    alt={member.name}
                  />
                </div>
                <div className="pt-6 px-2 text-start">
                  <p className="text-lg leading-normal font-bold mb-1">{member.name}</p>
                  <p className="text-gray-500 leading-relaxed font-light">{member.role}</p>
                  <div className="flex gap-5 mt-2 mb-5 space-x-2 justify-start items-start">
                    {member.socials.map((social, index) => (
                      <a key={index} className="hover:text-blue-700" aria-label={`${social.platform} link`} href={social.link}>
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
