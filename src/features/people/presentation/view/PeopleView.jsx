"use client";

import PeopleNavbar from "../../components/PeopleNavbar";
import GeneralSeo from "@/core/components/seo/generalSeo";
import styles from "@/core/styles/pages/product.module.scss";
import InternshipFooter from "@/features/internship/components/footer/InternshipFooter";
import { useState } from "react";
import CardPeople from "../../components/CardPeople";

const PeopleView = () => {
  
  const divisions = [
    { id: 1, division: "Research Group" },
    { id: 2, division: "Public Relation" },
    { id: 3, division: "Project & Competition" },
    { id: 4, division: "Web Team" },
    { id: 5, division: "Study Group" },
    { id: 6, division: "Core Team" },
    { id: 7, division: "All" },
  ];

  const rowData = [
    {
      name: "Muhammad Bintang Al-Fath",
      role: "Member of Public Relation",
      instagram: "https://instagram.com/dummy1",
      linkedin: "https://linkedin.com/in/dummy1",
      image: "/images/about/dummy.webp",
      division: "Public Relation",
    },
    {
      name: "Yazid Al Ghozali",
      role: "Backend Engineer",
      instagram: "https://instagram.com/dummy2",
      linkedin: "https://linkedin.com/in/dummy2",
      image: "/images/about/dummy.webp",
      division: "Web Team",
    },
    {
      name: "Chacha Alisa Dewintasari",
      role: "Member of Public Relation",
      instagram: "https://instagram.com/dummy3",
      linkedin: "https://linkedin.com/in/dummy3",
      image: "/images/about/dummy.webp",
      division: "Public Relation",
    },
    {
      name: "Salma Safira Ramandha",
      role: "Head of Website Division",
      instagram: "https://instagram.com/dummy4",
      linkedin: "https://linkedin.com/in/dummy4",
      image: "/images/about/dummy.webp",
      division: "Web Team",
    },
    {
      name: "Ardhian Calwa Nugraha",
      role: "Front-end Engineer",
      instagram: "https://instagram.com/dummy5",
      linkedin: "https://linkedin.com/in/dummy5",
      image: "/images/about/dummy.webp",
      division: "Web Team",
    },
    {
      name: "Muhammad Nur Shodiq",
      role: "UI/UX Designer",
      instagram: "https://instagram.com/dummy6",
      linkedin: "https://linkedin.com/in/dummy6",
      image: "/images/about/dummy.webp",
      division: "Web Team",
    },
    {
      name: "Nurshandy Nuzul Ramadhani",
      role: "Head of Project & Competition Division",
      instagram: "https://instagram.com/dummy6",
      linkedin: "https://linkedin.com/in/dummy6",
      image: "/images/about/dummy.webp",
      division: "Project & Competition",
    },
    {
      name: "Abdurrahman Farras Fadhila Triandhono",
      role: "Front-end Engineer",
      instagram: "https://instagram.com/dummy6",
      linkedin: "https://linkedin.com/in/dummy6",
      image: "/images/about/dummy.webp",
      division: "Web Team",
    },
    {
      name: "Tiara Sabrina",
      role: "Member of Project & Competition",
      instagram: "https://instagram.com/dummy6",
      linkedin: "https://linkedin.com/in/dummy6",
      image: "/images/about/dummy.webp",
      division: "Project & Competition",
    },
    {
      name: "Wildan Syukri Niam",
      role: "Coordinator",
      instagram: "https://instagram.com/dummy6",
      linkedin: "https://linkedin.com/in/dummy6",
      image: "/images/about/dummy.webp",
      division: "Core Team",
    },
    {
      name: "Moses Eliyada Tambunan",
      role: "Vice Coordinator",
      instagram: "https://instagram.com/dummy6",
      linkedin: "https://linkedin.com/in/dummy6",
      image: "/images/about/dummy.webp",
      division: "Core Team",
    },
    {
      name: "Puri Lalita Anagata",
      role: "Administrator",
      instagram: "https://instagram.com/dummy6",
      linkedin: "https://linkedin.com/in/dummy6",
      image: "/images/about/dummy.webp",
      division: "Core Team",
    },
    {
      name: "Adelia Nasywa Karenina",
      role: "Head of Study Group Division",
      instagram: "https://instagram.com/dummy6",
      linkedin: "https://linkedin.com/in/dummy6",
      image: "/images/about/dummy.webp",
      division: "Study Group",
    },
    {
      name: "Reinhard Efraim Situmeang",
      role: "Member of Study Group Division",
      instagram: "https://instagram.com/dummy6",
      linkedin: "https://linkedin.com/in/dummy6",
      image: "/images/about/dummy.webp",
      division: "Study Group",
    },
    {
      name: "Muhammad Arzu Kirana Berutu",
      role: "Member of Study Group Division",
      instagram: "https://instagram.com/dummy6",
      linkedin: "https://linkedin.com/in/dummy6",
      image: "/images/about/dummy.webp",
      division: "Study Group",
    },
    {
      name: "Muhamad Raihan Syahrin Sya'bani",
      role: "Member of Study Group Division",
      instagram: "https://instagram.com/dummy6",
      linkedin: "https://linkedin.com/in/dummy6",
      image: "/images/about/dummy.webp",
      division: "Study Group",
    },
    {
      name: "Muhammad Darrel Prawira",
      role: "Member of Study Group Division",
      instagram: "https://instagram.com/dummy6",
      linkedin: "https://linkedin.com/in/dummy6",
      image: "/images/about/dummy.webp",
      division: "Study Group",
    },
    {
      name: "Erfan Ferdianto",
      role: "Member of Research Division",
      instagram: "https://instagram.com/dummy6",
      linkedin: "https://linkedin.com/in/dummy6",
      image: "/images/about/dummy.webp",
      division: "Research Group",
    },
    {
      name: "Yusry Anandita Yulianti",
      role: "Head of Research Division",
      instagram: "https://instagram.com/dummy6",
      linkedin: "https://linkedin.com/in/dummy6",
      image: "/images/about/dummy.webp",
      division: "Research Group",
    },
    {
      name: "Kelvyn Lukito",
      role: "Member of Study Group Division",
      instagram: "https://instagram.com/dummy6",
      linkedin: "https://linkedin.com/in/dummy6",
      image: "/images/about/dummy.webp",
      division: "Study Group",
    },
    {
      name: "Aqila Fitri",
      role: "Member of Study Group Division",
      instagram: "https://instagram.com/dummy6",
      linkedin: "https://linkedin.com/in/dummy6",
      image: "/images/about/dummy.webp",
      division: "Study Group",
    },
    {
      name: "Aaron James Effendi",
      role: "Head of Event & Business Division",
      instagram: "https://instagram.com/dummy6",
      linkedin: "https://linkedin.com/in/dummy6",
      image: "/images/about/dummy.webp",
      division: "Event & Business",
    },
  ];
  const [activeCategory, setActiveCategory] = useState(
    divisions[divisions.length - 1].id
  );
  const filteredMembers =
    activeCategory === 7
      ? rowData
      : rowData.filter(
          (member) => member.division === divisions[activeCategory - 1].division
        );
  const sortedGenerations = [...divisions].sort((a, b) => b.id - a.id);
  return (
    <div className={styles["main-body"]}>
      <GeneralSeo title="People" />
      <PeopleNavbar />
      <section className="container mx-auto pt-32">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-4xl md:text-4xl lg:text-5xl font-[inter]">
            Laboratory Assistent
          </h1>
          <p className="font-[inter] font-thin text-base lg:text-2xl text-center pt-4 hidden md:flex">
            Mobile Innovation Laboratory
          </p>
        </div>
      </section>
      <div className="overflow-x-auto whitespace-nowrap no-scrollbar py-20">
        <section className="flex space-x-6 p-4 pl-8 md:pl-12 lg:pl-40">
          {sortedGenerations.map((divisions) => (
            <button
              key={divisions.id}
              type="button"
              className={`px-4 py-2 md:px-8 md:py-4 rounded-full ${
                activeCategory === divisions.id
                  ? "bg-[#C1271A]"
                  : "border border-[#C1271A]"
              }`}
              onClick={() => {
                setActiveCategory(divisions.id);
                // setCurrentPage(1);
              }}
            >
              <h4
                className={`font-bold text-base md:text-lg ${
                  activeCategory === divisions.id
                    ? "text-[#FFFF]"
                    : "text-[#C1271A]"
                }`}
              >
                {divisions.division}
              </h4>
            </button>
          ))}
        </section>
      </div>

      <section className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredMembers.map((member, index) => (
            <CardPeople key={index} member={member} />
          ))}
        </div>
      </section>

      <div className="my-40"></div>

      <InternshipFooter />
    </div>
  );
};

export default PeopleView;
