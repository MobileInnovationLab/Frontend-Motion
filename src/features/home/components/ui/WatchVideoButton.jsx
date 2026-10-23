import React from 'react';

const WatchVideoButton = ({ children, className = "" }) => (
  <button
    className={`bg-[#332C2B] flex gap-x-3 mt-2 text-white font-bold text-center text-[inter] text-base rounded-full px-8 py-4 transition hover:scale-105 ${className}`}
  >
    {children}
  </button>
);

export default WatchVideoButton; 