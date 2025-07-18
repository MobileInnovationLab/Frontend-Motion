import { motion } from "framer-motion";
import Link from "next/link";

const CurriculumCard = ({ href, image, logo, title, description }) => (
  <motion.div>
    <Link className="bg-white pb-10 w-full transition duration-200" href={href}>
      <motion.div
        className="relative group hover:cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img src={image} className="w-full" alt={`Curriculum ${title}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex justify-end items-end">
          <span className="flex p-2 gap-x-1 text-white font-semibold text-[14px]">
            Lihat lebih banyak
            <img src="/svg/detail-arrow-right.svg" alt="arrow-detail" />
          </span>
        </div>
      </motion.div>
      <div className="p-4">
        <div className="flex items-center gap-x-2">
          <img className="w-10 h-10" src={logo} alt={`logo-${title}`} />
          <h2 className="text-[rubik] font-semibold text-[22px] my-3">
            {title}
          </h2>
        </div>
        <p className="text-[#6A6A6A] text-inter text-[16px]">{description}</p>
      </div>
    </Link>
  </motion.div>
);

export default CurriculumCard;
