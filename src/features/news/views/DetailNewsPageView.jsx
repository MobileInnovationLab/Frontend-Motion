"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import GeneralSeo from "@/shared/components/seo/generalSeo";
import BigTitle from "@/features/news/components/ui/BigTittle";
import FadeIn from "../components/animations/FadeIn";
import { motion } from "framer-motion";
import { useNewsDetail } from "../hooks/useDetailNewsData";
import Footer from "@/shared/components/footer";
import NewsFeedbackState from "../components/ui/NewsFeedbackState";

const DetailsNews = () => {
  const { slug } = useParams();
  const { newsData, loading, error, refetch } = useNewsDetail(slug);

  if (loading) {
    return <div className="text-center py-20 text-gray-500">Loading...</div>;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center pt-20">
        <NewsFeedbackState
          type="error"
          title="Failed to Load News"
          message="Something went wrong while loading this news. Please try again later."
          onRetry={refetch}
          backHref="/news"
          backLabel="Back to News"
        />
      </div>
    );
  }

  if (!newsData) {
    return (
      <div className="min-h-screen flex items-center pt-20">
        <NewsFeedbackState
          type="not-found"
          title="News Not Found"
          message="The news you are looking for is unavailable or has been removed."
          backHref="/news"
          backLabel="Back to News"
        />
      </div>
    );
  }

  const title = newsData.title;
  const date = new Date(newsData.created_at).toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const image = newsData.thumbnail_content;
  const content = newsData.body;
  const author = newsData.author?.name;

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
      <FadeIn>
        <section className="container mx-auto">
          <BigTitle>{title}</BigTitle>
          <p className="font-normal font-[inter] text-xl md:text-base lg:text-base text-center py-4">
            <span className="font-bold">{author}</span> - Motion Lab
          </p>
          <p className="font-normal font-[inter] text-xl md:text-base lg:text-base text-center ">
            {date}
          </p>
        </section>
      </FadeIn>

      <section className="container mx-auto py-8">
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-lg aspect-[1/1] rounded-2xl overflow-hidden">
            <Image
              src={image}
              alt="News image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
        <FadeIn delay={0.3}>
          <div
            className="text-sm lg:text-base font-[inter] text-justify py-8"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </FadeIn>
      </section>

      <div className="my-20"></div>
      <Footer />
    </div>
  );
};

export default DetailsNews;
