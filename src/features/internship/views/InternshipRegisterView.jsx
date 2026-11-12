"use client";

import { BeatLoader } from "react-spinners";
import useRecruitmentRegisterViewModel, {
  divisionOptions,
  generationOptions,
  majorOptions,
  linkSoal,
} from "../hooks/useRecruitmentRegisterViewModel";
import RecruitmentTextInputField from "@/shared/components/input/RecruitmentTextInputField";
import RecruitmentSelectInputField from "@/shared/components/input/RecruitmentSelectInputField";
import Navbar from "@/shared/components/navbar";
import { useState } from 'react';
import Modal from './InternshipRegisterGuideModal';
import useStaticOption from "../hooks/useStaticOption";

const InternshipRegisterSkeleton = () => {
  return (
    <div data-testid="static-option-skeleton" className="w-full animate-pulse">
      <section className="bg-[url('/images/recruitment/sub-header.png')] bg-cover bg-no-repeat bg-[center_bottom_0rem] w-full">
        <div className="flex justify-center py-40">
          <div className="h-10 lg:h-14 w-72 lg:w-[480px] bg-white/30 dark:bg-white/20 rounded-2xl"></div>
        </div>
      </section>

      <section className="container mx-auto">
        <div className="hidden lg:flex justify-center py-10">
          <div className="w-1/3 h-52 bg-slate-200 dark:bg-slate-800 rounded-2xl"></div>
        </div>
      </section>

      <section className="container mx-auto my-10">
        <div className="bg-white dark:bg-[#111827] border border-transparent dark:border-[#1E293B] rounded-2xl px-10 py-14 lg:mx-[10rem] transition-colors duration-200 flex flex-col gap-y-7">
          <div className="h-12 w-48 bg-[#C2271A]/30 dark:bg-red-950/40 rounded-full"></div>

          <div className="flex flex-col gap-y-2">
            <div className="h-4 w-28 bg-slate-200 dark:bg-slate-700 rounded"></div>
            <div className="h-12 w-full bg-slate-100 dark:bg-[#1E293B] rounded-xl border border-slate-200 dark:border-slate-700/60"></div>
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="h-4 w-28 bg-slate-200 dark:bg-slate-700 rounded"></div>
            <div className="h-12 w-full bg-slate-100 dark:bg-[#1E293B] rounded-xl border border-slate-200 dark:border-slate-700/60"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-7">
            <div className="flex flex-col gap-y-2">
              <div className="h-4 w-20 bg-slate-200 dark:bg-slate-700 rounded"></div>
              <div className="h-12 w-full bg-slate-100 dark:bg-[#1E293B] rounded-xl border border-slate-200 dark:border-slate-700/60"></div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded"></div>
              <div className="h-12 w-full bg-slate-100 dark:bg-[#1E293B] rounded-xl border border-slate-200 dark:border-slate-700/60"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-7">
            <div className="flex flex-col gap-y-2">
              <div className="h-4 w-20 bg-slate-200 dark:bg-slate-700 rounded"></div>
              <div className="h-12 w-full bg-slate-100 dark:bg-[#1E293B] rounded-xl border border-slate-200 dark:border-slate-700/60"></div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="h-4 w-28 bg-slate-200 dark:bg-slate-700 rounded"></div>
              <div className="h-12 w-full bg-slate-100 dark:bg-[#1E293B] rounded-xl border border-slate-200 dark:border-slate-700/60"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-7">
            <div className="flex flex-col gap-y-2">
              <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded"></div>
              <div className="h-12 w-full bg-slate-100 dark:bg-[#1E293B] rounded-xl border border-slate-200 dark:border-slate-700/60"></div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="h-4 w-36 bg-slate-200 dark:bg-slate-700 rounded"></div>
              <div className="h-12 w-full bg-slate-100 dark:bg-[#1E293B] rounded-xl border border-slate-200 dark:border-slate-700/60"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-7">
            <div className="flex flex-col gap-y-2">
              <div className="h-4 w-24 bg-slate-200 dark:bg-slate-700 rounded"></div>
              <div className="h-12 w-full bg-slate-100 dark:bg-[#1E293B] rounded-xl border border-slate-200 dark:border-slate-700/60"></div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="h-4 w-20 bg-slate-200 dark:bg-slate-700 rounded"></div>
              <div className="h-12 w-full bg-slate-100 dark:bg-[#1E293B] rounded-xl border border-slate-200 dark:border-slate-700/60"></div>
            </div>
          </div>

          <div className="h-[1px] bg-slate-200 dark:bg-slate-800 my-2"></div>

          <div className="flex flex-col gap-y-2">
            <div className="h-4 w-32 bg-slate-200 dark:bg-slate-700 rounded"></div>
            <div className="h-12 w-full bg-slate-100 dark:bg-[#1E293B] rounded-xl border border-slate-200 dark:border-slate-700/60"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-7">
            <div className="flex flex-col gap-y-2">
              <div className="h-4 w-36 bg-slate-200 dark:bg-slate-700 rounded"></div>
              <div className="h-12 w-full bg-slate-100 dark:bg-[#1E293B] rounded-xl border border-slate-200 dark:border-slate-700/60"></div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="h-4 w-44 bg-slate-200 dark:bg-slate-700 rounded"></div>
              <div className="h-12 w-full bg-slate-100 dark:bg-[#1E293B] rounded-xl border border-slate-200 dark:border-slate-700/60"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-7">
            <div className="flex flex-col gap-y-2">
              <div className="h-4 w-40 bg-slate-200 dark:bg-slate-700 rounded"></div>
              <div className="h-12 w-full bg-slate-100 dark:bg-[#1E293B] rounded-xl border border-slate-200 dark:border-slate-700/60"></div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="h-4 w-40 bg-slate-200 dark:bg-slate-700 rounded"></div>
              <div className="h-12 w-full bg-slate-100 dark:bg-[#1E293B] rounded-xl border border-slate-200 dark:border-slate-700/60"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-7">
            <div className="flex flex-col gap-y-2">
              <div className="h-4 w-40 bg-slate-200 dark:bg-slate-700 rounded"></div>
              <div className="h-12 w-full bg-slate-100 dark:bg-[#1E293B] rounded-xl border border-slate-200 dark:border-slate-700/60"></div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="h-4 w-36 bg-slate-200 dark:bg-slate-700 rounded"></div>
              <div className="h-12 w-full bg-slate-100 dark:bg-[#1E293B] rounded-xl border border-slate-200 dark:border-slate-700/60"></div>
            </div>
          </div>

          <div className="h-14 w-full bg-[#C2271A]/40 dark:bg-red-950/50 rounded-full mt-6"></div>
        </div>
      </section>
    </div>
  );
};

const DEFAULT_RECRUITMENT_MEMBER_TEXT = "Recruitment Member 11.0";
const DEFAULT_OPREC_IG_POST_LINK = "https://www.instagram.com/motionlab_/";

const InternshipRegisterView = () => {
  const { formik } = useRecruitmentRegisterViewModel();
  const { value: isRecruitmentOpen, loading } = useStaticOption("is_recruitment_open", "1");
  const {
    value: recruitmentMemberText,
    loading: loadingRecruitmentMemberText,
  } = useStaticOption(
    "recruitment_member_text",
    DEFAULT_RECRUITMENT_MEMBER_TEXT,
    ["recruitment_title_text", "internship_register_text"]
  );
  const isClosed = isRecruitmentOpen === "0" || isRecruitmentOpen === "false" || isRecruitmentOpen === false;
  
  const [selectedDivision, setSelectedDivision] = useState('');
  const { value: bookletLink = "https://motionlaboratory.com", loading: bookletLinkLoading } = useStaticOption("recruitment_booklet_link");
  const { value: oprecIgPostLink = DEFAULT_OPREC_IG_POST_LINK } = useStaticOption(
    "recruitment_poster_link",
    DEFAULT_OPREC_IG_POST_LINK,
    ["oprec_ig_post_link", "share_poster_link", "recruitment_ig_link"]
  );
  const handleBooklet = () => {
    if(bookletLink) window.open(bookletLink, "_blank");
  }
  const handleDivisionChange = (e) => {
    setSelectedDivision(e.target.value);
    formik.handleChange(e);
  };

  const getStudyCaseLink = () => {
    if (selectedDivision === "UI/UX Design") {
      return "https://drive.google.com/drive/folders/18B2utsoyj0nvoywWPcG6jAqFf39WW_9k?usp=sharing";
    } else if (selectedDivision === "Digital Business") {
      return "https://docs.google.com/document/d/10r7rsziTv2qq5VkhkpPhSMq81MQaq1kJ-jWn1eZB520/edit?usp=sharing";
    } else if (selectedDivision === "Mobile Programming") {
      return "https://docs.google.com/document/d/1NG32QNooE3rrJZqXtU04BGv-P8tPz7i6U0VbF3z2KFo/edit?usp=sharing";
    }
    return "";
  };

  const getPortfolioLabel = () => {
      return { 
        portfolioLabel: 
        (
          <>
            Portofolio{' '} <span className="text-[#F82F1E]">*</span>
          </>
        ),
        portfolioPlaceholder: 'Link Portofolio'
      };
  };

  const { portfolioLabel, portfolioPlaceholder } = getPortfolioLabel();
  const studyCaseLink = getStudyCaseLink();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (loading || (!isClosed && loadingRecruitmentMemberText) || bookletLinkLoading) {
    return <InternshipRegisterSkeleton />;
  }

  return (
    <>
      {isClosed ? (
        <section className="h-screen flex flex-col items-center justify-center container mx-auto px-10 lg:px-[20rem] text-center ">
          <img src="/images/internship/registration-closed.png" alt="" />
          <h2 className="font-semibold text-[18px] lg:text-[32px] text-[rubik] text-slate-900 dark:text-[#F8FAFC]">
            Officialy Closed
          </h2>
          <p className="text-[inter] text-[14px] lg:text-[18px] text-[#6A6A6A] dark:text-[#CBD5E1] mt-3">
            Open recruitment is now closed and we are no longer accepting more
            applicants. Thank you for your enthusiasm!
          </p>
          <div className="my-3 lg:my-6"></div>
        </section>
      ) : (
        <>
          <section className="bg-[url('/images/recruitment/sub-header.png')] bg-cover bg-no-repeat bg-[center_bottom_0rem] w-full">
            <h1 className="text-[28px] lg:text-[48px] font-bold font-[rubik] text-center text-white flex justify-center py-40">
              {recruitmentMemberText || DEFAULT_RECRUITMENT_MEMBER_TEXT}
            </h1>
          </section>

          <section className="container mx-auto">
            <img
              src="/images/recruitment/register-hero.png"
              className="hidden lg:block w-1/3 mx-auto py-10"
              alt="Register Hero"
            />
          </section>

          <section className="container mx-auto my-10">
            <div className="bg-white dark:bg-[#111827] border border-transparent dark:border-[#1E293B] rounded-2xl px-10 py-14 lg:mx-[10rem] transition-colors duration-200">
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-y-7"
              >
                
                <button
                  className=" lg:w-1/3 w-auto bg-[#C2271A] text-white text-[inter] text-[16px] rounded-full px-8 py-4 hover:opacity-90 transition duration-800 items-center"
                  type="button"
                  onClick={handleBooklet}
                >
                  Panduan Pengerjaan
                </button>
                {/* <Modal isOpen={isModalOpen} onClose={closeModal} /> */}

                <RecruitmentTextInputField
                  label="Full Name"
                  name="name"
                  onChange={formik.handleChange}
                  error={formik.errors.name}
                  placeholder="Input your full name"
                  required
                />

                <RecruitmentTextInputField
                  label="Email SSO"
                  name="email"
                  placeholder="example@student.telkomuniversity.ac.id"
                  onChange={formik.handleChange}
                  error={formik.errors.email}
                  required
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 m-0 p-0 gap-x-10">
                  <RecruitmentTextInputField
                    className="mb-8 lg:mb-0"
                    label="NIM"
                    name="nim"
                    placeholder="Input NIM (ex:120101020)"
                    onChange={formik.handleChange}
                    error={formik.errors.nim}
                    required
                  />
                  <RecruitmentTextInputField
                    label="Whatsapp"
                    name="whatsapp"
                    placeholder="+62 | whatsapp number"
                    onChange={formik.handleChange}
                    error={formik.errors.name}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 m-0 p-0 gap-x-10">
                  <RecruitmentSelectInputField
                    className="appearance-none mb-8 lg:mb-0"
                    label="Major"
                    name="major"
                    placeholder="Choose major"
                    onChange={formik.handleChange}
                    error={formik.errors.major}
                    suffix={<img src="/svg/arrow-down.svg" alt="arrow down" />}
                    required
                  >
                    {majorOptions.map((row) => (
                      <option key={row.value} value={row.value}>
                        {row.label}
                      </option>
                    ))}
                  </RecruitmentSelectInputField>
                  <RecruitmentSelectInputField
                    className="appearance-none"
                    label="Student Year"
                    name="generation"
                    placeholder="Choose student year"
                    onChange={formik.handleChange}
                    error={formik.errors.generation}
                    suffix={<img src="/svg/arrow-down.svg" alt="arrow down" />}
                    required
                  >
                    {generationOptions.map((row) => (
                      <option key={row.value} value={row.value}>
                        {row.label}
                      </option>
                    ))}
                  </RecruitmentSelectInputField>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 m-0 p-0 gap-x-10">
                  <RecruitmentSelectInputField
                    className="appearance-none mb-8 lg:mb-0"
                    label="Division"
                    name="division"
                    placeholder="Choose division"
                    onChange={handleDivisionChange}
                    error={formik.errors.division}
                    suffix={<img src="/svg/arrow-down.svg" alt="arrow down" />}
                    required
                  >
                    {divisionOptions.map((row) => (
                      <option key={row.value} value={row.value}>
                        {row.label}
                      </option>
                    ))}
                  </RecruitmentSelectInputField>
                  <RecruitmentTextInputField
                    label="Student Curriculum Vitae (CV)"
                    name="cv"
                    placeholder="Link CV"
                    onChange={formik.handleChange}
                    error={formik.errors.cv}
                    required
                    suffix={<img src="/svg/link.svg" alt="link" />}
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 m-0 p-0 gap-x-10">
                  <RecruitmentTextInputField
                    className="mb-8 lg:mb-0"
                    label= {portfolioLabel}
                    name="portfolio"
                    placeholder={portfolioPlaceholder}
                    onChange={formik.handleChange}
                    error={formik.errors.portfolio}
                    suffix={<img src="/svg/link.svg" alt="link" />}
                  />
                  <RecruitmentTextInputField
                    label="KSM"
                    name="ksm"
                    placeholder="Link KSM"
                    onChange={formik.handleChange}
                    error={formik.errors.ksm}
                    required
                    suffix={<img src="/svg/link.svg" alt="link" />}
                  />
                </div>

                <RecruitmentTextInputField
                  label="Business Plan/Study Case"
                  shortLink={true}
                  link={studyCaseLink}
                  name="study_case_link"
                  placeholder="Link Business Plan/Study Case"
                  onChange={formik.handleChange}
                  error={formik.errors.study_case_link}
                  required
                  suffix={<img src="/svg/link.svg" alt="link" />}
                />

                <hr />

                <RecruitmentTextInputField
                  label="Upload Twibbon"
                  shortLink={true}
                  link="https://drive.google.com/drive/folders/1b8vySQ-0spIvRp04qKIXlIVUSUiuuT3A?usp=sharing"
                  name="twibbon_evidence"
                  placeholder="Link Instagram Post"
                  onChange={formik.handleChange}
                  error={formik.errors.twibbon_evidence}
                  required
                  suffix={<img src="/svg/link.svg" alt="link" />}
                />

                <RecruitmentTextInputField
                  label="Upload OpRec Instagram posts to your IG story"
                  shortLink={true}
                  link={oprecIgPostLink || DEFAULT_OPREC_IG_POST_LINK}
                  name="share_poster"
                  placeholder="Link Screenshot Post Instagram"
                  onChange={formik.handleChange}
                  error={formik.errors.share_poster}
                  required
                  suffix={<img src="/svg/link.svg" alt="link" />}
                />

                <RecruitmentTextInputField
                  label="Upload Proof of Flyer Share Screenshot"
                  shortLink={true}
                  link="https://drive.google.com/drive/folders/1TxNY_Dv3WLmTHhIFUo3zEZZpwMzRYwlL?usp=sharing"
                  description="Send it to at least 1 group outside the Motion group. Make sure the group name is clearly visible in the screenshot."
                  name="proof_of_flyer_share"
                  placeholder="Link Screenshot Share Flyer"
                  onChange={formik.handleChange}
                  error={formik.errors.proof_of_flyer_share}
                  required
                  suffix={<img src="/svg/link.svg" alt="link" />}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_auto] m-0 p-0 gap-x-10">
                  <RecruitmentTextInputField
                    containerClass="lg:row-span-2 lg:grid lg:grid-rows-subgrid"
                    className="mb-7 lg:mb-0"
                    label="Screenshot Follow Instagram"
                    link="https://www.instagram.com/motionlab_"
                    name="instagram_evidence"
                    placeholder="Link Screenshot Follow Instagram"
                    onChange={formik.handleChange}
                    error={formik.errors.instagram_evidence}
                    required
                    suffix={<img src="/svg/link.svg" alt="link" />}
                  />
                  <RecruitmentTextInputField
                    containerClass="lg:row-span-2 lg:grid lg:grid-rows-subgrid"
                    label="Screenshot Subscribe Youtube"
                    name="yt_evidence"
                    link="https://www.youtube.com/@MotionLabTelkomUniversity"
                    placeholder="Link Screenshot Subscribe Youtube"
                    onChange={formik.handleChange}
                    error={formik.errors.yt_evidence}
                    required
                    suffix={<img src="/svg/link.svg" alt="link" />}
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_auto] m-0 p-0 gap-x-10">
                  <RecruitmentTextInputField
                    containerClass="lg:row-span-2 lg:grid lg:grid-rows-subgrid"
                    className="mb-7 lg:mb-0"
                    label="Screenshot Follow Linkedin"
                    name="linkedin_evidence"
                    link="https://www.linkedin.com/company/motion-laboratory"
                    placeholder="Link Screenshot Follow Linkedin"
                    onChange={formik.handleChange}
                    error={formik.errors.linkedin_evidence}
                    required
                    suffix={<img src="/svg/link.svg" alt="link" />}
                  />
                  <RecruitmentTextInputField
                    containerClass="lg:row-span-2 lg:grid lg:grid-rows-subgrid"
                    label="Screenshot Follow TikTok"
                    link="https://www.tiktok.com/@motionlab_0624"
                    name="line_evidence"
                    placeholder="Link Screenshot Follow TikTok"
                    onChange={formik.handleChange}
                    error={formik.errors.line_evidence}
                    required
                    suffix={<img src="/svg/link.svg" alt="link" />}
                  />
                </div>
                

                <button
                  // disabled={formik.isSubmitting}
                  type="submit"
                  className="mt-10 w-full bg-[#C2271A] text-white text-[inter] text-[16px] rounded-full px-8 py-4 hover:opacity-90 transition duration-800"
                >
                  {formik.isSubmitting ? (
                    <BeatLoader size={8} margin={3} color="white" />
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </div>
          </section>
        </>
      )}

      {/* <div className="my-[10rem]"></div> */}
    </>
  );
};

export default InternshipRegisterView;