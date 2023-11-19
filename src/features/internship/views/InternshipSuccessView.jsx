import Link from "next/link";
import InternshipNavbar from "../components/navbar/InternshipNavbar";

const InternshipSuccessView = () => {
  return (
    <>
      <InternshipNavbar isFixed={false} />

      <section className="flex flex-col items-center justify-center container mx-auto px-10 lg:px-[20rem] text-center my-20">
        <img src="/images/recruitment/recruitment-accepted.png" alt="" />
        <h2 className="font-semibold text-[18px] lg:text-[32px] text-[rubik]">Submitted !</h2>
        <p className="text-[inter] text-[14px] lg:text-[18px] text-[#6A6A6A] mt-3">Thank you for submitting! Please kindly wait until we finish checking yours</p>
        <div className="my-3 lg:my-6"></div>
        <Link href="/" passHref type="submit" className="bg-[#F82F1E] text-white text-[inter] text-[14px] lg:text-[16px] rounded-full px-10 py-[1rem] hover:opacity-90 transition duration-800">
          Back To Home
        </Link>
      </section>
    </>
  );
};

export default InternshipSuccessView;
