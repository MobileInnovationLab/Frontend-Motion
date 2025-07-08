import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const CardPeople = ({ member }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const formatName = (name) => {
    if (name.length > 25) {
      return (
        <>
          {name.slice(0, 25)}
          <br />
          {name.slice(25)}
        </>
      );
    }
    return name;
  };

  return (
    <motion.div 
      className="flex flex-col w-full rounded-3xl shadow-lg p-6 transition-transform duration-300"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <div className="w-full text-center">
        <div className="rounded-full inline-block">
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full mt-4">
        <h2 className="font-[rubik] font-semibold text-lg text-center line-clamp-1">
          {formatName(member.name)}
        </h2>
        <p className="font-[inter] text-base text-center text-[#6A6A6A] mt-3">
          {member.role}
        </p>
        <hr className="w-1/2 my-4 border-[#6A6A6A]" />
        <div className="flex justify-center">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <img src="/svg/linkedln.svg" alt="LinkedIn" />
          </a>
          <a 
            href={member.instagram} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img src="/svg/instagram.svg" alt="Instagram" />
          </a>
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
