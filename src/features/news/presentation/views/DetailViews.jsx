"use client";

import Image from "next/image";
import GeneralSeo from "@/core/components/seo/generalSeo";
import InternshipFooter from "@/features/internship/components/footer/InternshipFooter";
import NewsNavbar from "../../components/NewsNavbar";
import BigTitle from "@/features/news/components/bigTittle";
import FadeIn from "../components/animations/FadeIn";
import { motion } from "framer-motion";

const DetailsNews = () => {
  const newsData = {
    title: "Judul Artikel Lorem Ipsum Dolor Sir amet",
    date: "Tuesday, January 08, 2025",
    image: "/images/contactUs/photoFirst.png",
    content: `Lorem Ipsum Dolor Sir Amet Lorem Ipsum Dolor Sir Amet Lorem Ipsum
      Dolor Sir Amet Lorem Ipsum Dolor Sir Amet Lorem Ipsum Dolor Sir Amet
      Lorem Ipsum Dolor Sir Amet Lorem Ipsum Dolor Sir Amet Lorem Ipsum
      Dolor Sir Amet Lorem Ipsum Dolor Sir Amet Lorem Ipsum Dolor Sir Amet
      Lorem Ipsum Dolor Sir Amet Lorem Ipsum Dolor Sir Amet Lorem Ipsum
      Dolor Sir Amet Lorem Ipsum Dolor Sir Amet Lorem Ipsum Dolor Sir Amet
      Lorem Ipsum Dolor Sir Amet Lorem Ipsum Dolor Sir Amet Lorem Ipsum
      Dolor Sir Amet Lorem Ipsum Dolor Sir Amet Lorem Ipsum Dolor Sir Amet
      Lorem Ipsum Dolor Sir Amet Lorem Ipsum Dolor Sir Amet Lorem Ipsum
      Dolor Sir Amet Lorem Ipsum Dolor Sir Amet Lorem Ipsum Dolor Sir Amet
      Lorem Ipsum Dolor Sir Amet Lorem Ipsum Dolor Sir Amet Lorem Ipsum
      Dolor Sir Amet Lorem Ipsum Dolor Sir Amet Lorem Ipsum Dolor Sir Amet
      Lorem Ipsum Dolor Sir Amet Lorem Ipsum Dolor Sir Amet Lorem Ipsum
      Dolor Sir Amet Lorem Ipsum Dolor Sir Amet Lorem Ipsum Dolor Sir Amet
      Lorem Ipsum Dolor Sir Amet Lorem Ipsum Dolor Sir Amet Lorem Ipsum
      Dolor Sir Amet Lorem Ipsum Dolor Sir Amet Lorem Ipsum Dolor Sir Amet`,
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div>
      <GeneralSeo title="News" />
      <NewsNavbar />
      
      {/* Header Section */}
      <FadeIn>
        <section className="container mx-auto">
          <BigTitle>{newsData.title}</BigTitle>
          <p className="font-normal font-[inter] text-xl md:text-base lg:text-lg text-start py-8">
            {newsData.date}
          </p>
        </section>
      </FadeIn>

      {/* Content Section */}
      <section className="container mx-auto py-8">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Image
            src={newsData.image}
            alt="News image"
            width={1200}
            height={600}
            className="rounded-2xl md:rounded-t-[20px] w-full h-auto"
          />
        </motion.div>
        <FadeIn delay={0.3}>
          <p className="text-xl lg:text-3xl font-[inter] text-justify py-8">
            {newsData.content}
          </p>
        </FadeIn>
      </section>

      <div className="my-20"></div>
      <InternshipFooter />
    </div>
  );
};

export default DetailsNews;
