import api from "@/shared/api/api";

const BASE_URL = "/project-showcases";

export const projectService = {
  getAllProjects: async () => {
    // try {
    //   const response = await api.get(BASE_URL);
    //   return response.data.data; 
    // } catch (error) {
    //   throw error;
    // }
  },
  getProjectById: async (id) => {
    // try {
    //   const response = await api.get(`${BASE_URL}/${id}`);
    //   return response.data;
    // } catch (error) {
    //   throw error;
    // }
  }
}; 