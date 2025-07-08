import api from "@/core/api/api";

const BASE_URL = "/people";

export const peopleService = {
  // Get all people
  getAllPeople: async () => {
    try {
      const response = await api.get(BASE_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}; 