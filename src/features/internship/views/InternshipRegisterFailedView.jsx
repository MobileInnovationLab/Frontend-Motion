"use client";

import { useSearchParams } from "next/navigation";
import InternshipNavbar from "../components/navbar/InternshipNavbar";

const InternshipRegisterFailedView = () => {
  const searchParams = useSearchParams();

  return (
    <>
      <InternshipNavbar isFixed={false} />

      <section className="flex flex-col items-center justify-center container mx-auto px-10 lg:px-[20rem] text-center my-20">
        <img src="/images/recruitment/recruitment-declined.png" alt="" />
        <h2 className="font-semibold text-[18px] lg:text-[32px] text-[rubik]">Ooops!</h2>
        <p className="text-[inter] text-[14px] lg:text-[18px] text-[#6A6A6A] mt-3">{searchParams.get("message")}</p>
      </section>
    </>
  );
};

export default InternshipRegisterFailedView;
