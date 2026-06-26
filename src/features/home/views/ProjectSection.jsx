"use client";

import { motion } from "framer-motion";
import SlideIn from "../components/animations/SlideIn";
import SectionTitle from "../components/animations/SectionTitle";
import CardProject from "../components/ui/CardProject";
import SeeMoreButton  from "../components/ui/SeeMoreButton";
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

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="flex md:grid md:grid-cols-3 lg:gap-8 gap-4 overflow-x-auto flex-nowrap no-scrollbar py-4 px-4 md:px-0"
      >
        {loading ? (
          <div className="col-span-3 flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C1271A]"></div>
          </div>
        ) : error ? (
          <div className="col-span-3 flex justify-center items-center min-h-[200px] text-red-600">
            {error}
          </div>
        ) : projects.length > 0 ? (
          projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                },
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
                    ? `https://admin.motionlaboratory.com/storage/project-showcase/${project.thumbnail}`
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
      </motion.div>

      <div className="py-8">
        <Link href={"/project"}>
          <SeeMoreButton >See More</SeeMoreButton>
        </Link>
      </div>
    </section>
  );
}
