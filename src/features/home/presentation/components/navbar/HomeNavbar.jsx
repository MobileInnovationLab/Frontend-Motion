"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navbarLinks = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "about",
    label: "About",
  },
  {
    id: "project",
    label: "Projects",
  },
  {
    id: "people",
    label: "People",
  },
  {
    id: "news",
    label: "News",
  },
  {
    id: "contact",
    label: "Contact Us",
  },
];

const HomeNavbar = ({ onNavigation, isFixed = true }) => {
  const router = useRouter();
  const usePathName = usePathname();
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
      setIsNavbarScroll(true);
    } else {
      setIsNavbarScroll(false);
    }
  }

  function handleNavbarOpened() {
    setIsNavbarOpened(!isNavbarOpened);
  }

  function getNavClassName() {
    let className = `transition duration-300 ${
      isFixed ? "fixed" : ""
    } text-center m-auto left-0 right-0 py-5 z-10`;

    if (isNavbarScroll || !isFixed) {
      className += " shadow-sm backdrop-blur-xl";
    } else {
      className += " bg-transparent";
    }

    if (isNavbarOpened) {
      className += " opacity-0";
    } else {
      className += " opacity-1";
    }

    return className;
  }

  function getNavLogoSource() {
    if (isNavbarScroll || !isFixed) {
      return "/images/navbar/logo-red-transparent.png";
    }

    return "/images/navbar/logo-white-transparent.png";
  }

  function getNavUlClassName() {
    let className =
      "lg:flex hidden gap-x-10 ps-20 font-[inter] text-[16px] transition duration-400";

    if (isNavbarScroll || !isFixed) {
      className += " text-[#332C2B]";
    } else {
      className += ` text-[#FFEAEA]`;
    }

    return className;
  }

  function handleNavigation(id) {
    if (usePathName != "/") {
      router.push(`/#${id}`);
    } else {
      onNavigation(id);
    }
  }

  const navVariants = {
    hidden: {
      y: -100,
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
      },
    },
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      scale: 0.8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: 50,
      scale: 0.8,
    },
    open: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    }),
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <div>
      <motion.nav
        className={getNavClassName()}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="container justify-between mx-auto flex border-b-4 border-black">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <motion.div
                className="w-[34px] h-[34px]"
                variants={logoVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.5 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={getNavLogoSource()}
                  className="transition duration-400 w-full h-full object-contain"
                  alt=""
                />
              </motion.div>
            </Link>
            <ul className={getNavUlClassName()}>
              {navbarLinks.map((row, index) => (
                <motion.li
                  key={row.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="#"
                    onClick={() => handleNavigation(row.id)}
                    className={`relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] ${
                      isNavbarScroll ? "after:bg-[#332C2B]" : "after:bg-white"
                    } after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}
                  >
                    {row.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
          <motion.button
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={handleNavbarOpened}
            className="items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg block lg:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
            whileHover={{
              scale: 1.2,
              rotate: 90,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-5 h-5 ${
                !(isNavbarScroll || !isFixed) ? "text-white" : "text-[#F82F1E]"
              }`}
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
          </motion.button>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{
              opacity: isNavbarScroll ? 1 : 0,
              scale: isNavbarScroll ? 1 : 0.8,
              y: isNavbarScroll ? 0 : -20,
              display: isNavbarScroll ? "block" : "none",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <Link
              href="/internship/register"
              passHref
              className="bg-[#332C2B] text-white text-[inter] text-[16px] rounded-full px-8 py-3 hover:scale-110 transition duration-400 hidden lg:block"
            >
              Internship
            </Link>
          </motion.div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {isNavbarOpened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="z-10 bg-black fixed top-0 left-0 right-0 bg-opacity-80 bottom-0"
          >
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="transition duration-400 text-center m-auto left-0 right-0 z-10 bg-white z-20"
            >
              <div className="container justify-between mx-auto flex py-5">
                <div className="flex w-full items-center">
                  <motion.a
                    href="/"
                    className="flex items-center"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="w-[34px] h-[34px]">
                      <img
                        src="/images/navbar/logo-red-transparent.png"
                        className="transition duration-400 w-full h-full object-contain"
                        alt=""
                      />
                    </div>
                  </motion.a>
                </div>
                <motion.button
                  type="button"
                  onClick={handleNavbarOpened}
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                  whileHover={{
                    scale: 1.2,
                    rotate: 90,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    width="28"
                    height="29"
                    viewBox="0 0 28 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#F82F1E]"
                  >
                    <g clipPath="url(#clip0_2133_4484)">
                      <path
                        d="M5.12615 5.30921C4.51353 5.9437 4.51353 6.97242 5.12615 7.60691L11.7816 14.5L5.12615 21.3931C4.51353 22.0276 4.51353 23.0563 5.12615 23.6908C5.73876 24.3253 6.732 24.3253 7.34461 23.6908L14 16.7977L20.6554 23.6908C21.268 24.3253 22.2613 24.3253 22.8739 23.6908C23.4865 23.0563 23.4865 22.0276 22.8739 21.3931L16.2185 14.5L22.8739 7.60691C23.4865 6.97242 23.4865 5.94371 22.8739 5.30921C22.2613 4.67472 21.268 4.67472 20.6554 5.30921L14 12.2023L7.34461 5.30921C6.732 4.67472 5.73876 4.67472 5.12615 5.30921Z"
                        fill="#656A78"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2133_4484">
                        <rect width="28" height="29" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </motion.button>
              </div>

              <div className="border-black border-b-[1px] border-opacity-5 border-solid"></div>

              <ul className="text-left container mx-auto">
                {navbarLinks.map((row, i) => (
                  <motion.li
                    className="my-6"
                    key={row.id}
                    custom={i}
                    variants={menuItemVariants}
                    whileHover={{
                      x: 10,
                      scale: 1.05,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                  >
                    <a
                      href="#"
                      onClick={() => {
                        setIsNavbarOpened(false);
                        handleNavigation(row.id);
                      }}
                      className="hover:text-[#332C2B] text-[inter] text-[16px] text-[#6A6A6A] transition ease-out duration-300"
                    >
                      {row.label}
                    </a>
                  </motion.li>
                ))}
                <li className="my-[3.5rem]"></li>
                <motion.li
                  className="w-full"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.5,
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <motion.button
                    onClick={() => {
                      router.push("/internship/register");
                    }}
                    className="bg-[#332C2B] w-full text-white text-[inter] text-[16px] rounded-full py-4 hover:bg-opacity-90 transition duration-400"
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Internship
                  </motion.button>
                </motion.li>
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeNavbar;
