import React from 'react';
import { features } from '../../constants/data';
import SectionTitle from '../common/SectionTitle';

const Features = () => {
  return (
    <div className="features-wrapper mt-20 border-b border-neutral-800">
      <div className="features-title text-center">
        <span className="text-indigo-500 py-1 px-2 text-sm font-medium uppercase rounded-full border border-neutral-500 bg-white dark:bg-neutral-800 dark:border-0">
          Features
        </span>
        <SectionTitle whiteString="Easily Build" indigoString="Your Codes" />
      </div>

      <div className="features-cards flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, idx) => (
          <div key={idx} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="w-10 h-10 bg-white dark:bg-neutral-800 text-indigo-700 p-2 mx-6 rounded-full border border-neutral-500 dark:border-0">
                <div>{feature.icon}</div>
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
