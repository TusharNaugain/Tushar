import React from 'react';
import testimonialData from './testimonial.json'; // import the JSON data

const TestimonialCard = ({ imgSrc, name, designation, heading, review, dark }) => {
  return (
    <div className={`p-6 rounded-lg shadow-lg ${dark ? 'bg-white text-black' : 'bg-[#FDF135] text-black'}`}>
      <div className="flex">
        <div className="mr-4">
          <img className="rounded-full w-8 border-2 border-gray-200" src={imgSrc} alt={name} />
        </div>
        <div className="flex flex-col justify-center">
          <p className={`${dark ? 'text-black' : 'text-black'} text-sm font-semibold`}>{name}</p>
          <p className={`${dark ? 'text-black' : 'text-black text-opacity-50'} text-xs`}>{designation}</p>
        </div>
      </div>
      <div className="mt-6">
        <h4 className={`${dark ? 'text-black' : 'text-black'} text-lg font-semibold mb-4`}>{heading}</h4>
        <p className={`${dark ? 'text-black' : 'text-black text-opacity-50'} text-sm`}>{review}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="w-full h-fit bg-gray-100 flex items-center justify-center font-Sora font-[5vw]">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mx-[2vw] my-[2vw] auto-rows-auto">
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            imgSrc={testimonial.imgSrc}
            name={testimonial.name}
            designation={testimonial.designation}
            heading={testimonial.heading}
            review={testimonial.review}
            dark={testimonial.dark}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
