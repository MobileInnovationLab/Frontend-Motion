"use client";

import { motion } from "framer-motion";
import SlideIn from "../components/animations/SlideIn";
import SectionTitle from "../components/animations/SectionTitle";
import DivisionCard from "../components/ui/DivisionCard";
import divisions from "../constants/divisionConstants";

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function DivisionSection({ innerRef }) {
  return (
    <section ref={innerRef} className="container mx-auto py-16">
      <SlideIn direction="up">
        <SectionTitle subtitle="OUR DIVISION" title="What We Do" />
      </SlideIn>

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
        className="flex flex-col lg:flex-row gap-y-12 lg:gap-x-10 items-stretch"
      >
        {divisions.map((division, i) => (
          <motion.div key={division.title} variants={cardVariant} className="flex-1">
            <DivisionCard {...division} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
