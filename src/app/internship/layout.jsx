import "@/core/styles/tailwind.scss";
import InternshipFooter from "@/features/internship/components/footer/InternshipFooter";

export default function RecruitmentLayout({ children }) {
  return (
    <div className="bg-[#FCF6F6]">
      {children}

      <InternshipFooter />
    </div>
  );
}
