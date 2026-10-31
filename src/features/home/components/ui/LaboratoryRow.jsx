"use client";

import Image from "next/image";

export default function LaboratoryRow({ rowData }) {
  return (
    <div className="flex flex-row gap-8 pr-8 py-6">
      {rowData.map((member, index) => (
        <div
          key={member.name || index}
          className="flex flex-col w-[350px] min-h-[340px] justify-between rounded-3xl bg-white dark:bg-[#111827] border border-transparent dark:border-[#1E293B] shadow-lg p-6 transition-transform duration-200 hover:scale-105"
        >
          <div className="w-full text-center">
            <div className="rounded-full inline-block">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={128}
                height={128}
                sizes="128px"
                loading="eager"
                className="w-32 h-32 object-cover rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center w-full mt-6">
            <h2 className="font-[rubik] font-semibold text-lg text-center line-clamp-2 break-words text-slate-900 dark:text-[#F8FAFC]">
              {member.name}
            </h2>
            <p className="font-[inter] text-base text-center text-[#6A6A6A] dark:text-[#CBD5E1] mt-3 line-clamp-1 break-words">
              {member.role}
            </p>
            <hr className="w-1/2 my-4 border-[#6A6A6A] dark:border-slate-700" />
            <div className="flex justify-center">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 transition-transform duration-200 hover:scale-125 active:scale-90"
              >
                <img
                  src="/svg/linkedln.svg"
                  alt="LinkedIn"
                  width="24"
                  height="24"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-125 active:scale-90"
              >
                <img
                  src="/svg/instagram.svg"
                  alt="Instagram"
                  width="24"
                  height="24"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
