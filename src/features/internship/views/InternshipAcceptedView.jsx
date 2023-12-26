"use client";

import Confetti from "react-confetti";
import { useSearchParams } from "next/navigation";
import useWindowDimensions from "@/core/hooks/useWindowDimensions";
import InternshipNavbar from "../components/navbar/InternshipNavbar";
import { useRouter } from "next/navigation";

const InternshipAcceptedView = () => {
  const { height, width } = useWindowDimensions();
  const searchParams = useSearchParams();
  const router = useRouter();

  if (!searchParams.get("name")) {
    router.push("/");
  }

  return (
    <>
      <InternshipNavbar isFixed={false} />
      <Confetti width={width} height={height} />

      <section className="flex flex-col items-center justify-center container mx-auto px-10 lg:px-[20rem] text-center my-20">
        <img src="/images/recruitment/recruitment-accepted.png" alt="" />
        <h2 className="font-semibold text-[18px] lg:text-[32px] text-[rubik]">Congratulations !</h2>
        <p className="text-[inter] text-[14px] lg:text-[18px] text-[#6A6A6A] mt-3">
          Hello{" "}
          <b className="text-[#F82F1E] uppercase">
            {searchParams.get("name")} ({searchParams.get("nim")})
          </b>{" "}
          ! You have choosen as new member of Mobile Innovation Laboratory Hazelnut 8.0 for <span className="text-[#F82F1E]">{searchParams.get("division")}</span>. Please join the WhatsApp group below based on your division.
        </p>
        <div className="my-3 lg:my-6"></div>
        <ul className="text-left text-[inter] text-[14px] lg:text-[18px] text-[#6A6A6A] mt-3">
          <li>
            <ba>All Division Group:</ba>{" "}
            <a className="underline text-[#F82F1E]" href="https://chat.whatsapp.com/HIrw80BHzVC0XSwdJBheOQ">
              Whatsapp
            </a>
          </li>
          <li>
            <ba>Digital Business Group:</ba>{" "}
            <a className="underline text-[#F82F1E]" href="https://chat.whatsapp.com/FqHYsp5uExoK157sPMtHHt">
              Whatsapp
            </a>
            <li>
              <ba>UI/UX Designer Group:</ba>{" "}
              <a className="underline text-[#F82F1E]" href="https://chat.whatsapp.com/KK9HcZb9zbvAWraHmTAkhx">
                Whatsapp
              </a>
            </li>
            <li>
              <ba>Mobile Programming Group:</ba>{" "}
              <a className="underline text-[#F82F1E]" href="https://chat.whatsapp.com/DoQ9upWhIyT1VxV7STPx4V">
                Whatsapp
              </a>
            </li>
          </li>
        </ul>
      </section>
    </>
  );
};

export default InternshipAcceptedView;
