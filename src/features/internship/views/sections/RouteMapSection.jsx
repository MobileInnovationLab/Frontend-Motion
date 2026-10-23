"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  fadeInUp,
  scaleUp,
  staggerContainer,
} from "../../utils/animationVariants";
import { ROUTE_STEPS } from "../../constants/internshipConstants";

const RouteMapSection = ({ activeImage, activeSection, handleClick }) => {
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
        <div className="container mx-auto flex xl:flex-row flex-col gap-x-10">
          {/* Sidebar Steps */}
          <motion.div
            className="w-1/3 hidden lg:flex flex-col gap-y-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {ROUTE_STEPS.map((item, index) => (
              <motion.section
                key={index}
                variants={fadeInUp}
                className={`flex items-center bg-white dark:bg-[#111827] border rounded-2xl xl:p-6 2xl:p-9 gap-x-5 cursor-pointer transition-colors duration-200 ${
                  activeSection === item.section
                    ? "border-2 border-[#C1271A] dark:border-[#EF4444]"
                    : "border-gray-400 dark:border-[#1E293B] hover:border-red-300 dark:hover:border-red-500 active:border-[#C1271A]"
                }`}
                onClick={() => handleClick(item.image, item.section)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <img src={item.icon} alt={`Logo ${item.title}`} />
                <div>
                  <h2 className="text-[#C1271A] dark:text-[#EF4444] font-semibold text-sm">
                    {item.step}
                  </h2>
                  <h1 className="font-semibold text-base text-slate-900 dark:text-[#F8FAFC]">{item.title}</h1>
                </div>
              </motion.section>
            ))}
          </motion.div>

          {/* Main Image Preview */}
          <motion.div
            className="w-full bg-white dark:bg-[#111827] border border-transparent dark:border-[#1E293B] rounded-3xl overflow-hidden"
            variants={scaleUp}
            animate="visible"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={activeImage}
                alt="Selected Step"
                className="w-full rounded-3xl object-cover"
                initial={{ opacity: 0, x: 10, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, x: 5, y: 10 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </motion.div>

          {/* Mobile Steps */}
          <motion.div className="grid grid-cols-2 gap-4 mt-8 lg:hidden">
            {ROUTE_STEPS.map((item, index) => (
              <section
                key={index}
                className={`flex items-center bg-white dark:bg-[#111827] border rounded-2xl p-4 gap-x-4 cursor-pointer transition-colors duration-200 ${
                  activeSection === item.section
                    ? "border-2 border-[#C1271A] dark:border-[#EF4444]"
                    : "border-gray-400 dark:border-[#1E293B] hover:border-red-300 dark:hover:border-red-500 active:border-[#C1271A]"
                }`}
                onClick={() => handleClick(item.image, item.section)}
              >
                <img
                  src={item.icon}
                  alt={`Logo ${item.title}`}
                  className="w-10 h-10"
                />
                <div>
                  <h2 className="text-[#C1271A] dark:text-[#EF4444] font-semibold text-sm">
                    {item.step}
                  </h2>
                  <h1 className="font-semibold text-base text-slate-900 dark:text-[#F8FAFC]">{item.title}</h1>
                </div>
              </section>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default RouteMapSection;
