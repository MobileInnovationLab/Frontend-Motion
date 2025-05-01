const CardPeople = ({ member }) => {
  return (
    <div className="flex flex-col w-full rounded-3xl shadow-lg p-6 transition-transform duration-300 hover:scale-105">
      <div className="w-full text-center">
        <div className="rounded-full inline-block">
          <img
            src="/images/about/dummy.webp" // Ganti dengan gambar anggota tim jika ada
            alt={member.name}
            className="w-32 h-32 object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col items-center w-full mt-4">
        <h2 className="font-[rubik] font-semibold text-lg text-center">
          {member.name.length > 25 ? (
            <>
              {member.name.slice(0, 25)}
              <br />
              {member.name.slice(25)}
            </>
          ) : (
            member.name
          )}
        </h2>
        <p className="font-[inter] text-base text-center text-[#6A6A6A] mt-3">
          {member.role}
        </p>
        <hr className="w-1/2 my-4 border-[#6A6A6A]" />
        <div className="flex justify-center">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <img src="/svg/linkedln.svg" alt="LinkedIn" />
          </a>
          <a href={member.instagram} target="_blank" rel="noopener noreferrer">
            <img src="/svg/instagram.svg" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardPeople;
