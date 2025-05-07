"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

// Components
import GeneralSeo from "@/core/components/seo/generalSeo";
import BigTitle from "@/core/components/bigTitle";
import TopButton from "@/core/components/topButton";
import InternshipFooter from "@/features/internship/components/footer/InternshipFooter";
import ProjectNavbar from "../../components/ProjectNavbar";
import ContentProduct from "../../components/contentProject";
import NotFound from "../../components/NotFound";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

// Animation Components
import FadeIn from "../components/animations/FadeIn";
import StaggerContainer from "../components/animations/StaggerContainer";
import StaggerItem from "../components/animations/StaggerItem";

// Constants
import {
  GENERATIONS,
  ITEMS_PER_PAGE,
  DUMMY_DESCRIPTION,
} from "../constants/projectConstants";

// Styles
import styles from "@/core/styles/pages/product.module.scss";

const ProjectView = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(GENERATIONS[GENERATIONS.length - 1].id);
  const [activeCategory, setActiveCategory] = useState(9);

  // Mock data - In real app, this would come from an API
  const teams = Array.from({ length: 6 }, (_, index) => ({
    title: `Project ${String.fromCharCode(65 + index)}`,
    team: index + 1,
    description: DUMMY_DESCRIPTION,
    qrcode: "/images/product/dummy-product.png",
    generationId: 8, // Set to latest generation
  }));

  const handleShowDetails = (title) => {
    router.push(`/project/detailProject`);
  };

  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setCurrentPage(1);
  };

  // Filter and paginate teams
  const filteredTeams = teams.filter(
    (teamData) => teamData.generationId === activeCategory
  );
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredTeams.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTeams.length / ITEMS_PER_PAGE);

  return (
    <div className={styles["main-body"]}>
      <GeneralSeo title="Product" />
      <ProjectNavbar />

      {/* Header Section */}
      <FadeIn>
        <div className="container mx-auto flex flex-col items-center">
          <BigTitle>
            <span className="text-red-600">Works</span>{" "}
            <span className="font-normal">we{`'`}re</span> proud of{" "}
          </BigTitle>
          <p className="font-normal text-[#6A6A6A] text-base lg:text-lg text-center pt-2">
            Motionhack is a project that is always held every time the study group
            ends by creating a real project.
          </p>
        </div>
      </FadeIn>

      {/* Categories Section */}
      <FadeIn delay={0.2}>
        <div className="overflow-x-auto whitespace-nowrap no-scrollbar">
          <section className="flex space-x-4 p-4 pl-8 md:pl-12 lg:pl-24">
            {GENERATIONS.sort((a, b) => b.id - a.id).map((generation) => (
              <motion.button
                key={generation.id}
                type="button"
                className={`px-4 py-2 md:px-8 md:py-4 rounded-full ${
                  activeCategory === generation.id
                    ? "bg-[#C1271A]"
                    : "border border-[#C1271A]"
                }`}
                onClick={() => handleCategoryChange(generation.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h4
                  className={`font-bold text-base md:text-lg ${
                    activeCategory === generation.id
                      ? "text-[#FFFF]"
                      : "text-[#C1271A]"
                  }`}
                >
                  {generation.name}
                </h4>
              </motion.button>
            ))}
          </section>
        </div>
      </FadeIn>

      {/* Search Section */}
      <FadeIn delay={0.3}>
        <section className="container mx-auto py-8 md:py-16">
          <SearchBar onSearch={handleSearch} />
        </section>
      </FadeIn>

      {/* Projects Section */}
      <section>
        <div className="container mx-auto border rounded">
          {filteredTeams.length > 0 ? (
            <StaggerContainer>
              {currentItems.map((teamData, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ContentProduct
                      title={teamData.title}
                      team={teamData.team}
                      description={teamData.description}
                      qrcode={teamData.qrcode}
                      onShowDetails={handleShowDetails}
                    />
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <FadeIn>
              <NotFound />
            </FadeIn>
          )}
        </div>
      </section>

      {/* Pagination Section */}
      {currentItems.length > 0 && (
        <FadeIn delay={0.4}>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </FadeIn>
      )}

      <TopButton />
      <InternshipFooter />
    </div>
  );
};

export default ProjectView;
