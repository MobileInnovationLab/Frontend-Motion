import React from "react";
import RecruitmentNavbar from "../components/navbar/RecruitmentNavbar";
import PrimaryRecruitmentInputField from "@/core/components/input/PrimaryRecruitmentInputField";
import Footer from "@/core/components/footer";

const Page = () => {
  return (
    <>
      <RecruitmentNavbar />
      <section className="bg-[url('/recruitment/sub-header.png')] bg-cover bg-no-repeat bg-[center_bottom_0rem] w-full">
        <h1 className="text-[28px] lg:text-[48px] font-bold font-[rubik] text-center text-white flex justify-center py-40">
          Recruitment Member 8.0
        </h1>
      </section>

      <section className="container mx-auto">
        <img
          src="/recruitment/register-hero.png"
          className="w-full px-[29rem] py-10"
          alt="Register Hero"
        />
      </section>

      <section className="container mx-auto">
        <div className="bg-white rounded px-10 py-14 lg:mx-[10rem]">
          <PrimaryRecruitmentInputField
            className="mb-8"
            label="Full Name"
            name="name"
            placeholder="Input your full name"
            required
          />

          <PrimaryRecruitmentInputField
            label="Email SSO"
            name="email"
            placeholder="Example"
            required
            suffix={<h2>@student.telkomuniversity.ac.id</h2>}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 m-0 p-0 gap-x-10 my-8">
            <PrimaryRecruitmentInputField
              label="NIM"
              name="email"
              placeholder="Example"
              required
            />
            <PrimaryRecruitmentInputField
              label="Whatsapp"
              name="email"
              placeholder="Example"
              required
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 m-0 p-0 gap-x-10 my-8">
            <PrimaryRecruitmentInputField
              label="Major"
              name="email"
              placeholder="Example"
              required
            />
            <PrimaryRecruitmentInputField
              label="Student Year"
              name="email"
              placeholder="Example"
              required
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 m-0 p-0 gap-x-10 my-8">
            <PrimaryRecruitmentInputField
              label="Division"
              name="email"
              placeholder="Example"
              required
            />
            <PrimaryRecruitmentInputField
              label="Student Curriculum Vitae (CV)*"
              name="email"
              placeholder="Example"
              required
              suffix={<img src="/svg/link.svg" />}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 m-0 p-0 gap-x-10 my-8">
            <PrimaryRecruitmentInputField
              label="Portfolio"
              name="email"
              placeholder="Example"
              required
              suffix={<img src="/svg/link.svg" />}
            />
            <PrimaryRecruitmentInputField
              label="Motivation Letter"
              name="email"
              placeholder="Example"
              required
              suffix={<img src="/svg/link.svg" />}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 m-0 p-0 gap-x-10 my-8">
            <PrimaryRecruitmentInputField
              label="KSM"
              name="email"
              placeholder="Example"
              required
              suffix={<img src="/svg/link.svg" />}
            />
            <PrimaryRecruitmentInputField
              label="Follow Instagram Proof"
              name="email"
              placeholder="Example"
              required
              suffix={<img src="/svg/link.svg" />}
            />
          </div>

          <button className="mt-20 w-full bg-[#C2271A] text-white text-[inter] text-[16px] rounded-full px-8 py-4 hover:scale-110 transition duration-400 hidden lg:block">
            Submit
          </button>
        </div>
      </section>

      <div className="my-[10rem]"></div>

      <Footer />
    </>
  );
};

export default Page;
