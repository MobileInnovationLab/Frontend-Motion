"use client";

import styles from "@/styles/pages/product.module.scss";
import GeneralSeo from "@/shared/components/seo/generalSeo";
import BigTitle from "@/shared/components/bigTitle";
import NewsCard from "../components/ui/NewsCard";
import SortButtons from "../components/ui/SortButtons";
import Pagination from "../components/ui/Pagination";
import CategoryButtons from "../components/ui/CategoryButtons";
import { CATEGORIES } from "../constants/newsConstants";
import { usePagination } from "../hooks/usePagination";
import { useNewsData } from "../hooks/useNewsData";
import { useNewsFilter } from "../hooks/useNewsFilter";
import FadeIn from "../components/animations/FadeIn";
import StaggerContainer from "../components/animations/StaggerContainer";
import StaggerItem from "../components/animations/StaggerItem";
import Footer from "@/shared/components/footer";

const NewsView = () => {
  const { news, loading, error } = useNewsData();
  const {
    activeCategory,
    sortBy,
    handleCategoryChange,
    handleSortChange,
    filteredAndSortedNews,
  } = useNewsFilter(news);
  const { currentPage, totalPages, paginatedItems, handlePageChange } =
    usePagination(filteredAndSortedNews, 1);

  return (
    <div className={styles["main-body"]}>
      <GeneralSeo title="News" />

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
        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading news...</div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">{error}</div>
        ) : (
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedItems.map((item) => (
                <StaggerItem key={item.id}>
                  <NewsCard
                    id={item.id}
                    image={item.thumbnail_content}
                    date={new Date(item.created_at).toLocaleDateString(
                      "id-ID",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                    description={item.title}
                  />
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        )}
        {!loading && !error && paginatedItems.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            Tidak ada berita dalam kategori ini.
          </div>
        )}
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

      <Footer />
    </div>
  );
};

export default NewsView;
