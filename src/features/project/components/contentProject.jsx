import { useRouter } from "next/router";

const ContentProduct = ({
  title,
  team,
  description,
  qrcode,
  onShowDetails,
}) => {
  const isEven = team % 2 === 0;

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
            <h2>Team {team}</h2>
          </div>
          <p className="line-clamp-3 md:line-clamp-6 text-base md:text-lg">
            {description}
          </p>
        </div>
        <button
          className="border border-[#C1271A] hover:border-none hover:bg-[#C1271A] text-[#C1271A] hover:text-white rounded-full py-2 px-4 md:py-4 md:px-8 text-base md:text-xl transition duration-300 ease-in-out"
          onClick={() => onShowDetails(title)}
        >
          Show Details
        </button>
      </div>
      <img
        src={qrcode}
        className="max-w-lg h-auto rounded-[1.5rem] md:rounded-[3rem] shadow-xl"
        alt="QR Code"
      />
    </div>
  );
};

export default ContentProduct;
