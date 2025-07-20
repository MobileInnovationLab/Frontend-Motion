"use client";

import Confetti from "react-confetti";
import { useSearchParams } from "next/navigation";
import useWindowDimensions from "@/shared/hooks/useWindowDimensions";
import { useRouter } from "next/navigation";
import Link from "next/link";

const InternshipAcceptedView = () => {
  const { height, width } = useWindowDimensions();
  const searchParams = useSearchParams();
  const router = useRouter();

  if (!searchParams.get("name")) {
    router.push("/");
  }

  return (
    <>
      <section className="flex flex-col items-center justify-center container mx-auto px-10 lg:px-[20rem] text-center py-20">
        <Confetti width={width} height={height} />
        <img src="/images/recruitment/recruitment-accepted.png" alt="" />
        <h2 className="font-semibold text-[18px] lg:text-[32px] text-[rubik]">
          Congratulations !
        </h2>
        <p className="text-[inter] text-[14px] lg:text-[18px] text-[#6A6A6A] mt-3">
          Hello{" "}
          <b className="text-[#F82F1E] uppercase">
            {searchParams.get("name")} ({searchParams.get("nim")})
          </b>{" "}
          ! you are officially selected as a member of the Mobile Innovation
          Laboratory Ikura 9.0. Thank you for participating in the member
          selection activities!
        </p>
        <div className="my-3 lg:my-6"></div>
        <Link
          href="https://chat.whatsapp.com/DlpFF06Fs8g1Es5pLWwWZs"
          className="bg-[#F82F1E] text-white text-[inter] text-[14px] lg:text-[16px] rounded-full px-10 py-[1rem] hover:opacity-90 transition duration-800"
        >
          Join Group
        </Link>
      </section>
    </>
  );
};

export default InternshipAcceptedView;
