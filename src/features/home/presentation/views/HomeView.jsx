"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";

// Components
import GeneralSeo from "@/core/components/seo/generalSeo";
import TopButton from "@/core/components/topButton";
import IndexIllustration from "@/core/components/illustration/indexIllustration";
import HomeNavbar from "../components/navbar/HomeNavbar";
import InternshipFooter from "@/features/internship/components/footer/InternshipFooter";
import NewsEvent from "../components/NewsEvent";
import CardProject from "../components/CardProject";
import Link from "next/link";
import "@/core/styles/globals.scss";

// Constants
const RESPONSIVE_SETTINGS = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const STATS = [
  { value: "9", label: "Generations" },
  { value: "100+", label: "Members" },
  { value: "100+", label: "Project" },
  { value: "50+", label: "Achievement" },
];

const PROJECTS = [
  {
    nama: "Bizmo",
    team: 1,
    member:
      "Puri Lalita Anagata, Evi Nirmala, Anila Dwi L, Christian Bryan S, M. Arzu Kirana, Rakha Fatih A, Yazid Al Ghazali",
  },
  {
    nama: "ECOWISE",
    team: 2,
    member:
      "Asy-Syifa Ekhar Nanda Kautsar, Yusry Anandita Yulianti, Aisya Safiya Furqani, Rizal Nur Arbaatun, Fitrotin Nadzilah, Hana Kamila Naura Yasmin",
  },
  {
    nama: "Sahabatani",
    team: 3,
    member:
      "Nurshandy Nuzul Ramadhani, Agsel Abiyyu Ghozi, Ahmad Fauzan Gen Dewa, Syfanadya Wening Adi, Erfan Ferdianto, Ahmad Aufa Ghani Diyono Saputro",
  },
];

export default function HomeView() {
  const [slider, setSlider] = useState(null);
  const [projects, setProjects] = useState([]);
  // const [firstRow, setFirstRow] = useState([]);
  // const [secondRow, setSecondRow] = useState([]);
  const scrollRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const divisionRef = useRef(null);
  const projectRef = useRef(null);
  const peopleRef = useRef(null);
  const newsRef = useRef(null);
  const contactRef = useRef(null);

  const laboratoryAssistants = Array.from({ length: 30 }, (_, index) => ({
    name: `Member ${index + 1}`,
    role: "Laboratory Assistant",
    image: "/images/about/dummy.webp",
    linkedin: "#",
    instagram: "#",
  }));

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/project-showcases");
        setProjects(response.data); // Asumsi respons API berupa array [{id, nama, team, member}, ...]
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    const fetchAssistants = async () => {
      try {
        const response = await api.get("/Aslab");
        const assistants = response.data; // Asumsi array [{id, name, role, image, linkedin, instagram}, ...]

        // Bagi data menjadi dua baris
        setFirstRow(assistants.slice(0, 15));
        setSecondRow(assistants.slice(15, 30));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAssistants();
    fetchProjects();
  }, []);

  const firstRow = laboratoryAssistants.slice(0, 15);
  const secondRow = laboratoryAssistants.slice(15, 30);

  const RenderRow = ({ rowData }) => (
    <div className="flex flex-row gap-8">
      {rowData.map((member, index) => (
        <div
          className="flex flex-col w-64 rounded-3xl shadow-lg p-6 transition-transform duration-300 hover:scale-105"
          key={index}
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
          <div className="flex flex-col items-center w-full mt-4">
            <h2 className="font-[rubik] font-semibold text-lg text-center">
              {member.name.length > 25 ? (
                <>
                  {member.name.slice(0, 25)}
                  <br />
                  {member.name.slice(25)}
                </>
              ) : (
                member.name
              )}
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
        </div>
      ))}
    </div>
  );

  const DivisionCard = ({ icon, title, description }) => (
    <div className="w-full">
      <div className="w-full text-center relative bottom-[-4rem]">
        <div className="rounded-full inline-block">
          <img src={icon || "/placeholder.svg"} alt={title} />
        </div>
      </div>
      <div className="bg-white py-10 px-8 w-full rounded-xl md:rounded-2xl">
        <h2 className="font-[rubik] font-semibold text-xl md:text-2xl text-center mb-5 mt-14">
          {title}
        </h2>
        <p className="font-[inter] text-sm/6 md:text-lg/8 text-justify text-[#6A6A6A]">
          {description}
        </p>
      </div>
    </div>
  );

  const SectionTitle = ({ subtitle, title, description }) => (
    <>
      <h3 className="text-center font-[rubik] text-red-500 text-[14px] lg:text-[18px]">
        {subtitle}
      </h3>
      <h1 className="text-center font-[rubik] font-bold text-[28px] lg:text-[48px]">
        {title}
      </h1>
      {description && (
        <p className="font-[inter] text-lg text-center text-[#6A6A6A]">
          {description}
        </p>
      )}
    </>
  );

  // Button component
  const PrimaryButton = ({ children, className = "" }) => (
    <button
      className={`bg-[#332C2B] flex gap-x-3 mt-2 text-white font-bold text-center text-[inter] text-base rounded-full px-8 py-4  transition hover:scale-105 ${className}`}
    >
      {children} 
    </button>
  );

  const SecondaryButton = ({ children, className = "" }) => (
    <button
      className={`w-full border border-[#C1271A] hover:border-none hover:bg-[#C1271A] text-[#C1271A] hover:text-white font-[rubik] rounded-full py-2 px-4 md:py-2 md:px-2 text-base md:text-xl font-bold transition duration-300 ease-in-out ${className}`}
    >
      {children}
    </button>
  );

  function handleNavigation(id) {
    switch (id) {
      case "home":
        homeRef.current?.scrollIntoView({ behavior: "smooth", top: -100 });
        break;
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth", top: -100 });
        break;
      case "division":
        divisionRef.current?.scrollIntoView({
          behavior: "smooth",
          top: -100,
        });
        break;
      case "project":
        projectRef.current?.scrollIntoView({ behavior: "smooth", top: -100 });
        break;
      case "people":
        peopleRef.current?.scrollIntoView({
          behavior: "smooth",
          top: -100,
        });
        break;
      case "news":
        newsRef.current?.scrollIntoView({
          behavior: "smooth",
          top: -100,
        });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({
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
      <GeneralSeo />

      <HomeNavbar onNavigation={handleNavigation} />

      <section
        ref={homeRef}
        className="w-full bg-[url('/images/main-index/bg-main.webp')] bg-cover bg-no-repeat bg-[center_bottom_0rem]"
      >
        <div className="container gap-x-10 w-full mx-auto flex justify-between flex-col lg:flex-row items-center lg:pb-40 pt-32">
          <div className="flex flex-col items-center md:items-start md:justify-start">
            <h2 className="font-bold font-[rubik] text-[30px] lg:text-[60px] text-white text-center lg:text-left lg:mb-0">
              Mobile Innovation Laboratory
            </h2>
            <p className="mb-8 mt-5 text-base/7 md:text-lg/8 text-inter text-[#FFEAEA] text-center md:text-left">
              The Mobile Innovation Laboratory, or commonly called Motion Lab,
              is one of the latest laboratories at the Faculty of Informatics,
              Telkom University under the auspices of K-Side.
            </p>
            {/* <PrimaryButton>Explore More</PrimaryButton> */}
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
          </div>
          <div className="w-full h-full pt-5 md:pt-0">
            <IndexIllustration />
          </div>
        </div>
      </section>

      <section ref={aboutRef} className="container mx-auto lg:py-16">
        <SectionTitle subtitle="ABOUT US" title="What Is Motionlab?" />

        <Image
          className="object-contain w-full relative my-6 lg:mt-20 rounded"
          layout="responsive"
          width="1168"
          height="500"
          src="/images/home/motion-lab.png"
          alt="About Image"
        />

        <div className="flex flex-col lg:flex-row gap-y-5 justify-between items-center">
          <p className="text-base/8 lg:text-lg/8 w-full text-justify text-inter text-[#6A6A6A] tracking-wider">
            Mobile Innovation Laboratory is one of the research laboratories
            under the Faculty of Informatics, Telkom University. Motion Lab
            focuses on the creation, development, and research of mobile
            software. Now, Motion Lab comes with 3 division options: Digital
            Business, UI/UX Design, and Mobile Programming, allowing members to
            explore innovative solutions while contributing to cutting-edge
            research in mobile technology.
          </p>
        </div>

        <div className="flex justify-around mt-8 lg:mt-14 flex-row gap-y-10">
          {STATS.map((stat, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
      </section>

      <div className="my-16 lg:my-40"></div>

      <section ref={divisionRef} className="container mx-auto py-16">
        <SectionTitle subtitle="OUR DIVISION" title="What We Do" />

        <div className="flex gap-x-10 flex-col lg:flex-row">
          <DivisionCard
            icon="/svg/db-icon.svg"
            title="Digital Business"
            description="Transforming ideas into impactful ventures, our Digital Business
              division focuses on strategic planning, business modeling, and
              digital innovation. We empower individuals to create scalable
              solutions that drive real-world impact and meet market demands."
          />

          <DivisionCard
            icon="/svg/uiux-icon.svg"
            title="UI/UX Design"
            description="Crafting seamless experiences, our UI/UX Design division
              specializes in user-centric solutions. From wireframes to
              high-fidelity designs, we ensure every interaction feels
              intuitive, engaging, and beautifully functional."
          />

          <DivisionCard
            icon="/svg/mp-icon.svg"
            title="Mobile Programming"
            description="Building the future, one app at a time. Our Mobile Programming
              division brings ideas to life with cutting-edge technologies. We
              develop robust, efficient, and scalable mobile applications
              tailored for modern users."
          />
        </div>
      </section>

      <section ref={projectRef} className="container mx-auto py-16">
        <SectionTitle
          subtitle="OUR PROJECTS"
          title="Our MotionHack Project Through Generation"
          description="Motionhack is a project that is always held every time the study
            group ends by creating a real project."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-16">
          {PROJECTS.map((project, index) => (
            <CardProject
              key={index}
              nama={project.nama}
              team={project.team}
              member={project.member}
            />
          ))}
          {/* {projects.map((project) => (
          <CardProject
            key={project.id} 
            id={project.id}
            nama={project.nama}
            team={project.team}
            member={project.member}
          />
        ))} */}
        </div>

        <Link href={"/project"}>
          <div className="py-8">
            <SecondaryButton>See More</SecondaryButton>
          </div>
        </Link>
      </section>

      <section ref={peopleRef} className="py-20">
        <div className="">
          <SectionTitle
            subtitle="OUR PEOPLE"
            title="Meet Our Laboratory Assistant"
          />

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

      <section ref={newsRef} className="container mx-auto py-16">
        <div className="flex">
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
        </div>

        <div className="flex justify-center space-x-11 pt-16 w-full">
          <NewsEvent />
          <NewsEvent />
          <NewsEvent />
        </div>

        <Link href={"/news"}>
          <div className="py-8">
            <SecondaryButton>See More</SecondaryButton>
          </div>
        </Link>
      </section>

      <TopButton />
      <section ref={contactRef}>
        <InternshipFooter />
      </section>
    </div>
  );
}
