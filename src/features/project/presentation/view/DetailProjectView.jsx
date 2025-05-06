"use client";

import InternshipFooter from "@/features/internship/components/footer/InternshipFooter";
import Link from "next/link";
import Image from "next/image";
import MediumIcon from "@/public/images/home/instagram.png";

// const { title } = useParams();
const DetailProject = () => {
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => alert("Link berhasil disalin! 🎉"))
        .catch((err) => alert("Gagal menyalin link 😢"));
    }
  };
  const data = {
    projectName: "Bizmo",
    team: "Team 1",
    members: ["Naswan", "Falah", "Revan", "Celsyka", "Theo", "Fionadhilla"],
    medium: "https://medium.com",
    figma: "https://figma.com",
    github: "https://github.com",
    thumbnail: "/images/home/motion-lab.png",
    design: "/images/home/motion-lab.png",
    about:
      "Bizmo adalah Aplikasi revolusioner yang dirancang khusus untuk membantu UMKM di sektor makanan mengelola bisnis mereka dengan lebih efisien dan strategis. Dengan teknologi canggih, Brizmo menawarkan fitur prediksi pendapatan, permintaan, dan buffer stock yang memungkinkan pengusaha membuat keputusan yang lebih tepat dalam merencanakan masa depan bisnis mereka. Keunggulan Brizmo terletak pada kemampuannya untuk memberikan wawasan berbasis data, yang tidak dimiliki oleh pesaing seperti Oodo. Dengan analisis prediktif ini, Brizmo membantu UMKM meminimalkan risiko, mengoptimalkan pengelolaan sumber daya, dan meningkatkan profitabilitas.  Aplikasi ini dirancang untuk menjadi mitra andalan bagi UMKM yang ingin meningkatkan efisiensi operasional dan mencapai kesuksesan jangka panjang di industri makanan. Brizmo adalah solusi yang memadukan teknologi dan inovasi untuk mendorong pertumbuhan bisnis yang berkelanjutan.",
  };

  const linkButtons = [
    { label: "Medium", href: data.medium },
    { label: "Figma", href: data.figma },
    { label: "Github", href: data.github },
  ];

  return (
    <div className="bg-[#FCF6F6]">
      <section className="container mx-auto pt-16">
        <Link href="/project">
          <button className="flex items-center px-8 py-2 space-x-2 border border-[#C1271A] rounded-full">
            <Image src="/svg/kembali.svg" alt="Back" width={24} height={24} />
            <h4 className="font-bold text-xl text-[#C1271A]">Kembali</h4>
          </button>
        </Link>

        <div className="pt-8">
          <h1 className="font-bold text-3xl md:text-6xl">{data.projectName}</h1>
          <h3 className="text-xl md:text-4xl py-4 md:py-8">{data.team}</h3>
          <h3 className="font-bold text-xl md:text-3xl">
            {data.members.join(", ")}
          </h3>
        </div>
      </section>

      <section className="container mx-auto py-8">
        <div className="flex gap-4 overflow-x-auto whitespace-nowrap no-scrollbar md:flex-wrap md:justify-start">
          {linkButtons.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              target="_blank"
              className="flex-shrink-0 flex items-center gap-2 border-2 border-solid border-[#C1271A] rounded-full px-4 py-2"
            >
              <Image src={MediumIcon} alt={item.label} width={24} height={24} />
              <span className="underline font-bold text-sm md:text-lg text-[#C1271A]">
                {item.label}
              </span>
            </Link>
          ))}
          <button
            onClick={handleCopyLink}
            className="flex-shrink-0 flex items-center gap-2 border-2 border-solid border-[#C1271A] rounded-full px-4 py-2"
          >
            <Image src={MediumIcon} alt="Copy" width={24} height={24} />
            <span className="underline font-bold text-sm md:text-lg text-[#C1271A]">
              Copy Link
            </span>
          </button>
        </div>
      </section>

      <section className="container mx-auto py-4 md:py-16">
        <div>
          <Image
            src={data.thumbnail}
            alt="Thumbnail"
            width={1200}
            height={600}
            className="w-full h-auto"
          />
          <h4 className="pt-4 text-xl md:text-4xl font-bold pb-2 md:pb-4">About</h4>
          <p className="font-[inter] font-normal text-base md:text-2xl text-justify">
            {data.about}
          </p>
        </div>
      </section>

      <section className="container mx-auto py-4 md:py-16">
        <h3 className="font-bold font-[inter] text-xl md:text-4xl pb-4">Design System</h3>
        <Image
          src={data.design}
          alt="Design System"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
      </section>

      <InternshipFooter />
    </div>
  );
};

export default DetailProject;
