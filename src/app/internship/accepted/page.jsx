import InternshipAcceptedView from "@/features/internship/views/status/InternshipAcceptedView";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InternshipAcceptedView />
    </Suspense>
  );
};

export default page;
