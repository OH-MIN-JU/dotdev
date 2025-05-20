import React from 'react';

const SectionTitle = ({ whiteString, indigoString }) => {
  return (
    <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
      {whiteString}{' '}
      <span className="bg-gradient-to-r from-indigo-300 to-indigo-800 text-transparent bg-clip-text">
        {indigoString}
      </span>
    </h2>
  );
};

export default SectionTitle;
