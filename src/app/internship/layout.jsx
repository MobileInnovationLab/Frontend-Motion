import "@/styles/tailwind.scss";
import Footer from "@/shared/components/footer";
import NavbarClientWrapper from "@/shared/components/NavbarClientWrapper";

export default function RecruitmentLayout({ children }) {
  return (
    <div className="bg-[#FCF6F6]">
      {children}
      <Footer />
    </div>
  );
}
