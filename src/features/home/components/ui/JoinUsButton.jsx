import React from 'react';

const JoinUsButton = ({ children, className = "" }) => (
  <button
    className={`bg-[#e5e7eb] flex items-center justify-center gap-x-2 sm:gap-x-3 text-[#F82F1E] font-bold text-center font-[inter] text-sm sm:text-base rounded-full px-5 py-3 sm:px-8 sm:py-4 transition hover:scale-105 whitespace-nowrap cursor-pointer ${className}`}
  >
    {children}
  </button>
);

export default JoinUsButton; 