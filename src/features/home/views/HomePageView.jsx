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

const LABORATORY_ASSISTANTS = DIVISIONS.flatMap((division) => division.members);
const MID_INDEX = Math.ceil(LABORATORY_ASSISTANTS.length / 2);
const FIRST_ROW = LABORATORY_ASSISTANTS.slice(0, MID_INDEX);
const SECOND_ROW = LABORATORY_ASSISTANTS.slice(MID_INDEX);

export default function HomeView({
  initialProjects = [],
  initialNews = [],
} = {}) {
  const {
    projects,
    news,
    projectsLoading,
    newsLoading,
    projectsError,
    newsError,
  } = useHomeData({ initialProjects, initialNews });

  const refs = useHomeRefs();
  const handleNavigation = useHandleNavigation(refs);

  return (
    <div className="bg-[#FCF6F6] dark:bg-[#090D16] text-slate-900 dark:text-[#F8FAFC] min-h-screen transition-colors duration-300">
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
        firstRow={FIRST_ROW}
        secondRow={SECOND_ROW}
      />
      <NewsSection
        innerRef={refs.newsRef}
        news={news}
        newsLoading={newsLoading}
        newsError={newsError}
      />
      <TopButton />
      <section id="contact" ref={refs.contactRef}>
        <Footer />
      </section>
    </div>
  );
}
