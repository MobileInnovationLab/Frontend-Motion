import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const RecruitmentNavbar = () => {
  const [isNavbarScroll, setIsNavbarScroll] = useState(false);
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    if (window.scrollY >= 90) {
      console.log(window.scrollY);
      setIsNavbarScroll(true);
    } else {
      setIsNavbarScroll(false);
    }
  }

  function handleNavbarOpened() {
    console.log("OK");
  }

  return (
    <nav className={`${isNavbarScroll ? "bg-white shadow-sm" : "bg-transparent"} transition duration-400 text-center fixed m-auto left-0 right-0 py-8 z-10`}>
      <div className="container justify-between mx-auto flex">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <div className="w-[34px] h-[34px]">
              <img src={`${isNavbarScroll ? "/navbar/logo-red-transparent.png" : "/navbar/logo-white-transparent.png"}`} className="transition duration-400 w-full h-full object-contain" alt="" />
            </div>
          </a>
          <div className="hidden w-full md:block md:w-auto px-28" id="navbar-default">
            <ul className={`flex gap-x-10 font-[inter] text-[16px] ${isNavbarScroll ? "text-[#332C2B]" : "text-[#FFEAEA]"} transition duration-400`}>
              <li>
                <a href="#" className="hover:text-[#332C2B] transition ease-out duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#332C2B] transition ease-out duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#332C2B] transition ease-out duration-300">
                  Requirements
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#332C2B] transition ease-out duration-300">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#332C2B] transition ease-out duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <button data-collapse-toggle="navbar-default" type="button" onClick={handleNavbarOpened} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default RecruitmentNavbar;
