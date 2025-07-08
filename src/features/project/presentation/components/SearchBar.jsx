import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <form>
      <div className="relative w-full z-10">
        <button
          type="submit"
          className="absolute inset-y-0 start-6 flex items-center pointer-events-none"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="9.80565"
              cy="9.80547"
              r="7.49047"
              stroke="#6A6A6A"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.0154 15.4042L21 21"
              stroke="#6A6A6A"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <input
          type="text"
          className="text-[#6A6A6A] w-full text-lg rounded-full py-2 md:py-4 px-14 bg-[#EEEEEE] border border-[#6A6A6A] border-solid outline-none"
          placeholder="Search project"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar; 