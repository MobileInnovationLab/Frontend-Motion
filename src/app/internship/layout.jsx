import "@/styles/tailwind.scss";
import Footer from "@/shared/components/footer";
import NavbarClientWrapper from "@/shared/components/NavbarClientWrapper";

export default function RecruitmentLayout({ children }) {
  return (
    <div className="bg-[#FCF6F6] dark:bg-[#090D16] text-slate-900 dark:text-[#F8FAFC] min-h-screen transition-colors duration-300">
      {children}
      <Footer />
    </div>
  );
}
