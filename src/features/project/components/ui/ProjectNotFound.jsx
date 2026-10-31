import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectNotFound = ({ onSeeNewestProject }) => (
  <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
    <div className="p-4 rounded-3xl bg-slate-100 dark:bg-[#111827] border border-slate-200 dark:border-[#1E293B] mb-6 shadow-sm">
      <Image
        src="/images/home/notfound-project.png"
        alt="404 Not Found"
        width={180}
        height={180}
        className="opacity-90 dark:opacity-80"
      />
    </div>
    <h2 className="text-2xl lg:text-4xl font-bold font-[inter] text-slate-900 dark:text-[#F8FAFC] mt-2 mb-3">
      No Projects Found
    </h2>
    <p className="text-slate-600 dark:text-[#CBD5E1] text-base lg:text-xl max-w-md mb-6 leading-relaxed">
      We couldn’t find any showcase projects matching your current search or filter criteria.
    </p>
    <button
      className="font-[rubik] text-[#EF4444] dark:text-[#F87171] font-bold border-2 border-[#EF4444] hover:bg-[#EF4444] hover:text-white dark:hover:bg-[#EF4444] dark:hover:text-white rounded-full px-8 py-3.5 mb-4 shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
      onClick={onSeeNewestProject}
    >
      See latest projects
    </button>
    <Link href="/" className="text-slate-500 hover:text-[#EF4444] dark:text-[#94A3B8] dark:hover:text-[#F87171] text-sm underline transition-colors">
      Return to Home
    </Link>
  </div>
);

export default ProjectNotFound;

