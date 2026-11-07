"use client";

import { useEffect, useRef, useState } from "react";
import SlideIn from "../components/animations/SlideIn";
import SectionTitle from "../components/animations/SectionTitle";
import LaboratoryRow from "../components/ui/LaboratoryRow";
import SeeMoreButton from "../components/ui/SeeMoreButton";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function PeopleSection({ innerRef, firstRow, secondRow }) {
  const marqueeContainerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const target = marqueeContainerRef.current;
    if (!target) return;

    const handleVisibilityChange = (event) => {
      setIsPlaying(!event.skipped);
    };

    target.addEventListener(
      "contentvisibilityautostatechange",
      handleVisibilityChange
    );

    let observer;
    const isContentVisibilitySupported =
      typeof document !== "undefined" &&
      "contentVisibility" in document.documentElement.style;

    if (!isContentVisibilitySupported && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsPlaying(entry.isIntersecting);
          });
        },
        { rootMargin: "200px" }
      );
      observer.observe(target);
    }

    return () => {
      target.removeEventListener(
        "contentvisibilityautostatechange",
        handleVisibilityChange
      );
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section id="people" ref={innerRef} className="pt-20">
      <SlideIn direction="up">
        <SectionTitle
          subtitle="OUR PEOPLE"
          title="Meet Our Laboratory Assistant"
        />
      </SlideIn>

      <div
        ref={marqueeContainerRef}
        className="overflow-hidden whitespace-nowrap py-14 flex flex-col gap-8 [content-visibility:auto] [contain-intrinsic-size:auto_none_auto_860px]"
      >
        <Marquee speed={50} play={isPlaying} pauseOnClick autoFill>
          <LaboratoryRow rowData={firstRow} />
        </Marquee>
        <Marquee speed={50} play={isPlaying} pauseOnClick autoFill>
          <LaboratoryRow rowData={secondRow} />
        </Marquee>
      </div>

      <div className="container mx-auto pb-8">
        <Link href={"/people"}>
          <SeeMoreButton>See More</SeeMoreButton>
        </Link>
      </div>
    </section>
  );
}
