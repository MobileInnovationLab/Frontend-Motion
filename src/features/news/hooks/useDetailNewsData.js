import { useEffect, useState } from "react";
import { newsService } from "@/features/news/service/newsService";

export const useNewsDetail = (slug) => {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        const res = await newsService.getNewsBySlug(slug);
        setNewsData(res);
      } catch (err) {
        setError("Failed to fetch news detail");
        console.error("❌ Detail error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  return { newsData, loading, error };
};
