import styles from "../styles/pages/recruitment.module.scss";
//import styles from "../styles/pages/404.module.scss";
//import NavbarWhite from "../components/navbarWhite";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import BigTitle from "../components/bigTitle";
import RecruitmentSeo from "../components/seo/recruitmentSeo";

import Link from "next/link";
import Image from "next/image";
import {useRouter} from 'next/router'

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import API from "../api";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Recruitment() {
  const router = useRouter();
  const [modals, setModals] = useState(false);
  const [modalsError, setModalsError] = useState(false);
  const [submit, setSubmit] = useState(false);

  // useEffect(() => {
  //   router.push("/404");
  // });

  return (
    <>
      {modals ? (
        <motion.div
          className={styles["whole-page"]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", duration: 1, bounce: 0 }}
        >
          <div className={styles["main-container"]}>
            <div className={styles.container}>
              <Image
                src="/modals/congratulation.png"
                width={250}
                height={250}
                alt="Submitted Illustration"
              />
              <h3>Submitted!</h3>
              <p>
                Thank you for submitting! <br />
                Please kindly wait until we finish checking yours
              </p>
              <button onClick={() => router.push("/")}>Back to Home</button>
            </div>
          </div>
        </motion.div>
      ) : (
        ""
      )}
      {modalsError ? (
        <motion.div
          className={styles["whole-page"]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "spring", duration: 1, bounce: 0 }}
        >
          <div className={styles["main-container"]}>
            <div className={styles.container}>
              <Image
                src="/modals/notcongratulation.png"
                width={250}
                height={250}
                alt="Submitted Illustration"
              />
              <h3>Sorry, There is something wrong</h3>
              <p>
                It seems like there is something wrong with your connection
                or... <br />
                Try to upload the proper file (in pdf format with 8mb max size),
                <br /> or just try to refresh the page and re-submit
              </p>
            </div>
          </div>
        </motion.div>
      ) : (
        ""
      )}

      <RecruitmentSeo />
      <Navbar />
      <BigTitle>Recruitment</BigTitle>
      <section className={styles.main}>
        <div className={styles.illustration}>
          <Image
            src="/recruitment/recruit-illu.png"
            alt="Recruitment Illustration"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <h1>Join Us and Be a Champions</h1>

        <Formik
          initialValues={{
            name: "",
            email: "",
            nim: "",
            cv: null,
            portofolio: null,
            motivation_video: "",
            share_poster: "",
            ksm: null,
            major: "S1 TEKNIK TELEKOMUNIKASI",
            generation: "2022",
            division: "Digital Business",
            // topic_proposal: "",
          }}
          onSubmit={(data, { setSubmitting }) => {
            setSubmit(true);
            setTimeout(() => {
              const payload = new FormData();
              payload.append("name", data.name);
              payload.append("email", data.email);
              payload.append("nim", data.nim);
              payload.append("cv", data.cv);
              data.portofolio
                ? payload.append("portofolio", data.portofolio)
                : "";
              payload.append("motivation_letter", data.motivation_video);
              payload.append("ksm", data.ksm);
              payload.append("major", data.major);
              payload.append("generation", data.generation);
              payload.append("division", data.division);
              payload.append("share_poster", data.share_poster);
              // payload.append("topic_proposal", data.topic_proposal);
              console.log("data", data);
              console.log("payload", payload);
              API.postRecruitment(payload)
                .then((resp) => {
                  // console.log(resp);
                  if (resp == 400) {
                    console.log("resp 400", resp);
                    setModalsError(true);
                  } else if (resp == 200) {
                    setModals(true);
                  } else {
                    setModalsError(true);
                  }
                })
                .catch((err) => {
                  console.log("err", err);
                  setModalsError(true);
                });
              setSubmitting(false);
            }, 500);
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Required"),
            email: Yup.string()
              .email("Please input a valid email")
              .required("Required")
              .matches(
                /^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@student.telkomuniversity.ac.id$/,
                "Telkom University Student's Email Required."
              ),
            nim: Yup.number()
              .typeError("NIM must be a number")
              .required("Required")
              .test("len", "NIM must be 10 digits", (val) => {
                if (val) return val.toString().length === 10;
              }),
            cv: Yup.mixed()
              .required("Required")
              .test("fileFormat", "PDF only", (value) => {
                return value && ["application/pdf"].includes(value.type);
              })
              .test("fileSize", "Your file is too big", (value) => {
                return value && value.size <= 3000000;
              }),
            portofolio: Yup.mixed(),
            motivation_video: Yup.string()
              .required("Required")
              .matches(
                /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-_]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                'Enter correct url!'
              ),
              // .test("fileFormat", "PDF only", (value) => {
              //   return value && ["application/pdf"].includes(value.type);
              // })
              // .test("fileSize", "Your file is too big", (value) => {
              //   return value && value.size <= 3000000;
              // })
            share_poster: Yup.string()
              .required("Required")
              .matches(
                /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-_]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
                'Enter correct url!'
              ),
            ksm: Yup.mixed()
              .required("Required")
              .test("fileFormat", "PDF only", (value) => {
                return value && ["application/pdf"].includes(value.type);
              })
              .test("fileSize", "Your file is too big", (value) => {
                return value && value.size <= 3000000;
              }),
            major: Yup.string().required("Required"),
            generation: Yup.string().required("Required"),
            division: Yup.string().required("Required"),
          })}
        >
          {({
            values,
            setFieldValue,
            handleChange,
            handleBlur,
            touched,
            errors,
          }) => (
            <Form className={styles.form}>
              <label>
                <h5>
                  Full Name<p>*</p>
                </h5>
              </label>
              <Field
                id="name"
                type="text"
                name="name"
                placeholder="Input your full name"
              />
              <div className={styles.errors}>
                <h5>{errors.name && touched.name && <p>*{errors.name}</p>}</h5>
              </div>
              <label>
                <h5>
                  Email SSO <p>*</p>
                </h5>
              </label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="example@student.telkomuniversity.ac.id"
              />
              <div className={styles.errors}>
                <h5>
                  {errors.email && touched.email && <p>*{errors.email}</p>}
                </h5>
              </div>
              <div className={styles.flex}>
                <div className={styles.half}>
                  <label>
                    <h5>
                      NIM<p>*</p>
                    </h5>
                  </label>
                  <Field
                    id="nim"
                    type="text"
                    name="nim"
                    placeholder="Input NIM (ex:120101020)"
                  />
                  <div className={`${styles.errors} ${styles.half}`}>
                    <h5>{errors.nim && touched.nim && <p>*{errors.nim}</p>}</h5>
                  </div>
                </div>
                <div className={styles.half}>
                  <label>
                    <h5>
                      Major<p>*</p>
                    </h5>
                  </label>
                  <select
                    name="major"
                    id="major"
                    touched={touched["major"]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="S1 TEKNIK TELEKOMUNIKASI">
                      S1 TEKNIK TELEKOMUNIKASI
                    </option>
                    <option value="S1 Teknik Elektro">S1 Teknik Elektro</option>
                    <option value="S1 Smart Science and Technology">
                      S1 Smart Science and Technology
                    </option>
                    <option value="S1 Computer Engineering">
                      S1 Computer Engineering
                    </option>
                    <option value="S1 Teknik Biomedis">
                      S1 Teknik Biomedis
                    </option>
                    <option value="S2 Teknik Elektro-Telekomunikasi">
                      S2 Teknik Elektro-Telekomunikasi
                    </option>
                    <option value="S1 Teknik Industri">
                      S1 Teknik Industri
                    </option>
                    <option value="S1 Sistem Informasi ">
                      S1 Sistem Informasi
                    </option>
                    <option value="S1 Teknik Logistik">
                      S1 Teknik Logistik
                    </option>
                    <option value="S2 Teknik Industri">
                      S2 Teknik Industri
                    </option>
                    <option value="S1 Informatika">S1 Informatika</option>
                    <option value="S1 Teknologi Informasi">
                      S1 Teknologi Informasi
                    </option>
                    <option value="S1 Rekayasa Perangkat Lunak">
                      S1 Rekayasa Perangkat Lunak
                    </option>
                    <option value="S1 Data Sains">S1 Data Sains</option>
                    <option value="S1 PJJ Informatika">
                      S1 PJJ Informatika
                    </option>
                    <option value="S2 Informatika">S2 Informatika</option>
                    <option value="S2 Cyber Security and Digital Forensic">
                      S2 Cyber Security and Digital Forensic
                    </option>
                    <option value="S1 International ICT Business">
                      S1 International ICT Business
                    </option>
                    <option value="S1 Manajemen Bisnis Telekomunikasi & Informatika">
                      S1 Manajemen Bisnis Telekomunikasi & Informatika (MBTI)
                    </option>
                    <option value="S1 Akuntansi">S1 Akuntansi</option>
                    <option value="S2 Manajemen">S2 Manajemen</option>
                    <option value="S2 Manajemen PJJ">S2 Manajemen PJJ</option>
                    <option value="S1 Administrasi Bisnis">
                      S1 Administrasi Bisnis
                    </option>
                    <option value="S1 Ilmu Komunikasi">
                      S1 Ilmu Komunikasi
                    </option>
                    <option value="S1 Digital Public Relation">
                      S1 Digital Public Relation
                    </option>
                    <option value="S1 Desain Komunikasi Visual">
                      S1 Desain Komunikasi Visual
                    </option>
                    <option value="S1 Product Innovation & Management">
                      S1 Product Innovation & Management
                    </option>
                    <option value="S1 Desain Interior ">
                      S1 Desain Interior
                    </option>
                    <option value="S1 Kriya">
                      S1 Kriya (Fashion and Textile Design)
                    </option>
                    <option value="S1 Creative Arts">
                      S1 Creative Arts (Intermedia Visual Arts)
                    </option>
                    <option value="S2 Desain">S2 Desain</option>
                    <option value="D3 Digital Connectivity">
                      D3 Digital Connectivity
                    </option>
                    <option value="D3 Teknik Informatika">
                      D3 Teknik Informatika
                    </option>
                    <option value="D3 Sistem Informasi">
                      D3 Sistem Informasi
                    </option>
                    <option value="D3 Sistem Informasi Akuntansi">
                      D3 Sistem Informasi Akuntansi
                    </option>
                    <option value="D3 Teknik Komputer">
                      D3 Teknik Komputer
                    </option>
                    <option value="D3 Digital Marketing">
                      D3 Digital Marketing
                    </option>
                    <option value="D3 Hospitality and Culinary Art">
                      D3 Hospitality and Culinary Art
                    </option>
                    <option value="S1 Terapan Digital Creative Multimedia">
                      S1 Terapan Digital Creative Multimedia (DCM)
                    </option>
                  </select>
                  <div className={`${styles.errors} ${styles.half}`}>
                    <h5>
                      {errors.major && touched.major && <p>*{errors.major}</p>}
                    </h5>
                  </div>
                </div>
              </div>
              <div className={styles.flex}>
                <div className={styles.half}>
                  <label>
                    <h5>
                      Student Year<p>*</p>
                    </h5>
                  </label>
                  <select
                    name="generation"
                    id="generation"
                    touched={touched["generation"]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                  </select>
                  <div className={`${styles.errors} ${styles.half}`}>
                    <h5>
                      {errors.generation && touched.generation && (
                        <p>*{errors.generation}</p>
                      )}
                    </h5>
                  </div>
                </div>
                <div className={styles.half}>
                  <label htmlFor="">
                    <h5>
                      Division<p>*</p>
                    </h5>
                  </label>
                  <select
                    name="division"
                    id="division"
                    touched={touched["division"]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="Digital Business">Digital Business</option>
                    <option value="UI/UX">UI/UX Design</option>
                    <option value="Mobile Programming">
                      Mobile Programming
                    </option>
                  </select>
                  <div className={`${styles.errors} ${styles.half}`}>
                    <h5>
                      {errors.division && touched.division && (
                        <p>*{errors.division}</p>
                      )}
                    </h5>
                  </div>
                </div>
              </div>
              {/* <label>
                <h5>Topic Proposal</h5>
                <p className={styles.explaination}>
                  The following form is only intended for 2018&#39;s student
                </p>
              </label> */}
              {/* <Field
                id="topic_proposal"
                type="text"
                name="topic_proposal"
                placeholder="Topic Proposal (ex: Perancangan...)"
              />
              <div className={styles.errors}>
                <h5>{errors.name && touched.name && <p>*{errors.name}</p>}</h5>
              </div> */}
              <div className={styles.flex}>
                <div className={styles.half}>
                  <label>
                    <h5>
                      Curiculum Vitae (CV)<p>*</p>
                    </h5>
                    <p className={styles.explaination}>
                      Must be pdf file, with 3mb of maximum size
                    </p>
                  </label>
                  <input
                    type="file"
                    name="cv"
                    id="cv"
                    onChange={(e) => {
                      setFieldValue("cv", e.currentTarget.files[0]);
                    }}
                    onBlur={handleBlur}
                    touched={touched["cv"]}
                  />
                  <div className={`${styles.errors} ${styles.half}`}>
                    <h5>{errors.cv && touched.cv && <p>*{errors.cv}</p>}</h5>
                  </div>
                </div>
                <div className={styles.half}>
                  <label htmlFor="">
                    <h5>Portofolio</h5>
                    <p className={styles.explaination}>
                      Must be pdf file, with 3mb of maximum size
                    </p>
                  </label>
                  <input
                    type="file"
                    name="portofolio"
                    id="portofolio"
                    onChange={(e) => {
                      setFieldValue("portofolio", e.currentTarget.files[0]);
                    }}
                    onBlur={handleBlur}
                    touched={touched["portofolio"]}
                  />
                  <div className={`${styles.errors} ${styles.half}`}>
                    <h5>
                      {errors.portofolio && touched.portofolio && (
                        <p>
                          *
                          {`${errors.portofolio} or if you don't want upload any portofolio, you can just upload blank file in pdf format`}
                        </p>
                      )}
                    </h5>
                  </div>
                </div>
              </div>
              <div className={styles.flex}>
                <div className={styles.half}>
                  <label>
                    <h5>
                    Motivation Video<p>*</p>
                    </h5>
                    <p className={styles.explaination}>
                      URL must be valid
                    </p>
                  </label>
                  <Field
                    id="motivation_video"
                    type="text"
                    name="motivation_video"
                    placeholder="Input URL of your motivation video"
                  />
                  <div className={`${styles.errors} ${styles.half}`}>
                    <h5>{errors.motivation_video && touched.motivation_video && <p>*{errors.motivation_video}</p>}</h5>
                  </div>
                </div>
                <div className={styles.half}>
                  <label htmlFor="">
                    <h5>
                      KSM<p>*</p>
                    </h5>
                    <p className={styles.explaination}>
                      Must be pdf file, with 3mb of maximum size
                    </p>
                  </label>
                  <input
                    type="file"
                    name="ksm"
                    id="ksm"
                    onChange={(e) => {
                      setFieldValue("ksm", e.currentTarget.files[0]);
                    }}
                    onBlur={handleBlur}
                    touched={touched["ksm"]}
                  />
                  <div className={`${styles.errors} ${styles.half}`}>
                    <h5>{errors.ksm && touched.ksm && <p>*{errors.ksm}</p>}</h5>
                  </div>
                </div>
              </div>
              <label>
                <h5>Share Poster</h5>
              </label>
              <Field
                id="share_poster"
                type="text"
                name="share_poster"
                placeholder="URL of your evidence of sharing poster"
              />
              <div className={styles.errors}>
                <h5>{errors.share_poster && touched.share_poster && <p>*{errors.share_poster}</p>}</h5>
              </div>
              <button
                className={submit ? styles["button-submitted"] : ""}
                type="submit"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </section>
      <Footer />
    </>
  );
}
