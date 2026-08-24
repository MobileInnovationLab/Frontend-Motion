import { useEffect, useState } from "react";
import { projectService } from "@/features/project/services/projectService";
import { peopleService } from "@/features/people/services/peopleService";
import { newsService } from "@/features/news/service/newsService";

export const useHomeData = () => {
  const [projects, setProjects] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [projectsError, setProjectsError] = useState(null);

  const [people, setPeople] = useState([]);
  const [peopleLoading, setPeopleLoading] = useState(true);
  const [peopleError, setPeopleError] = useState(null);

  const [news, setNews] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setProjectsLoading(true);
        const response = await projectService.getAllProjects();

        const latestProjects = response
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 3);

        setProjects(latestProjects);
        setProjectsError(null);
      } catch (err) {
        setProjectsError("Failed to load projects");
      } finally {
        setProjectsLoading(false);
      }
    };

    const fetchPeople = async () => {
      try {
        setPeopleLoading(true);
        const data = await peopleService.getAllPeople();

        const grouped = data.reduce((acc, person) => {
          const division = person.division || "Unknown";
          if (!acc[division]) acc[division] = [];
          acc[division].push(person);
          return acc;
        }, {});

        const groupedDivisions = Object.entries(grouped).map(
          ([divisionName, members], index) => ({
            id: index + 1,
            division: divisionName,
            members,
          })
        );

        setPeople(groupedDivisions);
        setPeopleError(null);
      } catch (err) {
        setPeopleError("Failed to load people");
      } finally {
        setPeopleLoading(false);
      }
    };

    const fetchNews = async () => {
      try {
        setNewsLoading(true);
        const data = await newsService.getAllNews();
        const sorted = data
          .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          .slice(0, 3);
        setNews(sorted);
        setNewsError(null);
      } catch (err) {
        setNewsError("Failed to load news");
      } finally {
        setNewsLoading(false);
      }
    };

    fetchProjects();
    fetchPeople();
    fetchNews();
  }, []);

  return {
    projects,
    people,
    news,
    projectsLoading,
    peopleLoading,
    newsLoading,
    projectsError,
    peopleError,
    newsError,
  };
};
