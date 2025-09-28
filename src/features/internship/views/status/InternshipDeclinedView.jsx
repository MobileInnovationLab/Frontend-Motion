"use client";

import { useSearchParams } from "next/navigation";

const InternshipDeclinedView = () => {
  const searchParams = useSearchParams();
  if (!searchParams.get("name")) {
    router.push("/");
  }
  return (
    <>
      <section className="flex flex-col items-center justify-center container mx-auto px-10 lg:px-[20rem] text-center py-20">
        <img src="/images/recruitment/recruitment-declined.png" alt="" />
        <h2 className="font-semibold text-[18px] lg:text-[32px] text-[rubik]">
          Ooops... Sorry !
        </h2>
        <p className="text-[inter] text-[14px] lg:text-[18px] text-[#6A6A6A] mt-3">
          Unfortunately, you have not been selected as a member for the Mobile
          Innovation Laboratory Jaffle 10.0. Keep your spirits high and never
          give up! We look forward to seeing your continued growth and
          resilience.
        </p>
      </section>
    </>
  );
};

export default InternshipDeclinedView;
