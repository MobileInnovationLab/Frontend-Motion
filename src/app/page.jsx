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

  const normalizedBaseUrl = baseUrl.replace(/\/+$/, "");

  const [projectsRes, newsRes, optionsRes] = await Promise.allSettled([
    fetch(`${normalizedBaseUrl}/project-showcases`, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(2500),
    }),
    fetch(`${normalizedBaseUrl}/news`, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(2500),
    }),
    fetch(`${normalizedBaseUrl}/static-options`, {
      next: { revalidate: 30 },
      signal: AbortSignal.timeout(2500),
    }),
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
      initialRecruitmentPeriod = isOptionActive(
        options?.is_recruitment_period ?? options?.is_recruitment_open
      );
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
