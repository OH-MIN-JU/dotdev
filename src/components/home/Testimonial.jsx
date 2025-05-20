import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { testimonials } from '../../constants/data';

const Testimonial = () => {
  return (
    <div className="testimonial-wrapper text-center">
      <SectionTitle whiteString="What People" indigoString="Say About Us" />
      <div className="flex flex-wrap justify-center mt-20">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-white dark:bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 text-black dark:text-neutral-300">
              <p className="text-left">
                {testimonial.text.substring(0, 100) + '...'}
              </p>
              <div className="flex gap-8 mt-8">
                <img
                  src={testimonial.image}
                  alt="testimonial"
                  className="w-12 h-12 rounded-full border border-neutral-300"
                />
                <div className="text-left">
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
