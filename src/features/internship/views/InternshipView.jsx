"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel } from "@material-tailwind/react";
import Link from "next/link";
import RecruitmentAnnouncementCard from "./InternshipAnnouncementView";
import InternshipNavbar from "../components/navbar/InternshipNavbar";

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

  return (
    <div className="bg-[#FCF6F6]">
      <InternshipNavbar onNavigation={handleNavigation} />
      <section
        ref={homeRef}
        className="relative w-full bg-[url('/images/recruitment/aslab-member.jpg')] bg-cover bg-no-repeat bg-[top_bottom_0rem]"
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        <div className="container w-full mx-auto flex flex-col items-start py-20 md:p-48 relative z-0">
          <motion.div
            className="font-bold font-[inter] text-[30px] lg:text-[60px] text-white text-left mb-2 lg:mb-0"
            initial={{ y: "10px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2, bounce: 0 }}
          >
            Internship <br /> in Mobile Innovation Laboratory
          </motion.div>
          <motion.div
            className="font-normal font-[inter] text-[12px] lg:text-[25px] text-white text-left mb-5 lg:mb-8"
            initial={{ y: "10px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2, bounce: 0 }}
          >
            Boost your skills with Mobile Innovation Laboratory, where{" "}
            {"you'll"} work on real-world projects in UI/UX, Mobile Programming,
            and Digital Business
          </motion.div>
          <motion.div
            initial={{ y: "10px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2, bounce: 0 }}
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
      </section>

      <div className="my-12"></div>

      {process.env.NEXT_PUBLIC_RECRUITMENT_ANNOUNCEMENT == "false" && (
        <RecruitmentAnnouncementCard />
      )}

      <div className="my-12"></div>

      <motion.div
        ref={aboutRef}
        initial={{ y: "10px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 2, bounce: 0 }}
      >
        <h3 className="text-center font-[rubik] text-red-500 text-[14px] lg:text-[18px]">
          ABOUT
        </h3>
        <h1 className="text-center font-[rubik] font-bold text-[28px] lg:text-[48px]">
          Internship Activities
        </h1>
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
        initial={{ y: "10px", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 2, bounce: 0 }}
      >
        <h1 className="text-center xl:text-left font-[rubik] font-bold text-[28px] lg:text-[48px] container mx-auto">
          Route Map Motionlab
        </h1>
        <div className="mt-10 lg:mt-5 ">
          <div className="container mx-auto flex xl:flex-row flex-col gap-x-10 ">
            <div className="w-1/3 hidden xl:flex flex-col gap-y-10">
              <section
                className={`flex items-center bg-white border rounded-2xl xl:p-6 2xl:p-9 gap-x-5 cursor-pointer ${
                  activeSection === "section1"
                    ? "border-2 border-[#C1271A]"
                    : "border-gray-400 hover:border-red-300 active:border-[#C1271A]"
                }`}
                onClick={() =>
                  handleClick(
                    "/images/recruitment/route-map-stepone.png",
                    "section1"
                  )
                }
              >
                <img src="/svg/route-map-oprec.svg" alt="Logo Oprec" />
                <div>
                  <h2 className="text-[#C1271A] font-semibold text-sm">
                    Step 1
                  </h2>
                  <h1 className="font-semibold text-base">Open Recruitment</h1>
                </div>
              </section>
              <section
                className={`flex items-center bg-white border rounded-2xl xl:p-6 2xl:p-9 gap-x-5 cursor-pointer ${
                  activeSection === "section2"
                    ? "border-2 border-[#C1271A]"
                    : "border-gray-400 hover:border-red-300 active:border-[#C1271A]"
                }`}
                onClick={() =>
                  handleClick(
                    "/images/recruitment/route-map-steptwo.png",
                    "section2"
                  )
                }
              >
                <img src="/svg/route-map-intern.svg" alt="Logo Intern" />
                <div>
                  <h2 className="text-[#C1271A] font-semibold text-sm">
                    Step 2
                  </h2>
                  <h1 className="font-semibold text-base">Internship</h1>
                </div>
              </section>
              <section
                className={`flex items-center bg-white border rounded-2xl xl:p-6 2xl:p-9 gap-x-5 cursor-pointer ${
                  activeSection === "section3"
                    ? "border-2 border-[#C1271A]"
                    : "border-gray-400 hover:border-red-300 active:border-[#C1271A]"
                }`}
                onClick={() =>
                  handleClick(
                    "/images/recruitment/route-map-stepthree.png",
                    "section3"
                  )
                }
              >
                <img src="/svg/route-map-member.svg" alt="Logo Member" />
                <div>
                  <h2 className="text-[#C1271A] font-semibold text-sm">
                    Step 3
                  </h2>
                  <h1 className="font-semibold text-base">Motion Lab Member</h1>
                </div>
              </section>
              <section
                className={`flex items-center bg-white border rounded-2xl xl:p-6 2xl:p-9 gap-x-5 cursor-pointer ${
                  activeSection === "section4"
                    ? "border-2 border-[#C1271A]"
                    : "border-gray-400 hover:border-red-300 active:border-[#C1271A]"
                }`}
                onClick={() =>
                  handleClick(
                    "/images/recruitment/route-map-stepfour.png",
                    "section4"
                  )
                }
              >
                <img src="/svg/route-map-research.svg" alt="Logo Research" />
                <div>
                  <h2 className="text-[#C1271A] font-semibold text-sm">
                    Step 4
                  </h2>
                  <h1 className="font-semibold text-base">Research Group</h1>
                </div>
              </section>
            </div>

            {/* Right Section */}
            <div className="w-full bg-white rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImage} // Ensure each image has a unique key to trigger animation
                  src={activeImage}
                  alt="Selected Step"
                  className="w-full rounded-3xl object-cover"
                  initial={{ opacity: 0, x: 10, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }} 
                  exit={{ opacity: 0, x: 5, y: 10 }}
                  transition={{ duration: 0.5 }} 
                />
              </AnimatePresence>
            </div>
            <div className="xl:hidden grid grid-rows-2 gap-y-5 mt-5">
              <div className="w-full flex justify-between gap-x-5">
                <section
                  className={`container mx-auto py-5 gap-x-2 flex items-center bg-white border rounded-2xl cursor-pointer ${
                    activeSection === "section1"
                      ? "border-2 border-[#C1271A]"
                      : "border-gray-400 hover:border-red-300 active:border-[#C1271A]"
                  }`}
                  onClick={() =>
                    handleClick(
                      "/images/recruitment/route-map-stepone.png",
                      "section1"
                    )
                  }
                >
                  <img className="w-6 h-6" src="/svg/route-map-oprec.svg" alt="Logo Oprec" />
                  <div>
                    <h2 className="text-[#C1271A] font-semibold text-xs">
                      Step 1
                    </h2>
                    <h1 className="font-semibold text-sm">
                      Open Recruitment
                    </h1>
                  </div>
                </section>
                <section
                  className={`container mx-auto py-5 gap-x-2 flex items-center bg-white border rounded-2xl cursor-pointer ${
                    activeSection === "section2"
                      ? "border-2 border-[#C1271A]"
                      : "border-gray-400 hover:border-red-300 active:border-[#C1271A]"
                  }`}
                  onClick={() =>
                    handleClick(
                      "/images/recruitment/route-map-steptwo.png",
                      "section2"
                    )
                  }
                >
                  <img className="w-6 h-6" src="/svg/route-map-intern.svg" alt="Logo Intern" />
                  <div>
                    <h2 className="text-[#C1271A] font-semibold text-xs">
                      Step 2
                    </h2>
                    <h1 className="font-semibold text-sm">Internship</h1>
                  </div>
                </section>
              </div>
              <div className=" flex justify-between gap-x-5">
                <section
                  className={`container mx-auto py-5 gap-x-2 flex items-center bg-white border rounded-2xl cursor-pointer ${
                    activeSection === "section3"
                      ? "border-2 border-[#C1271A]"
                      : "border-gray-400 hover:border-red-300 active:border-[#C1271A]"
                  }`}
                  onClick={() =>
                    handleClick(
                      "/images/recruitment/route-map-stepthree.png",
                      "section3"
                    )
                  }
                >
                  <img className="w-6 h-6" src="/svg/route-map-member.svg" alt="Logo Member" />
                  <div>
                    <h2 className="text-[#C1271A] font-semibold text-xs">
                      Step 3
                    </h2>
                    <h1 className="font-semibold text-sm">
                      Motion Lab Member
                    </h1>
                  </div>
                </section>
                <section
                  className={`container mx-auto py-5 gap-x-2 flex items-center bg-white border rounded-2xl cursor-pointer ${
                    activeSection === "section4"
                      ? "border-2 border-[#C1271A]"
                      : "border-gray-400 hover:border-red-300 active:border-[#C1271A]"
                  }`}
                  onClick={() =>
                    handleClick(
                      "/images/recruitment/route-map-stepfour.png",
                      "section4"
                    )
                  }
                >
                  <img className="w-6 h-6" src="/svg/route-map-research.svg" alt="Logo Research" />
                  <div>
                    <h2 className="text-[#C1271A] font-semibold text-xs">
                      Step 4
                    </h2>
                    <h1 className="font-semibold text-sm">Research Group</h1>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="my-20"></div>

      <section ref={requirementRef} className="container mx-auto">
        <h3 className="text-center font-[rubik] text-red-500 text-[14px] lg:text-[18px]">
          REQUIREMENTS
        </h3>
        <h1 className="text-center font-[rubik] font-bold text-[28px] lg:text-[48px]">
          What are the Requirements?
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 mt-14">
          <div>
            <div className="flex border-[2px] border-[#332C2B] border-solid rounded-full bg-white">
              <div className="bg-[#332C2B] text-white rounded-full p-5 px-7 lg:p-6 lg:px-8  font-semibold text-center align-center text-[inter] text-[32px]">
                01
              </div>
              <p className="align-center font-semibold text-[12px] lg:text-[14px] text-[#6A6A6A] my-auto mx-5">
                Active Telkom University undergraduate student batch 2022-2024
                from all major
              </p>
            </div>
            <div className="h-[50px] px-10 my-2">
              <img
                src="/images/recruitment/requirement-line.png"
                alt="line"
                className="h-full object-contain"
              />
            </div>
          </div>
          <div>
            <div className="flex border-[2px] border-[#332C2B] border-solid rounded-full bg-white">
              <div className=" bg-[#332C2B] text-white rounded-full p-5 px-7 lg:p-6 lg:px-8  font-semibold text-center align-center text-[inter] text-[32px]">
                05
              </div>
              <p className="align-center font-semibold text-[12px] lg:text-[14px] text-[#6A6A6A] my-auto mx-5">
                Portofolio
              </p>
            </div>
            <div className="h-[50px] px-10 my-2">
              <img
                src="/images/recruitment/requirement-line.png"
                alt="line"
                className="h-full object-contain"
              />
            </div>
          </div>
          <div>
            <div className="flex border-[2px] border-[#332C2B] border-solid rounded-full bg-white">
              <div className="bg-[#332C2B] text-white rounded-full p-5 px-7 lg:p-6 lg:px-8  font-semibold text-center align-center text-[inter] text-[32px]">
                02
              </div>
              <p className="align-center font-semibold text-[12px] lg:text-[14px] text-[#6A6A6A] my-auto mx-5">
                Wiling to commit for the whole program and membership duration
                of 1,5 year
              </p>
            </div>
            <div className="h-[50px] px-10 my-2">
              <img
                src="/images/recruitment/requirement-line.png"
                alt="line"
                className="h-full object-contain"
              />
            </div>
          </div>
          <div>
            <div className="flex border-[2px] border-[#332C2B] border-solid rounded-full bg-white">
              <div className=" bg-[#332C2B] text-white rounded-full p-5 px-7 lg:p-6 lg:px-8  font-semibold text-center align-center text-[inter] text-[32px]">
                06
              </div>
              <p className="align-center font-semibold text-[12px] lg:text-[14px] text-[#6A6A6A] my-auto mx-5">
                Motivation Video
              </p>
            </div>
            <div className="h-[50px] px-10 my-2">
              <img
                src="/images/recruitment/requirement-line.png"
                alt="line"
                className="h-full object-contain"
              />
            </div>
          </div>
          <div>
            <div className="flex border-[2px] border-[#332C2B] border-solid rounded-full bg-white">
              <div className="bg-[#332C2B] text-white rounded-full p-5 px-7 lg:p-6 lg:px-8  font-semibold text-center align-center text-[inter] text-[32px]">
                03
              </div>
              <p className="align-center font-semibold text-[12px] lg:text-[14px] text-[#6A6A6A] my-auto mx-5">
                Curriculum vitae with relevant experience
              </p>
            </div>
            <div className="h-[50px] px-10 my-2">
              <img
                src="/images/recruitment/requirement-line.png"
                alt="line"
                className="h-full object-contain"
              />
            </div>
          </div>
          <div>
            <div className="flex border-[2px] border-[#332C2B] border-solid rounded-full bg-white">
              <div className=" bg-[#332C2B] text-white rounded-full p-5 px-7 lg:p-6 lg:px-8  font-semibold text-center align-center text-[inter] text-[32px]">
                07
              </div>
              <p className="align-center font-semibold text-[12px] lg:text-[14px] text-[#6A6A6A] my-auto mx-5">
                Repost our open recruitment post on Instagram Story + Upload
                Twibbon
              </p>
            </div>
            <div className="h-[50px] px-10 my-2 lg:hidden block">
              <img
                src="/images/recruitment/requirement-line.png"
                alt="line"
                className="h-full object-contain"
              />
            </div>
          </div>
          <div>
            <div className="flex border-[2px] border-[#332C2B] border-solid rounded-full bg-white">
              <div className="bg-[#332C2B] text-white rounded-full p-5 px-7 lg:p-6 lg:px-8  font-semibold text-center align-center text-[inter] text-[32px]">
                04
              </div>
              <p className="align-center font-semibold text-[12px] lg:text-[14px] text-[#6A6A6A] my-auto mx-5">
                KSM for current semester
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="my-40"></div>

      <section ref={benefitRef} className="container mx-auto">
        <h3 className="text-center font-[rubik] text-red-500 text-[14px] lg:text-[18px]">
          BENEFITS
        </h3>
        <h1 className="text-center font-[rubik] font-bold text-[28px] lg:text-[48px]">
          What benefits do you get?
        </h1>
        <div className="flex gap-x-10 flex-col lg:flex-row">
          <div className="w-full">
            <div className="w-full text-center relative bottom-[-4rem]">
              <div className="bg-gradient-to-br from-[#F82F1E] to-[#C1271A] rounded-full inline-block p-8">
                <img src="/svg/knowledge.svg" alt="knowledge" />
              </div>
            </div>
            <div className="bg-white rounded py-10 px-8 w-full">
              <h2 className="font-[rubik] font-semibold text-[24px] text-center mb-5 mt-14">
                Knowledge
              </h2>
              <p className="font-[inter] text-[18px] text-center">
                New members will gain deeper knowledge about Digital Business,
                UI/UX Design, and Mobile Programming.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full text-center relative bottom-[-4rem]">
              <div className="bg-gradient-to-br from-[#F82F1E] to-[#C1271A] rounded-full inline-block p-8">
                <img src="/svg/pen-tool.svg" alt="Pen Tool" />
              </div>
            </div>
            <div className="bg-white rounded py-10 px-8 w-full">
              <h2 className="font-[rubik] font-semibold text-[24px] text-center mb-5 mt-14">
                Practice
              </h2>
              <p className="font-[inter] text-[18px] text-center">
                New members will learn both theory and practical aspects, guided
                by proficient Motion lab assistants in their respective fields.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full text-center relative bottom-[-4rem]">
              <div className="bg-gradient-to-br from-[#F82F1E] to-[#C1271A] rounded-full inline-block p-8">
                <img src="/svg/experience.svg" alt="experience" />
              </div>
            </div>
            <div className="bg-white rounded py-10 px-8 w-full">
              <h2 className="font-[rubik] font-semibold text-[24px] text-center mb-5 mt-14">
                Experience
              </h2>
              <p className="font-[inter] text-[18px] text-center">
                New members will gain experience in designing mobile
                applications individually as well as in groups.
              </p>
            </div>
          </div>
        </div>
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
        <h3 className="text-center font-[rubik] text-red-500 text-[14px] lg:text-[18px]">
          CURRICULUM
        </h3>
        <h1 className="text-center font-[rubik] font-bold text-[28px] lg:text-[48px]">
          What do you want to learn?
        </h1>

        <div className="flex flex-col lg:flex-row gap-y-10 gap-x-8 mt-14">
          <Link
            className="bg-white pb-10 w-full transition duration-200"
            href="/curriculum/digital-business"
          >
            <div className="relative group hover:cursor-pointer">
              <img
                className="w-full transition duration-200 ease-in-out"
                src="/images/internship/curriculum-db-new.png"
                alt="Curriculum Digital Business"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex justify-end items-end">
                <span className="flex p-2 gap-x-1 text-white font-semibold text-[14px]">
                  Lihat lebih banyak
                  <img src="/svg/detail-arrow-right.svg" alt="arrow-detail" />
                </span>
              </div>
            </div>
            <div className="p-4 cursor-default">
              <div className="flex items-center gap-x-2">
                <img
                  className="w-10 h-10"
                  src="/images/internship/logo-db.png"
                  alt="logo-db"
                />
                <h2 className="text-[rubik] font-semibold text-[22px] my-3">
                  Digital Business
                </h2>
              </div>
              <p className="text-[#6A6A6A] text-inter text-[16px]">
                Learn to use digital technologies, tools, and processes to
                create, deliver, and optimize business outcome.
              </p>
            </div>
          </Link>

          <Link
            className="bg-white pb-10 w-full hover:cursor-pointer transition duration-200"
            href="/curriculum/mobile-programming"
          >
            <div className="relative group">
              <img
                className="w-full transition duration-200 ease-in-out"
                src="/images/internship/curriculum-mp-new.png"
                alt="Curriculum Mobile Programming"
              />
              <div className="absolute p-2 inset-0 bg-gradient-to-t from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex justify-end items-end">
                <span className="flex gap-x-1 text-white font-semibold text-[14px]">
                  Lihat lebih banyak
                  <img src="/svg/detail-arrow-right.svg" alt="arrow-detail" />
                </span>
              </div>
            </div>
            <div className="p-4 cursor-default">
              <div className="flex items-center gap-x-2">
                <img
                  className="w-10 h-10"
                  src="/images/internship/logo-mp.png"
                  alt="logo-mp"
                />
                <h2 className="text-[rubik] font-semibold text-[22px] my-3">
                  Mobile Programming
                </h2>
              </div>
              <p className="text-[#6A6A6A] text-inter text-[16px]">
                Learn to code and implement designs into Android, iOS, or
                cross-platform mobile apps for user-ready use.
              </p>
            </div>
          </Link>

          <Link
            className="bg-white pb-10 w-full hover:cursor-pointer transition duration-200"
            href="/curriculum/ui-ux-designer"
          >
            <div className="relative group">
              <img
                className="w-full transition duration-200 ease-in-out"
                src="/images/internship/curriculum-uiux-new.png"
                alt="Curriculum Mobile Programming"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex justify-end items-end">
                <span className="flex p-2 gap-x-1 text-white font-semibold text-[14px]">
                  Lihat lebih banyak
                  <img src="/svg/detail-arrow-right.svg" alt="arrow-detail" />
                </span>
              </div>
            </div>
            <div className="p-4 cursor-default">
              <div className="flex items-center gap-x-2">
                <img
                  className="w-10 h-10"
                  src="/images/internship/logo-ui.png"
                  alt="logo-ui"
                />
                <h2 className="text-[rubik] font-semibold text-[22px] my-3">
                  UI / UX Designer
                </h2>
              </div>
              <p className="text-[#6A6A6A] text-inter text-[16px]">
                Learn to define user experience in digital product interaction
                and apply solutions to mobile app design.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <div className="my-40"></div>
    </div>
  );
};

export default InternshipView;
