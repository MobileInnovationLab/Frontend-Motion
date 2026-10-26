"use client";

import { useEffect, useState } from "react";
import { staticOptionService } from "../services/staticOptionService";

/**
 * Custom hook to fetch a static option by key with fallback default value,
 * alternate keys support, and AbortController to prevent race conditions.
 */
export const useStaticOption = (key, defaultValue = "", alternateKeys = []) => {
  const [value, setValue] = useState(defaultValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    const fetchOption = async () => {
      try {
        const result = await staticOptionService.getOptionWithFallback(
          key,
          defaultValue,
          alternateKeys,
          controller.signal
        );
        if (
          !controller.signal.aborted &&
          result !== null &&
          result !== undefined &&
          result !== ""
        ) {
          setValue(result);
        }
      } catch (err) {
        if (err?.name !== "AbortError" && err?.name !== "CanceledError") {
          // Retain defaultValue on non-abort errors
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchOption();

    return () => {
      controller.abort();
    };
  }, [key]);

  return {
    value,
    data: value,
    loading,
    isLoading: loading,
  };
};

export default useStaticOption;
