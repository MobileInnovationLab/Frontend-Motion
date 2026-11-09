import api from "@/shared/api/api";

const BASE_URL = "/static-options";

const toOptionString = (val) => {
  if (typeof val === "string") return val;
  if (typeof val === "number" || typeof val === "boolean") return String(val);
  return null;
};

export const extractStaticOptionValue = (data, key) => {
  if (data === null || data === undefined) return null;
  const direct = toOptionString(data);
  if (direct !== null) return direct;

  if (Array.isArray(data)) {
    if (!key) return null;
    const found = data.find((item) => item && (item.key === key || item.name === key));
    return found ? toOptionString(found.value) : null;
  }

  if (typeof data === "object") {
    if (key && toOptionString(data[key]) !== null) return toOptionString(data[key]);
    if (toOptionString(data.value) !== null) return toOptionString(data.value);
    if (toOptionString(data.data) !== null) return toOptionString(data.data);
    if (Array.isArray(data.data) && key) {
      const found = data.data.find((item) => item && (item.key === key || item.name === key));
      if (found && toOptionString(found.value) !== null) return toOptionString(found.value);
    }
    if (data.data && typeof data.data === "object") {
      if (toOptionString(data.data.value) !== null) return toOptionString(data.data.value);
      if (key && toOptionString(data.data[key]) !== null) return toOptionString(data.data[key]);
    }
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
