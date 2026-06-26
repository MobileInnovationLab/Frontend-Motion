import { motion } from "framer-motion";

const buttonVariants = {
  hidden: { 
    scale: 0.8,
    opacity: 0,
    y: 20
  },
  visible: { 
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const textVariants = {
  hidden: { 
    opacity: 0,
    x: -20
  },
  visible: { 
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay: 0.1
    }
  }
};

const iconVariants = {
  hidden: { 
    scale: 0,
    rotate: -180
  },
  visible: { 
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      delay: 0.2
    }
  }
};

const Button = ({ text, icon }) => {
  return (
    <motion.button 
      className="ml-auto flex items-center bg-[#F82F1E] rounded-lg shadow-lg p-2 cursor-pointer"
      variants={buttonVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ 
        scale: 1.1,
        backgroundColor: "#C1271A",
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10
        }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10
        }
      }}
    >
      <motion.h4 
        className="md:flex hidden text-[inter] text-sm text-white font-bold mr-2"
        variants={textVariants}
      >
        {text}
      </motion.h4>
      {icon && (
        <motion.img 
          src={icon} 
          alt="icon"
          variants={iconVariants}
          whileHover={{ 
            rotate: 360,
            scale: 1.2,
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 10
            }
          }}
        />
      )}
    </motion.button>
  );
};

export default Button;
