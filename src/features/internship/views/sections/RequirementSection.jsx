"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../utils/animationVariants";
import { REQUIREMENTS } from "../../constants/internshipConstants";
import { useEffect, useState } from "react";

const RequirementSection = ({ requirementRef }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024); // <lg
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <section
      id="requirement"
      ref={requirementRef}
      className="container mx-auto"
    >
      <motion.h3
        className="text-center font-[rubik] text-red-500 text-[14px] lg:text-[18px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        REQUIREMENTS
      </motion.h3>
      <motion.h1
        className="text-center font-[rubik] font-bold text-[28px] lg:text-[48px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        What are the Requirements?
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 mt-14"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {REQUIREMENTS.map((item, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <div className="flex border-[2px] border-[#332C2B] border-solid rounded-full bg-white">
              <div className="bg-[#332C2B] text-white rounded-full p-5 px-7 lg:p-6 lg:px-8 font-semibold text-center align-center text-[inter] text-[32px]">
                {item.number}
              </div>
              <p className="align-center font-semibold text-[12px] lg:text-[14px] text-[#6A6A6A] my-auto mx-5">
                {item.text}
              </p>
            </div>
            {(isMobile ? index < REQUIREMENTS.length - 1 : index < 5) && (
              <div className="h-[50px] px-10 my-2">
                <img
                  src="/images/recruitment/requirement-line.png"
                  alt="line"
                  className="h-full object-contain"
                />
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default RequirementSection;
