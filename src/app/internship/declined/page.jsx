import InternshipDeclinedView from "@/features/internship/views/status/InternshipDeclinedView";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InternshipDeclinedView />
    </Suspense>
  );
};

export default page;
