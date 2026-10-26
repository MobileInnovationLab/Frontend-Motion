import api from "@/shared/api/api";

const BASE_URL = "/project-showcases";

const normalizeUrl = (url, fallback) => {
  const target = url || fallback;
  if (!target || typeof target !== "string") return "";
  let clean = target.trim();
  if (clean.startsWith("http://admin.motionlaboratory.com")) {
    clean = clean.replace("http://admin.motionlaboratory.com", "https://admin.motionlaboratory.com");
  }
  if (clean.includes("/storage/project-showcase/")) {
    clean = clean.replace("/storage/project-showcase/", "/storage/project-showcases/");
  }
  if (!clean.startsWith("http")) {
    clean = `https://admin.motionlaboratory.com/storage/project-showcases/${clean.replace(/^\/+/, "")}`;
  }
  return clean;
};

const mapProjectData = (p) => ({
  id: p.id,
  project_name: p.title,
  team_name: p.team_name || "",
  team_members: p.team_members || "",
  about: p.description,
  thumbnail: normalizeUrl(p.image_url, p.image),
  generation: p.generation || 10,
  header: normalizeUrl(p.header_url, p.header || p.image_url || p.image),
  design_system: normalizeUrl(p.design_system_url, p.design_system), 
  medium: p.medium || "",
  figma: p.figma || "",
  github: p.github || "",
  created_at: p.created_at
});

export const projectService = {
  getAllProjects: async () => {
    try {
      const response = await api.get(BASE_URL);
      return response.data.data.map(mapProjectData);
    } catch (error) {
      throw error;
    }
  },
  getProjectById: async (id) => {
    try {
      const response = await api.get(`${BASE_URL}/${id}`);
      return {
        data: mapProjectData(response.data.data)
      };
    } catch (error) {
      throw error;
    }
  }
}; 