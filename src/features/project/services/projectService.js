import api from "@/shared/api/api";

const BASE_URL = "/project-showcases";
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

let projectsCache = null;
let projectsCacheTime = 0;
let inflightProjectsRequest = null;
const projectDetailCache = new Map();

export const normalizeProjectUrl = (url, fallback) => {
  const target = url || fallback;
  if (!target || typeof target !== "string") return "";
  let clean = target.trim();
  if (clean.startsWith("http://admin.motionlaboratory.com")) {
    clean = clean.replace("http://admin.motionlaboratory.com", "https://admin.motionlaboratory.com");
  }
  if (clean.includes("/storage/project-showcase/")) {
    clean = clean.replace("/storage/project-showcase/", "/storage/project-showcases/");
  }
  if (!clean.startsWith("http")) {
    clean = `https://admin.motionlaboratory.com/storage/project-showcases/${clean.replace(/^\/+/, "")}`;
  }
  return clean;
};

export const mapProjectData = (p) => ({
  id: p.id,
  project_name: p.title,
  team_name: p.team_name || "",
  team_members: p.team_members || "",
  about: p.description,
  thumbnail: normalizeProjectUrl(p.image_url, p.image),
  generation: p.generation || 10,
  header: normalizeProjectUrl(p.header_url, p.header || p.image_url || p.image),
  design_system: normalizeProjectUrl(p.design_system_url, p.design_system),
  medium: p.medium || "",
  figma: p.figma || "",
  github: p.github || "",
  created_at: p.created_at,
});

export const projectService = {
  getCachedProjects: () => {
    if (projectsCache && Date.now() - projectsCacheTime < CACHE_TTL) {
      return projectsCache;
    }
    return null;
  },
  getAllProjects: async ({ forceRefresh = false } = {}) => {
    if (!forceRefresh && projectsCache && Date.now() - projectsCacheTime < CACHE_TTL) {
      return projectsCache;
    }
    if (!forceRefresh && inflightProjectsRequest) {
      return inflightProjectsRequest;
    }

    inflightProjectsRequest = api
      .get(BASE_URL)
      .then((response) => {
        const mapped = (response?.data?.data || []).map(mapProjectData);
        projectsCache = mapped;
        projectsCacheTime = Date.now();
        return mapped;
      })
      .finally(() => {
        inflightProjectsRequest = null;
      });

    return inflightProjectsRequest;
  },
  getProjectById: async (id) => {
    const cacheKey = String(id);
    if (projectDetailCache.has(cacheKey)) {
      return { data: projectDetailCache.get(cacheKey) };
    }
    if (projectsCache) {
      const found = projectsCache.find((p) => String(p.id) === cacheKey);
      if (found) {
        return { data: found };
      }
    }
    const response = await api.get(`${BASE_URL}/${id}`);
    const mapped = mapProjectData(response.data.data);
    projectDetailCache.set(cacheKey, mapped);
    return {
      data: mapped,
    };
  },
}; 