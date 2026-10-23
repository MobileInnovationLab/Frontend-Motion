"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import api from "@/shared/api/api";
import { useState } from "react";

export default function useRecruitmentAnnouncementViewModel() {
  const router = useRouter();
  const [isNotFound, setIsNotFound] = useState(false);
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

          if (response.data.is_accepted == 2) {
            router.push(`/accepted?${queryString}`);
          } else {
            router.push(`/declined?${queryString}`);
          }
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
  };
}
