"use client";

import { useHomeData } from "../hooks/useHomeData";
import { useHomeRefs, useHandleNavigation } from "../hooks/useHomeHandlers";

// Components
import GeneralSeo from "@/shared/components/seo/generalSeo";
import TopButton from "@/shared/components/topButton";

// Views
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import DivisionSection from "./DivisionSection";
import ProjectSection from "./ProjectSection";
import PeopleSection from "./PeopleSection";
import NewsSection from "./NewsSection";

// Constants
import { DIVISIONS } from "@/features/people/constants/peopleConstants";
import Footer from "@/shared/components/footer";

export default function HomeView() {
  const {
    projects,
    people,
    projectsLoading,
    projectsError,
    peopleLoading,
    peopleError,
  } = useHomeData();

  const refs = useHomeRefs();
  const handleNavigation = useHandleNavigation(refs);

  const laboratoryAssistants = DIVISIONS.flatMap(
    (division) => division.members
  );
  const firstRow = laboratoryAssistants.slice(0, 15);
  const secondRow = laboratoryAssistants.slice(15, 30);

  return (
    <div className="bg-[#FCF6F6]">
      <GeneralSeo />
      <HeroSection innerRef={refs.homeRef} />
      <AboutSection innerRef={refs.aboutRef} />
      <div className="my-16 lg:my-40"></div>
      <DivisionSection innerRef={refs.divisionRef} />
      <ProjectSection
        innerRef={refs.projectRef}
        projects={projects}
        loading={projectsLoading}
        error={projectsError}
      />
      <PeopleSection
        innerRef={refs.peopleRef}
        firstRow={firstRow}
        secondRow={secondRow}
      />
      <NewsSection innerRef={refs.newsRef} />
      <TopButton />
      <section id="contact" ref={refs.contactRef}>
        <Footer />
      </section>
    </div>
  );
}
