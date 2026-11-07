import InternshipRegisterFailedView from "@/features/internship/views/status/InternshipRegisterFailedView";
import { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InternshipRegisterFailedView />
    </Suspense>
  );
};

export default page;
