"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel } from "@material-tailwind/react";
import Link from "next/link";
import RecruitmentAnnouncementCard from "./InternshipAnnouncementView";
import InternshipNavbar from "../components/navbar/InternshipNavbar";
import TopButton from "@/core/components/topButton";

const InternshipView = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const requirementRef = useRef(null);
  const benefitRef = useRef(null);
  const curriculumRef = useRef(null);
  const defaultRouteImage = "/images/recruitment/route-map-default.png";
  const [activeImage, setActiveImage] = useState(defaultRouteImage);
  const [activeSection, setActiveSection] = useState(null);
  // const [isSlided, setIsSlided] = useState(true);

  function handleNavigation(id) {
    switch (id) {
      case "home":
        homeRef.current?.scrollIntoView({ behavior: "smooth", top: -100 });
        break;
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth", top: -100 });
        break;
      case "requirement":
        requirementRef.current?.scrollIntoView({
          behavior: "smooth",
          top: -100,
        });
        break;
      case "benefit":
        benefitRef.current?.scrollIntoView({ behavior: "smooth", top: -100 });
        break;
      case "curriculum":
        curriculumRef.current?.scrollIntoView({
          behavior: "smooth",
          top: -100,
        });
        break;
      default:
        break;
    }
  }

  const handleClick = (imageSrc, section) => {
    if (activeImage === imageSrc) {
      setActiveImage(defaultRouteImage);
      setActiveSection(null);
    } else {
      setActiveImage(imageSrc);
      setActiveSection(section);
    }
  };

  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const slideInLeft = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const slideInRight = {
    hidden: { 
      opacity: 0, 
      x: 100,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const scaleUp = {
    hidden: { 
      opacity: 0, 
      scale: 0.5
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

  return (
    <div className="bg-[#FCF6F6]">
      <InternshipNavbar onNavigation={handleNavigation} />
      <motion.section
        ref={homeRef}
        className="relative w-full bg-[url('/images/recruitment/aslab-member.jpg')] bg-cover bg-no-repeat bg-[top_bottom_0rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0 bg-black opacity-70 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
        ></motion.div>

        <div className="container w-full mx-auto flex flex-col items-start py-20 md:p-48 relative z-0">
          <motion.div
            className="font-bold font-[inter] text-[30px] lg:text-[60px] text-white text-left mb-2 lg:mb-0"
            initial={{ y: "50px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
          >
            Internship <br /> in Mobile Innovation Laboratory
          </motion.div>
          <motion.div
            className="font-normal font-[inter] text-[12px] lg:text-[25px] text-white text-left mb-5 lg:mb-8"
            initial={{ y: "30px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1.5, bounce: 0.3, delay: 0.2 }}
          >
            Boost your skills with Mobile Innovation Laboratory, where{" "}
            {"you'll"} work on real-world projects in UI/UX, Mobile Programming,
            and Digital Business
          </motion.div>
          <motion.div
            initial={{ y: "20px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1.5, bounce: 0.3, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/register"
              passHref
              className="bg-[#F82F1E] font-bold text-white text-[inter] text-[12px] lg:text-[16px] rounded-full px-8 py-3 hover:scale-110 transition duration-400 inline-block"
            >
              Join Us!
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <div className="my-12"></div>

      {process.env.NEXT_PUBLIC_RECRUITMENT_ANNOUNCEMENT == "false" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <RecruitmentAnnouncementCard />
        </motion.div>
      )}

      <div className="my-12"></div>

      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h3 
          className="text-center font-[rubik] text-red-500 text-[14px] lg:text-[18px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          ABOUT
        </motion.h3>
        <motion.h1 
          className="text-center font-[rubik] font-bold text-[28px] lg:text-[48px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Internship Activities
        </motion.h1>
        <h6 className="text-center font-[rubik] text-[#6A6A6A] lg:text-[18px] leading-10 px-10 lg:px-40">
          Motion Internship by Motion Lab provides Telkom University students
          with experience in Digital Business, UI/UX Design, and Mobile
          Programming over 8 sessions.
        </h6>
        <div className="flex flex-col lg:flex-row align-items-center mt-14 container justify-content-center m-auto">
          <div className="w-full overflow-hidden lg:h-[507px] bg-black rounded-lg me-10">
            <Carousel
              className="rounded-xl"
              autoplay="true"
              loop="true"
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                  {new Array(length).fill("").map((_, i) => (
                    <span
                      key={i}
                      className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                        activeIndex === i ? "w-8 bg-red-500" : "w-4 bg-red-300"
                      }`}
                      onClick={() => setActiveIndex(i)}
                    />
                  ))}
                </div>
              )}
            >
              <img
                src="/images/internship/activity-internship-1.png"
                className="object-cover w-full lg:h-full  rounded-lg scale-110"
                alt="Internship Activities"
              />
              <img
                src="/images/internship/activity-internship-2.png"
                className="object-cover w-full lg:h-full rounded-lg scale-110"
                alt="Internship Activities"
              />
              <img
                src="/images/internship/activity-internship-3.png"
                className="object-cover w-full lg:h-full rounded-lg scale-110"
                alt="Internship Activities"
              />
              <img
                src="/images/internship/activity-internship-4.png"
                className="object-cover w-full lg:h-full rounded-lg scale-110"
                alt="Internship Activities"
              />
            </Carousel>
          </div>
          <div className="flex flex-col justify-between bg-white text-left p-10 rounded-lg lg:w-3/4">
            <div>
              <h2 className="text-[24px] font-[inter] font-bold mb-8">
                What activities are planned?
              </h2>
              <p className="text-[18px] font-[inter] font-light text-[#ACACAC] leading-10">
                During the internship at Motion Lab, prospective members will
                deepen their knowledge related to the chosen division. The main
                activities in Motion Internship include:
              </p>
              <ul className="text-[18px] font-[inter] font-light text-[#ACACAC] leading-10">
                <li>1. Choosing a division</li>
                <li>2. Participating in study groups</li>
                <li>3. Completing significant tasks</li>
                <li>4. Joining Motion Hack</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="my-40"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-center xl:text-left font-[rubik] font-bold text-[28px] lg:text-[48px] container mx-auto">
          Route Map Motionlab
        </h1>
        <div className="mt-10 lg:mt-5">
          <div className="container mx-auto flex xl:flex-row flex-col gap-x-10">
            <motion.div 
              className="w-1/3 hidden xl:flex flex-col gap-y-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: "/svg/route-map-oprec.svg",
                  step: "Step 1",
                  title: "Open Recruitment",
                  image: "/images/recruitment/route-map-stepone.png",
                  section: "section1"
                },
                {
                  icon: "/svg/route-map-intern.svg",
                  step: "Step 2",
                  title: "Internship",
                  image: "/images/recruitment/route-map-steptwo.png",
                  section: "section2"
                },
                {
                  icon: "/svg/route-map-member.svg",
                  step: "Step 3",
                  title: "Motion Lab Member",
                  image: "/images/recruitment/route-map-stepthree.png",
                  section: "section3"
                },
                {
                  icon: "/svg/route-map-research.svg",
                  step: "Step 4",
                  title: "Research Group",
                  image: "/images/recruitment/route-map-stepfour.png",
                  section: "section4"
                }
              ].map((item, index) => (
                <motion.section
                  key={index}
                  variants={fadeInUp}
                  className={`flex items-center bg-white border rounded-2xl xl:p-6 2xl:p-9 gap-x-5 cursor-pointer ${
                    activeSection === item.section
                      ? "border-2 border-[#C1271A]"
                      : "border-gray-400 hover:border-red-300 active:border-[#C1271A]"
                  }`}
                  onClick={() => handleClick(item.image, item.section)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img src={item.icon} alt={`Logo ${item.title}`} />
                  <div>
                    <h2 className="text-[#C1271A] font-semibold text-sm">
                      {item.step}
                    </h2>
                    <h1 className="font-semibold text-base">{item.title}</h1>
                  </div>
                </motion.section>
              ))}
            </motion.div>

            <motion.div 
              className="w-full bg-white rounded-3xl"
              variants={scaleUp}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage}
                  src={activeImage}
                  alt="Selected Step"
                  className="w-full rounded-3xl object-cover"
                  initial={{ opacity: 0, x: 10, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 5, y: 10 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="my-20"></div>

      <section ref={requirementRef} className="container mx-auto">
        <motion.h3 
          className="text-center font-[rubik] text-red-500 text-[14px] lg:text-[18px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          REQUIREMENTS
        </motion.h3>
        <motion.h1 
          className="text-center font-[rubik] font-bold text-[28px] lg:text-[48px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          What are the Requirements?
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 mt-14"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              number: "01",
              text: "Active Telkom University undergraduate student batch 2022-2024 from all major"
            },
            {
              number: "05",
              text: "Portofolio"
            },
            {
              number: "02",
              text: "Wiling to commit for the whole program and membership duration of 1,5 year"
            },
            {
              number: "06",
              text: "Motivation Video"
            },
            {
              number: "03",
              text: "Curriculum vitae with relevant experience"
            },
            {
              number: "07",
              text: "Repost our open recruitment post on Instagram Story + Upload Twibbon"
            },
            {
              number: "04",
              text: "KSM for current semester"
            }
          ].map((item, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <div className="flex border-[2px] border-[#332C2B] border-solid rounded-full bg-white">
                <div className="bg-[#332C2B] text-white rounded-full p-5 px-7 lg:p-6 lg:px-8 font-semibold text-center align-center text-[inter] text-[32px]">
                  {item.number}
                </div>
                <p className="align-center font-semibold text-[12px] lg:text-[14px] text-[#6A6A6A] my-auto mx-5">
                  {item.text}
                </p>
              </div>
              {index < 5 && (
                <div className="h-[50px] px-10 my-2">
                  <img
                    src="/images/recruitment/requirement-line.png"
                    alt="line"
                    className="h-full object-contain"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>

      <div className="my-40"></div>

      <section ref={benefitRef} className="container mx-auto">
        <motion.h3 
          className="text-center font-[rubik] text-red-500 text-[14px] lg:text-[18px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          BENEFITS
        </motion.h3>
        <motion.h1 
          className="text-center font-[rubik] font-bold text-[28px] lg:text-[48px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          What benefits do you get?
        </motion.h1>
        <motion.div 
          className="flex gap-x-10 flex-col lg:flex-row"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              icon: "/svg/knowledge.svg",
              title: "Knowledge",
              description: "New members will gain deeper knowledge about Digital Business, UI/UX Design, and Mobile Programming."
            },
            {
              icon: "/svg/pen-tool.svg",
              title: "Practice",
              description: "New members will learn both theory and practical aspects, guided by proficient Motion lab assistants in their respective fields."
            },
            {
              icon: "/svg/experience.svg",
              title: "Experience",
              description: "New members will gain experience in designing mobile applications individually as well as in groups."
            }
          ].map((benefit, index) => (
            <motion.div key={index} className="w-full" variants={fadeInUp}>
              <div className="w-full text-center relative bottom-[-4rem]">
                <motion.div 
                  className="bg-gradient-to-br from-[#F82F1E] to-[#C1271A] rounded-full inline-block p-8"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={benefit.icon} alt={benefit.title.toLowerCase()} />
                </motion.div>
              </div>
              <div className="bg-white rounded py-10 px-8 w-full">
                <h2 className="font-[rubik] font-semibold text-[24px] text-center mb-5 mt-14">
                  {benefit.title}
                </h2>
                <p className="font-[inter] text-[18px] text-center">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex gap-x-10 flex-col lg:flex-row">
          <div className="w-full">
            <div className="w-full text-center relative bottom-[-4rem]">
              <div className="bg-gradient-to-br from-[#F82F1E] to-[#C1271A] rounded-full inline-block p-8">
                <img src="/svg/people.svg" alt="people" />
              </div>
            </div>
            <div className="bg-white rounded py-10 px-8 w-full">
              <h2 className="font-[rubik] font-semibold text-[24px] text-center mb-5 mt-14">
                Networking
              </h2>
              <p className="font-[inter] text-[18px] text-center">
                Building new connections with other member from other faculties
                or majors who are motivated in the field of Mobile App.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full text-center relative bottom-[-4rem]">
              <div className="bg-gradient-to-br from-[#F82F1E] to-[#C1271A] rounded-full inline-block p-8">
                <img src="/svg/certificate.svg" alt="Certificate" />
              </div>
            </div>
            <div className="bg-white rounded py-10 px-8 w-full">
              <h2 className="font-[rubik] font-semibold text-[24px] text-center mb-5 mt-14">
                Certificate & TAK
              </h2>
              <p className="font-[inter] text-[18px] text-center">
                Internship participants who successfully complete the Motion
                Internship have the opportunity to become members of Motion Lab
                and potentially serve as lab assistants.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full text-center relative bottom-[-4rem]">
              <div className="bg-gradient-to-br from-[#F82F1E] to-[#C1271A] rounded-full inline-block p-8">
                <img src="/svg/motionlab.svg" alt="Motionlab" />
              </div>
            </div>
            <div className="bg-white rounded py-10 px-8 w-full">
              <h2 className="font-[rubik] font-semibold text-[24px] text-center mb-5 mt-14">
                Member Motion Lab
              </h2>
              <p className="font-[inter] text-[18px] text-center">
                Internship participants who successfully complete the Motion
                Internship have the opportunity to join Motion Lab and
                potentially serve as lab assistants.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="my-40"></div>

      <section ref={curriculumRef} className="container mx-auto">
        <motion.h3 
          className="text-center font-[rubik] text-red-500 text-[14px] lg:text-[18px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          CURRICULUM
        </motion.h3>
        <motion.h1 
          className="text-center font-[rubik] font-bold text-[28px] lg:text-[48px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          What do you want to learn?
        </motion.h1>

        <motion.div 
          className="flex flex-col lg:flex-row gap-y-10 gap-x-8 mt-14"
          variants={staggerContainer}
          initial="initial"
          animate="visible"
        >
          {[
            {
              image: "/images/internship/curriculum-db-new.png",
              logo: "/images/internship/logo-db.png",
              title: "Digital Business",
              description: "Learn to use digital technologies, tools, and processes to create, deliver, and optimize business outcome.",
              href: "/curriculum/digital-business"
            },
            {
              image: "/images/internship/curriculum-mp-new.png",
              logo: "/images/internship/logo-mp.png",
              title: "Mobile Programming",
              description: "Learn to code and implement designs into Android, iOS, or cross-platform mobile apps for user-ready use.",
              href: "/curriculum/mobile-programming"
            },
            {
              image: "/images/internship/curriculum-uiux-new.png",
              logo: "/images/internship/logo-ui.png",
              title: "UI / UX Designer",
              description: "Learn to define user experience in digital product interaction and apply solutions to mobile app design.",
              href: "/curriculum/ui-ux-designer"
            }
          ].map((curriculum, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Link
                className="bg-white pb-10 w-full transition duration-200"
                href={curriculum.href}
              >
                <motion.div 
                  className="relative group hover:cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    className="w-full transition duration-200 ease-in-out"
                    src={curriculum.image}
                    alt={`Curriculum ${curriculum.title}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex justify-end items-end">
                    <span className="flex p-2 gap-x-1 text-white font-semibold text-[14px]">
                      Lihat lebih banyak
                      <img src="/svg/detail-arrow-right.svg" alt="arrow-detail" />
                    </span>
                  </div>
                </motion.div>
                <div className="p-4 cursor-default">
                  <div className="flex items-center gap-x-2">
                    <img
                      className="w-10 h-10"
                      src={curriculum.logo}
                      alt={`logo-${curriculum.title.toLowerCase()}`}
                    />
                    <h2 className="text-[rubik] font-semibold text-[22px] my-3">
                      {curriculum.title}
                    </h2>
                  </div>
                  <p className="text-[#6A6A6A] text-inter text-[16px]">
                    {curriculum.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <div className="my-40"></div>
      <TopButton />
    </div>
  );
};

export default InternshipView;
