"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "../../utils/animationVariants";
import { CURRICULUMS } from "../../constants/internshipConstants";

const CurriculumSection = ({ curriculumRef }) => {
  return (
    <section id="curriculum" ref={curriculumRef} className="container mx-auto">
      <motion.h3
        className="text-center font-[rubik] text-red-500 text-[14px] lg:text-[18px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        CURRICULUM
      </motion.h3>
      <motion.h1
        className="text-center font-[rubik] font-bold text-[28px] lg:text-[48px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        What do you want to learn?
      </motion.h1>

      <motion.div
        className="flex flex-col lg:flex-row gap-y-10 gap-x-8 mt-14"
        variants={staggerContainer}
        initial="initial"
        animate="visible"
      >
        {CURRICULUMS.map((curriculum, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <Link
              className="bg-white pb-10 w-full transition duration-200"
              href={curriculum.href}
            >
              <motion.div
                className="relative group hover:cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  className="w-full transition duration-200 ease-in-out"
                  src={curriculum.image}
                  alt={`Curriculum ${curriculum.title}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex justify-end items-end">
                  <span className="flex p-2 gap-x-1 text-white font-semibold text-[14px]">
                    Lihat lebih banyak
                    <img src="/svg/detail-arrow-right.svg" alt="arrow-detail" />
                  </span>
                </div>
              </motion.div>
              <div className="p-4 cursor-default">
                <div className="flex items-center gap-x-2">
                  <img
                    className="w-10 h-10"
                    src={curriculum.logo}
                    alt={`logo-${curriculum.title.toLowerCase()}`}
                  />
                  <h2 className="text-[rubik] font-semibold text-[22px] my-3">
                    {curriculum.title}
                  </h2>
                </div>
                <p className="text-[#6A6A6A] text-inter text-[16px]">
                  {curriculum.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
export default CurriculumSection;
