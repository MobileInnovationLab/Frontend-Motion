import Link from "next/link";

const CardProject = ({ id, nama, team, member }) => {
  return (
    <div className="rounded-[30px] shadow-xl bg-white">
      <img
        src="/images/contactUs/photoFirst.png"
        className="rounded-t-[30px]"
        alt="first"
      />
      <div className="px-4 py-6">
        <div className="pb-8">
          <h1 className="font-bold font-[inter] text-2xl">{nama}</h1>
          <h3 className="font-[inter] text-lg py-2">Team {team}</h3>
          <h3 className="font-[inter] font-bold text-lg line-clamp-2">
            {member}
          </h3>
        </div>
        <Link href={`/product/${id}`}>
          <button className="w-full font-[inter] font-bold text-[#C1271A] text-xl py-2 border border-[#C1271A] rounded-full hover:bg-[#C1271A] hover:text-white">
            Click for details
          </button>
        </Link>
      </div>
    </div>
  );
};
export default CardProject;
