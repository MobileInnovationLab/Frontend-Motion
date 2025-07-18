import React from 'react';

const SortButtons = ({ onSortChange, currentSort }) => {
  return (
    <div className="flex flex-row justify-evenly w-full md:justify-start space-x-4">
      <button
        onClick={() => onSortChange('date')}
        className={`flex items-center justify-evenly w-full md:w-auto space-x-2 md:space-x-4 p-3 md:px-4 md:py-3 border border-[#858585] rounded-2xl md:rounded-[20px] transition-colors duration-200 ${
          currentSort === 'date' ? 'bg-[#C1271A]/10' : ''
        }`}
      >
        <img src="/svg/date.svg" className="w-4 h-4 md:w-5 md:h-5" alt="Sort by date" />
        <h4 className="font-[rubik] text-[#6A6A6A] text-sm md:text-xl">Sort by Date</h4>
      </button>
      <button
        onClick={() => onSortChange('name')}
        className={`flex items-center justify-between space-x-1 md:space-x-4 p-3 w-full md:w-auto border border-[#858585] rounded-2xl md:rounded-[20px] transition-colors duration-200 ${
          currentSort === 'name' ? 'bg-[#C1271A]/10' : ''
        }`}
      >
        <img src="/svg/sort-name.svg" className="w-4 h-4 md:w-5 md:h-5" alt="Sort by name" />
        <h4 className="font-[rubik] text-[#6A6A6A] text-sm md:text-xl">Sort by Name</h4>
        <img src="/svg/dropdown.svg" className="w-4 h-4" alt="Dropdown" />
      </button>
    </div>
  );
};

export default SortButtons; 