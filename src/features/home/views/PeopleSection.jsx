"use client";

import SlideIn from "../components/animations/SlideIn";
import SectionTitle from "../components/animations/SectionTitle";
import LaboratoryRow from "../components/ui/LaboratoryRow";
import SeeMoreButton  from "../components/ui/SeeMoreButton";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function PeopleSection({ innerRef, firstRow, secondRow }) {
  return (
    <section id="people" ref={innerRef} className="pt-20">
      <SlideIn direction="up">
        <SectionTitle
          subtitle="OUR PEOPLE"
          title="Meet Our Laboratory Assistant"
        />
      </SlideIn>

      <div className="overflow-x-auto whitespace-nowrap no-scrollbar py-14">
        <Marquee speed={50} pauseOnClick>
          <div className="flex flex-col gap-8 px-4 py-8">
            <LaboratoryRow rowData={firstRow} />
            <LaboratoryRow rowData={secondRow} />
          </div>
        </Marquee>
      </div>

      <div className="container mx-auto pb-8">
        <Link href={"/people"}>
          <SeeMoreButton >See More</SeeMoreButton>
        </Link>
      </div>
    </section>
  );
}
