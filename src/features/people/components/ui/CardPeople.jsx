import { motion } from "framer-motion";
import PropTypes from "prop-types";

const CardPeople = ({ member }) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col w-full h-full bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="w-full text-center mt-2">
        <div className="rounded-full inline-block p-1 border-2 border-transparent hover:border-[#E63946] transition-colors duration-300">
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full mt-5 flex-grow">
        <h2 className="font-[rubik] font-semibold text-lg text-center line-clamp-2 min-h-[3rem] flex items-center">
          {member.name}
        </h2>
        <p className="font-[inter] text-sm md:text-base text-center text-[#6A6A6A] mt-2 flex-grow">
          {member.role}
        </p>
        <div className="w-full mt-auto flex flex-col items-center">
          <hr className="w-16 my-5 border-[#E63946] border-t-2 rounded" />
          <div className="flex justify-center gap-5">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <img src="/svg/linkedln.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
            >
              <img
                src="/svg/instagram.svg"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

CardPeople.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    instagram: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    division: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardPeople;
