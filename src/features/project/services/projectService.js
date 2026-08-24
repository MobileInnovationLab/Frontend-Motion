import api from "@/shared/api/api";

const BASE_URL = "/project-showcases";

const mapProjectData = (p) => ({
  id: p.id,
  project_name: p.title,
  team_name: p.team_name || "",
  team_members: p.team_members || "",
  about: p.description,
  thumbnail: p.image_url,
  generation: p.generation || 10,
  header: p.header_url || p.image_url,
  design_system: p.design_system_url || "", 
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