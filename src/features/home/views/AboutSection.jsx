"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SlideIn from "../components/animations/SlideIn";
import ScaleIn from "../components/animations/ScaleIn";
import RevealText from "../components/animations/RevealText";
import SectionTitle from "../components/animations/SectionTitle";
import { STATS } from "../constants/homeConstants";

export default function AboutSection({ innerRef }) {
  return (
    <section id="about" ref={innerRef} className="container mx-auto lg:py-16">
      <SlideIn direction="up">
        <SectionTitle subtitle="ABOUT US" title="What Is Motionlab?" />
      </SlideIn>

      <ScaleIn delay={0.2}>
        <Image
          className="object-contain w-full relative my-6 lg:mt-20 rounded"
          width={1168}
          height={500}
          src="/images/home/motion-lab.png"
          alt="About Image"
        />
      </ScaleIn>

      <RevealText delay={0.4}>
        <div className="flex flex-col lg:flex-row gap-y-5 justify-between items-center">
          <p className="text-base/8 lg:text-lg/8 w-full text-justify text-inter text-[#6A6A6A] tracking-wider">
            Mobile Innovation Laboratory is one of the research laboratories
            under the Faculty of Informatics, Telkom University. Motion Lab
            focuses on the creation, development, and research of mobile
            software. Now, Motion Lab comes with 3 division options: Digital
            Business, UI/UX Design, and Mobile Programming, allowing members to
            explore innovative solutions while contributing to cutting-edge
            research in mobile technology.
          </p>
        </div>
      </RevealText>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="flex justify-around mt-8 lg:mt-14 flex-row gap-y-10"
      >
        {STATS.map((stat, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                },
              },
            }}
            className="flex items-center space-x-0 md:space-x-6"
          >
            <div className="text-center px-3 lg:px-14">
              <h2 className="font-[rubik] font-bold text-xl md:text-5xl text-[#C1271A]">
                {stat.value}
              </h2>
              <p className="font-[inter] text-xs text-justify lg:text-2xl text-[#6A6A6A]">
                {stat.label}
              </p>
            </div>
            {index !== STATS.length - 1 && (
              <div className="w-px h-8 md:h-12 lg:h-24 bg-[#6A6A6A]"></div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
