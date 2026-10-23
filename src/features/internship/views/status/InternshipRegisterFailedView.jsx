"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const InternshipRegisterFailedView = () => {
  const router = useRouter();

  const containerVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8
    },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const errorIconVariants = {
    hidden: { 
      scale: 0,
      rotate: 180
    },
    visible: { 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }
    }
  };

  const textVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.4
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-20">
        <motion.div 
          className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
            variants={errorIconVariants}
          >
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </motion.div>
          <motion.h1 
            className="text-3xl font-bold mb-4"
            variants={textVariants}
          >
            Registration Failed
          </motion.h1>
          <motion.p 
            className="text-gray-600 mb-8"
            variants={textVariants}
          >
            We&apos;re sorry, but there was an error processing your registration. Please try again later.
          </motion.p>
          <motion.button
            onClick={() => router.push("/register")}
            className="bg-[#F82F1E] text-white px-8 py-3 rounded-md hover:bg-[#C1271A] transition duration-300"
            variants={buttonVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Try Again
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default InternshipRegisterFailedView;
