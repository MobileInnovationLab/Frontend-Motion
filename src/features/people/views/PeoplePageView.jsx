"use client";

import { motion, AnimatePresence } from "framer-motion";
import GeneralSeo from "@/shared/components/seo/generalSeo";
import styles from "@/styles/pages/product.module.scss";
import CardPeople from "../components/ui/CardPeople";
import { usePeople } from "../hooks/usePeople";
import {
  containerVariants,
  itemVariants,
  titleVariants,
  buttonVariants,
} from "../constants/animations";
import Footer from "@/shared/components/footer";

const PeopleView = () => {
  const {
    activeCategory,
    setActiveCategory,
    sortedGenerations,
    filteredMembers,
  } = usePeople();

  return (
    <div className={styles["main-body"]}>
      <GeneralSeo title="People" />

      <motion.section
        className="container mx-auto pt-32"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
        >
          <motion.h1
            className="font-bold text-4xl md:text-4xl lg:text-5xl font-[inter] text-center"
            variants={titleVariants}
          >
            Laboratory Assistent
          </motion.h1>
          <motion.p
            className="font-[inter] font-thin text-base lg:text-2xl text-center pt-4 flex flex-col md:flex-row"
            variants={titleVariants}
          >
            Mobile Innovation Laboratory
          </motion.p>
        </motion.div>
      </motion.section>

      <motion.div
        className="overflow-x-auto whitespace-nowrap no-scrollbar py-10 md:py-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.section
          className="flex space-x-4 md:space-x-6 p-4 pl-8 md:pl-12 lg:px-40"
          variants={containerVariants}
        >
          {sortedGenerations.map((division) => (
            <motion.button
              key={division.id}
              type="button"
              className={`px-4 py-2 md:px-8 md:py-4 rounded-full ${
                activeCategory === division.id
                  ? "bg-gradient-to-r from-[#E63946] to-[#C1271A]"
                  : "border border-[#C1271A]"
              }`}
              onClick={() => setActiveCategory(division.id)}
              variants={buttonVariants}
              whileTap="tap"
            >
              <h4
                className={`font-bold text-base md:text-lg ${
                  activeCategory === division.id
                    ? "text-[#FFFF]"
                    : "text-[#C1271A]"
                }`}
              >
                {division.division}
              </h4>
            </motion.button>
          ))}
        </motion.section>
      </motion.div>

      <motion.section
        className="container mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                custom={index}
              >
                <CardPeople member={member} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.section>

      <div className="my-40"></div>
      <Footer />
    </div>
  );
};

export default PeopleView;
