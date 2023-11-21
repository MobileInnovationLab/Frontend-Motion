"use client";

import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";

import GeneralSeo from "@/core/components/seo/generalSeo";

import styles from "@/core/styles/pages/index.module.scss";

import DivisionBox from "@/core/components/divisionBox";
import Footer from "@/core/components/footer";
import TopButton from "@/core/components/topButton";
import ProductContainer from "@/core/components/productContainer";
import BlogContainer from "@/core/components/blogContainer";
import IndexAchievementContainer from "@/core/components/indexAchievementContainer";

import IndexIllustration from "@/core/components/illustration/indexIllustration";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import InternshipNavbar from "@/features/internship/components/navbar/InternshipNavbar";
import HomeNavbar from "../components/navbar/HomeNavbar";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 464, min: 0 },

    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const blogSliderResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 464, min: 0 },

    items: 3,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function HomeView() {
  const [ytModal, setYtModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [blogs, setBlogs] = useState([]);

  function closeYtModals() {
    setYtModal(true);
  }

  function openYtModals() {
    setYtModal(true);
  }

  return (
    <div className="bg-[#FCF6F6]">
      {/* <GeneralSeo />

      {ytModal ? (
        <motion.div
          className={styles["whole-page"]}
          onClick={closeYtModals}
          initial={ytModal ? { opacity: 0 } : { opacity: 1 }}
          animate={ytModal ? { opacity: 1 } : { opacity: 0 }}
          transition={{ type: "spring", duration: 2, bounce: 0 }}
        >
          <div className={styles["main-container"]}>
            <div className={styles.container}>
              <iframe
                className={styles.responsiveYt}
                src="https://www.youtube.com/embed/vI64lbga0FY"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      ) : (
        ""
      )} */}

      <HomeNavbar />
      <section className="w-full bg-[url('/images/main-index/bg-main.webp')] bg-cover bg-no-repeat bg-[center_bottom_0rem]">
        <div className="container gap-x-10 w-full mx-auto flex justify-between flex-col lg:flex-row items-center pb-40 pt-32">
          <div className="flex flex-col items-start justify-start">
            <h2 className="font-bold font-[rubik] text-[30px] lg:text-[60px] text-white text-center lg:text-left lg:mb-0">
              Mobile Innovation Laboratory
            </h2>
            <p className="mb-8 mt-5 text-[20px] text-inter text-[#FFEAEA]">
              The Mobile Innovation Laboratory, or commonly called Motion Lab,
              is one of the latest laboratories at the Faculty of Informatics,
              Telkom University under the auspices of K-Side.
            </p>
            <button
              type="submit"
              className="bg-[#332C2B] flex gap-x-3 mt-2 text-white font-bold text-center text-[inter] text-[16px] rounded-full px-8 py-5 hover:opacity-90 transition duration-800"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="white" />
                <path
                  d="M15.0871 12.754C15.0494 12.7927 14.9072 12.958 14.7747 13.094C13.9979 13.9493 11.9716 15.3493 10.9111 15.7767C10.75 15.8453 10.3428 15.9907 10.1252 16C9.91675 16 9.71802 15.952 9.52838 15.8547C9.29198 15.7187 9.10233 15.5047 8.99842 15.252C8.93153 15.0767 8.82761 14.552 8.82761 14.5427C8.7237 13.9687 8.66655 13.036 8.66655 12.0053C8.66655 11.0233 8.7237 10.1287 8.80878 9.546C8.81852 9.53667 8.92244 8.88467 9.03609 8.66133C9.24457 8.25333 9.65177 8 10.0876 8H10.1252C10.409 8.01 11.0059 8.26333 11.0059 8.27267C12.0093 8.70067 13.9888 10.032 14.7844 10.9167C14.7844 10.9167 15.0085 11.144 15.1059 11.286C15.2579 11.49 15.3332 11.7427 15.3332 11.9953C15.3332 12.2773 15.2481 12.54 15.0871 12.754"
                  fill="#F82F1E"
                />
              </svg>
              Watch Video
            </button>
          </div>
          <div className="w-full h-full pt-5 lg:pt-0">
            <IndexIllustration />
          </div>
        </div>
      </section>

      <section className="container mx-auto">
        <h3 className="text-center font-[rubik] text-red-500 text-[14px] lg:text-[18px]">
          ABOUT US
        </h3>
        <h1 className="text-center font-[rubik] font-bold text-[28px] lg:text-[48px]">
          What Is Motionlab?
        </h1>
        <div className="flex justify-between items-center mt-10">
          <h2 className="text-[48px] w-full text-[rubik] text-[#332C2B] font-bold">
            We are Creative People with High Spirits
          </h2>
          <p className="text-[18px] w-full text-inter text-[#6A6A6A]">
            The Motion (Mobile Innovation) Laboratory is one of the research
            laboratories under the Faculty of Informatics, Telkom University.
            Motion Lab focuses on the creation and development of mobile
            software. Now Motion Lab comes with 3 division options, Digital
            Business, UI/UX Design, and Mobile Programming.
          </p>
          <div className="w-50">
            <Image
              src="/images/about/first-meet.webp"
              alt="About Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <div className="my-40"></div>

      <section className="container mx-auto">
        <h3 className="text-center font-[rubik] text-red-500 text-[14px] lg:text-[18px]">
          OUR DIVISION
        </h3>
        <h1 className="text-center font-[rubik] font-bold text-[28px] lg:text-[48px]">
          What We Do
        </h1>
        <div className="flex gap-x-10 flex-col lg:flex-row">
          <div className="w-full">
            <div className="w-full text-center relative bottom-[-4rem]">
              <div className="bg-gradient-to-br from-[#F82F1E] to-[#C1271A] rounded-full inline-block p-8">
                <img src="/svg/chart.svg" alt="chart" />
              </div>
            </div>
            <div className="bg-white rounded py-10 px-8 w-full">
              <h2 className="font-[rubik] font-semibold text-[24px] text-center mb-5 mt-14">
                Lorem Ipsum
              </h2>
              <p className="font-[inter] text-[18px] text-center">
                Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full text-center relative bottom-[-4rem]">
              <div className="bg-gradient-to-br from-[#F82F1E] to-[#C1271A] rounded-full inline-block p-8">
                <img src="/svg/pen-tool.svg" alt="Pen Tool" />
              </div>
            </div>
            <div className="bg-white rounded py-10 px-8 w-full">
              <h2 className="font-[rubik] font-semibold text-[24px] text-center mb-5 mt-14">
                Lorem Ipsum
              </h2>
              <p className="font-[inter] text-[18px] text-center">
                Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="w-full text-center relative bottom-[-4rem]">
              <div className="bg-gradient-to-br from-[#F82F1E] to-[#C1271A] rounded-full inline-block p-8">
                <img src="/svg/code.svg" alt="Code" />
              </div>
            </div>
            <div className="bg-white rounded py-10 px-8 w-full">
              <h2 className="font-[rubik] font-semibold text-[24px] text-center mb-5 mt-14">
                Lorem Ipsum
              </h2>
              <p className="font-[inter] text-[18px] text-center">
                Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
