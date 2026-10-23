import { useEffect, useState } from "react";
import { newsService } from "@/features/news/service/newsService";

export const useNewsDetail = (id) => {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await newsService.getNewsById(id);
        setNewsData(res);
      } catch (err) {
        setError("Failed to fetch news detail");
        console.error("❌ Detail error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { newsData, loading, error };
};
