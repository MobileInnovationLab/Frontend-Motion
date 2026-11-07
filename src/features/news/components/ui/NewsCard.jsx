import Link from "next/link";
const NewsCard = ({ slug, image, date, description }) => {
  return (
    <Link href={`/news/detailNews/${slug}`}>
      <div className="rounded-3xl shadow-xl overflow-hidden cursor-pointer bg-white dark:bg-[#111827] border border-transparent dark:border-[#1E293B] transition-colors duration-300">
        <img src={image} className="rounded-t-3xl w-full" alt="News" />
        <div className="px-8 py-6">
          <h2 className="text-lg text-red-500 dark:text-[#EF4444] font-medium">{date}</h2>
          <p className="text-base text-slate-800 dark:text-[#CBD5E1] line-clamp-3">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
