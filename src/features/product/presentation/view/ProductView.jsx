"use client";

import BigTitle from "@/core/components/bigTitle";

import styles from "@/core/styles/pages/product.module.scss";
import TopButton from "@/core/components/topButton";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import GeneralSeo from "@/core/components/seo/generalSeo";
import InternshipFooter from "@/features/internship/components/footer/InternshipFooter";
import ProductNavbar from "../../components/ProductNavbar";
import ContentProduct from "../../components/contentProduct";
import NotFound from "../../components/NotFound";

const ProductView = () => {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  
  const handleShowDetails = (title) => {
    router.push(`/product/detailProduct`);
  };

  useEffect(() => {}, [search]);

  const generations = [
    { id: 1, name: "Motion 1.0" },
    { id: 2, name: "Motion 2.0" },
    { id: 3, name: "Cheesecake 3.0" },
    { id: 4, name: "Motion 4.0" },
    { id: 5, name: "Espresso 5.0" },
    { id: 6, name: "Fortune Cookie 6.0" },
    { id: 7, name: "Gelato 7.0" },
    { id: 8, name: "Hazelnut 8.0" },
  ];

  const teams = [
    {
      title: "Project Alpha",
      team: 1,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      qrcode: "/images/product/dummy-product.png",
      generationId: 8,
    },
    {
      title: "Project Beta",
      team: 2,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      qrcode: "/images/product/dummy-product.png",
      generationId: 8,
    },
    {
      title: "Project Gamma",
      team: 3,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      qrcode: "/images/product/dummy-product.png",
      generationId: 8,
    },
    {
      title: "Project Gamma",
      team: 4,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      qrcode: "/images/product/dummy-product.png",
      generationId: 8,
    },
    {
      title: "Project Gamma",
      team: 5,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      qrcode: "/images/product/dummy-product.png",
      generationId: 8,
    },
    {
      title: "Project Gamma",
      team: 6,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      qrcode: "/images/product/dummy-product.png",
      generationId: 8,
    },
  ];

  const [activeCategory, setActiveCategory] = useState(
    generations[generations.length - 1].id
  );
  const sortedGenerations = [...generations].sort((a, b) => b.id - a.id);
  const filteredTeams = teams.filter(
    (teamData) => teamData.generationId === activeCategory
  );
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTeams.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTeams.length / itemsPerPage);

  return (
    <div className={styles["main-body"]}>
      <GeneralSeo title="Product" />
      <ProductNavbar />

      <div className="container mx-auto flex flex-col items-center">
        <BigTitle>
          <span className="text-red-600 ">Works</span>{" "}
          <span className="font-normal ">we{`'`}re</span> proud of{" "}
        </BigTitle>
        <p className="font-normal text-[#6A6A6A] text-base lg:text-lg text-center pt-2">
          Motionhack is a project that is always held every time the study group
          ends by creating a real project.
        </p>
      </div>

      <div className="overflow-x-auto whitespace-nowrap no-scrollbar">
        <section className="flex space-x-4 p-4 pl-8 md:pl-12 lg:pl-24">
          {sortedGenerations.map((generation) => (
            <button
              key={generation.id}
              type="button"
              className={`px-4 py-2 md:px-8 md:py-4 rounded-full ${
                activeCategory === generation.id
                  ? "bg-[#C1271A]"
                  : "border border-[#C1271A]"
              }`}
              onClick={() => {
                setActiveCategory(generation.id);
                setCurrentPage(1);
              }}
            >
              <h4
                className={`font-bold text-base md:text-lg ${
                  activeCategory === generation.id
                    ? "text-[#FFFF]"
                    : "text-[#C1271A]"
                }`}
              >
                {generation.name}
              </h4>
            </button>
          ))}
        </section>
      </div>

      <section className="container mx-auto py-8 md:py-16">
        <form>
          <div className="relative w-full">
            <button
              type="submit"
              className="absolute inset-y-0 start-6 flex items-center pointer-events-none"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="9.80565"
                  cy="9.80547"
                  r="7.49047"
                  stroke="#6A6A6A"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.0154 15.4042L21 21"
                  stroke="#6A6A6A"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <input
              type="text"
              className="text-[#6A6A6A] w-full text-lg rounded-full py-2 md:py-4 px-14 bg-[#EEEEEE] border border-[#6A6A6A] border-solid outline-none "
              placeholder="Search project"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
      </section>

      <section>
        <div className="container mx-auto border rounded">
          {teams.filter((teamData) => teamData.generationId === activeCategory)
            .length > 0 ? (
            teams
              .filter((teamData) => teamData.generationId === activeCategory)
              .map((teamData, index) => (
                <ContentProduct
                  key={index}
                  title={teamData.title}
                  team={teamData.team}
                  description={teamData.description}
                  qrcode={teamData.qrcode}
                  onShowDetails={handleShowDetails}
                />
              ))
          ) : (
            <NotFound />
          )}
        </div>
      </section>

      {currentItems.length > 0 && (
        // <div className="flex justify-center my-4">
        //   <button
        //     onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        //     disabled={currentPage === 1}
        //     className="px-4 py-2 border border-[#C1271A] rounded-full mr-2"
        //   >
        //     Previous
        //   </button>
        //   <span className="flex items-center">
        //     Page {currentPage} of {totalPages}
        //   </span>
        //   <button
        //     onClick={() =>
        //       setCurrentPage((prev) => Math.min(prev + 1, totalPages))
        //     }
        //     disabled={currentPage === totalPages}
        //     className="px-4 py-2 border border-[#C1271A] rounded-full ml-2"
        //   >
        //     Next
        //   </button>
        // </div>
        <section className="container mx-auto flex justify-center py-12">
          <div className="space-x-2">
            <button className="border border-[#E3E3E3] rounded-xl bg-white">
              <h1 className="font-[inter] px-4 py-2">1</h1>
            </button>
            <button className="border border-[#E3E3E3] rounded-xl bg-white">
              <h1 className="font-[inter] px-4 py-2">2</h1>
            </button>
            <button className="border border-[#E3E3E3] rounded-xl bg-white">
              <h1 className="font-[inter] px-4 py-2">3</h1>
            </button>
            <button className="border border-[#E3E3E3] rounded-xl bg-white">
              <h1 className="font-[inter] px-4 py-2">Next</h1>
            </button>
          </div>
        </section>
      )}

      <TopButton />
      <InternshipFooter />
    </div>
  );
};

export default ProductView;
