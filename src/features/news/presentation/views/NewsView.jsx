"use client";

import { useState, useCallback } from "react";
import styles from "@/core/styles/pages/product.module.scss";
import GeneralSeo from "@/core/components/seo/generalSeo";
import InternshipFooter from "@/features/internship/components/footer/InternshipFooter";
import NewsNavbar from "../../components/NewsNavbar";
import BigTitle from "@/core/components/bigTitle";
import NewsCard from "../../components/NewsCard";
import SortButtons from "../components/SortButtons";
import Pagination from "../components/Pagination";
import CategoryButtons from "../components/CategoryButtons";
import { CATEGORIES, CONTENT_DATA } from "../constants/newsConstants";
import { usePagination } from "../hooks/usePagination";
import FadeIn from "../components/animations/FadeIn";
import StaggerContainer from "../components/animations/StaggerContainer";
import StaggerItem from "../components/animations/StaggerItem";

const NewsView = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  const [sortBy, setSortBy] = useState("date"); // 'date' or 'name'

  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategory(categoryId);
  }, []);

  const handleSortChange = useCallback((sortType) => {
    setSortBy(sortType);
  }, []);

  // Get and sort the current category's data
  const currentCategoryData = CONTENT_DATA[activeCategory] || [];
  const sortedData = [...currentCategoryData].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date) - new Date(a.date);
    }
    return a.description.localeCompare(b.description);
  });

  // Use the pagination hook
  const { currentPage, totalPages, paginatedItems, handlePageChange } = usePagination(
    sortedData,
    1
  );

  return (
    <div className={styles["main-body"]}>
      <GeneralSeo title="News" />
      <NewsNavbar />
      
      {/* Header Section */}
      <FadeIn>
        <section className="container mx-auto">
          <BigTitle>
            <span>Stay Updated with</span>{" "}
            <span className="text-[#F82F1E]">Motion Lab!</span>
          </BigTitle>
          <p className="font-normal text-[#6A6A6A] text-base lg:text-lg text-center pt-2 hidden md:flex">
            Discover the latest stories, achievements, and updates from Motion
            Lab. From groundbreaking innovations to inspiring success stories,
            explore how our community continues to push the boundaries of mobile
            technology. Stay in the loop and be part of the journey!
          </p>
        </section>
      </FadeIn>

      {/* Category Section */}
      <FadeIn delay={0.2}>
        <section className="container mx-auto py-4 md:py-8">
          <CategoryButtons
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </section>
      </FadeIn>

      {/* Sort Section */}
      <FadeIn delay={0.3}>
        <section className="container mx-auto py-4 md:py-10">
          <SortButtons onSortChange={handleSortChange} currentSort={sortBy} />
        </section>
      </FadeIn>

      {/* News Grid Section */}
      <section className="container mx-auto">
        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedItems.map((item) => (
              <StaggerItem key={item.id}>
                <NewsCard
                  id={item.id}
                  image={item.image}
                  date={item.date}
                  description={item.description}
                />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>
      
      {/* Pagination Section */}
      {totalPages > 1 && (
        <FadeIn delay={0.4}>
          <section className="container mx-auto flex justify-center py-12">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </section>
        </FadeIn>
      )}

      <InternshipFooter />
    </div>
  );
};

export default NewsView;