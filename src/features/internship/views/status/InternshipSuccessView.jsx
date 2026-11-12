"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import useStaticOption from "../../hooks/useStaticOption";

const InternshipSuccessView = () => {
  const router = useRouter();

  const { value: rawWhatsAppLink } = useStaticOption(
    "whatsapp_group_link",
    "https://chat.whatsapp.com/KVidot3iVaVKynuE69W7Pt?mode=gi_t",
    ["recruitment_whatsapp_link", "whatsapp_link"]
  );

  const whatsappLink =
    rawWhatsAppLink?.startsWith("http://") || rawWhatsAppLink?.startsWith("https://")
      ? rawWhatsAppLink
      : rawWhatsAppLink
      ? `https://wa.me/${rawWhatsAppLink.replace(/[^0-9]/g, "")}`
      : "https://chat.whatsapp.com/GCZL4eUh0uLAWKF1tY0GEx?mode=gi_t";

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#090D16] dark:to-[#0F172A] flex items-center justify-center p-4 transition-colors duration-300">
      <motion.div
        className="w-full max-w-md bg-white dark:bg-[#111827] border border-transparent dark:border-[#1E293B] rounded-2xl shadow-2xl p-8 text-center transition-colors duration-200"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        role="alert"
        aria-live="polite"
      >
        <motion.div
          className="w-24 h-24 bg-green-100 dark:bg-green-950/50 rounded-full flex items-center justify-center mx-auto mb-6"
          variants={successIconVariants}
        >
          <svg
            className="w-12 h-12 text-green-600 dark:text-green-400"
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
          className="text-3xl font-bold text-gray-900 dark:text-[#F8FAFC] mb-4"
          variants={textVariants}
        >
          Application Submitted Successfully!
        </motion.h1>

        <motion.p
          className="text-gray-600 dark:text-[#CBD5E1] mb-6 leading-relaxed"
          variants={textVariants}
        >
          Thank you for applying to our new member program. We will review your
          application and get back to you soon.
        </motion.p>

        {/* <motion.p
          className="text-sm text-gray-500 mb-8"
          variants={textVariants}
        >
          Redirecting to home page in 10 seconds...
        </motion.p> */}

        <motion.div
          className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          variants={buttonVariants}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#1EBE5D] shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>Join WhatsApp Group</span>
          </a>

          <button
            onClick={() => router.push("https://chat.whatsapp.com/GCZL4eUh0uLAWKF1tY0GEx")}
            className="w-full sm:w-auto bg-[#F82F1E] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#C1271A] 
                     transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#F82F1E] 
                     focus:ring-offset-2 min-w-[140px]"
          >
            Return to Home
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InternshipSuccessView;
