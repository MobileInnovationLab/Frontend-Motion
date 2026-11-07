import { useState, useMemo, useEffect } from "react";
import { ITEMS_PER_PAGE } from "../constants/projectConstants";

export const useFilteredProjects = (projects) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState(10);

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const nameMatch = project.project_name
        .toLowerCase()
        .includes(search.toLowerCase());
      const teamMatch = project.team_name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesSearch = nameMatch || teamMatch;

      const genMatch =
        activeCategory === 10 ||
        parseInt(project.generation) === activeCategory;

      return matchesSearch && genMatch;
    });
  }, [projects, search, activeCategory]);

  const paginated = useMemo(() => {
    const indexOfLast = currentPage * ITEMS_PER_PAGE;
    const indexOfFirst = indexOfLast - ITEMS_PER_PAGE;
    return filtered.slice(indexOfFirst, indexOfLast);
  }, [filtered, currentPage]);

  return {
    search,
    setSearch,
    currentPage,
    setCurrentPage,
    activeCategory,
    setActiveCategory,
    filtered,
    paginated,
    totalPages: Math.ceil(filtered.length / ITEMS_PER_PAGE),
  };
};
