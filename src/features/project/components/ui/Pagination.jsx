import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <section className="container mx-auto flex justify-center py-12">
      <div className="flex items-center space-x-2">
        {currentPage > 1 && (
          <button
            onClick={() => onPageChange(currentPage - 1)}
            aria-label="Previous Page"
            className="border border-slate-300 dark:border-[#1E293B] rounded-xl bg-white dark:bg-[#111827] text-slate-700 dark:text-[#CBD5E1] hover:border-[#EF4444] dark:hover:border-[#EF4444] hover:text-[#EF4444] dark:hover:text-[#F87171] transition-colors px-4 py-2 text-sm font-semibold"
          >
            Prev
          </button>
        )}

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            aria-label={`Page ${page}`}
            aria-current={currentPage === page ? "page" : undefined}
            className={`border rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              currentPage === page
                ? "border-[#EF4444] bg-[#EF4444] text-white shadow-md shadow-red-500/20"
                : "border-slate-300 dark:border-[#1E293B] bg-white dark:bg-[#111827] text-slate-700 dark:text-[#CBD5E1] hover:border-slate-400 dark:hover:border-[#334155] hover:text-slate-900 dark:hover:text-[#F8FAFC]"
            }`}
          >
            {page}
          </button>
        ))}

        {currentPage < totalPages && (
          <button
            onClick={() => onPageChange(currentPage + 1)}
            aria-label="Next Page"
            className="border border-slate-300 dark:border-[#1E293B] rounded-xl bg-white dark:bg-[#111827] text-slate-700 dark:text-[#CBD5E1] hover:border-[#EF4444] dark:hover:border-[#EF4444] hover:text-[#EF4444] dark:hover:text-[#F87171] transition-colors px-4 py-2 text-sm font-semibold"
          >
            Next
          </button>
        )}
      </div>
    </section>
  );
};

export default Pagination;
 