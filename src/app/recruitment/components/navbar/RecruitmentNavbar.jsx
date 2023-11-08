import Link from "next/link";
import Image from "next/image";

const RecruitmentNavbar = () => {
  return (
    <nav className="container text-center fixed m-auto left-0 right-0 pt-5">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <a href="https://flowbite.com/" className="flex items-center">
            <div className="w-[34px] h-[34px]">
              <img
                src="/navbar/logo-white-transparent.png"
                className="w-full h-full object-contain"
                alt=""
              />
            </div>
          </a>
          <div
            className="hidden w-full md:block md:w-auto px-28"
            id="navbar-default"
          >
            <ul className="flex gap-x-10 font-[inter] text-[16px] text-[#FFEAEA]">
              <li>
                <a href="#" className="">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Requirements
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default RecruitmentNavbar;
