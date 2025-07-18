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
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C1271A]"></div>
      </div>
    );

  if (error || !project)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600">
        {error || "Project not found"}
      </div>
    );

  return (
    <div className="bg-[#FCF6F6]">
      <section className="container mx-auto pt-16">
        
        <BackButton />

        <div className="pt-8">
          <h1 className="font-bold text-3xl md:text-6xl">
            {project.project_name}
          </h1>
          <h3 className="text-xl md:text-4xl py-4 md:py-8">
            {project.team_name}
          </h3>
          <h3 className="font-bold text-xl md:text-3xl">
            {project.team_members}
          </h3>
        </div>
      </section>

      <section className="container mx-auto py-8">
        <LinkButtons buttons={linkButtons} onCopyLink={handleCopyLink} />
      </section>

      <section className="container mx-auto py-4">
        <div>
          <img
            src={getImageUrl(project.header)}
            alt="Header"
            className="w-full h-auto"
          />
          <h4 className="pt-4 text-xl md:text-4xl font-bold pb-2 md:pb-4">
            About
          </h4>{" "}
          {cleanDescription ? (
            <div
              className="font-[inter] font-normal text-base md:text-2xl text-justify"
              dangerouslySetInnerHTML={{ __html: cleanDescription }}
            />
          ) : (
            <p className="font-[inter] font-normal text-base md:text-2xl text-justify">
              No description available
            </p>
          )}
        </div>
      </section>

      <section className="container mx-auto py-4 md:py-16">
        <h3 className="font-bold font-[inter] text-xl md:text-4xl pb-4">
          Design System
        </h3>
        <Image
          src={getImageUrl(project.design_system)}
          alt="Design System"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
      </section>

      <Footer />
    </div>
  );
};

export default DetailProject;
