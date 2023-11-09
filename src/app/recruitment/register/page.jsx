"use client";

import React from "react";
import RecruitmentNavbar from "../components/navbar/RecruitmentNavbar";

const Page = () => {
  return (
    <div>
      <RecruitmentNavbar />
      <section className="bg-[url('/recruitment/sub-header.png')] bg-cover bg-no-repeat bg-[center_bottom_0rem] w-full">
        <h1 className="text-[48px] font-bold font-[rubik] text-white flex justify-center py-40">Recruitment Member 8.0</h1>
      </section>

      <section className="container mx-auto">
        <img src="/recruitment/register-hero.png" className="w-full px-[25rem] py-10" alt="Register Hero" />
      </section>
    </div>
  );
};

export default Page;
