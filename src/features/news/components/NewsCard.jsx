import Link from "next/link";
const NewsCard = ({ id, image, date, description }) => {
  return (
    <Link href={`/news/detailNews`}>
      <div className="rounded-3xl shadow-xl overflow-hidden cursor-pointer">
        <img src={image} className="rounded-t-3xl w-full" alt="News" />
        <div className="px-8 py-6">
          <h2 className="font-bold text-lg">{date}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;