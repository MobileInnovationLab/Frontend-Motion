import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearch, value = "" }) => {
  const [query, setQuery] = useState(value);

  useEffect(() => {
    setQuery(value);
  }, [value]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(query);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query, onSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative w-full flex items-center rounded-full bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] focus-within:border-[#EF4444] dark:focus-within:border-[#EF4444] shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.3)] px-5 py-3 md:py-3.5 transition-all duration-200">
        <span className="flex-shrink-0 text-slate-400 dark:text-[#64748B] mr-3">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>

        <input
          type="text"
          value={query}
          className="w-full bg-transparent text-slate-900 dark:text-[#F8FAFC] placeholder:text-[#64748B] text-base md:text-lg outline-none font-[inter]"
          placeholder="Search projects by title, team, or stack..."
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search MotionHack projects"
        />

        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="flex-shrink-0 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:text-[#64748B] dark:hover:text-[#F8FAFC] transition-colors focus:outline-none"
            aria-label="Clear search input"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>
    </form>
  );
};

export default SearchBar;

