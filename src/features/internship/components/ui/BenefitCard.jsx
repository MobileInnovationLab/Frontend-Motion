import { motion } from "framer-motion";

const BenefitCard = ({ icon, title, description, animate = false, variants }) => {
  const Wrapper = animate ? motion.div : "div";

  return (
    <Wrapper className="w-full" {...(animate && { variants })}>
      <div className="w-full text-center relative bottom-[-4rem]">
        <motion.div
          className="bg-gradient-to-br from-[#F82F1E] to-[#C1271A] rounded-full inline-block p-8"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={icon} alt={title.toLowerCase()} />
        </motion.div>
      </div>
      <div className="bg-white dark:bg-[#111827] border border-transparent dark:border-[#1E293B] rounded-2xl py-10 px-8 w-full transition-colors duration-300">
        <h2 className="font-[rubik] font-semibold text-[24px] text-center mb-5 mt-14 text-slate-900 dark:text-[#F8FAFC]">
          {title}
        </h2>
        <p className="font-[inter] text-[18px] text-center text-[#6A6A6A] dark:text-[#CBD5E1]">{description}</p>
      </div>
    </Wrapper>
  );
};

export default BenefitCard;