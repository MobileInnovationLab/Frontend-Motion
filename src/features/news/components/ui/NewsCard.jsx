import Link from "next/link";
const NewsCard = ({ id, image, date, description }) => {
  return (
    <Link href={`/news/detailNews/${id}`}>
      <div className="rounded-3xl shadow-xl overflow-hidden cursor-pointer">
        <img src={image} className="rounded-t-3xl w-full" alt="News" />
        <div className="px-8 py-6">
          <h2 className="text-lg text-red-500">{date}</h2>
          <p className="text-base">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
