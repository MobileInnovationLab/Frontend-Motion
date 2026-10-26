"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import useStaticOption from "../../hooks/useStaticOption";
import { renderTemplateWithRegex } from "../../utils/templateUtils";

const DEFAULT_REJECTED_TEXT =
  "Hello {name} ({nim})! Unfortunately, you have not been selected as a Laboratory Assistant (Aslab) of Mobile Innovation Laboratory Gen 11.0. Keep your spirits high and never give up! We look forward to seeing your continued growth and resilience.";

const InternshipDeclinedView = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const name = searchParams.get("name") || "";
  const nim = searchParams.get("nim") || "";

  const { value: rejectedText, loading } = useStaticOption(
    "internship_rejected_text",
    DEFAULT_REJECTED_TEXT
  );

  useEffect(() => {
    if (!searchParams.get("name")) {
      router.push("/");
    }
  }, [searchParams, router]);

  return (
    <>
      <section className="flex flex-col items-center justify-center container mx-auto px-10 lg:px-[20rem] text-center py-20">
        <img src="/images/recruitment/recruitment-declined.png" alt="Declined" />
        <h2 className="font-semibold text-[18px] lg:text-[32px] text-[rubik] text-slate-900 dark:text-[#F8FAFC]">
          Ooops... Sorry !
        </h2>

        {loading ? (
          <div
            data-testid="static-option-skeleton"
            className="animate-pulse flex flex-col items-center justify-center gap-2 mt-4 max-w-2xl mx-auto w-full"
          >
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-4/5"></div>
          </div>
        ) : (
          <p className="text-[inter] text-[14px] lg:text-[18px] text-[#6A6A6A] dark:text-[#CBD5E1] mt-3 whitespace-pre-line">
            {renderTemplateWithRegex(rejectedText, { name, nim })}
          </p>
        )}
      </section>
    </>
  );
};

export default InternshipDeclinedView;
