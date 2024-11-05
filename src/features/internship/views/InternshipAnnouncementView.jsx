import { ScaleLoader } from "react-spinners";
import RecruitmentTextInputField from "@/core/components/input/RecruitmentTextInputField";
import useRecruitmentAnnouncementViewModel from "../viewModels/useRecruitmentAnnouncementView";

const InternshipAnnouncementView = () => {
  const { formik, isNotFound } = useRecruitmentAnnouncementViewModel();

  return (
    <section className="bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-x-20 py-10">
        <img src="/images/recruitment/recruitment-announcement.png" className="w-2/3 lg:w-2/6 animate-pulse" alt="Recruitment Announcement" />
        <div className="flex flex-col justify-center">
          <h2 className="text-[rubik] font-bold text-[28px] text-center lg:text-left mt-10 lg:mt-0 lg:text-[48px] mb-5">Motion Lab 9.0 Internship Announcement</h2>
          <form onSubmit={formik.handleSubmit} className="flex items-start gap-x-3">
            <div className="w-full">
              <RecruitmentTextInputField name="nim" onChange={formik.handleChange} error={isNotFound && "It seems i cant find your NIM. Have you registered before?"} className="py-[1rem]" placeholder="Input your NIM" />
            </div>
            <button type="submit" disabled={formik.isSubmitting} className="bg-[#F82F1E] w-2/5 md:w-1/3 lg:w-1/4 mt-2 text-white mx-auto text-center text-[inter] text-[16px] rounded-full px-10 py-[1rem] hover:opacity-90 transition duration-800">
              {formik.isSubmitting ? <ScaleLoader height={14} color="white" /> : "Check"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InternshipAnnouncementView;
