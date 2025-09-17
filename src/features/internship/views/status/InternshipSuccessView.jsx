"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const InternshipSuccessView = () => {
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  const successIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.4,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.6,
      },
    },
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.push("/");
  //   }, 10000);

  //   return () => clearTimeout(timer);
  // }, [router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        role="alert"
        aria-live="polite"
      >
        <motion.div
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          variants={successIconVariants}
        >
          <svg
            className="w-12 h-12 text-green-600"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </motion.div>

        <motion.h1
          className="text-3xl font-bold text-gray-900 mb-4"
          variants={textVariants}
        >
          Application Submitted Successfully!
        </motion.h1>

        <motion.p
          className="text-gray-600 mb-6 leading-relaxed"
          variants={textVariants}
        >
          Thank you for applying to our internship program. We will review your
          application and get back to you soon.
        </motion.p>

        {/* <motion.p
          className="text-sm text-gray-500 mb-8"
          variants={textVariants}
        >
          Redirecting to home page in 10 seconds...
        </motion.p> */}

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={buttonVariants}
        >
          <button
            onClick={() => router.push("/")}
            className="bg-[#F82F1E] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#C1271A] 
                     transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F82F1E] 
                     focus:ring-offset-2 min-w-[120px]"
          >
            Return to Home
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InternshipSuccessView;
