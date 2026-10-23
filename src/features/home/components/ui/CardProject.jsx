import Link from "next/link";

const CardProject = ({ id, nama, team, member, thumbnail, about }) => {
  return (
    <div className="w-[90%] lg:max-w-md lg:w-full rounded-[30px] bg-white">
      <div className="w-full">
        <img
          src={thumbnail || "/images/contactUs/photoFirst.png"}
          className="rounded-t-[30px] w-full h-full object-cover"
          alt={nama}
        />
      </div>
      <div className="px-6 py-6">
        <div className="pb-6">
          <h1 className="font-bold font-[inter] text-2xl mb-3">{nama}</h1>
          <h3 className="font-[inter] text-lg text-gray-700">{team}</h3>
          <h3 className="font-[inter] font-bold text-lg text-wrap text-ellipsis overflow-hidden line-clamp-2">
            {member}
          </h3>
        </div>
        <Link href={`/project/detailProject/${id}`}>
          <button className="w-full font-[inter] font-bold text-[#C1271A] text-md lg:text-lg py-2.5 border-2 border-[#C1271A] rounded-full hover:bg-[#C1271A] hover:text-white transition-colors duration-200">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};
export default CardProject;
