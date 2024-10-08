"use client";

import { BeatLoader } from "react-spinners";
import useRecruitmentRegisterViewModel, {
  divisionOptions,
  generationOptions,
  majorOptions,
} from "../viewModels/useRecruitmentRegisterViewModel";
import RecruitmentTextInputField from "@/core/components/input/RecruitmentTextInputField";
import RecruitmentSelectInputField from "@/core/components/input/RecruitmentSelectInputField";
import InternshipNavbar from "../components/navbar/InternshipNavbar";

const InternshipRegisterView = () => {
  const { formik } = useRecruitmentRegisterViewModel();

  return (
    <>
      <InternshipNavbar isFixed={false} />

      {process.env.NEXT_PUBLIC_RECRUITMENT_CLOSED == "false" ? (
        <section className="flex flex-col items-center justify-center container mx-auto px-10 lg:px-[20rem] text-center my-20">
          <img src="/images/internship/registration-closed.png" alt="" />
          <h2 className="font-semibold text-[18px] lg:text-[32px] text-[rubik]">
            Officialy Closed
          </h2>
          <p className="text-[inter] text-[14px] lg:text-[18px] text-[#6A6A6A] mt-3">
            Open recruitment is now closed and we are no longer accepting more
            applicants. Thank you for your enthusiasm!
          </p>
          <div className="my-3 lg:my-6"></div>
        </section>
      ) : (
        <>
          <section className="bg-[url('/images/recruitment/sub-header.png')] bg-cover bg-no-repeat bg-[center_bottom_0rem] w-full">
            <h1 className="text-[28px] lg:text-[48px] font-bold font-[rubik] text-center text-white flex justify-center py-40">
              Recruitment Member 8.0
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
            <div className="bg-white rounded px-10 py-14 lg:mx-[10rem]">
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-y-7"
              >
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
                    onChange={formik.handleChange}
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
                    label="Portfolio"
                    name="portfolio"
                    placeholder="Link Portfolio"
                    onChange={formik.handleChange}
                    error={formik.errors.portfolio}
                    suffix={<img src="/svg/link.svg" alt="link" />}
                  />
                  <RecruitmentTextInputField
                    className="mb-8 lg:mb-0"
                    label="KSM"
                    name="ksm"
                    placeholder="Link KSM"
                    onChange={formik.handleChange}
                    error={formik.errors.ksm}
                    required
                    suffix={<img src="/svg/link.svg" alt="link" />}
                  />
                </div>

                <hr />

                  <RecruitmentTextInputField
                    label="Upload Twibbon"
                    link="https://lin.ee/sJGLG47"
                    name="line_evidence"
                    placeholder="Link Instagram Post"
                    onChange={formik.handleChange}
                    error={formik.errors.line_evidence}
                    required
                    suffix={<img src="/svg/link.svg" alt="link" />}
                  />

                <div className="grid grid-cols-1 lg:grid-cols-2 m-0 p-0 gap-x-10">
                  <RecruitmentTextInputField
                    label="Motivational Video"
                    name="motivation_letter"
                    placeholder="Link Motivational Video"
                    onChange={formik.handleChange}
                    error={formik.errors.motivation_letter}
                    required
                    suffix={<img src="/svg/link.svg" alt="link" />}
                  />
                  <RecruitmentTextInputField
                    containerClass="mt-5 lg:mt-0"
                    label="Upload OpRec Instagram posts to your IG story"
                    name="share_poster"
                    placeholder="Link Screenshot Post Instagram"
                    onChange={formik.handleChange}
                    error={formik.errors.share_poster}
                    required
                    suffix={<img src="/svg/link.svg" alt="link" />}
                  />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 m-0 p-0 gap-x-10">
                  <RecruitmentTextInputField
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
                    className="mb-8 lg:mb-0"
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

                <div className="grid grid-cols-1 lg:grid-cols-2 m-0 p-0 gap-x-10">
                  <RecruitmentTextInputField
                    className="mb-8 lg:mb-0"
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
                    label="Screenshot Follow Line"
                    link="https://lin.ee/sJGLG47"
                    name="line_evidence"
                    placeholder="Link Screenshot follow line"
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
