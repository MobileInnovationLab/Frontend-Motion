import api from "@/core/api/api";

const BASE_URL = "/project-showcases";

export const projectService = {
  // Get all projects
  getAllProjects: async () => {
    try {
      const response = await api.get(BASE_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  // Get a single project by ID
  getProjectById: async (id) => {
    try {
      const response = await api.get(`${BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}; 