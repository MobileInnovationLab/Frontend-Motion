"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import api from "@/core/api/api";
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
          if (response.data.is_accepted == 1) {
            router.push("/accepted");
          } else {
            router.push("/declined");
          }
        })
        .catch((err) => {
          if (err.response.status === 404) {
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
