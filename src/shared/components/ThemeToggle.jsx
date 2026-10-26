"use client";

import React, { useState } from "react";
import { useTheme } from "@/shared/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeToggle = ({ className = "" }) => {
  const { theme, isDark, toggleTheme, mounted } = useTheme();
  const [showTooltip, setShowTooltip] = useState(false);

  const ariaLabel = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
  const tooltipText = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";

  return (
    <div className={`relative inline-flex items-center ${className}`}>
      <motion.button
        type="button"
        id="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label={ariaLabel}
        aria-pressed={isDark}
        title={tooltipText}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 dark:border-[#1E293B] bg-white/90 dark:bg-[#111827] text-slate-800 dark:text-[#F8FAFC] shadow-sm hover:border-slate-300 dark:hover:border-[#334155] hover:shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#EF4444]"
      >
        <AnimatePresence mode="wait" initial={false}>
          {mounted && isDark ? (
            /* Sun Icon (☀️) for Dark Mode -> Transitions to Light */
            <motion.div
              key="sun"
              initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center justify-center text-amber-400"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </motion.div>
          ) : (
            /* Moon Icon (🌙) for Light Mode -> Transitions to Dark */
            <motion.div
              key="moon"
              initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center justify-center text-slate-700 dark:text-[#F8FAFC]"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Floating Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 -translate-x-1/2 top-12 z-50 px-3 py-1.5 text-xs font-medium text-white bg-slate-900 dark:bg-[#1E293B] border border-slate-700/50 rounded-lg shadow-xl whitespace-nowrap pointer-events-none"
            role="tooltip"
          >
            {tooltipText}
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 dark:bg-[#1E293B] border-t border-l border-slate-700/50 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeToggle;
