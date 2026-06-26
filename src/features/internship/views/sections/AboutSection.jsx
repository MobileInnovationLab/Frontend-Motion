"use client";

import { motion } from "framer-motion";
import { Carousel } from "@material-tailwind/react";

const AboutSection = ({ aboutRef }) => {
  return (
    <section id="internship-about" ref={aboutRef}>
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h3
          className="text-center font-[rubik] text-red-500 text-[14px] lg:text-[18px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          ABOUT
        </motion.h3>
        <motion.h1
          className="text-center font-[rubik] font-bold text-[28px] lg:text-[48px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Internship Activities
        </motion.h1>
        <h6 className="text-center font-[rubik] text-[#6A6A6A] lg:text-[18px] leading-10 px-10 lg:px-40">
          Motion Internship by Motion Lab provides Telkom University students
          with experience in Digital Business, UI/UX Design, and Mobile
          Programming over 8 sessions.
        </h6>
        <div className="flex flex-col lg:flex-row align-items-center mt-14 container justify-content-center m-auto">
          <div className="w-full overflow-hidden lg:h-[507px] bg-black rounded-lg me-10">
            <Carousel
              className="rounded-xl"
              autoplay="true"
              loop="true"
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-red-500" : "w-4 bg-red-300"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              <img
                src="/images/internship/activity-internship-1.png"
                className="object-cover w-full lg:h-full  rounded-lg scale-110"
                alt="Internship Activities"
              />
              <img
                src="/images/internship/activity-internship-2.png"
                className="object-cover w-full lg:h-full rounded-lg scale-110"
                alt="Internship Activities"
              />
              <img
                src="/images/internship/activity-internship-3.png"
                className="object-cover w-full lg:h-full rounded-lg scale-110"
                alt="Internship Activities"
              />
              <img
                src="/images/internship/activity-internship-4.png"
                className="object-cover w-full lg:h-full rounded-lg scale-110"
                alt="Internship Activities"
              />
            </Carousel>
          </div>
          <div className="flex flex-col justify-between bg-white text-left p-10 rounded-lg lg:w-3/4">
            <div>
              <h2 className="text-[24px] font-[inter] font-bold mb-8">
                What activities are planned?
              </h2>
              <p className="text-[18px] font-[inter] font-light text-[#ACACAC] leading-10">
                During the internship at Motion Lab, prospective members will
                deepen their knowledge related to the chosen division. The main
                activities in Motion Internship include:
              </p>
              <ul className="text-[18px] font-[inter] font-light text-[#ACACAC] leading-10">
                <li>1. Choosing a division</li>
                <li>2. Participating in study groups</li>
                <li>3. Completing significant tasks</li>
                <li>4. Joining Motion Hack</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
