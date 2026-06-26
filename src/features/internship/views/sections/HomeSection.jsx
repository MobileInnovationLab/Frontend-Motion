"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = ({ homeRef }) => {
  return (
    <section
      id="internship-home"
      ref={homeRef}
      className="relative w-full bg-[url('/images/home/motion-lab.png')] bg-cover bg-no-repeat bg-[center_30%] sm:bg-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="absolute inset-0 bg-black opacity-70 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <div className="container w-full mx-auto flex flex-col items-start py-20 md:p-48 relative z-0">
        <motion.div
          className="font-bold font-[inter] text-[30px] lg:text-[60px] text-white text-left mb-2 lg:mb-0"
          initial={{ y: "50px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
        >
          Internship <br /> in Mobile Innovation Laboratory
        </motion.div>
        <motion.div
          className="font-normal font-[inter] text-[12px] lg:text-[25px] text-white text-left mb-5 lg:mb-8"
          initial={{ y: "30px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 1.5,
            bounce: 0.3,
            delay: 0.2,
          }}
        >
          Boost your skills with Mobile Innovation Laboratory, where {"you'll"}{" "}
          work on real-world projects in UI/UX, Mobile Programming, and Digital
          Business
        </motion.div>
        <motion.div
          initial={{ y: "20px", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            duration: 1.5,
            bounce: 0.3,
            delay: 0.4,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/register"
            passHref
            className="bg-[#F82F1E] font-bold text-white text-[inter] text-[12px] lg:text-[16px] rounded-full px-8 py-3 hover:scale-110 transition duration-400 inline-block"
          >
            Join Us!
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
