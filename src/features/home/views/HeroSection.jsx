"use client";

import { motion } from "framer-motion";
import WatchVideoButton from "../components/ui/WatchVideoButton";
import SlideIn from "../components/animations/SlideIn";
import ScaleIn from "../components/animations/ScaleIn";
import RevealText from "../components/animations/RevealText";
import IndexIllustration from "@/shared/components/illustration/indexIllustration";

export default function HeroSection({ innerRef }) {
  return (
    <section
      id="home"
      ref={innerRef}
      className="w-full bg-[url('/images/main-index/bg-main.webp')] bg-cover bg-no-repeat bg-[center_bottom_0rem] min-h-screen"
    >
      <div className="container gap-x-10 w-full mx-auto flex justify-between flex-col lg:flex-row items-center lg:pb-40 pt-32">
        <ScaleIn>
          <div className="flex flex-col items-center md:items-start md:justify-start w-full lg:w-4/5">
            <SlideIn direction="left" delay={0.2}>
              <h2 className="font-bold font-[rubik] text-[30px] lg:text-[60px] text-white text-center lg:text-left lg:mb-0">
                Mobile Innovation Laboratory
              </h2>
            </SlideIn>
            <RevealText delay={0.4}>
              <p className="mb-8 mt-5 text-base/7 md:text-lg/8 text-inter text-[#FFEAEA] text-center md:text-left">
                The Mobile Innovation Laboratory, or commonly called Motion Lab,
                is one of the latest laboratories at the Faculty of Informatics,
                Telkom University under the auspices of K-Side.
              </p>
            </RevealText>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://www.youtube.com/@MotionLabTelkomUniversity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WatchVideoButton>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="12" fill="white" />
                    <path
                      d="M15.0871 12.754C15.0494 12.7927 14.9072 12.958 14.7747 13.094C13.9979 13.9493 11.9716 15.3493 10.9111 15.7767C10.75 15.8453 10.3428 15.9907 10.1252 16C9.91675 16 9.71802 15.952 9.52838 15.8547C9.29198 15.7187 9.10233 15.5047 8.99842 15.252C8.93153 15.0767 8.82761 14.552 8.82761 14.5427C8.7237 13.9687 8.66655 13.036 8.66655 12.0053C8.66655 11.0233 8.7237 10.1287 8.80878 9.546C8.81852 9.53667 8.92244 8.88467 9.03609 8.66133C9.24457 8.25333 9.65177 8 10.0876 8H10.1252C10.409 8.01 11.0059 8.26333 11.0059 8.27267C12.0093 8.70067 13.9888 10.032 14.7844 10.9167C14.7844 10.9167 15.0085 11.144 15.1059 11.286C15.2579 11.49 15.3332 11.7427 15.3332 11.9953C15.3332 12.2773 15.2481 12.54 15.0871 12.754"
                      fill="#F82F1E"
                    />
                  </svg>
                  Watch Video
                </WatchVideoButton>
              </a>
            </motion.div>
          </div>
        </ScaleIn>
        <ScaleIn delay={0.3}>
          <div className="w-full lg:w-1/2 flex justify-center items-center pt-5 md:pt-0">
            <div className="relative w-full max-w-[500px] aspect-square">
              <div className="w-64 md:w-[500px] h-auto">
                <IndexIllustration />
              </div>
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
