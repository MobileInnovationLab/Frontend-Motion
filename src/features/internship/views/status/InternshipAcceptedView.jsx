"use client";

import Confetti from "react-confetti";
import { useSearchParams } from "next/navigation";
import useWindowDimensions from "@/shared/hooks/useWindowDimensions";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect } from "react";
import useStaticOption from "../../hooks/useStaticOption";
import { renderTemplateWithRegex } from "../../utils/templateUtils";

const DEFAULT_ACCEPTED_TEXT =
  "Hello {name} ({nim})! Congratulations on successfully passing the selection process and officially becoming a Laboratory Assistant (Aslab) of Mobile Innovation Laboratory Gen 11.0, accepted in the {division} division! Welcome to the team, we’re excited to have you with us!";

const InternshipAcceptedView = () => {
  const { height, width } = useWindowDimensions();
  const searchParams = useSearchParams();
  const router = useRouter();

  const name = searchParams.get("name") || "";
  const division = searchParams.get("division") || "";
  const nim = searchParams.get("nim") || "";

  const { value: acceptedText, loading } = useStaticOption(
    "internship_accepted_text",
    DEFAULT_ACCEPTED_TEXT
  );

  useEffect(() => {
    if (!searchParams.get("name")) {
      router.push("/");
    }
  }, [searchParams, router]);

  return (
    <>
      <section className="flex flex-col items-center justify-center container mx-auto px-10 lg:px-[20rem] text-center py-20">
        <Confetti width={width} height={height} />
        <img src="/images/recruitment/recruitment-accepted.png" alt="Accepted" />
        <h2 className="font-semibold text-[18px] lg:text-[32px] text-[rubik] text-slate-900 dark:text-[#F8FAFC]">
          Congratulations !
        </h2>

        {loading ? (
          <div
            data-testid="static-option-skeleton"
            className="animate-pulse flex flex-col items-center justify-center gap-2 mt-4 max-w-2xl mx-auto w-full"
          >
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-4/6"></div>
          </div>
        ) : (
          <p className="text-[inter] text-[14px] lg:text-[18px] text-[#6A6A6A] dark:text-[#CBD5E1] mt-3 whitespace-pre-line">
            {renderTemplateWithRegex(acceptedText, { name, division, nim })}
          </p>
        )}

        <div className="my-3 lg:my-6"></div>
        <Link
          href="https://chat.whatsapp.com/KVidot3iVaVKynuE69W7Pt?mode=gi_t"
          className="bg-[#F82F1E] text-white text-[inter] text-[14px] lg:text-[16px] rounded-full px-10 py-[1rem] hover:opacity-90 transition duration-800"
        >
          Join Group
        </Link>
      </section>
    </>
  );
};

export default InternshipAcceptedView;
