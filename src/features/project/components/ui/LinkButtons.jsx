import React from 'react';


const LinkButtons = ({ buttons, onCopyLink }) => {
  if (!buttons || buttons.length === 0) return null;

  return (
    <div className="flex gap-4 overflow-x-auto whitespace-nowrap no-scrollbar md:flex-wrap md:justify-start">
      {buttons.map((item, index) => (
        item.url && (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 border-2 border-solid border-[#C1271A] rounded-full px-4 py-2"
          >
            <span className="font-bold text-sm md:text-lg text-[#C1271A]">
              {item.label}
            </span>
          </a>
        )
      ))}
      <button
        onClick={onCopyLink}
        className="flex-shrink-0 flex items-center gap-2 border-2 border-solid border-[#C1271A] rounded-full px-4 py-2"
      >
        {/* <Image src={buttons[0].icon} alt="Copy" width={24} height={24} /> */}
        <span className="underline font-bold text-sm md:text-lg text-[#C1271A]">
          Copy Link
        </span>
      </button>
    </div>
  );
};

export default LinkButtons; 