import { useEffect, useState } from "react";
import { projectService } from "../services/projectService";
import DOMPurify from "dompurify";

export const useProjectDetail = (id) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getImageUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `https://admin.motionlaboratory.com/storage/project-showcase/${path}`;
  };

  useEffect(() => {
    if (!id) {
      setError("No project ID provided");
      setLoading(false);
      return;
    }

    const fetch = async () => {
      try {
        const res = await projectService.getProjectById(id);
        setProject(res.data);
      } catch (err) {
        setError("Failed to fetch project details");
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [id]);

  const cleanDescription = project?.about
    ? DOMPurify.sanitize(
        project.about
          .replace(/<p[^>]*>Powered by <a[^>]*>Froala Editor<\/a><\/p>/i, "")
          .replace(/<p data-f-id="pbf".*?<\/p>/i, "")
      )
    : "";

  const linkButtons = [
    { label: "Medium", url: project?.medium },
    { label: "Figma", url: project?.figma },
    { label: "GitHub", url: project?.github },
  ].filter((btn) => btn.url);

  return {
    project,
    loading,
    error,
    getImageUrl,
    cleanDescription,
    linkButtons,
  };
};