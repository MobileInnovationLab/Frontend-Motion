"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import GeneralSeo from "@/shared/components/seo/generalSeo";
import TopButton from "@/shared/components/topButton";
import ContentProject from "../components/ui/ContentProject";
import SearchBar from "../components/ui/SearchBar";
import Pagination from "../components/ui/Pagination";
import FadeIn from "../components/animations/FadeIn";
import ProjectNotFound from "../components/ui/ProjectNotFound";
import BigTitle from "@/shared/components/bigTitle";
import { useProjectData } from "../hooks/useProjectData";
import { useFilteredProjects } from "../hooks/useFilteredProjects";
import { GENERATIONS } from "../constants/projectConstants";
import { ITEMS_PER_PAGE } from "../constants/projectConstants";
import { motion } from "framer-motion";
import StaggerContainer from "../components/animations/StaggerContainer";
import StaggerItem from "../components/animations/StaggerItem";
import Footer from "@/shared/components/footer";

const ProjectView = () => {
  const router = useRouter();
  const [showSearch, setShowSearch] = useState(false);
  const { projects, loading, error } = useProjectData();
  const {
    search,
    setSearch,
    currentPage,
    setCurrentPage,
    activeCategory,
    setActiveCategory,
    paginated,
    totalPages,
  } = useFilteredProjects(projects);

  const topRef = useRef();

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [search, currentPage, activeCategory]);

  const handleDetail = (id) => router.push(`/project/detailProject/${id}`);

  return (
    <div className="min-h-screen bg-[#FCF6F6] dark:bg-[#090D16] text-slate-900 dark:text-[#F8FAFC] transition-colors duration-300">
      <GeneralSeo title="Product - Motion Laboratory" />
      <FadeIn>
        <div className="container mx-auto flex flex-col items-center px-4">
          <BigTitle>
            <span className="text-red-600 dark:text-[#EF4444]">Works</span>{" "}
            <span className="font-normal text-slate-900 dark:text-[#F8FAFC]">we{`'`}re</span>{" "}
            <span className="text-slate-900 dark:text-[#F8FAFC]">proud of</span>{" "}
          </BigTitle>
          <p className="font-normal text-[#6A6A6A] dark:text-[#CBD5E1] text-base lg:text-lg text-center pt-2">
            Motionhack is a project that is always held every time the study
            group ends by creating a real project.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className="overflow-x-auto whitespace-nowrap no-scrollbar">
          <section className="flex space-x-4 p-4 pl-8 md:pl-12 lg:pl-24 justify-start">
            {GENERATIONS.slice()
              .sort((a, b) => b.id - a.id)
              .map((generation) => (
                <motion.button
                  key={generation.id}
                  type="button"
                  className={`px-4 py-2 md:px-8 md:py-4 rounded-full transition-all duration-200 ${
                    activeCategory === generation.id
                      ? "bg-[#C1271A] dark:bg-[#EF4444] text-white"
                      : "border border-[#C1271A] dark:border-[#EF4444] bg-transparent text-[#C1271A] dark:text-[#EF4444] hover:bg-[#C1271A]/5 dark:hover:bg-[#EF4444]/10"
                  }`}
                  onClick={() => {
                    setActiveCategory(generation.id);
                    setCurrentPage(1);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h4
                    className={`font-bold text-base md:text-lg ${
                      activeCategory === generation.id
                        ? "text-white"
                        : "text-[#C1271A] dark:text-[#EF4444]"
                    }`}
                  >
                    {generation.name}
                  </h4>
                </motion.button>
              ))}
          </section>
        </div>
      </FadeIn>

      {showSearch ? (
        <FadeIn delay={0.3}>
          <section className="container mx-auto py-8 md:py-16 z-10 px-4">
            <SearchBar onSearch={setSearch} />
          </section>
        </FadeIn>
      ) : (
        <div className="h-16"></div>
      )}

      <section ref={topRef}>
        <div className="container mx-auto px-4 md:px-8">
          {loading ? (
            <div className="flex justify-center items-center p-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C1271A] dark:border-[#EF4444]"></div>
            </div>
          ) : error ? (
            <div className="text-center p-8 text-red-600 dark:text-[#EF4444]">{error}</div>
          ) : paginated.length > 0 ? (
            <StaggerContainer key={`${activeCategory}-${currentPage}`}>
              {paginated.map((project, index) => {
                const isAllCategory = activeCategory === 11 || activeCategory === 10;
                const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + index;
                return (
                  <StaggerItem key={`${project.id}-${globalIndex}`}>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ContentProject
                        id={project.id}
                        index={globalIndex}
                        title={project.project_name}
                        team={project.team_name}
                        description={project.about}
                        thumbnail={project.thumbnail}
                        onShowDetails={handleDetail}
                        useIndex={isAllCategory}
                      />
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          ) : (
            <FadeIn>
              <ProjectNotFound
                onSeeNewestProject={() => {
                  setActiveCategory(10);
                  setCurrentPage(1);
                }}
              />
            </FadeIn>
          )}
        </div>
      </section>

      {paginated.length > 0 && (
        <FadeIn delay={0.4}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </FadeIn>
      )}

      <TopButton />
      <Footer />
    </div>
  );
};

export default ProjectView;
