import InternshipNavbar from "../../components/navbar/InternshipNavbar";

const CurriculumDesignerView = () => {
  return (
    <>
      <InternshipNavbar isFixed={false} />
      <section className="bg-[url('/images/recruitment/sub-header.png')] bg-cover bg-no-repeat bg-[center_bottom_0rem] w-full">
        <h1 className="text-[28px] lg:text-[48px] font-bold font-[rubik] text-center text-white flex justify-center py-40">
          UI/UX Designer
        </h1>
      </section>

      <section className="container mx-auto px-[18rem]">
        <div className="my-24"></div>

        <div className="flex flex-col gap-y-8">
          <div className="flex w-full bg-white px-10 py-5 rounded">
            <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
              Week 1 -
            </h2>
            <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
              Design Sprint
            </p>
          </div>
          <div className="flex w-full bg-white px-10 py-5 rounded">
            <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
              Week 2 -
            </h2>
            <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
              User Research
            </p>
          </div>
          <div className="flex w-full bg-white px-10 py-5 rounded">
            <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
              Week 3 -
            </h2>
            <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
              UX Flows and Information Architecture
            </p>
          </div>
          <div className="flex w-full bg-white px-10 py-5 rounded">
            <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
              Week 4 -
            </h2>
            <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
              User Journey Map and Persona
            </p>
          </div>
          <div className="flex w-full bg-white px-10 py-5 rounded">
            <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
              Week 5 -
            </h2>
            <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
              Interactive Prototyping
            </p>
          </div>
          <div className="flex w-full bg-white px-10 py-5 rounded">
            <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
              Week 6 -
            </h2>
            <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
              Usability Testing
            </p>
          </div>
          <div className="flex w-full bg-white px-10 py-5 rounded">
            <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
              Week 7 -
            </h2>
            <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
              UX Writing
            </p>
          </div>
          <div className="flex w-full bg-white px-10 py-5 rounded">
            <h2 className="text-[16px] text-[inter] font-bold text-[#332C2B]">
              Week 8 -
            </h2>
            <p className="text-[16px] text-[inter] text-[#332C2B] ms-2">
              Success Metric Framework and Presentation UI Portofolios
            </p>
          </div>
        </div>

        <div className="my-20"></div>
      </section>
    </>
  );
};

export default CurriculumDesignerView;
