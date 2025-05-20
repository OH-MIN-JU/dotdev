import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { pricingOptions } from '../../constants/data';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  return (
    <div className="pricing-wrapper text-center">
      <SectionTitle whiteString="Optimize" indigoString="Your Pricing" />
      <div className="flex flex-wrap mt-20">
        {pricingOptions.map((option, idx) => (
          <div key={idx} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="border border-neutral-700 rounded-xl p-10 text-left">
              <p className="text-4xl mb-8">
                {option.title}
                {idx === 1 && (
                  <span className="text-xl bg-gradient-to-r from-indigo-800 to-indigo-300 text-transparent bg-clip-text">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p>
                <span className="text-4xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, idx) => (
                  <li key={idx} className="mt-8 flex gap-2 items-center">
                    <CheckCircle2 />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={option.to}
                className="mt-20 text-xl border border-indigo-600 rounded-lg w-full flex justify-center py-2 tracking-tight hover:bg-indigo-600 transition-all duration-300"
              >
                Subscribe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
