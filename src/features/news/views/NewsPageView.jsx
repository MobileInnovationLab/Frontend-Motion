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
import NewsFeedbackState from "../components/ui/NewsFeedbackState";

const NewsView = () => {
  const { news, loading, error, refetch } = useNewsData();
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
    <div className="min-h-screen bg-[#FCF6F6] dark:bg-[#090D16] text-slate-900 dark:text-[#F8FAFC] transition-colors duration-300">
      <GeneralSeo title="News" />

      {/* Header Section */}
      <FadeIn>
        <section className="container mx-auto">
          <BigTitle>
            <span>Stay Updated with</span>{" "}
            <span className="text-[#F82F1E]">Motion Lab!</span>
          </BigTitle>
          <p className="font-normal text-[#6A6A6A] dark:text-[#CBD5E1] text-base lg:text-lg text-center pt-2 hidden md:flex">
            Discover the latest stories, achievements, and updates from Motion
            Lab. From groundbreaking innovations to inspiring success stories,
            explore how our community continues to push the boundaries of mobile
            technology. Stay in the loop and be part of the journey!
          </p>
        </section>
      </FadeIn>

      {/* Category Section */}
      {/* <FadeIn delay={0.2}>
        <section className="container mx-auto py-4 md:py-8">
          <CategoryButtons
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </section>
      </FadeIn> */}

      {/* Sort Section */}
      {/* <FadeIn delay={0.3}>
        <section className="container mx-auto py-4 md:py-10">
          <SortButtons onSortChange={handleSortChange} currentSort={sortBy} />
        </section>
      </FadeIn> */}
      <div className="h-10"></div>
      {/* News Grid Section */}
      <section className="container mx-auto py-8">
        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading news...</div>
        ) : error ? (
          <NewsFeedbackState
            type="error"
            title="Failed to Load News"
            message="Something went wrong while loading the news. Please try again."
            onRetry={refetch}
          />
        ) : paginatedItems.length === 0 ? (
          <NewsFeedbackState
            type="empty"
            title="No News Yet"
            message="The latest news from Motion Lab will appear here."
            backHref="/"
            backLabel="Back to Home"
          />
        ) : (
          <StaggerContainer key={currentPage}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedItems.map((item) => (
                <StaggerItem key={item.id}>
                  <NewsCard
                    slug={item.slug}
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
