import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <section className="container mx-auto flex justify-center py-12">
      <div className="space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`border ${
              currentPage === page
                ? 'border-[#C1271A] bg-[#C1271A] text-white'
                : 'border-[#E3E3E3] bg-white'
            } rounded-xl`}
          >
            <h1 className="font-[inter] px-4 py-2">{page}</h1>
          </button>
        ))}
        {currentPage < totalPages && (
          <button
            onClick={() => onPageChange(currentPage + 1)}
            className="border border-[#E3E3E3] rounded-xl bg-white"
          >
            <h1 className="font-[inter] px-4 py-2">Next</h1>
          </button>
        )}
      </div>
    </section>
  );
};

export default Pagination; 