"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import api from "@/shared/api/api";
import { useState } from "react";
import useStaticOption from "./useStaticOption";

const DEFAULT_ANNOUNCEMENT_TEXT = "Motion Lab 11.0 Member Announcement";

export default function useRecruitmentAnnouncementViewModel() {
  const router = useRouter();
  const [isNotFound, setIsNotFound] = useState(false);
  const {
    value: announcementText,
    loading,
    isLoading,
  } = useStaticOption(
    "announcment_internship_text",
    DEFAULT_ANNOUNCEMENT_TEXT,
    ["announcement_internship_text"]
  );

  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      nim: "",
    },
    validationSchema: Yup.object().shape({
      nim: Yup.string().required("The nim field is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      api
        .get(`/recruitation/check/${values.nim}`)
        .then((response) => {
          const data = {
            name: response.data.recruitation.name,
            nim: response.data.recruitation.nim,
            division: response.data.recruitation.division,
          };

          let queryString = Object.keys(data)
            .map(
              (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
            )
            .join("&");

          let targetPath = response.data.is_accepted == 2 ? "/accepted" : "/declined";
          if (typeof window !== "undefined") {
            const isSubdomain = window.location.host.includes("internship");
            if (!isSubdomain && window.location.pathname.startsWith("/internship")) {
              targetPath = `/internship${targetPath}`;
            }
          }

          router.push(`${targetPath}?${queryString}`);
        })
        .catch((err) => {
          if (err.response?.status === 404) {
            setIsNotFound(true);
          }
          setSubmitting(false);
        });
    },
  });

  return {
    formik,
    isNotFound,
    announcementText,
    loading,
    isLoading,
  };
}
