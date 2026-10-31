"use client";

import { useState } from "react";
import Link from "next/link";

const FALLBACK_PROJECT_IMAGE = "/images/contactUs/photoFirst.png";

const CardProject = ({ id, nama, team, member, thumbnail }) => {
  const [imgSrc, setImgSrc] = useState(thumbnail || FALLBACK_PROJECT_IMAGE);

  return (
    <div className="w-[90%] lg:max-w-md lg:w-full h-full flex flex-col justify-between rounded-[30px] bg-white dark:bg-[#111827] border border-transparent dark:border-[#1E293B] shadow-sm dark:shadow-xl transition-colors duration-300">
      <div className="w-full aspect-[16/10] overflow-hidden rounded-t-[30px] bg-gray-100 dark:bg-slate-800">
        <img
          src={imgSrc}
          width="448"
          height="280"
          loading="lazy"
          decoding="async"
          onError={() => setImgSrc(FALLBACK_PROJECT_IMAGE)}
          className="w-full h-full object-cover"
          alt={nama || "Project Thumbnail"}
        />
      </div>
      <div className="px-6 py-6 flex flex-col flex-grow justify-between">
        <div className="pb-6">
          <h1 className="font-bold font-[inter] text-2xl mb-3 text-slate-900 dark:text-[#F8FAFC] line-clamp-1">
            {nama}
          </h1>
          <h3 className="font-[inter] text-lg text-gray-700 dark:text-[#94A3B8] line-clamp-1">
            {team}
          </h3>
          <h3 className="font-[inter] font-bold text-lg text-wrap text-ellipsis overflow-hidden line-clamp-2 text-slate-800 dark:text-[#CBD5E1]">
            {member}
          </h3>
        </div>
        <Link
          href={`/project/detailProject/${id}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="w-full font-[inter] font-bold text-[#C1271A] dark:text-[#EF4444] text-md lg:text-lg py-2.5 border-2 border-[#C1271A] dark:border-[#EF4444] rounded-full hover:bg-[#C1271A] dark:hover:bg-[#EF4444] hover:text-white transition-colors duration-200 cursor-pointer"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};
export default CardProject;
