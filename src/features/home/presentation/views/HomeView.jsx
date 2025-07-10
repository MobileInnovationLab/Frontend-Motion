"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { motion } from "framer-motion";

// Components
import GeneralSeo from "@/core/components/seo/generalSeo";
import TopButton from "@/core/components/topButton";
import IndexIllustration from "@/core/components/illustration/indexIllustration";
import HomeNavbar from "../components/navbar/HomeNavbar";
import InternshipFooter from "@/features/internship/components/footer/InternshipFooter";
import NewsEvent from "../components/NewsEvent";
import CardProject from "../components/CardProject";
import SectionTitle from "../components/SectionTitle";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryButton from "../components/buttons/SecondaryButton";
import DivisionCard from "../components/DivisionCard";

// Animation Components
import ScaleIn from "../components/animations/ScaleIn";
import SlideIn from "../components/animations/SlideIn";
import RevealText from "../components/animations/RevealText";

// Constants
import { STATS, PROJECTS } from "../constants/homeConstants";
import { DIVISIONS } from "@/features/people/constants/peopleConstants";

// Services
import { projectService } from "@/features/project/services/projectService";
import { peopleService } from "@/features/people/services/peopleService";

// Styles
import "@/core/styles/globals.scss";

export default function HomeView() {
  const [projects, setProjects] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [projectsError, setProjectsError] = useState(null);
  const [people, setPeople] = useState([]);
  const [peopleLoading, setPeopleLoading] = useState(false);
  const [peopleError, setPeopleError] = useState(null);
  const scrollRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const divisionRef = useRef(null);
  const projectRef = useRef(null);
  const peopleRef = useRef(null);
  const newsRef = useRef(null);
  const contactRef = useRef(null);

  const laboratoryAssistants = DIVISIONS.flatMap((division) => division.members);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setProjectsLoading(true);
        const response = await projectService.getAllProjects();
        console.log("📦 Fetched projects for homepage:", response);
        const gen9Projects = response.data
          .filter((project) => project.generation === "9")
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 3);

        setProjects(gen9Projects);
        setProjectsError(null);
      } catch (err) {
        setProjectsError("Failed to load projects");
      } finally {
        setProjectsLoading(false);
      }
    };

    const fetchPeople = async () => {
      try {
        setPeopleLoading(true);
        const data = await peopleService.getAllPeople();

        const grouped = data.reduce((acc, person) => {
          const division = person.division || "Unknown";
          if (!acc[division]) acc[division] = [];
          acc[division].push(person);
          return acc;
        }, {});

        const groupedDivisions = Object.entries(grouped).map(
          ([divisionName, members], index) => ({
            id: index + 1,
            division: divisionName,
            members,
          })
        );

        setPeople(groupedDivisions);
        setPeopleError(null);
      } catch (err) {
        console.error("❌ Error fetching people:", err);
        setPeopleError("Failed to load people");
      } finally {
        setPeopleLoading(false);
      }
    };

    fetchProjects();
    fetchPeople();
  }, []);

  const firstRow = laboratoryAssistants.slice(0, 15);
  const secondRow = laboratoryAssistants.slice(15, 30);

  const RenderRow = ({ rowData }) => (
    <div className="flex flex-row gap-8 px-4 md:px-12 lg:px-4 py-6 overflow-x-auto">
      {rowData.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.1,
            delay: index * 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          whileHover={{ scale: 1.05 }}
          className="flex flex-col w-[350px] min-h-[340px] justify-between rounded-3xl shadow-lg p-6 transition-transform duration-300"
        >
          <div className="w-full text-center">
            <div className="rounded-full inline-block">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center w-full mt-6">
            <h2 className="font-[rubik] font-semibold text-lg text-center line-clamp-2 break-words">
              {member.name}
            </h2>
            <p className="font-[inter] text-base text-center text-[#6A6A6A] mt-3 line-clamp-1 break-words">
              {member.role}
            </p>
            <hr className="w-1/2 my-4 border-[#6A6A6A]" />
            <div className="flex justify-center">
              <motion.a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="/svg/linkedln.svg" alt="LinkedIn" />
              </motion.a>
              <motion.a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="/svg/instagram.svg" alt="Instagram" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const handleNavigation = (id) => {
    const refs = {
      home: homeRef,
      about: aboutRef,
      division: divisionRef,
      project: projectRef,
      people: peopleRef,
      news: newsRef,
      contact: contactRef,
    };

    const targetRef = refs[id];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", top: -100 });
    }
  };

  return (
    <div className="bg-[#FCF6F6]">
      <GeneralSeo />
      <HomeNavbar onNavigation={handleNavigation} />
      <section
        ref={homeRef}
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
                  The Mobile Innovation Laboratory, or commonly called Motion
                  Lab, is one of the latest laboratories at the Faculty of
                  Informatics, Telkom University under the auspices of K-Side.
                </p>
              </RevealText>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <PrimaryButton>
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
                </PrimaryButton>
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
      {/* About Section */}
      <section ref={aboutRef} className="container mx-auto lg:py-16">
        <SlideIn direction="up">
          <SectionTitle subtitle="ABOUT US" title="What Is Motionlab?" />
        </SlideIn>

        <ScaleIn delay={0.2}>
          <Image
            className="object-contain w-full relative my-6 lg:mt-20 rounded"
            layout="responsive"
            width="1168"
            height="500"
            src="/images/home/motion-lab.png"
            alt="About Image"
          />
        </ScaleIn>

        <RevealText delay={0.4}>
          <div className="flex flex-col lg:flex-row gap-y-5 justify-between items-center">
            <p className="text-base/8 lg:text-lg/8 w-full text-justify text-inter text-[#6A6A6A] tracking-wider">
              Mobile Innovation Laboratory is one of the research laboratories
              under the Faculty of Informatics, Telkom University. Motion Lab
              focuses on the creation, development, and research of mobile
              software. Now, Motion Lab comes with 3 division options: Digital
              Business, UI/UX Design, and Mobile Programming, allowing members
              to explore innovative solutions while contributing to cutting-edge
              research in mobile technology.
            </p>
          </div>
        </RevealText>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="flex justify-around mt-8 lg:mt-14 flex-row gap-y-10"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                },
              }}
              className="flex items-center space-x-0 md:space-x-6"
            >
              <div className="text-center px-3 lg:px-14">
                <h2 className="font-[rubik] font-bold text-xl md:text-5xl text-[#C1271A]">
                  {stat.value}
                </h2>
                <p className="font-[inter] text-xs text-justify lg:text-2xl text-[#6A6A6A]">
                  {stat.label}
                </p>
              </div>
              {index !== STATS.length - 1 && (
                <div className="w-px h-8 md:h-12 lg:h-24 bg-[#6A6A6A]"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </section>
      <div className="my-16 lg:my-40"></div>
      {/* Division Section */}
      <section ref={divisionRef} className="container mx-auto py-16">
        <SlideIn direction="up">
          <SectionTitle subtitle="OUR DIVISION" title="What We Do" />
        </SlideIn>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="flex gap-x-10 flex-col lg:flex-row"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                },
              },
            }}
          >
            <DivisionCard
              icon="/svg/db-icon.svg"
              title="Digital Business"
              description="Transforming ideas into impactful ventures, our Digital Business
                division focuses on strategic planning, business modeling, and
                digital innovation. We empower individuals to create scalable
                solutions that drive real-world impact and meet market demands."
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                },
              },
            }}
          >
            <DivisionCard
              icon="/svg/uiux-icon.svg"
              title="UI/UX Design"
              description="Crafting seamless experiences, our UI/UX Design division
                specializes in user-centric solutions. From wireframes to
                high-fidelity designs, we ensure every interaction feels
                intuitive, engaging, and beautifully functional."
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5,
                  ease: [0.25, 0.1, 0.25, 1],
                },
              },
            }}
          >
            <DivisionCard
              icon="/svg/mp-icon.svg"
              title="Mobile Programming"
              description="Building the future, one app at a time. Our Mobile Programming
                division brings ideas to life with cutting-edge technologies. We
                develop robust, efficient, and scalable mobile applications
                tailored for modern users."
            />
          </motion.div>
        </motion.div>
      </section>
      <section ref={projectRef} className="container mx-auto py-8 md:py-16">
        <SlideIn direction="up">
          <SectionTitle
            subtitle="OUR PROJECTS"
            title="Our MotionHack Project Through Generation"
            description="Motionhack is a project that is always held every time the study
              group ends by creating a real project."
          />
        </SlideIn>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="flex md:grid md:grid-cols-3 md:gap-8 gap-4 overflow-x-auto flex-nowrap no-scrollbar py-4 px-4 md:px-0"
        >
          {projectsLoading ? (
            <div className="col-span-3 flex justify-center items-center min-h-[200px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C1271A]"></div>
            </div>
          ) : projectsError ? (
            <div className="col-span-3 flex justify-center items-center min-h-[200px] text-red-600">
              {projectsError}
            </div>
          ) : projects.length > 0 ? (
            projects.map((project) => (
              <motion.div
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                  },
                }}
                onClick={() =>
                  router.push(`/project/detailProject/${project.id}`)
                }
                className="cursor-pointer flex-shrink-0 w-[85%] md:w-auto"
              >
                <CardProject
                  id={project.id}
                  nama={project.project_name}
                  team={project.team_name}
                  member={project.team_members}
                  thumbnail={
                    project.thumbnail
                      ? `https://admin.motionlaboratory.com/storage/project-showcase/${project.thumbnail}`
                      : "/images/contactUs/photoFirst.png"
                  }
                  about={project.about}
                />
              </motion.div>
            ))
          ) : (
            <div className="col-span-3 flex justify-center items-center min-h-[200px] text-gray-500">
              No projects available
            </div>
          )}
        </motion.div>

        <div className="py-8">
          <Link href={"/project"}>
            <SecondaryButton>See More</SecondaryButton>
          </Link>
        </div>
      </section>

      <section ref={peopleRef} className="pt-20">
        <div className="">
          <SlideIn direction="up">
            <SectionTitle
              subtitle="OUR PEOPLE"
              title="Meet Our Laboratory Assistant"
            />
          </SlideIn>

          <div className="overflow-x-auto whitespace-nowrap no-scrollbar py-14">
            <Marquee speed={50} pauseOnClick>
              <div ref={scrollRef} className="flex flex-col gap-8 px-4 py-8">
                <RenderRow rowData={firstRow} />
                <RenderRow rowData={secondRow} />
              </div>
            </Marquee>
          </div>
        </div>
      </section>
      <div className="container mx-auto pb-8">
        <Link href={"/people"}>
          <SecondaryButton>See More</SecondaryButton>
        </Link>
      </div>
      {/* News Section */}
      <section ref={newsRef} className="container mx-auto py-0 md:py-16">
        <SlideIn direction="up">
          <div className="w-full text-center">
            <SectionTitle
              subtitle="NEWS"
              title="Stay Updated with Motion Lab!"
            />
            <p className="font-[rubik] text-[#6A6A6A] max-w-4xl mx-auto">
              Discover the latest stories, achievements, and updates from Motion
              Lab. From groundbreaking innovations to inspiring success stories,
              explore how our community continues to push the boundaries of
              mobile technology. Stay in the loop and be part of the journey!
            </p>
          </div>
        </SlideIn>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="pt-8 md:pt-16 w-full"
        >
          <div className="flex md:grid md:grid-cols-3 md:gap-8 gap-4 overflow-x-auto flex-nowrap no-scrollbar px-4 md:px-0">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                  },
                }}
                className="flex-shrink-0 w-[85%] md:w-auto"
              >
                <NewsEvent />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="py-8 text-center">
          <Link href="/news">
            <SecondaryButton>See More</SecondaryButton>
          </Link>
        </div>
      </section>
      <TopButton />
      <section ref={contactRef}>
        <InternshipFooter />
      </section>
    </div>
  );
}
