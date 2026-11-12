import { useState, useCallback, useMemo } from "react";
import { CATEGORIES } from "../constants/newsConstants";

export const useNewsFilter = (news) => {
  const [activeCategory, setActiveCategory] = useState(1);
  const [sortBy, setSortBy] = useState("date");

  const handleCategoryChange = useCallback((categoryId) => {
    setActiveCategory(categoryId);
  }, []);

  const handleSortChange = useCallback((sortType) => {
    setSortBy(sortType);
  }, []);

  const filteredAndSortedNews = useMemo(() => {
    const currentCategoryData = news.filter((item) => {
      if (activeCategory === 1) return true;
      const categoryLabel = CATEGORIES.find((c) => c.id === activeCategory)?.label.toLowerCase();
      return item.title.toLowerCase().includes(categoryLabel);
    });

    const sortedData = [...currentCategoryData].sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.created_at) - new Date(a.created_at);
      }
      return a.title.localeCompare(b.title);
    });

    return sortedData;
  }, [news, activeCategory, sortBy]);

  return {
    activeCategory,
    sortBy,
    handleCategoryChange,
    handleSortChange,
    filteredAndSortedNews,
  };
};
