import { useEffect, useState } from "react";
import { projectService } from "@/features/project/services/projectService";

export const useProjectData = () => {
  const cached = projectService.getCachedProjects();
  const [projects, setProjects] = useState(cached || []);
  const [loading, setLoading] = useState(!cached);
  const [error, setError] = useState(null);

  const fetchProjects = async ({ forceRefresh = false } = {}) => {
    try {
      if (!projectService.getCachedProjects() || forceRefresh) {
        setLoading(true);
      }
      const response = await projectService.getAllProjects({ forceRefresh });
      setProjects(response);
      setError(null);
    } catch (err) {
      setError("Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!cached) {
      fetchProjects();
    }
  }, []);

  return { projects, loading, error, refetch: () => fetchProjects({ forceRefresh: true }) };
};
