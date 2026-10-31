"use client";

import { motion } from "framer-motion";
import SlideIn from "../components/animations/SlideIn";
import SectionTitle from "../components/animations/SectionTitle";
import NewsEvent from "../components/ui/NewsEvent";
import SeeMoreButton from "../components/ui/SeeMoreButton";
import Link from "next/link";

export default function NewsSection({
  innerRef,
  news = [],
  newsLoading = false,
}) {

  return (
    <section
      id="news"
      ref={innerRef}
      className="container mx-auto py-0 md:py-16"
    >
      <SlideIn direction="up">
        <div className="w-full text-center">
          <SectionTitle subtitle="NEWS" title="Stay Updated with Motion Lab!" />
          <p className="font-[rubik] text-[#6A6A6A] max-w-4xl mx-auto">
            Discover the latest stories, achievements, and updates from Motion
            Lab. From groundbreaking innovations to inspiring success stories,
            explore how our community continues to push the boundaries of mobile
            technology. Stay in the loop and be part of the journey!
          </p>
        </div>
      </SlideIn>

      <div className="pt-8 md:pt-16 w-full">
        <div className="flex md:grid md:grid-cols-3 md:gap-8 gap-4 overflow-x-auto flex-nowrap no-scrollbar px-4 md:px-0">
          {(newsLoading ? [1, 2, 3] : news).map((item, index) => (
            <motion.div
              key={item?.id || `skeleton-${index}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex-shrink-0 w-[85%] md:w-auto"
            >
              {newsLoading ? (
                <NewsEvent isLoading={true} />
              ) : (
                <Link href={`/news/detailNews/${item.slug}`}>
                  <NewsEvent data={item} isLoading={false} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="py-8 text-center">
        <Link href="/news">
          <SeeMoreButton>See More</SeeMoreButton>
        </Link>
      </div>
    </section>
  );
}
