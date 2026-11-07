import api from "@/shared/api/api";

const BASE_URL = "/news";
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

let newsCache = null;
let newsCacheTime = 0;
let inflightNewsRequest = null;
const newsSlugCache = new Map();

export const newsService = {
  getCachedNews: () => {
    if (newsCache && Date.now() - newsCacheTime < CACHE_TTL) {
      return newsCache;
    }
    return null;
  },
  getAllNews: async ({ forceRefresh = false } = {}) => {
    if (!forceRefresh && newsCache && Date.now() - newsCacheTime < CACHE_TTL) {
      return newsCache;
    }
    if (!forceRefresh && inflightNewsRequest) {
      return inflightNewsRequest;
    }

    inflightNewsRequest = api
      .get(BASE_URL)
      .then((response) => {
        const data = response?.data?.data?.data || [];
        newsCache = data;
        newsCacheTime = Date.now();
        return data;
      })
      .finally(() => {
        inflightNewsRequest = null;
      });

    return inflightNewsRequest;
  },
  getNewsBySlug: async (slug) => {
    if (newsSlugCache.has(slug)) {
      return newsSlugCache.get(slug);
    }
    const response = await api.get(`${BASE_URL}/${slug}`);
    const data = response.data.data;
    newsSlugCache.set(slug, data);
    return data;
  },
};
