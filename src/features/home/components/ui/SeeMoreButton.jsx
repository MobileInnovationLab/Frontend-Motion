import React from 'react';

const SeeMoreButton  = ({ children, className = "" }) => (
  <button
    className={`w-full border border-[#C1271A] hover:bg-[#C1271A] text-[#C1271A] hover:text-white dark:border-[#EF4444] dark:text-[#EF4444] dark:hover:bg-[#EF4444] dark:hover:text-white font-[rubik] rounded-full py-2 px-4 md:py-2 md:px-2 text-base md:text-xl font-bold transition duration-300 ease-in-out cursor-pointer ${className}`}
  >
    {children}
  </button>
);

export default SeeMoreButton ; 