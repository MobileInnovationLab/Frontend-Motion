import React from 'react';

const DivisionCard = ({ icon, title, description }) => (
  <div className="w-full">
    <div className="w-full text-center relative bottom-[-4rem]">
      <div className="rounded-full inline-block">
        <img src={icon || "/placeholder.svg"} alt={title} />
      </div>
    </div>
    <div className="bg-white py-10 px-8 w-full rounded-xl md:rounded-2xl">
      <h2 className="font-[rubik] font-semibold text-xl md:text-2xl text-center mb-5 mt-14">
        {title}
      </h2>
      <p className="font-[inter] text-sm/6 md:text-lg/8 text-justify text-[#6A6A6A]">
        {description}
      </p>
    </div>
  </div>
);

export default DivisionCard; 