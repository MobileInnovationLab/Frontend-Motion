import React from "react";

const LinkButtons = ({ buttons, onCopyLink }) => {
  if (!buttons || buttons.length === 0) return null;

  return (
    <div className="flex gap-3 overflow-x-auto whitespace-nowrap no-scrollbar md:flex-wrap md:justify-start py-2">
      {buttons.map(
        (item, index) =>
          item.url && (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-2 border border-slate-300 dark:border-[#334155] bg-white dark:bg-[#111827] hover:border-[#EF4444] dark:hover:border-[#EF4444] rounded-full px-5 py-2.5 transition-colors shadow-sm group"
            >
              <span className="font-semibold text-sm md:text-base text-slate-800 dark:text-[#CBD5E1] group-hover:text-[#EF4444] dark:group-hover:text-[#F87171] transition-colors">
                {item.label}
              </span>
            </a>
          )
      )}
      <button
        onClick={onCopyLink}
        className="flex-shrink-0 flex items-center gap-2 border border-[#EF4444] bg-transparent text-[#EF4444] dark:text-[#F87171] hover:bg-[#EF4444] hover:text-white dark:hover:bg-[#EF4444] dark:hover:text-white rounded-full px-5 py-2.5 transition-all shadow-sm font-semibold text-sm md:text-base active:scale-95"
      >
        <span>Copy Link</span>
      </button>
    </div>
  );
};

export default LinkButtons;
 