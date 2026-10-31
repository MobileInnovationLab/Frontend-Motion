import React from 'react';

const SectionTitle = ({ subtitle, title, description }) => (
  <>
    <h3 className="text-center font-[rubik] text-red-500 dark:text-[#EF4444] text-[14px] lg:text-[18px]">
      {subtitle}
    </h3>
    <h1 className="text-center font-[rubik] font-bold text-[28px] lg:text-[48px] text-slate-900 dark:text-[#F8FAFC]">
      {title}
    </h1>
    {description && (
      <p className="font-[inter] text-lg text-center text-[#6A6A6A] dark:text-[#CBD5E1]">
        {description}
      </p>
    )}
  </>
);

export default SectionTitle; 