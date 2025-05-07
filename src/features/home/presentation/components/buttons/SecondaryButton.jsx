import React from 'react';

const SecondaryButton = ({ children, className = "" }) => (
  <button
    className={`w-full border border-[#C1271A] hover:border-none hover:bg-[#C1271A] text-[#C1271A] hover:text-white font-[rubik] rounded-full py-2 px-4 md:py-2 md:px-2 text-base md:text-xl font-bold transition duration-300 ease-in-out ${className}`}
  >
    {children}
  </button>
);

export default SecondaryButton; 