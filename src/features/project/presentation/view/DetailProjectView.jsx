"use client";

import Image from "next/image";
import InternshipFooter from "@/features/internship/components/footer/InternshipFooter";
import BackButton from "../components/BackButton";
import LinkButtons from "../components/LinkButtons";
import { MOCK_PROJECT_DATA, LINK_BUTTONS } from "../constants/detailProjectConstants";

const DetailProject = () => {
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert("Link berhasil disalin! 🎉"))
        .catch((err) => alert("Gagal menyalin link 😢"));
    }
  };

  return (
    <div className="bg-[#FCF6F6]">
      {/* Header Section */}
      <section className="container mx-auto pt-16">
        <BackButton />

        <div className="pt-8">
          <h1 className="font-bold text-3xl md:text-6xl">{MOCK_PROJECT_DATA.projectName}</h1>
          <h3 className="text-xl md:text-4xl py-4 md:py-8">{MOCK_PROJECT_DATA.team}</h3>
          <h3 className="font-bold text-xl md:text-3xl">
            {MOCK_PROJECT_DATA.members.join(", ")}
          </h3>
        </div>
      </section>

      {/* Links Section */}
      <section className="container mx-auto py-8">
        <LinkButtons buttons={LINK_BUTTONS} onCopyLink={handleCopyLink} />
      </section>

      {/* About Section */}
      <section className="container mx-auto py-4 md:py-16">
        <div>
          <Image
            src={MOCK_PROJECT_DATA.thumbnail}
            alt="Thumbnail"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
          <h4 className="pt-4 text-xl md:text-4xl font-bold pb-2 md:pb-4">About</h4>
          <p className="font-[inter] font-normal text-base md:text-2xl text-justify">
            {MOCK_PROJECT_DATA.about}
          </p>
        </div>
      </section>

      {/* Design System Section */}
      <section className="container mx-auto py-4 md:py-16">
        <h3 className="font-bold font-[inter] text-xl md:text-4xl pb-4">Design System</h3>
        <Image
          src={MOCK_PROJECT_DATA.design}
          alt="Design System"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
      </section>

      <InternshipFooter />
    </div>
  );
};

export default DetailProject;
