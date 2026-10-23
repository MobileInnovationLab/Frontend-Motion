import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center px-8 py-2 space-x-2 border border-[#C1271A] rounded-full"
    >
      <Image src="/svg/kembali.svg" alt="Back" width={24} height={24} />
      <h4 className="font-bold text-xl text-[#C1271A]">Kembali</h4>
    </button>
  );
};

export default BackButton;
