import api from "@/shared/api/api";

const BASE_URL = "/news";

export const newsService = {
  getAllNews: async () => {
    try {
      const response = await api.get(BASE_URL);
      return response.data.data.data;
    } catch (error) {
      throw error;
    }
  },
  getNewsBySlug: async (slug) => {
    try {
      const response = await api.get(`${BASE_URL}/${slug}`);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  },
};
