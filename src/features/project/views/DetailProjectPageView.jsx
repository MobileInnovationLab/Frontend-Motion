"use client";

import { useRouter } from "next/navigation";
import { useProjectDetail } from "../hooks/useProjectDetail";
import BackButton from "../components/ui/BackButton";
import LinkButtons from "../components/ui/LinkButtons";
import Image from "next/image";
import Footer from "@/shared/components/footer";

const DetailProject = ({ params }) => {
  const router = useRouter();
  const {
    project,
    loading,
    error,
    getImageUrl,
    cleanDescription,
    linkButtons,
  } = useProjectDetail(params?.id);

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => alert("Link berhasil disalin! 🎉"))
      .catch(() => alert("Gagal menyalin link 😢"));
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#FCF6F6] dark:bg-[#090D16]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#EF4444]"></div>
      </div>
    );

  if (error || !project)
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#FCF6F6] dark:bg-[#090D16] text-[#EF4444] px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">{error || "Project not found"}</h2>
        <BackButton />
      </div>
    );

  return (
    <div className="bg-[#FCF6F6] dark:bg-[#090D16] text-slate-900 dark:text-[#F8FAFC] min-h-screen transition-colors duration-300">
      <section className="container mx-auto pt-28 md:pt-32 px-4 md:px-8">
        <div className="mb-6">
          <BackButton />
        </div>

        <div className="pt-4 pb-2">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-red-500/15 text-[#EF4444] dark:text-[#F87171] border border-red-500/30">
              MotionHack Project
            </span>
            {project.generation && (
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 dark:bg-[#111827] text-slate-800 dark:text-[#F8FAFC] border border-slate-300 dark:border-[#334155]">
                Generation {project.generation}.0
              </span>
            )}
          </div>

          <h1 className="font-extrabold text-3xl md:text-5xl lg:text-6xl text-slate-900 dark:text-[#F8FAFC] tracking-tight">
            {project.project_name}
          </h1>
          <h3 className="text-xl md:text-3xl py-2 md:py-4 font-semibold text-slate-700 dark:text-[#CBD5E1]">
            {project.team_name}
          </h3>
          <p className="font-medium text-base md:text-xl text-slate-500 dark:text-[#94A3B8]">
            {project.team_members}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 py-4">
        <LinkButtons buttons={linkButtons} onCopyLink={handleCopyLink} />
      </section>

      {/* Header Mockup Image Asset Framing (AC 4) */}
      <section className="container mx-auto px-4 md:px-8 py-4">
        <div className="rounded-3xl overflow-hidden bg-slate-100 dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-2 md:p-3">
          <img
            src={getImageUrl(project.header)}
            alt={project.project_name || "Project Header"}
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>

        <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] p-6 md:p-10 my-8 shadow-sm">
          <h4 className="text-2xl md:text-4xl font-bold pb-4 text-slate-900 dark:text-[#F8FAFC] border-b border-slate-100 dark:border-[#1E293B] mb-6">
            About Project
          </h4>
          {cleanDescription ? (
            <div
              className="font-[inter] font-normal text-base md:text-xl text-slate-700 dark:text-[#CBD5E1] leading-relaxed text-justify space-y-4"
              dangerouslySetInnerHTML={{ __html: cleanDescription }}
            />
          ) : (
            <p className="font-[inter] font-normal text-base md:text-xl text-slate-500 dark:text-[#94A3B8]">
              No description available
            </p>
          )}
        </div>
      </section>

      {project.design_system && (
        <section className="container mx-auto px-4 md:px-8 py-4 md:py-8">
          <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] p-6 md:p-10 shadow-sm">
            <h3 className="font-bold font-[inter] text-2xl md:text-4xl pb-4 text-slate-900 dark:text-[#F8FAFC] border-b border-slate-100 dark:border-[#1E293B] mb-6">
              Design System
            </h3>
            <div className="rounded-2xl overflow-hidden bg-slate-50 dark:bg-[#090D16] p-2 border border-slate-200/60 dark:border-[#1E293B]">
              <Image
                src={getImageUrl(project.design_system)}
                alt="Design System"
                width={1200}
                height={600}
                unoptimized
                className="w-full h-auto rounded-xl object-contain"
              />
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default DetailProject;

