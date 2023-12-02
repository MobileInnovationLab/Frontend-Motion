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
    items: 3,
  },
  tablet: {
    breakpoint: { max: 464, min: 0 },

    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
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
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    console.log(slider);
  }, [slider]);

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
          <div className="flex flex-col lg:flex-row gap-y-5 justify-between items-center">
            <h2 className="text-[28px] lg:text-[48px] w-full text-[rubik] text-[#332C2B] font-bold">
              We are Creative People with High Spirits
            </h2>
            <p className="text-[16px] lg:text-[18px] w-full text-inter text-[#6A6A6A]">
              The Motion (Mobile Innovation) Laboratory is one of the research
              laboratories under the Faculty of Informatics, Telkom University.
              Motion Lab focuses on the creation and development of mobile
              software. Now Motion Lab comes with 3 division options, Digital
              Business, UI/UX Design, and Mobile Programming.
            </p>
          </div>
        </div>
        <div className="flex justify-around mt-14 flex-col lg:flex-row gap-y-10">
          <div className="text-center">
            <h2 className="text-[rubik] font-bold text-[30px] lg:text-[46px] text-[#F82F1E]">
              6
            </h2>
            <p className="text-[inter] text-[16px] lg:text-[20px] text-[#6A6A6A]">
              Years of operation
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-[rubik] font-bold text-[30px] lg:text-[46px] text-[#F82F1E]">
              100+
            </h2>
            <p className="text-[inter] text-[16px] lg:text-[20px] text-[#6A6A6A]">
              Members
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-[rubik] font-bold text-[30px] lg:text-[46px] text-[#F82F1E]">
              50+
            </h2>
            <p className="text-[inter] text-[16px] lg:text-[20px] text-[#6A6A6A]">
              Produts
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-[rubik] font-bold text-[30px] lg:text-[46px] text-[#F82F1E]">
              48+
            </h2>
            <p className="text-[inter] text-[16px] lg:text-[20px] text-[#6A6A6A]">
              Awards
            </p>
          </div>
        </div>
      </section>

      <div className="my-20 lg:my-40"></div>

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
          <h2 className="text-rubik font-bold text-[28px] lg:text-[48px] text-[#332C2B]">
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
        <div className="flex">
          <div className="w-full">
            <h3 className=" font-[rubik] text-red-500 text-[14px] lg:text-[18px]">
              BLOG
            </h3>
            <h2 className="text-[48px] w-full text-[rubik] text-[#332C2B] font-bold">
              Interesting Stories From Us
            </h2>
          </div>
          <div className="flex items-end justify-end ms-auto mt-5 lg:mt-0 w-full">
            <button
              className="
                border rounded-full p-5 border-[#858585] group 
                hover:bg-[#F82F1E] hover:border-white
                transition delay-50
              "
              onClick={() => {
                slider.previous(3);
              }}
            >
              <svg
                className="
                  group-hover:fill-white
                  transition delay-50
                "
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="#6A6A6A"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1.05382 10.6965C1.13858 10.7835 1.4586 11.1555 1.7567 11.4615C3.50438 13.386 8.06357 16.536 10.4498 17.4975C10.8122 17.652 11.7284 17.979 12.218 18C12.687 18 13.1342 17.892 13.5609 17.673C14.0928 17.367 14.5195 16.8855 14.7533 16.317C14.9038 15.9225 15.1376 14.742 15.1376 14.721C15.3714 13.4295 15.5 11.331 15.5 9.012C15.5 6.8025 15.3714 4.7895 15.18 3.4785C15.1581 3.4575 14.9243 1.9905 14.6685 1.488C14.1995 0.57 13.2832 0 12.3027 0H12.218C11.5794 0.0225 10.2365 0.5925 10.2365 0.6135C7.97881 1.5765 3.52484 4.572 1.73478 6.5625C1.73478 6.5625 1.23064 7.074 1.01145 7.3935C0.669508 7.8525 0.5 8.421 0.5 8.9895C0.5 9.624 0.691427 10.215 1.05382 10.6965Z" />
              </svg>
            </button>
            <div className="px-2"></div>
            <button
              className="
                border rounded-full p-5 border-[#858585] group 
                hover:bg-[#F82F1E] hover:border-white
                transition delay-50
              "
              onClick={() => {
                slider.next(3);
              }}
            >
              <svg
                className="
                  group-hover:fill-white
                  transition delay-50
                "
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="#6A6A6A"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14.9462 10.6965C14.8614 10.7835 14.5414 11.1555 14.2433 11.4615C12.4956 13.386 7.93643 16.536 5.55017 17.4975C5.18777 17.652 4.27155 17.979 3.78203 18C3.31296 18 2.86581 17.892 2.43911 17.673C1.90721 17.367 1.48052 16.8855 1.24671 16.317C1.0962 15.9225 0.862397 14.742 0.862397 14.721C0.628592 13.4295 0.5 11.331 0.5 9.012C0.5 6.8025 0.628592 4.7895 0.820019 3.4785C0.841939 3.4575 1.07574 1.9905 1.33147 1.488C1.80054 0.57 2.71676 0 3.69727 0H3.78203C4.4206 0.0225 5.76352 0.5925 5.76352 0.6135C8.02119 1.5765 12.4752 4.572 14.2652 6.5625C14.2652 6.5625 14.7694 7.074 14.9886 7.3935C15.3305 7.8525 15.5 8.421 15.5 8.9895C15.5 9.624 15.3086 10.215 14.9462 10.6965" />
              </svg>
            </button>
          </div>
        </div>

        <div className="my-14"></div>

        <Carousel
          ref={(c) => setSlider(c)}
          responsive={responsive}
          itemClass="pe-5"
          slidesToSlide="10"
          autoPlay={true}
          arrows={false}
          swipeable={false}
          draggable={false}
        >
          <div className="bg-white p-4 w-full">
            <img
              src="https://images.unsplash.com/photo-1700751639138-e6628c42b558?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h2 className="text-[rubik] font-semibold text-[22px] my-3">
              Flutter Developer Guide
            </h2>
            <p className="text-[#6A6A6A] text-inter text-[16px]">
              Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do
              eiusmod
            </p>
            <hr className="mb-3 mt-5" />
            <p className="text-[inter] text-[16px] text-[#6A6A6A]">
              by Zara Adisty
            </p>
          </div>
          <div className="bg-white p-4 w-full">
            <img
              src="https://images.unsplash.com/photo-1700751639138-e6628c42b558?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h2 className="text-[rubik] font-semibold text-[22px] my-3">
              Flutter Developer Guide
            </h2>
            <p className="text-[#6A6A6A] text-inter text-[16px]">
              Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do
              eiusmod
            </p>
            <hr className="mb-3 mt-5" />
            <p className="text-[inter] text-[16px] text-[#6A6A6A]">
              by Zara Adisty
            </p>
          </div>
          <div className="bg-white p-4 w-full">
            <img
              src="https://images.unsplash.com/photo-1700751639138-e6628c42b558?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h2 className="text-[rubik] font-semibold text-[22px] my-3">
              Flutter Developer Guide
            </h2>
            <p className="text-[#6A6A6A] text-inter text-[16px]">
              Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do
              eiusmod
            </p>
            <hr className="mb-3 mt-5" />
            <p className="text-[inter] text-[16px] text-[#6A6A6A]">
              by Zara Adisty
            </p>
          </div>
          <div className="bg-white p-4 w-full">
            <img
              src="https://images.unsplash.com/photo-1700751639138-e6628c42b558?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h2 className="text-[rubik] font-semibold text-[22px] my-3">
              Flutter Developer Guide
            </h2>
            <p className="text-[#6A6A6A] text-inter text-[16px]">
              Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do
              eiusmod
            </p>
            <hr className="mb-3 mt-5" />
            <p className="text-[inter] text-[16px] text-[#6A6A6A]">
              by Zara Adisty
            </p>
          </div>
          <div className="bg-white p-4 w-full">
            <img
              src="https://images.unsplash.com/photo-1700751639138-e6628c42b558?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h2 className="text-[rubik] font-semibold text-[22px] my-3">
              Flutter Developer Guide
            </h2>
            <p className="text-[#6A6A6A] text-inter text-[16px]">
              Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do
              eiusmod
            </p>
            <hr className="mb-3 mt-5" />
            <p className="text-[inter] text-[16px] text-[#6A6A6A]">
              by Zara Adisty
            </p>
          </div>
          <div className="bg-white p-4 w-full">
            <img
              src="https://images.unsplash.com/photo-1700751639138-e6628c42b558?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h2 className="text-[rubik] font-semibold text-[22px] my-3">
              Flutter Developer Guide
            </h2>
            <p className="text-[#6A6A6A] text-inter text-[16px]">
              Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do
              eiusmod
            </p>
            <hr className="mb-3 mt-5" />
            <p className="text-[inter] text-[16px] text-[#6A6A6A]">
              by Zara Adisty
            </p>
          </div>
          <div className="bg-white p-4 w-full">
            <img
              src="https://images.unsplash.com/photo-1700751639138-e6628c42b558?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h2 className="text-[rubik] font-semibold text-[22px] my-3">
              Flutter Developer Guide
            </h2>
            <p className="text-[#6A6A6A] text-inter text-[16px]">
              Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do
              eiusmod
            </p>
            <hr className="mb-3 mt-5" />
            <p className="text-[inter] text-[16px] text-[#6A6A6A]">
              by Zara Adisty
            </p>
          </div>
          <div className="bg-white p-4 w-full">
            <img
              src="https://images.unsplash.com/photo-1700751639138-e6628c42b558?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <h2 className="text-[rubik] font-semibold text-[22px] my-3">
              Flutter Developer Guide
            </h2>
            <p className="text-[#6A6A6A] text-inter text-[16px]">
              Lorem ipsum dolor sit amet, elite consectetur adipiscing, sed do
              eiusmod
            </p>
            <hr className="mb-3 mt-5" />
            <p className="text-[inter] text-[16px] text-[#6A6A6A]">
              by Zara Adisty
            </p>
          </div>
        </Carousel>
        {/* <div className="flex gap-x-5">
        </div> */}
      </section>

      <div className="my-40"></div>

      <section className="container mx-auto">
        <h3 className="text-center font-[rubik] text-red-500 text-[14px] lg:text-[18px]">
          Contact Us
        </h3>

        <div className="flex gap-x-14 mt-20 flex-col lg:flex-row gap-y-10">
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
            <h2 className="text-[rubik] text-[28px] lg:text-[48px] text-[#332C2B] font-bold">
              Have Any Question?
            </h2>
            <p className="text-[inter] text-[16px] lg:text-[18px] text-[#6A6A6A]">
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
                <p className="text-[inter] text-[16px] lg:text-[18px] text-[#6A6A6A]">
                  motion.laboratory@gmail.com
                </p>
              </div>
              <div className="flex gap-x-3 items-center">
                <svg
                  className="w-10"
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
                    d="M9.90039 13.9907C9.90039 11.2308 12.2067 9.00006 14.9965 9.00006C17.7941 9.00006 20.1004 11.2308 20.1004 13.9907C20.1004 15.3815 19.5946 16.6726 18.7621 17.767C17.8437 18.9742 16.7117 20.0259 15.4375 20.8515C15.1459 21.0423 14.8827 21.0567 14.5627 20.8515C13.2812 20.0259 12.1492 18.9742 11.2387 17.767C10.4056 16.6726 9.90039 15.3815 9.90039 13.9907ZM13.3173 14.1461C13.3173 15.0707 14.0717 15.7979 14.9968 15.7979C15.9225 15.7979 16.6842 15.0707 16.6842 14.1461C16.6842 13.2287 15.9225 12.4662 14.9968 12.4662C14.0717 12.4662 13.3173 13.2287 13.3173 14.1461Z"
                    fill="white"
                  />
                </svg>
                <p className="text-[inter] text-[16px] lg:text-[18px] text-[#6A6A6A]">
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
