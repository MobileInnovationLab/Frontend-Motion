import HomeView from "@/features/home/views/HomePageView";
import { mapProjectData } from "@/features/project/services/projectService";
import { isOptionActive } from "@/shared/utils/isOptionActive";

const getLatestThree = (items = []) =>
  [...items]
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 3);

async function fetchInitialHomeData() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) {
    return { initialProjects: [], initialNews: [] };
  }

  if (
    process.env.NODE_ENV !== "production" ||
    baseUrl.includes(".test") ||
    baseUrl.includes("localhost")
  ) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  }

  const normalizedBaseUrl = baseUrl.replace(/\/+$/, "");
  const isDev = process.env.NODE_ENV !== "production";
  const getFetchConfig = (revalidateSec = 60) => ({
    ...(isDev ? { cache: "no-store" } : { next: { revalidate: revalidateSec } }),
    signal: AbortSignal.timeout(2500),
  });

  const [projectsRes, newsRes, optionsRes] = await Promise.allSettled([
    fetch(`${normalizedBaseUrl}/project-showcases`, getFetchConfig(60)),
    fetch(`${normalizedBaseUrl}/news`, getFetchConfig(60)),
    fetch(`${normalizedBaseUrl}/static-options`, getFetchConfig(30)),
  ]);

  let initialProjects = [];
  if (projectsRes.status === "fulfilled" && projectsRes.value.ok) {
    try {
      const json = await projectsRes.value.json();
      const mapped = (json?.data || []).map(mapProjectData);
      initialProjects = getLatestThree(mapped);
    } catch (_) {}
  }

  let initialNews = [];
  if (newsRes.status === "fulfilled" && newsRes.value.ok) {
    try {
      const json = await newsRes.value.json();
      const data = json?.data?.data || [];
      initialNews = getLatestThree(data);
    } catch (_) {}
  }

  let initialRecruitmentPeriod;
  if (optionsRes.status === "fulfilled" && optionsRes.value.ok) {
    try {
      const options = await optionsRes.value.json();
      const rawValue =
        options?.is_recruitment_period !== undefined &&
        options?.is_recruitment_period !== null &&
        options?.is_recruitment_period !== ""
          ? options.is_recruitment_period
          : options?.is_recruitment_open;
      initialRecruitmentPeriod = isOptionActive(rawValue);
    } catch (_) {}
  }

  return { initialProjects, initialNews, initialRecruitmentPeriod };
}

const Page = async () => {
  const { initialProjects, initialNews, initialRecruitmentPeriod } =
    await fetchInitialHomeData();
  return (
    <HomeView
      initialProjects={initialProjects}
      initialNews={initialNews}
      initialRecruitmentPeriod={initialRecruitmentPeriod}
    />
  );
};

export default Page;
