import { motion } from "framer-motion";

const BenefitCard = ({ icon, title, description, variants }) => (
  <motion.div className="w-full" variants={variants}>
    <div className="w-full text-center relative bottom-[-4rem]">
      <motion.div
        className="bg-gradient-to-br from-[#F82F1E] to-[#C1271A] rounded-full inline-block p-8"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img src={icon} alt={title.toLowerCase()} />
      </motion.div>
    </div>
    <div className="bg-white rounded py-10 px-8 w-full">
      <h2 className="font-[rubik] font-semibold text-[24px] text-center mb-5 mt-14">
        {title}
      </h2>
      <p className="font-[inter] text-[18px] text-center">{description}</p>
    </div>
  </motion.div>
);

export default BenefitCard;