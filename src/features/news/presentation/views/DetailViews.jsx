import InternshipFooter from "@/features/internship/components/footer/InternshipFooter";
import BigTitle from "@/features/news/components/bigTittle";

const { default: GeneralSeo } = require("@/core/components/seo/generalSeo");
const { default: NewsNavbar } = require("../../components/NewsNavbar");

const DetailsNews = () => {
  return (
    <div>
      <GeneralSeo title="News" />
      <NewsNavbar />
      <section className="container mx-auto">
        <BigTitle>Judul Artikel Lorem Ipsum Dolor Sir amet</BigTitle>
        <p className="font-normal font-[inter] text-xl md:text-base lg:text-lg text-start py-8">
          Tuesday, January 08, 2025
        </p>
      </section>

      <section className="container mx-auto py-8">
        <img
          src="/images/contactUs/photoFirst.png"
          className="rounded-2xl md:rounded-t-[20px] w-full h-auto"
          alt="news image"
        />
        <p className="text-xl lg:text-3xl font-[inter] text-justify py-8">
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
          Lorem Ipsum Dolor Sir Amet Lorem Ipsum Dolor Sir Amet{" "}
        </p>
      </section>
      <div className="my-20"></div>
      <InternshipFooter />
    </div>
  );
};

export default DetailsNews;
