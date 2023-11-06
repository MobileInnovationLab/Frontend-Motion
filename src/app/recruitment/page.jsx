"use client";

import React from "react";
import "@/core/styles/tailwind.scss";
import styles from "@/app/recruitment/styles/index.module.scss";
import Navbar from "@/core/components/navbar";
import Image from "next/image";
import ActivitesCard from "./components/activitiesCard";

const page = () => {
  return (
    <div>
      <Navbar />
      <section className="w-full h-[800px] bg-[url('/recruitment/recruitment-landing-bg.png')] bg-cover bg-no-repeat bg-[center_bottom_0rem]">
        <div className="container h-full w-full mx-auto flex justify-between items-center pb-20">
          <h2 className="font-bold font-[rubik] text-[60px] text-white">
            <span className="bg-black rounded-lg px-[35px] py-[7px]">Internship</span> in Mobile Innovation Laboratory
          </h2>
          <div className="w-[580px]">
            <img src="/recruitment/recruitment-landing.png" className="w-full object-contain" alt="" />
          </div>
        </div>
      </section>

      <div className="my-40"></div>

      <section>
        <h3 className="text-center font-[rubik] text-red-500 text-[18px]">ABOUT</h3>
        <h1 className="text-center font-[rubik] font-bold text-[48px]">Internship Activities</h1>
      </section>
      <section className={styles["box-second-section"]}>
        <h3 className={styles["second-small-title"]}>ABOUT</h3>
        <h1 className={styles["second-big-title"]}>Internship Activities</h1>
      </section>
      <div className="flex flex-col lg:flex-row align-items-center pb-64 mt-10 container justify-content-center m-auto">
        <img src="/recruitment/internship-activities.png" className="h-auto m-auto mb-10 mx-5 lg:w-3/5" />
        <div className="bg-white text-left px-10 py-10 rounded-lg lg:w-1/2">
          <h2 className="text-3xl font-bold mb-10 ">What is Internship?</h2>
          <p className="text-2xl font-light text-neutral-400">Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum. </p>
        </div>
      </div>

      <div className="my-40"></div>

      <section className="">
        <h1 className="font-[rubik] font-bold text-[48px] container mx-auto">Route Map Motionlab</h1>
        <div className="h-[1212px]">
          <img src="/recruitment/route-map.png" className="w-full object-cover relative top-[-300px]" />
        </div>
      </section>
    </div>
  );
};

export default page;
