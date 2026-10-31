import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center px-6 py-2.5 space-x-2 border border-[#EF4444] rounded-full text-[#EF4444] dark:text-[#F87171] hover:bg-[#EF4444] hover:text-white dark:hover:bg-[#EF4444] dark:hover:text-white transition-all duration-200 active:scale-95 shadow-sm"
      aria-label="Go back to previous page"
    >
      <Image
        src="/svg/kembali.svg"
        alt="Back"
        width={22}
        height={22}
        className="dark:brightness-125"
      />
      <span className="font-bold text-base md:text-lg">Kembali</span>
    </button>
  );
};

export default BackButton;

