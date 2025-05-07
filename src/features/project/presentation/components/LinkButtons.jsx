import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LinkButtons = ({ buttons, onCopyLink }) => {
  return (
    <div className="flex gap-4 overflow-x-auto whitespace-nowrap no-scrollbar md:flex-wrap md:justify-start">
      {buttons.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="_blank"
          className="flex-shrink-0 flex items-center gap-2 border-2 border-solid border-[#C1271A] rounded-full px-4 py-2"
        >
          <Image src={item.icon} alt={item.label} width={24} height={24} />
          <span className="underline font-bold text-sm md:text-lg text-[#C1271A]">
            {item.label}
          </span>
        </Link>
      ))}
      <button
        onClick={onCopyLink}
        className="flex-shrink-0 flex items-center gap-2 border-2 border-solid border-[#C1271A] rounded-full px-4 py-2"
      >
        <Image src={buttons[0].icon} alt="Copy" width={24} height={24} />
        <span className="underline font-bold text-sm md:text-lg text-[#C1271A]">
          Copy Link
        </span>
      </button>
    </div>
  );
};

export default LinkButtons; 