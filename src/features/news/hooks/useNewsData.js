import { useEffect, useState } from "react";
import { newsService } from "@/features/news/service/newsService";

export const useNewsData = () => {
  const cached = newsService.getCachedNews();
  const [news, setNews] = useState(cached || []);
  const [loading, setLoading] = useState(!cached);
  const [error, setError] = useState(null);

  const fetchNews = async ({ forceRefresh = false } = {}) => {
    try {
      if (!newsService.getCachedNews() || forceRefresh) {
        setLoading(true);
      }
      setError(null);
      const response = await newsService.getAllNews({ forceRefresh });
      setNews(response);
    } catch (err) {
      setError("Failed to fetch news");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!cached) {
      fetchNews();
    }
  }, []);

  return { news, loading, error, refetch: () => fetchNews({ forceRefresh: true }) };
};
