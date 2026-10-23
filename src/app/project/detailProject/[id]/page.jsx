"use client";

import { use } from "react";
import DetailProject from "@/features/project/views/DetailProjectPageView";

export default function Page({ params }) {
  const unwrappedParams = use(params);
  return <DetailProject params={unwrappedParams} />;
}
