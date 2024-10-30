"use client";

import { useSearchParams } from "next/navigation";
import InternshipNavbar from "../components/navbar/InternshipNavbar";

const InternshipDeclinedView = () => {
  const searchParams = useSearchParams();
  if (!searchParams.get("name")) {
    router.push("/");
  }
  return (
    <>
      <InternshipNavbar isFixed={false} />

      <section className="flex flex-col items-center justify-center container mx-auto px-10 lg:px-[20rem] text-center my-20">
        <img src="/images/recruitment/recruitment-declined.png" alt="" />
        <h2 className="font-semibold text-[18px] lg:text-[32px] text-[rubik]">Ooops... Sorry !</h2>
        <p className="text-[inter] text-[14px] lg:text-[18px] text-[#6A6A6A] mt-3">
          Hello{" "}
          <b className="text-[#F82F1E] uppercase">
            {searchParams.get("name")} ({searchParams.get("nim")})
          </b>{" "}
          ! Unfortunately, you have not been selected as an intern for the Mobile Innovation Laboratory Ikura 9.0. Keep your spirits high and never give up! We look forward to seeing your continued growth and resilience.
        </p>
      </section>
    </>
  );
};

export default InternshipDeclinedView;
