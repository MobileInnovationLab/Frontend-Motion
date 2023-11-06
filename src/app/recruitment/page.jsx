"use client";

import React from "react";
import "@/core/styles/tailwind.scss";
import styles from "@/app/recruitment/styles/index.module.scss";
import Navbar from "@/core/components/navbar";
import Image from "next/image";
import ActivitesCard from "./components/activitiesCard";

const page = () => {
  return (
    <div className={styles["main-bg"]}>
      <div className={styles["main-body"]}>
        <Navbar />
        <section className={styles["box-first-section"]}>
          <h2>
            <span>Intership</span> in Mobile Innovation Laboratory
          </h2>
          <img src="/recruitment/recruitment-landing.png" alt="" />
        </section>

        <section className={styles["box-second-section"]}>
          <h3 className={styles["second-small-title"]}>ABOUT</h3>
          <h1 className={styles["second-big-title"]}>Internship Activities</h1>

          {/* <ActivitesCard /> */}
        </section>
        <div className="flex flex-col lg:flex-row align-items-center pb-64 mt-10 container justify-content-center m-auto">
          <img
            src="/recruitment/internship-activities.png"
            className="h-auto m-auto mb-10 mx-5 lg:w-3/5"
          />
          <div className="bg-white text-left px-10 py-10 rounded-lg lg:w-1/2">
            <h2 className="text-3xl font-bold mb-10 ">What is Internship?</h2>
            <p className="text-2xl font-light text-neutral-400">
              Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
