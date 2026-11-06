"use client";

import { motion } from "framer-motion";
import SlideIn from "../components/animations/SlideIn";
import SectionTitle from "../components/animations/SectionTitle";
import CardProject from "../components/ui/CardProject";
import SeeMoreButton from "../components/ui/SeeMoreButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProjectSection({ innerRef, projects, loading, error }) {
  const router = useRouter();

  return (
    <section id="project" ref={innerRef} className="container mx-auto py-8 md:py-16">
      <SlideIn direction="up">
        <SectionTitle
          subtitle="OUR PROJECTS"
          title="Our MotionHack Project Through Generation"
          description="Motionhack is a project that is always held every time the study group ends by creating a real project."
        />
      </SlideIn>

      <div className="flex md:grid md:grid-cols-3 lg:gap-8 gap-4 overflow-x-auto flex-nowrap no-scrollbar py-4 px-4 md:px-0">
        {loading ? (
          [0, 1, 2].map((skeletonIndex) => (
            <div
              key={skeletonIndex}
              className="flex-shrink-0 w-[85%] md:w-auto rounded-[30px] bg-white dark:bg-[#111827] border border-transparent dark:border-[#1E293B] shadow-sm overflow-hidden animate-pulse"
            >
              <div className="aspect-[16/10] w-full bg-gray-200 dark:bg-slate-800" />
              <div className="p-6 space-y-4">
                <div className="h-7 w-3/4 bg-gray-200 dark:bg-slate-800 rounded" />
                <div className="h-5 w-1/2 bg-gray-200 dark:bg-slate-800 rounded" />
                <div className="h-5 w-2/3 bg-gray-200 dark:bg-slate-800 rounded" />
                <div className="h-11 w-full bg-gray-200 dark:bg-slate-800 rounded-full mt-4" />
              </div>
            </div>
          ))
        ) : error ? (
          <div className="col-span-3 flex justify-center items-center min-h-[200px] text-red-600">
            {error}
          </div>
        ) : projects.length > 0 ? (
          projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              onClick={() =>
                router.push(`/project/detailProject/${project.id}`)
              }
              className="cursor-pointer flex-shrink-0 w-[85%] md:w-auto"
            >
              <CardProject
                id={project.id}
                nama={project.project_name}
                team={project.team_name}
                member={project.team_members}
                thumbnail={
                  project.thumbnail
                    ? project.thumbnail.startsWith("http")
                      ? project.thumbnail
                      : `https://admin.motionlaboratory.com/storage/project-showcases/${project.thumbnail}`
                    : "/images/contactUs/photoFirst.png"
                }
                about={project.about}
              />
            </motion.div>
          ))
        ) : (
          <div className="col-span-3 flex justify-center items-center min-h-[200px] text-gray-500">
            No projects available
          </div>
        )}
      </div>

      <div className="py-8">
        <Link href={"/project"}>
          <SeeMoreButton>See More</SeeMoreButton>
        </Link>
      </div>
    </section>
  );
}
