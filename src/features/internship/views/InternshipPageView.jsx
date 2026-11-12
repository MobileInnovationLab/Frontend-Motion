"use client";

import React, { useRef, useState } from "react";
import TopButton from "@/shared/components/topButton";


import BenefitSection from "./sections/BenefitSection";
import HeroSection from "./sections/HomeSection";
import AnnouncementSection from "./sections/AnnouncementSection";
import AboutSection from "./sections/AboutSection";
import RouteMapSection from "./sections/RouteMapSection";
import RequirementSection from "./sections/RequirementSection";
import CurriculumSection from "./sections/CurriculumSection";

const InternshipView = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const requirementRef = useRef(null);
  const routeMapRef = useRef(null);
  const benefitRef = useRef(null);
  const curriculumRef = useRef(null);
  const defaultRouteImage = "/images/recruitment/routemap-step-2.webp";
  const [activeImage, setActiveImage] = useState(defaultRouteImage);
  const [activeSection, setActiveSection] = useState("section2");

  const handleClick = (imageSrc, section) => {
    setActiveImage(imageSrc);
    setActiveSection(section);
  };

  return (
    <div className="bg-[#FCF6F6] dark:bg-[#090D16] text-slate-900 dark:text-[#F8FAFC] min-h-screen transition-colors duration-300">
      <HeroSection homeRef={homeRef} />
      <div className="my-12"></div>
      <AnnouncementSection announcementRef={requirementRef} />
      <div className="my-12"></div>
      <AboutSection aboutRef={aboutRef} />
      <div className="my-40"></div>
      <RouteMapSection
        activeImage={activeImage}
        activeSection={activeSection}
        handleClick={handleClick}
      />
      <div className="my-20"></div>
      <RequirementSection requirementRef={requirementRef} />
      <div className="my-40"></div>
      <BenefitSection benefitRef={benefitRef} />
      <div className="my-40"></div>
      <CurriculumSection curriculumRef={curriculumRef} />
      <div className="my-40"></div>
      <TopButton />
    </div>
  );
};

export default InternshipView;
