"use client";

import { useEffect, useState } from "react";
import { staticOptionService } from "../services/staticOptionService";

/**
 * Custom hook to fetch a static option by key with fallback default value and alternate keys support.
 */
export const useStaticOption = (key, defaultValue = "", alternateKeys = []) => {
  const [value, setValue] = useState(defaultValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchOption = async () => {
      try {
        const result = await staticOptionService.getOptionWithFallback(
          key,
          defaultValue,
          alternateKeys
        );
        if (isMounted && result) {
          setValue(result);
        }
      } catch (err) {
        // Retain default value on error
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchOption();

    return () => {
      isMounted = false;
    };
  }, [key]);

  return { value, loading };
};

export default useStaticOption;
