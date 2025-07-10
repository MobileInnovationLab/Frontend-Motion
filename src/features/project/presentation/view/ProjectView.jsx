"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

import GeneralSeo from "@/core/components/seo/generalSeo";
import BigTitle from "@/core/components/bigTitle";
import TopButton from "@/core/components/topButton";
import InternshipFooter from "@/features/internship/components/footer/InternshipFooter";
import ProjectNavbar from "../../components/ProjectNavbar";
import ContentProduct from "../../components/contentProject";
import NotFound from "../../components/NotFound";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

import FadeIn from "../components/animations/FadeIn";
import StaggerContainer from "../components/animations/StaggerContainer";
import StaggerItem from "../components/animations/StaggerItem";

import { projectService } from "../../services/projectService";

import { GENERATIONS, ITEMS_PER_PAGE } from "../constants/projectConstants";

import styles from "@/core/styles/pages/product.module.scss";
import ProjectNotFound from "../../containers/errors/ProjectNotFound";

const ProjectView = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState(10);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await projectService.getAllProjects();
      console.log("📦 Fetched projects response:", response);
      setProjects(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch projects");
      console.error("Error fetching projects:", err);
    } finally {
      setLoading(false);
    }
  };
  const handleShowDetails = (id) => {
    console.log("🔗 Navigating to project with ID:", id);
    router.push(`/project/detailProject/${id}`);
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
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.project_name.toLowerCase().includes(search.toLowerCase()) ||
      project.team_name.toLowerCase().includes(search.toLowerCase());
    const projectGeneration = parseInt(project.generation);
    const matchesGeneration =
      activeCategory === 10 || projectGeneration === activeCategory;

    if (project.project_name.toLowerCase().includes(search.toLowerCase())) {
      console.log(
        `Project "${project.project_name}" - Gen: ${project.generation}, Active: ${activeCategory}, Matches: ${matchesGeneration}`
      );
    }

    return matchesSearch && matchesGeneration;
  });

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredProjects.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  return (
    <div className={styles["main-body"]}>
      <GeneralSeo title="Product" />
      <ProjectNavbar />

      <FadeIn>
        <div className="container mx-auto flex flex-col items-center">
          <BigTitle>
            <span className="text-red-600">Works</span>{" "}
            <span className="font-normal">we{`'`}re</span> proud of{" "}
          </BigTitle>
          <p className="font-normal text-[#6A6A6A] text-base lg:text-lg text-center pt-2">
            Motionhack is a project that is always held every time the study
            group ends by creating a real project.
          </p>
        </div>
      </FadeIn>


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

      <FadeIn delay={0.3}>
        <section className="container mx-auto py-8 md:py-16 z-10">
          <SearchBar onSearch={handleSearch} />
        </section>
      </FadeIn>

      <section>
        <div className="container mx-auto border rounded">
          {loading ? (
            <div className="flex justify-center items-center p-8">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C1271A]"></div>
            </div>
          ) : error ? (
            <div className="text-center p-8 text-red-600">{error}</div>
          ) : currentItems.length > 0 ? (
            <StaggerContainer>
              {currentItems.map((project) => (
                <StaggerItem key={project.id}>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    {" "}
                    <ContentProduct
                      id={project.id}
                      title={project.project_name}
                      team={project.team_name}
                      description={project.about}
                      thumbnail={project.thumbnail}
                      onShowDetails={handleShowDetails}
                    />
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          ) : (
            <FadeIn>
              <ProjectNotFound
                onSeeNewestProject={() => {
                  setActiveCategory(9);
                  setCurrentPage(1);
                }}
              />
            </FadeIn>
          )}
        </div>
      </section>

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
