import Image from "next/image";
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

  const getCleanImageUrl = (src) => {
    if (!src) return "/images/product/dummy-product.png";
    let url = typeof src === "string" ? src.trim() : "";
    if (url.startsWith("http://admin.motionlaboratory.com")) {
      url = url.replace("http://admin.motionlaboratory.com", "https://admin.motionlaboratory.com");
    }
    if (url.includes("/storage/project-showcase/")) {
      url = url.replace("/storage/project-showcase/", "/storage/project-showcases/");
    }
    if (!url.startsWith("http")) {
      url = `https://admin.motionlaboratory.com/storage/project-showcases/${url.replace(/^\/+/, "")}`;
    }
    return url;
  };

  const imageUrl = getCleanImageUrl(thumbnail);

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
      } row-span-2 gap-4 md:gap-16 pb-8 md:pb-28 items-center`}
    >
      <div className="flex flex-col items-start text-2xl flex-1 w-full">
        <div className="pb-4">
          <h1 className="font-bold text-3xl md:text-5xl text-slate-900 dark:text-[#F8FAFC]">
            {title}
          </h1>
          <div className="flex flex-row py-2 md:py-4 text-base md:text-lg text-slate-700 dark:text-[#94A3B8]">
            <h2>{team}</h2>
          </div>
          <p
            className="line-clamp-3 md:line-clamp-6 text-base md:text-lg text-[#6A6A6A] dark:text-[#CBD5E1] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: cleanDescription }}
          />
        </div>
        <button
          className="border border-[#C1271A] hover:bg-[#C1271A] text-[#C1271A] hover:text-white dark:border-[#EF4444] dark:text-[#F87171] dark:hover:bg-[#EF4444] dark:hover:text-white rounded-full py-2 px-6 md:py-4 md:px-8 text-base md:text-xl transition duration-300 ease-in-out cursor-pointer font-medium"
          onClick={() => onShowDetails(id)}
        >
          Show Details
        </button>
      </div>

      <div className="w-full md:w-auto flex-shrink-0">
        <div className="relative w-full aspect-[4/3] md:w-[500px] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden bg-gray-100 dark:bg-[#111827]">
          {imageLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-[#111827] z-10 transition-opacity duration-300">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C1271A] dark:border-[#EF4444]"></div>
            </div>
          )}
          <Image
            src={imageError ? "/images/product/dummy-product.png" : imageUrl}
            alt={title || "Project Mockup"}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover rounded-[1.5rem] md:rounded-[3rem] shadow-md dark:shadow-[0_12px_36px_rgba(0,0,0,0.55)]"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentProject;

