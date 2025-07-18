import { motion } from "framer-motion";

const RouteStepCard = ({ icon, step, title, isActive, onClick, variants }) => (
  <motion.section
    variants={variants}
    className={`flex items-center bg-white border rounded-2xl xl:p-6 2xl:p-9 gap-x-5 cursor-pointer ${
      isActive
        ? "border-2 border-[#C1271A]"
        : "border-gray-400 hover:border-red-300 active:border-[#C1271A]"
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <img src={icon} alt={`Logo ${title}`} />
    <div>
      <h2 className="text-[#C1271A] font-semibold text-sm">{step}</h2>
      <h1 className="font-semibold text-base">{title}</h1>
    </div>
  </motion.section>
);

export default RouteStepCard;
