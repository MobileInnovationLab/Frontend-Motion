"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import RecruitmentAnnouncementCard from "./InternshipAnnouncementView";
import InternshipNavbar from "../components/navbar/InternshipNavbar";

const InternshipView = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const requirementRef = useRef(null);
  const benefitRef = useRef(null);
  const curriculumRef = useRef(null);
  const [isSlided, setIsSlided] = useState(true);

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

  return (
    <div className="bg-[#FCF6F6]">
      <InternshipNavbar onNavigation={handleNavigation} />
      <section
        ref={homeRef}
        className="relative w-full bg-[url('/images/recruitment/aslab-member.jpg')] bg-cover bg-no-repeat bg-[top_bottom_0rem]"
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        <div className="container w-full mx-auto flex flex-col items-start p-48 relative z-0">
          <motion.div
            className="font-bold font-[inter] text-[30px] lg:text-[60px] text-white text-center lg:text-left mb-10 lg:mb-0"
            initial={{ y: "10px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2, bounce: 0 }}
          >
            Internship <br /> in Mobile Innovation Laboratory
          </motion.div>
          <motion.div
            className="font-normal font-[inter] text-[30px] lg:text-[25px] text-white text-center lg:text-left mb-10 lg:mb-8"
            initial={{ y: "10px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2, bounce: 0 }}
          >
            Boost your skills with Mobile Innovation Laboratory, where{" "}
            {"you'll"} work on real-world projects in UI/UX, Mobile Programming,
            and Digital Business
          </motion.div>
          <Link
            href="/register"
            passHref
            className="bg-[#F82F1E] font-bold text-white text-[inter] text-[16px] rounded-full px-8 py-3 hover:scale-110 transition duration-400 hidden lg:inline-block"
          >
            Join Us!
          </Link>
        </div>
      </section>

      <div className="my-12"></div>

      {process.env.NEXT_PUBLIC_RECRUITMENT_ANNOUNCEMENT == "true" && (
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
        <div className="flex flex-col lg:flex-row align-items-center mt-14 container justify-content-center m-auto">
          <div className="w-full h-[507px] bg-black rounded-lg me-10">
            <img
              src="/images/internship/aslab-member.jpg"
              className="object-cover w-full h-full rounded-lg"
              alt="Internship Activities"
            />
          </div>
          <div className="flex flex-col justify-between bg-white text-left px-10 py-10 rounded-lg lg:w-3/4">
            {isSlided ? (
              <div>
                <h2 className="text-[24px] font-[inter] font-bold mb-8">
                  What is Internship?
                </h2>
                <p className="text-[18px] font-[inter] font-light text-[#ACACAC]">
                  Motion Internship is organized by Motion Lab aims to recruit
                  new members for Motion Lab. Offering Telkom University
                  students from diverse majors the chance to gain experience.
                  Motion Lab has divisions like Digital Business, UI/UX
                  Designer, and Mobile Programming, and the internship lasts for
                  8 sessions or around 2 months.
                </p>
              </div>
            ) : (
              <div>
                <h2 className="text-[24px] font-[inter] font-bold mb-8">
                  What activities are planned?
                </h2>
                <p className="text-[18px] font-[inter] font-light text-[#ACACAC]">
                  During the internship at Motion Lab, prospective members will
                  deepen their knowledge related to the chosen division. The
                  main activities in Motion Internship includes:
                </p>
                <ul className="text-[18px] font-[inter] font-light text-[#ACACAC]">
                  <li>1. Choosing a division</li>
                  <li>2. Participating in study groups</li>
                  <li>3. Completing significant tasks</li>
                  <li>4. Joining Motion Hack</li>
                </ul>
              </div>
            )}
            <div className="flex ms-auto mt-5 lg:mt-0">
              <button
                onClick={() => {
                  setIsSlided(!isSlided);
                }}
                className="
                border rounded-full p-5 border-[#858585] group 
                hover:bg-[#F82F1E] hover:border-white
                transition delay-50
              "
              >
                <svg
                  className="
                  group-hover:fill-white
                  transition delay-50
                "
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="#6A6A6A"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1.05382 10.6965C1.13858 10.7835 1.4586 11.1555 1.7567 11.4615C3.50438 13.386 8.06357 16.536 10.4498 17.4975C10.8122 17.652 11.7284 17.979 12.218 18C12.687 18 13.1342 17.892 13.5609 17.673C14.0928 17.367 14.5195 16.8855 14.7533 16.317C14.9038 15.9225 15.1376 14.742 15.1376 14.721C15.3714 13.4295 15.5 11.331 15.5 9.012C15.5 6.8025 15.3714 4.7895 15.18 3.4785C15.1581 3.4575 14.9243 1.9905 14.6685 1.488C14.1995 0.57 13.2832 0 12.3027 0H12.218C11.5794 0.0225 10.2365 0.5925 10.2365 0.6135C7.97881 1.5765 3.52484 4.572 1.73478 6.5625C1.73478 6.5625 1.23064 7.074 1.01145 7.3935C0.669508 7.8525 0.5 8.421 0.5 8.9895C0.5 9.624 0.691427 10.215 1.05382 10.6965Z" />
                </svg>
              </button>
              <div className="px-2"></div>
              <button
                onClick={() => {
                  setIsSlided(!isSlided);
                }}
                className="
                border rounded-full p-5 border-[#858585] group 
                hover:bg-[#F82F1E] hover:border-white
                transition delay-50
              "
              >
                <svg
                  className="
                  group-hover:fill-white
                  transition delay-50
                "
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="#6A6A6A"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.9462 10.6965C14.8614 10.7835 14.5414 11.1555 14.2433 11.4615C12.4956 13.386 7.93643 16.536 5.55017 17.4975C5.18777 17.652 4.27155 17.979 3.78203 18C3.31296 18 2.86581 17.892 2.43911 17.673C1.90721 17.367 1.48052 16.8855 1.24671 16.317C1.0962 15.9225 0.862397 14.742 0.862397 14.721C0.628592 13.4295 0.5 11.331 0.5 9.012C0.5 6.8025 0.628592 4.7895 0.820019 3.4785C0.841939 3.4575 1.07574 1.9905 1.33147 1.488C1.80054 0.57 2.71676 0 3.69727 0H3.78203C4.4206 0.0225 5.76352 0.5925 5.76352 0.6135C8.02119 1.5765 12.4752 4.572 14.2652 6.5625C14.2652 6.5625 14.7694 7.074 14.9886 7.3935C15.3305 7.8525 15.5 8.421 15.5 8.9895C15.5 9.624 15.3086 10.215 14.9462 10.6965" />
                </svg>
              </button>
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
        <h1 className="text-center lg:text-left font-[rubik] font-bold text-[28px] lg:text-[48px] container mx-auto">
          Route Map Motionlab
        </h1>
        <div className="mt-10 lg:mt-0">
          <img
            src="/images/recruitment/route-map.png"
            className="w-full object-cover"
            alt="Route Map"
          />
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
                Active Telkom University undergraduate student batch 2021-2023
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
                Portofolio <br />
                <span className="text-red-500">
                  Only required for UI/UX Design and Mobile Programming
                  applicant
                </span>
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
                of 1 year
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
                Repost our open recruitment post on Instagram Story
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
                internship will receive an e-certificate that they can claim for
                TAK.
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
            className="bg-white p-4 pb-10 w-full hover:cursor-pointer hover:scale-105 transition duration-200"
            href="/curriculum/digital-business"
          >
            <img
              className="w-full"
              src="/images/internship/curriculum-db.png"
              alt="Curriculum Digital Business"
            />
            <h2 className="text-[rubik] font-semibold text-[22px] my-3">
              Digital Business
            </h2>
            <p className="text-[#6A6A6A] text-inter text-[16px]">
              Learn to use digital technologies, tools, and processes tp create,
              deliver, and optimize business outcome.
            </p>
          </Link>
          <Link
            className="bg-white p-4 pb-10 w-full hover:cursor-pointer hover:scale-105 transition duration-200"
            href="/curriculum/ui-ux-designer"
          >
            <img
              className="w-full"
              src="/images/internship/curriculum-ui.png"
              alt="Curriculum UI / UX Designer"
            />

            <h2 className="text-[rubik] font-semibold text-[22px] my-3">
              UI / UX Designer
            </h2>
            <p className="text-[#6A6A6A] text-inter text-[16px]">
              Learn to define user experience in digital product interaction and
              apply solutions to mobile app design.
            </p>
          </Link>
          <Link
            className="bg-white p-4 pb-10 w-full hover:cursor-pointer hover:scale-105 transition duration-200"
            href="/curriculum/mobile-programming"
          >
            <img
              className="w-full"
              src="/images/internship/curriculum-mp.png"
              alt="Curriculum Mobile Programming"
            />

            <h2 className="text-[rubik] font-semibold text-[22px] my-3">
              Mobile Programming
            </h2>
            <p className="text-[#6A6A6A] text-inter text-[16px]">
              Learn to code and implement designs into Android, iOS, or
              cross-platform mobile apps for user-ready use.
            </p>
          </Link>
        </div>
      </section>

      <div className="my-40"></div>
    </div>
  );
};

export default InternshipView;
