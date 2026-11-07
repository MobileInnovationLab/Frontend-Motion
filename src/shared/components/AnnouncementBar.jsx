"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import useStaticOption from "@/shared/hooks/useStaticOption";

export const DEFAULT_ANNOUNCEMENT_BAR_ACTIVE = false;
export const DEFAULT_ANNOUNCEMENT_BAR_TEXT =
  "Open recruitment member 2026 dibuka. Daftar sebelum 20 November";

const isTruthyOption = (val) =>
  val === true || val === "true" || val === "1" || val === 1;

const AnnouncementBar = ({
  ctaLabel = "Daftar sekarang",
  ctaHref = "/internship",
  onHeightChange,
}) => {
  const [isDismissed, setIsDismissed] = useState(false);
  const barRef = useRef(null);

  const { value: isAnnouncementBarActive } = useStaticOption(
    "is_announcement_bar_active",
    DEFAULT_ANNOUNCEMENT_BAR_ACTIVE,
    ["announcement_bar_active"]
  );

  const isActive = isTruthyOption(isAnnouncementBarActive);
  const shouldShow = isActive && !isDismissed;

  const { value: announcementBarText } = useStaticOption(
    "announcement_bar_text",
    DEFAULT_ANNOUNCEMENT_BAR_TEXT,
    ["announcment_bar_text"],
    { enabled: shouldShow }
  );

  useEffect(() => {
    if (!shouldShow || !barRef.current) {
      onHeightChange?.(0);
      return;
    }

    const updateHeight = () => {
      if (barRef.current) {
        onHeightChange?.(barRef.current.offsetHeight);
      }
    };

    updateHeight();

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(updateHeight);
      observer.observe(barRef.current);
      return () => {
        observer.disconnect();
        onHeightChange?.(0);
      };
    }

    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
      onHeightChange?.(0);
    };
  }, [shouldShow, announcementBarText, onHeightChange]);

  if (!shouldShow) return null;

  const message = String(
    announcementBarText || DEFAULT_ANNOUNCEMENT_BAR_TEXT
  ).trim();

  return (
    <div
      ref={barRef}
      role="region"
      aria-label="Pengumuman rekrutmen"
      className="fixed top-0 left-0 right-0 z-40 bg-[#262120] text-white border-b border-white/5"
    >
      <div className="relative flex items-center justify-center px-10 sm:px-12 py-2.5 text-center font-[inter] text-xs sm:text-[13.5px] leading-relaxed">
        <p className="font-normal tracking-[0.01em] text-white/95">
          <span>{message}</span>{" "}
          <Link
            href={ctaHref}
            className="inline-block font-medium text-[#F5B0AA] underline underline-offset-[3px] decoration-[#F5B0AA]/90 hover:text-white hover:decoration-white transition-colors duration-200 ml-1 whitespace-nowrap"
          >
            {ctaLabel}
          </Link>
        </p>

        <button
          type="button"
          onClick={() => setIsDismissed(true)}
          aria-label="Tutup pengumuman"
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors duration-200 focus:outline-none"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M1 1L13 13M13 1L1 13"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;

