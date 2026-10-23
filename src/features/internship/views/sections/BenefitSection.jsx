import { motion } from "framer-motion";
import { BENEFITS } from "../../constants/internshipConstants";
import BenefitCard from "../../components/ui/BenefitCard";
import { staggerContainer, fadeInUp } from "../../utils/animationVariants"; 

const BenefitSection = ({ benefitRef }) => {
  const animatedCards = BENEFITS.slice(0, 3);
  const staticCards = BENEFITS.slice(3);

  return (
    <section id="benefit" ref={benefitRef} className="container mx-auto">
      <motion.h3
        className="text-center font-[rubik] text-red-500 text-[14px] lg:text-[18px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        BENEFITS
      </motion.h3>

      <motion.h1
        className="text-center font-[rubik] font-bold text-[28px] lg:text-[48px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        What benefits do you get?
      </motion.h1>

      <motion.div
        className="flex gap-x-10 flex-col lg:flex-row"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {animatedCards.map((benefit, i) => (
          <BenefitCard key={i} {...benefit} animate variants={fadeInUp} />
        ))}
      </motion.div>

      <div className="flex gap-x-10 flex-col lg:flex-row">
        {staticCards.map((benefit, i) => (
          <BenefitCard key={i} {...benefit} />
        ))}
      </div>
    </section>
  );
};

export default BenefitSection;
