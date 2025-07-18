import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import DOMPurify from "dompurify";

const ContentProject = ({
  id,
  title,
  team,
  description,
  thumbnail,
  onShowDetails,
  index,
  useIndex,
}) => {
  const isEven = useIndex
    ? index % 2 === 0
    : team.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) % 2 ===
      0;
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const imageUrl = thumbnail
    ? `https://admin.motionlaboratory.com/storage/project-showcase/${thumbnail}`
    : "/images/product/appstore.png";
  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const cleanDescription = DOMPurify.sanitize(
    description.replace(
      /<p[^>]*>Powered by <a[^>]*>Froala Editor<\/a><\/p>/i,
      ""
    )
  );

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } row-span-2 gap-4 md:gap-16 pb-8 md:pb-28`}
    >
      <div className="flex flex-col items-start text-2xl">
        <div className="pb-4">
          <h1 className="font-bold text-3xl md:text-5xl">{title}</h1>
          <div className="flex flex-row py-2 md:py-4 text-base md:text-lg">
            <h2>{team}</h2>
          </div>
          <p
            className="line-clamp-3 md:line-clamp-6 text-base md:text-lg"
            dangerouslySetInnerHTML={{ __html: cleanDescription }}
          />
        </div>
        <button
          className="border border-[#C1271A] hover:border-none hover:bg-[#C1271A] text-[#C1271A] hover:text-white rounded-full py-2 px-4 md:py-4 md:px-8 text-base md:text-xl transition duration-300 ease-in-out"
          onClick={() => onShowDetails(id)}
        >
          Show Details
        </button>
      </div>
      <div>
        {imageLoading && (
          <div className="flex items-center justify-center bg-gray-100 rounded-[1.5rem] md:rounded-[3rem]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C1271A]"></div>
          </div>
        )}
        <div className="relative w-full aspect-[4/3] md:w-[500px]">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-[1.5rem] md:rounded-[3rem]"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentProject;
