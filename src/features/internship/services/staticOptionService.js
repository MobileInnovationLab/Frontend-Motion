import api from "@/shared/api/api";

const BASE_URL = "/static-options";

export const extractStaticOptionValue = (data, key) => {
  if (data === null || data === undefined) return null;
  if (typeof data === "string") return data;
  if (typeof data === "number") return String(data);
  if (typeof data === "object") {
    if (key && typeof data[key] === "string") return data[key];
    if (typeof data.value === "string") return data.value;
    if (typeof data.data === "string") return data.data;
    if (data.data && typeof data.data.value === "string") return data.data.value;
    if (key && data.data && typeof data.data[key] === "string") return data.data[key];
  }
  return null;
};

export const staticOptionService = {
  // Get all static options
  getAll: async (options = {}) => {
    try {
      const response = await api.get(BASE_URL, options);
      return response.data;
    } catch (error) {
      if (error?.name !== "AbortError" && error?.name !== "CanceledError") {
        console.warn("Failed to fetch static options:", error?.message || error);
      }
      return null;
    }
  },

  // Get static option by key
  getByKey: async (key, options = {}) => {
    try {
      const response = await api.get(`${BASE_URL}/${key}`, options);
      return response.data;
    } catch (error) {
      if (error?.name !== "AbortError" && error?.name !== "CanceledError") {
        console.warn(`Failed to fetch static option for key "${key}":`, error?.message || error);
      }
      return null;
    }
  },

  // Get option value with fallback, alternate keys, and optional abort signal
  getOptionWithFallback: async (key, fallbackValue = "", alternateKeys = [], signal = null) => {
    const keysToTry = [key, ...alternateKeys];
    const reqOptions = signal ? { signal } : {};

    // Try key-specific endpoints
    for (const k of keysToTry) {
      try {
        const res = await staticOptionService.getByKey(k, reqOptions);
        const val = extractStaticOptionValue(res, k);
        if (val !== null && val !== undefined && val !== "") {
          return val;
        }
      } catch (err) {
        if (signal?.aborted) throw err;
      }
    }

    // Try fetching from all options index
    try {
      const allRes = await staticOptionService.getAll(reqOptions);
      for (const k of keysToTry) {
        const val = extractStaticOptionValue(allRes, k);
        if (val !== null && val !== undefined && val !== "") {
          return val;
        }
      }
    } catch (err) {
      if (signal?.aborted) throw err;
    }

    return fallbackValue;
  },
};

export default staticOptionService;
