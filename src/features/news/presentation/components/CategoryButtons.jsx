import React from 'react';

const CategoryButtons = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex justify-center space-x-4 md:space-x-8">
      {categories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          className={`px-4 py-2 md:px-8 md:py-3 rounded-full w-full md:w-auto transition-colors duration-200 ${
            activeCategory === cat.id
              ? "bg-[#C1271A]"
              : "border border-[#C1271A] hover:bg-[#C1271A]/10"
          }`}
          onClick={() => onCategoryChange(cat.id)}
        >
          <h4
            className={`font-bold text-base md:text-lg font-[rubik] ${
              activeCategory === cat.id ? "text-white" : "text-[#C1271A]"
            }`}
          >
            {cat.title}
          </h4>
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons; 