"use client";

import Confetti from "react-confetti";
import { useSearchParams, useRouter } from "next/navigation";
import useWindowDimensions from "@/shared/hooks/useWindowDimensions";
import Link from "next/link";
import { useEffect, useState } from "react";
import api from "@/shared/api/api";
import useStaticOption from "../../hooks/useStaticOption";
import { renderTemplateWithRegex } from "../../utils/templateUtils";

const DEFAULT_ACCEPTED_TEXT =
  "Hello {name} ({nim})! Congratulations on successfully passing the selection process and officially becoming a Laboratory Assistant (Aslab) of Mobile Innovation Laboratory Gen 11.0, accepted in the {division} division! Welcome to the team, we’re excited to have you with us!";

const DEFAULT_ACCEPTED_WHATSAPP_LINK =
  "https://chat.whatsapp.com/KVidot3iVaVKynuE69W7Pt?mode=gi_t";

const getDeclinedPath = () => {
  if (typeof window === "undefined") return "/declined";
  const isSubdomain =
    window.location.host.includes("member") ||
    window.location.host.includes("internship");
  if (!isSubdomain) {
    if (window.location.pathname.startsWith("/member")) return "/member/declined";
    if (window.location.pathname.startsWith("/internship")) return "/internship/declined";
  }
  return "/declined";
};

const InternshipAcceptedView = () => {
  const { height, width } = useWindowDimensions();
  const searchParams = useSearchParams();
  const router = useRouter();

  const nimParam = (searchParams.get("nim") || "").trim();
  const [candidate, setCandidate] = useState(null);
  const [verifying, setVerifying] = useState(true);

  useEffect(() => {
    if (!nimParam) {
      router.replace("/");
      return;
    }

    let cancelled = false;
    setVerifying(true);

    api
      .get(`/recruitation/check/${encodeURIComponent(nimParam)}`)
      .then((response) => {
        if (cancelled) return;
        const record = response?.data?.recruitation;
        if (response?.data?.is_accepted == 2 && record) {
          setCandidate({
            name: record.name || "",
            nim: record.nim || nimParam,
            division: record.division || "",
          });
          setVerifying(false);
          return;
        }

        if (record) {
          const qs = new URLSearchParams({
            name: record.name || "",
            nim: record.nim || nimParam,
            division: record.division || "",
          }).toString();
          router.replace(`${getDeclinedPath()}?${qs}`);
        } else {
          router.replace("/");
        }
      })
      .catch(() => {
        if (!cancelled) {
          router.replace("/");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [nimParam, router]);

  const isVerified = Boolean(candidate);

  const { value: acceptedText, loading } = useStaticOption(
    "internship_accepted_text",
    DEFAULT_ACCEPTED_TEXT,
    [],
    { enabled: isVerified }
  );
  const { value: acceptedWhatsappLink } = useStaticOption(
    "internship_accepted_whatsapp_link",
    DEFAULT_ACCEPTED_WHATSAPP_LINK,
    [],
    { enabled: isVerified }
  );

  if (verifying || !candidate) {
    return (
      <section className="flex flex-col items-center justify-center min-h-[60vh] container mx-auto px-10 text-center py-20">
        <div
          data-testid="accepted-verify-spinner"
          className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#F82F1E]"
        />
      </section>
    );
  }

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
            {renderTemplateWithRegex(acceptedText, candidate)}
          </p>
        )}

        <div className="my-3 lg:my-6"></div>
        <Link
          href={acceptedWhatsappLink || DEFAULT_ACCEPTED_WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F82F1E] text-white text-[inter] text-[14px] lg:text-[16px] rounded-full px-10 py-[1rem] hover:opacity-90 transition duration-800"
        >
          Join Group
        </Link>
      </section>
    </>
  );
};

export default InternshipAcceptedView;
