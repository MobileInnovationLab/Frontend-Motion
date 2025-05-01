"use client";

import styles from "@/core/styles/pages/product.module.scss";
import GeneralSeo from "@/core/components/seo/generalSeo";
import InternshipFooter from "@/features/internship/components/footer/InternshipFooter";
import NewsNavbar from "../../components/NewsNavbar";
import BigTitle from "@/core/components/bigTitle";

import { useState } from "react";
import NewsCard from "../../components/NewsCard";

const NewsView = () => {
  const category = [
    { id: 1, title: "Information" },
    { id: 2, title: "Achievements" },
  ];

  const contentData = {
    1: [
      {
        id: 1,
        image: "/images/contactUs/photoFirst.png",
        date: "Tuesday, January 08, 2025",
        description: "Description for Info 1",
      },
      {
        id: 2,
        image: "/images/contactUs/photoFirst.png",
        date: "Tuesday, January 08, 2025",
        description: "Description for Info 2",
      },
      {
        id: 3,
        image: "/images/contactUs/photoFirst.png",
        date: "Tuesday, January 08, 2025",
        description: "Description for Info 3",
      },
      {
        id: 4,
        image: "/images/contactUs/photoFirst.png",
        date: "Tuesday, January 08, 2025",
        description: "Description for Info 4",
      },
      {
        id: 5,
        image: "/images/contactUs/photoFirst.png",
        date: "Tuesday, January 08, 2025",
        description: "Description for Info 5",
      },
      {
        id: 6,
        image: "/images/contactUs/photoFirst.png",
        date: "Tuesday, January 08, 2025",
        description: "Description for Info 5",
      },
      {
        id: 7,
        image: "/images/contactUs/photoFirst.png",
        date: "Tuesday, January 08, 2025",
        description: "Description for Info 7",
      },
      {
        id: 8,
        image: "/images/contactUs/photoFirst.png",
        date: "Tuesday, January 08, 2025",
        description: "Description for Info 8",
      },
      {
        id: 9,
        image: "/images/contactUs/photoFirst.png",
        date: "Tuesday, January 08, 2025",
        description: "Description for Info 9",
      },
    ],
    2: [
      {
        id: 1,
        image: "/images/contactUs/photoFirst.png",
        date: "Tuesday, January 08, 2025",
        description: "Description for Achievement 1",
      },
      {
        id: 2,
        image: "/images/contactUs/photoFirst.png",
        date: "Tuesday, January 08, 2025",
        description: "Description for Achievement 2",
      },
      {
        id: 3,
        image: "/images/contactUs/photoFirst.png",
        date: "Tuesday, January 08, 2025",
        description: "Description for Info 3",
      },
      {
        id: 4,
        image: "/images/contactUs/photoFirst.png",
        date: "Tuesday, January 08, 2025",
        description: "Description for Info 4",
      },
      {
        id: 5,
        image: "/images/contactUs/photoFirst.png",
        date: "Tuesday, January 08, 2025",
        description: "Description for Info 5",
      },
      {
        id: 6,
        image: "/images/contactUs/photoFirst.png",
        date: "Tuesday, January 08, 2025",
        description: "Description for Info 5",
      },
    ],
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState(1); // Set default active category

  return (
    <div className={styles["main-body"]}>
      <GeneralSeo title="News" />
      <NewsNavbar />
      <section className="container mx-auto">
        <BigTitle>
          <span>Stay Updated with</span>{" "}
          <span className="text-[#F82F1E]">Motion Lab!</span>
        </BigTitle>
        <p className="font-normal text-[#6A6A6A] text-base lg:text-lg text-center pt-2 hidden md:flex">
          Discover the latest stories, achievements, and updates from Motion
          Lab. From groundbreaking innovations to inspiring success stories,
          explore how our community continues to push the boundaries of mobile
          technology. Stay in the loop and be part of the journey!
        </p>
      </section>

      <section className="container mx-auto flex justify-center space-x-4 md:space-x-8 py-4 md:py-8">
        {category.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={`px-4 py-2 md:px-8 md:py-3 rounded-full w-full md:w-auto ${
              activeCategory === cat.id
                ? "bg-[#C1271A]"
                : "border border-[#C1271A]"
            }`}
            onClick={() => {
              setActiveCategory(cat.id);
              setCurrentPage(1);
            }}
          >
            <h4
              className={`font-bold text-base md:text-lg font-[rubik] ${
                activeCategory === cat.id ? "text-[#FFFF]" : "text-[#C1271A]"
              }`}
            >
              {cat.title}
            </h4>
          </button>
        ))}
      </section>

      <section className="flex flex-row justify-evenly w-full md:justify-start space-x-4 container mx-auto py-4 md:py-10">
        <button className="flex items-center justify-evenly w-full md:w-auto space-x-2 md:space-x-4 p-3 md:px-4 md:py-3 border border-[#858585] rounded-2xl md:rounded-[20px]">
          <img src="/svg/date.svg" className="w-4 h-4 md:w-5 md:h-5" alt="" />
          <h4 className="font-[rubik] text-[#6A6A6A] text-sm md:text-xl">Sort by Date</h4>
        </button>
        <button className="flex items-center justify-between space-x-1 md:space-x-4 p-3 w-full md:w-auto border border-[#858585] rounded-2xl md:rounded-[20px]">
          <img src="/svg/sort-name.svg" className="w-4 h-4 md:w-5 md:h-5" alt="" />
          <h4 className="font-[rubik] text-[#6A6A6A] text-sm md:text-xl">Sort by Name</h4>
          <img src="/svg/dropdown.svg" className="w-4 h-4" alt="" />
        </button>
      </section>

      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentData[activeCategory]?.map((item) => (
            <NewsCard
              key={item.id}
              id={item.id}
              image={item.image}
              date={item.date}
              description={item.description}
            />
          ))}
        </div>
      </section>
      
      {/* pagination */}
      <section className="container mx-auto flex justify-center py-12">
        <div className="space-x-2">
          <button className="border border-[#E3E3E3] rounded-xl bg-white">
            <h1 className="font-[inter] px-4 py-2">1</h1>
          </button>
          <button className="border border-[#E3E3E3] rounded-xl bg-white">
            <h1 className="font-[inter] px-4 py-2">2</h1>
          </button>
          <button className="border border-[#E3E3E3] rounded-xl bg-white">
            <h1 className="font-[inter] px-4 py-2">3</h1>
          </button>
          <button className="border border-[#E3E3E3] rounded-xl bg-white">
            <h1 className="font-[inter] px-4 py-2">Next</h1>
          </button>
        </div>
      </section>
      <InternshipFooter />
    </div>
  );
};

export default NewsView;
