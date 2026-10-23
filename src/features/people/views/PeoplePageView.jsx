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
import BigTitle from "@/features/news/components/ui/BigTittle";

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
          <div className="bg-cover bg-center bg-no-repeat w-full text-center">
            <h1 className="font-bold text-4xl md:text-4xl lg:text-5xl font-[rubik]">
              <span>Not All Heroes Wear Lab Coats -</span>{" "}
              <span className="text-[#F82F1E]">Meet Our Aslab !</span>
            </h1>
          </div>
          <p className="font-normal text-[#6A6A6A] text-base lg:text-lg text-center pt-2 hidden md:flex">
            Say hello to the passionate tech mentors behind Motion Lab! Our
            Laboratory Assistants are here to guide, support, and grow with you.
            Ready to help with challenges, share insights, and make your journey
            smoother and more exciting. Because at Motion Lab, we grow best when
            we grow together
          </p>
        </motion.div>
      </motion.section>

      <motion.div
        className="overflow-x-auto whitespace-nowrap no-scrollbar py-10 md:py-20"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.section
          className="flex space-x-4 md:space-x-6 px-4 md:px-12 lg:px-40 pb-4"
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
        className="container mx-auto px-4 md:px-8 lg:px-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="flex flex-wrap justify-center gap-6 lg:gap-8 items-stretch"
          variants={containerVariants}
        >
          <AnimatePresence>
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                custom={index}
                className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-24px)] flex"
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
