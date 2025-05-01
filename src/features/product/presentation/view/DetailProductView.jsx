import InternshipFooter from "@/features/internship/components/footer/InternshipFooter";
import ProductNavbar from "../../components/ProductNavbar";

// import { useParams } from "next/navigation";
const DetailProduct = () => {
  // const { title } = useParams();
  return (
    <div className="bg-[#FCF6F6]">
      {/* <h1 className="text-3xl font-bold">Product Details</h1> */}
      {/* <h2 className="text-2xl"> */}
      {/* {title ? decodeURIComponent(title) : "Loading..."} */}

      {/* </h2> */}
      {/* <ProductNavbar /> */}
      <section className="container mx-auto py-16">
        <button className="flex px-8 py-2 space-x-2 border border-[#C1271A] rounded-full">
          <img src="/svg/kembali.svg" alt="" />
          <h4 className="font-bold text-xl text-[#C1271A]">Kembali</h4>
        </button>
      </section>
      <InternshipFooter />
    </div>
  );
};

export default DetailProduct;
