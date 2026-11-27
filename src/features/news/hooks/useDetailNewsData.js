import { useEffect, useState } from "react";
import { newsService } from "@/features/news/service/newsService";

export const useNewsDetail = (slug) => {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await newsService.getNewsBySlug(slug);
      setNewsData(res);
    } catch (err) {
      if (err.response?.status !== 404) {
        setError("Failed to fetch news detail");
      }
      console.error("Detail error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!slug) return;
    fetchData();
  }, [slug]);

  return { newsData, loading, error, refetch: fetchData };
};
