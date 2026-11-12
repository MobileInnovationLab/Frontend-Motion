"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  fadeInUp,
  scaleUp,
  staggerContainer,
} from "../../utils/animationVariants";
import { ROUTE_STEPS } from "../../constants/internshipConstants";

const RouteMapSection = ({ activeImage, activeSection, handleClick }) => {
  const currentStep =
    ROUTE_STEPS.find((item) => item.section === activeSection) || ROUTE_STEPS[1];

  return (
    <section>
      <motion.h1
        className="container mx-auto text-center xl:text-left font-[rubik] font-bold text-[28px] lg:text-[48px] text-slate-900 dark:text-[#F8FAFC]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Route Map Motionlab
      </motion.h1>

      <div className="mt-10 lg:mt-5">
        <div className="container mx-auto flex xl:flex-row flex-col gap-x-10 gap-y-8">
          {/* Sidebar Steps (Desktop) */}
          <motion.div
            className="w-full xl:w-1/3 hidden lg:flex flex-col gap-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {ROUTE_STEPS.map((item, index) => {
              const isActive = (activeSection || currentStep.section) === item.section;
              return (
                <motion.section
                  key={index}
                  variants={fadeInUp}
                  className={`flex items-center bg-white dark:bg-[#111827] border rounded-2xl xl:p-6 2xl:p-8 gap-x-5 cursor-pointer transition-all duration-200 ${
                    isActive
                      ? "border-2 border-[#C1271A] dark:border-[#EF4444] shadow-md bg-red-50/30 dark:bg-red-950/20"
                      : "border-gray-300 dark:border-[#1E293B] hover:border-red-300 dark:hover:border-red-500"
                  }`}
                  onClick={() => handleClick(item.image, item.section)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img src={item.icon} alt={`Logo ${item.title}`} className="w-10 h-10 shrink-0" />
                  <div>
                    <h2 className="text-[#C1271A] dark:text-[#EF4444] font-semibold text-sm">
                      {item.step}
                    </h2>
                    <h1 className="font-semibold text-base text-slate-900 dark:text-[#F8FAFC]">
                      {item.title}
                    </h1>
                  </div>
                </motion.section>
              );
            })}
          </motion.div>

          {/* Main Card: Left Map SVG/Image + Right Code Panel */}
          <motion.div
            className="w-full xl:w-2/3 bg-white dark:bg-[#111827] border border-gray-200 dark:border-[#1E293B] rounded-3xl overflow-hidden shadow-sm flex flex-col lg:flex-row"
            variants={scaleUp}
            animate="visible"
          >
            {/* Left side: Route Map Graphic */}
            <div className="w-full lg:w-[48%] bg-white dark:bg-[#0B0F19] flex items-center justify-center relative min-h-[340px] sm:min-h-[400px] lg:min-h-[500px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.section}
                  className="w-full h-full flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={currentStep.cardImage || currentStep.image}
                    alt={currentStep.title}
                    className="w-full h-full object-cover select-none"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right side: Red Detail Panel with Code */}
            <div className="w-full lg:w-[52%] bg-[#C2271A] dark:bg-[#991B1B] text-white p-7 sm:p-9 lg:p-11 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.section}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col"
                >
                  <h2 className="font-[rubik] font-bold text-2xl lg:text-[28px] text-white mb-6 tracking-tight">
                    {currentStep.detailTitle}
                  </h2>

                  <div className="flex flex-col gap-y-5">
                    {currentStep.items.map((sub, idx) => (
                      <div key={idx} className="flex flex-col gap-y-1.5">
                        <h3 className="font-bold text-sm lg:text-base text-white tracking-wide uppercase">
                          {sub.title}
                        </h3>
                        <p className="text-white/90 text-xs lg:text-[14px] leading-relaxed font-normal">
                          {sub.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Mobile Steps Tabs */}
          <motion.div className="grid grid-cols-2 gap-3 mt-4 lg:hidden">
            {ROUTE_STEPS.map((item, index) => {
              const isActive = (activeSection || currentStep.section) === item.section;
              return (
                <section
                  key={index}
                  className={`flex items-center bg-white dark:bg-[#111827] border rounded-xl p-3.5 gap-x-3 cursor-pointer transition-colors duration-200 ${
                    isActive
                      ? "border-2 border-[#C1271A] dark:border-[#EF4444] bg-red-50/40 dark:bg-red-950/20"
                      : "border-gray-300 dark:border-[#1E293B] hover:border-red-300"
                  }`}
                  onClick={() => handleClick(item.image, item.section)}
                >
                  <img
                    src={item.icon}
                    alt={`Logo ${item.title}`}
                    className="w-8 h-8 shrink-0"
                  />
                  <div>
                    <h2 className="text-[#C1271A] dark:text-[#EF4444] font-semibold text-xs">
                      {item.step}
                    </h2>
                    <h1 className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-[#F8FAFC] line-clamp-1">
                      {item.title}
                    </h1>
                  </div>
                </section>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RouteMapSection;
