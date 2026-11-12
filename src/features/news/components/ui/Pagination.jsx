import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="space-x-2">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`border border-[#E3E3E3] dark:border-[#334155] rounded-xl transition-colors duration-200 ${
            currentPage === page
              ? 'bg-[#C1271A] text-white'
              : 'bg-white dark:bg-[#111827] text-slate-800 dark:text-[#CBD5E1]'
          }`}
        >
          <h1 className="font-[inter] px-4 py-2">{page}</h1>
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="border border-[#E3E3E3] dark:border-[#334155] rounded-xl bg-white dark:bg-[#111827] text-slate-800 dark:text-[#CBD5E1] transition-colors duration-200"
        >
          <h1 className="font-[inter] px-4 py-2">Next</h1>
        </button>
      )}
    </div>
  );
};

export default Pagination; 