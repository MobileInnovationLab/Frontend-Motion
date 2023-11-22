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

        <Image
          className="object-contain w-full relative mt-20 rounded"
          layout="responsive"
          width="1168"
          height="500"
          src="/images/about/first-meet.webp"
          alt="About Image"
        />
        <div className="flex mt-14">
          <div className="flex justify-between items-center">
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
          </div>
        </div>
        <div className="flex justify-around mt-14">
          <div className="text-center">
            <h2 className="text-[rubik] font-bold text-[46px] text-[#F82F1E]">
              6
            </h2>
            <p className="text-[inter] text-[20px] text-[#6A6A6A]">
              Years of operation
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-[rubik] font-bold text-[46px] text-[#F82F1E]">
              100+
            </h2>
            <p className="text-[inter] text-[20px] text-[#6A6A6A]">Members</p>
          </div>
          <div className="text-center">
            <h2 className="text-[rubik] font-bold text-[46px] text-[#F82F1E]">
              50+
            </h2>
            <p className="text-[inter] text-[20px] text-[#6A6A6A]">Produts</p>
          </div>
          <div className="text-center">
            <h2 className="text-[rubik] font-bold text-[46px] text-[#F82F1E]">
              48+
            </h2>
            <p className="text-[inter] text-[20px] text-[#6A6A6A]">Awards</p>
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

      <div className="my-40"></div>

      <div className="bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-rubik font-bold text-[48px] text-[#332C2B]">
            Laboratory Assistance
          </h2>
          <div className="flex gap-x-10 flex-col lg:flex-row">
            <div className="w-full">
              <div className="w-full text-center relative bottom-[-4rem]">
                <div className="rounded-full inline-block p-8">
                  <img src="/images/about/dummy.webp" alt="Member" />
                </div>
              </div>
              <div className="bg-white rounded py-10 px-8 w-full">
                <h2 className="font-[rubik] font-semibold text-[20px] text-center">
                  Dummy Name
                </h2>
                <p className="font-[inter] text-[16px] text-center text-[#6A6A6A] mt-3">
                  Chief of Laboratory
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full text-center relative bottom-[-4rem]">
                <div className="rounded-full inline-block p-8">
                  <img src="/images/about/dummy.webp" alt="Member" />
                </div>
              </div>
              <div className="bg-white rounded py-10 px-8 w-full">
                <h2 className="font-[rubik] font-semibold text-[20px] text-center">
                  Dummy Name
                </h2>
                <p className="font-[inter] text-[16px] text-center text-[#6A6A6A] mt-3">
                  Chief of Laboratory
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full text-center relative bottom-[-4rem]">
                <div className="rounded-full inline-block p-8">
                  <img src="/images/about/dummy.webp" alt="Member" />
                </div>
              </div>
              <div className="bg-white rounded py-10 px-8 w-full">
                <h2 className="font-[rubik] font-semibold text-[20px] text-center">
                  Dummy Name
                </h2>
                <p className="font-[inter] text-[16px] text-center text-[#6A6A6A] mt-3">
                  Chief of Laboratory
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full text-center relative bottom-[-4rem]">
                <div className="rounded-full inline-block p-8">
                  <img src="/images/about/dummy.webp" alt="Member" />
                </div>
              </div>
              <div className="bg-white rounded py-10 px-8 w-full">
                <h2 className="font-[rubik] font-semibold text-[20px] text-center">
                  Dummy Name
                </h2>
                <p className="font-[inter] text-[16px] text-center text-[#6A6A6A] mt-3">
                  Chief of Laboratory
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-x-10 flex-col lg:flex-row">
            <div className="w-full">
              <div className="w-full text-center relative bottom-[-4rem]">
                <div className="rounded-full inline-block p-8">
                  <img src="/images/about/dummy.webp" alt="Member" />
                </div>
              </div>
              <div className="bg-white rounded py-10 px-8 w-full">
                <h2 className="font-[rubik] font-semibold text-[20px] text-center">
                  Dummy Name
                </h2>
                <p className="font-[inter] text-[16px] text-center text-[#6A6A6A] mt-3">
                  Chief of Laboratory
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full text-center relative bottom-[-4rem]">
                <div className="rounded-full inline-block p-8">
                  <img src="/images/about/dummy.webp" alt="Member" />
                </div>
              </div>
              <div className="bg-white rounded py-10 px-8 w-full">
                <h2 className="font-[rubik] font-semibold text-[20px] text-center">
                  Dummy Name
                </h2>
                <p className="font-[inter] text-[16px] text-center text-[#6A6A6A] mt-3">
                  Chief of Laboratory
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full text-center relative bottom-[-4rem]">
                <div className="rounded-full inline-block p-8">
                  <img src="/images/about/dummy.webp" alt="Member" />
                </div>
              </div>
              <div className="bg-white rounded py-10 px-8 w-full">
                <h2 className="font-[rubik] font-semibold text-[20px] text-center">
                  Dummy Name
                </h2>
                <p className="font-[inter] text-[16px] text-center text-[#6A6A6A] mt-3">
                  Chief of Laboratory
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full text-center relative bottom-[-4rem]">
                <div className="rounded-full inline-block p-8">
                  <img src="/images/about/dummy.webp" alt="Member" />
                </div>
              </div>
              <div className="bg-white rounded py-10 px-8 w-full">
                <h2 className="font-[rubik] font-semibold text-[20px] text-center">
                  Dummy Name
                </h2>
                <p className="font-[inter] text-[16px] text-center text-[#6A6A6A] mt-3">
                  Chief of Laboratory
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-40"></div>

      <section className="container mx-auto">
        <h3 className="text-center font-[rubik] text-red-500 text-[14px] lg:text-[18px]">
          Contact Us
        </h3>

        <div className="flex gap-x-14 mt-20">
          <Image
            className="px-10 rounded"
            src="/images/contactUs/photoFirst.png"
            alt="First Photo"
            width="570"
            height="400"
            layout="responsive"
            objectFit="cover"
          />
          <div className="flex flex-col gap-y-5 ">
            <h2 className="text-[rubik] text-[48px] text-[#332C2B] font-bold">
              Have Any Question?
            </h2>
            <p className="text-[inter] text-[18px] text-[#6A6A6A]">
              We&#39;d love to hear from you. Wheter you&#39;re curious more
              about Mobile Innovation Laboratory, we&#39;re ready to answer any
              and all your questions, just contact us on DM Instagram{" "}
              <a
                className="text-[#F82F1E]"
                href="https://www.instagram.com/motionlab_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @motionlab_
              </a>
            </p>
            <div className="flex flex-col gap-y-3">
              <div className="flex gap-x-3 items-center">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="15" r="15" fill="#F82F1E" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.9644 9.60004C18.769 9.60004 19.543 9.91804 20.1124 10.4886C20.6824 11.058 21.001 11.826 21.001 12.63V17.37C21.001 19.044 19.639 20.4 17.9644 20.4H12.037C10.3624 20.4 9.00098 19.044 9.00098 17.37V12.63C9.00098 10.956 10.3564 9.60004 12.037 9.60004H17.9644ZM18.919 13.5241L18.967 13.4761C19.1104 13.3021 19.1104 13.0501 18.9604 12.8761C18.877 12.7867 18.7624 12.7321 18.643 12.7201C18.517 12.7135 18.397 12.7561 18.3064 12.8401L15.601 15.0001C15.253 15.2887 14.7544 15.2887 14.401 15.0001L11.701 12.8401C11.5144 12.7021 11.2564 12.7201 11.101 12.8821C10.939 13.0441 10.921 13.3021 11.0584 13.4821L11.137 13.5601L13.867 15.6901C14.203 15.9541 14.6104 16.0981 15.037 16.0981C15.4624 16.0981 15.877 15.9541 16.2124 15.6901L18.919 13.5241Z"
                    fill="white"
                  />
                </svg>
                <p className="text-[inter] text-[18px] text-[#6A6A6A]">
                  motion.laboratory@gmail.com
                </p>
              </div>
              <div className="flex gap-x-3 items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="15" cy="15" r="15" fill="#F82F1E" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.90039 13.9907C9.90039 11.2308 12.2067 9.00006 14.9965 9.00006C17.7941 9.00006 20.1004 11.2308 20.1004 13.9907C20.1004 15.3815 19.5946 16.6726 18.7621 17.767C17.8437 18.9742 16.7117 20.0259 15.4375 20.8515C15.1459 21.0423 14.8827 21.0567 14.5627 20.8515C13.2812 20.0259 12.1492 18.9742 11.2387 17.767C10.4056 16.6726 9.90039 15.3815 9.90039 13.9907ZM13.3173 14.1461C13.3173 15.0707 14.0717 15.7979 14.9968 15.7979C15.9225 15.7979 16.6842 15.0707 16.6842 14.1461C16.6842 13.2287 15.9225 12.4662 14.9968 12.4662C14.0717 12.4662 13.3173 13.2287 13.3173 14.1461Z"
                    fill="white"
                  />
                </svg>
                <p className="text-[inter] text-[18px] text-[#6A6A6A]">
                  Telkom University, Faculty of Informatics, Telkom University
                  Landmark Tower, 6th Floor LAB 0624
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="my-40"></div>

      <Footer />
    </div>
  );
}
