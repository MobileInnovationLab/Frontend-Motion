import api from "@/shared/api/api";

const BASE_URL = "/blogs";

export const newsService = {
  getAllNews: async () => {
    // try {
    //   const response = await api.get(BASE_URL);
    //   return response.data.data.data; 
    // } catch (error) {
    //   throw error;
    // }
  },
  getNewsById: async (id) => {
    // try {
    //   const response = await api.get(`${BASE_URL}/${id}`);
    //   return response.data.data;
    // } catch (error) {
    //   throw error;
    // }
  }
}; 