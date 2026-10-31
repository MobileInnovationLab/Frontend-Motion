import { useEffect, useState } from "react";
import { projectService } from "@/features/project/services/projectService";
import { newsService } from "@/features/news/service/newsService";

const getLatestThree = (items = []) =>
  [...items]
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 3);

export const useHomeData = ({
  initialProjects = [],
  initialNews = [],
} = {}) => {
  const cachedProjects = projectService.getCachedProjects();
  const cachedNews = newsService.getCachedNews();

  const resolvedInitialProjects =
    initialProjects.length > 0
      ? initialProjects
      : cachedProjects
      ? getLatestThree(cachedProjects)
      : [];

  const resolvedInitialNews =
    initialNews.length > 0
      ? initialNews
      : cachedNews
      ? getLatestThree(cachedNews)
      : [];

  const [projects, setProjects] = useState(resolvedInitialProjects);
  const [projectsLoading, setProjectsLoading] = useState(
    resolvedInitialProjects.length === 0
  );
  const [projectsError, setProjectsError] = useState(null);

  const [news, setNews] = useState(resolvedInitialNews);
  const [newsLoading, setNewsLoading] = useState(
    resolvedInitialNews.length === 0
  );
  const [newsError, setNewsError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProjects = async () => {
      if (resolvedInitialProjects.length > 0) {
        return;
      }
      try {
        setProjectsLoading(true);
        const response = await projectService.getAllProjects();
        if (!isMounted) return;
        setProjects(getLatestThree(response));
        setProjectsError(null);
      } catch (err) {
        if (!isMounted) return;
        setProjectsError("Failed to load projects");
      } finally {
        if (isMounted) {
          setProjectsLoading(false);
        }
      }
    };

    const fetchNews = async () => {
      if (resolvedInitialNews.length > 0) {
        return;
      }
      try {
        setNewsLoading(true);
        const data = await newsService.getAllNews();
        if (!isMounted) return;
        setNews(getLatestThree(data));
        setNewsError(null);
      } catch (err) {
        if (!isMounted) return;
        setNewsError("Failed to load news");
      } finally {
        if (isMounted) {
          setNewsLoading(false);
        }
      }
    };

    fetchProjects();
    fetchNews();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    projects,
    news,
    projectsLoading,
    newsLoading,
    projectsError,
    newsError,
  };
};
