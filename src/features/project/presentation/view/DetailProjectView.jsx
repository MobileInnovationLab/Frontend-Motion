"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import InternshipFooter from "@/features/internship/components/footer/InternshipFooter";
import BackButton from "../components/BackButton";
import LinkButtons from "../components/LinkButtons";
import { projectService } from "../../services/projectService";
import DOMPurify from "dompurify";

const DetailProject = ({ params }) => {
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log("Params received:", params);
    if (!params?.id) {
      console.error("No ID provided");
      setError("No project ID provided");
      setLoading(false);
      return;
    }

    fetchProjectDetails(params.id);
  }, [params]);

  const getImageUrl = (path) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    return `https://admin.motionlaboratory.com/storage/project-showcase/${path}`;
  };

  const fetchProjectDetails = async (id) => {
    try {
      setLoading(true);
      const response = await projectService.getProjectById(id);
      setProject(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch project details");
      console.error("Error fetching project details:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert("Link berhasil disalin! 🎉"))
        .catch((err) => alert("Gagal menyalin link 😢"));
    }
  };
  // Clean and sanitize the project description
  const cleanDescription = project?.about
    ? DOMPurify.sanitize(
        project.about
          .replace(/<p[^>]*>Powered by <a[^>]*>Froala Editor<\/a><\/p>/i, "")
          .replace(/<p data-f-id="pbf".*?<\/p>/i, "")
      )
    : "";

  // Prepare link buttons data
  const linkButtons = [
    { label: "Medium", url: project?.medium },
    { label: "Figma", url: project?.figma },
    { label: "GitHub", url: project?.github },
  ].filter((button) => button.url); // Only show buttons that have URLs

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C1271A]"></div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600">
        {error || "Project not found"}
      </div>
    );
  }

  return (
    <div className="bg-[#FCF6F6]">
      {/* Header Section */}
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

      {/* Links Section */}
      <section className="container mx-auto py-8">
        <LinkButtons buttons={linkButtons} onCopyLink={handleCopyLink} />
      </section>

      {/* About Section */}
      <section className="container mx-auto py-4 md:py-16">
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

      {/* Design System Section */}
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

      <InternshipFooter />
    </div>
  );
};

export default DetailProject;
