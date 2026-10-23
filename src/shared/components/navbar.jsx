"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/shared/components/ThemeToggle";
import { useTheme } from "@/shared/context/ThemeContext";

const Navbar = ({
  links = [],
  ctaLabel = "Join Us!",
  ctaHref = "/register",
  onNavigation,
  isFixed = true,
  isHome = false,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { isDark } = useTheme();
  const [isNavbarScroll, setIsNavbarScroll] = useState(false);
  const [isNavbarOpened, setIsNavbarOpened] = useState(false);

  const isProjectPage =
    pathname === "/project" || pathname?.startsWith("/project/");


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => setIsNavbarScroll(window.scrollY >= 90);

  const handleNavbarOpened = () => setIsNavbarOpened((prev) => !prev);

  const handleNavigation = (id) => {
    setIsNavbarOpened(false);
    const isOnHome = pathname === "/" || pathname.startsWith("/#");

    if (!isOnHome && isHome) {
      router.push(`/#${id}`);
    } else if (isHome) {
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          history.replaceState(null, "", `#${id}`);
        }
      }, 100);
    } else {
      const currentPath = window.location.pathname;
      if (currentPath !== "/") {
        router.push(`/#${id}`);
      } else {
        setTimeout(() => {
          const section = document.getElementById(id);
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            history.replaceState(null, "", `#${id}`);
          }
        }, 100);
      }
    }
  };

  function getNavClassName() {
    const isHomePath = pathname === "/";
    const isInternshipPath =
      pathname === "/internship" || pathname.startsWith("/internship/");

    let className = `transition duration-300 ${
      isFixed ? "fixed" : ""
    } text-center m-auto left-0 right-0 py-4 md:py-5 z-30`;

    if (isNavbarScroll || !isFixed) {
      className += isProjectPage
        ? " shadow-sm backdrop-blur-xl bg-white/85 dark:bg-[#090D16]/85 border-b border-slate-200/60 dark:border-[#1E293B]/60"
        : " shadow-sm backdrop-blur-xl bg-white/85 border-b border-slate-200/60";
    } else {
      if (isHomePath || isInternshipPath) {
        className += " bg-transparent";
      } else if (isProjectPage) {
        className +=
          " bg-[#C1271A] dark:bg-[#0F172A] border-b border-transparent dark:border-[#1E293B]";
      } else {
        className += " bg-[#C1271A]";
      }
    }

    className += isNavbarOpened ? " opacity-0" : " opacity-1";

    return className;
  }

  const getTextColor = () => {
    if (isNavbarScroll) {
      return isProjectPage
        ? "text-[#332C2B] dark:text-[#F8FAFC]"
        : "text-[#332C2B]";
    }
    return "text-white";
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 },
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
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: 50, scale: 0.8 },
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

  return (
    <div>
      <motion.nav
        className={getNavClassName()}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div
          className={`container justify-between mx-auto flex items-center ${
            isProjectPage
              ? "border-b-2 border-black/10 dark:border-[#1E293B]"
              : "border-b-2 border-black/10"
          } pb-3`}
        >
          <div className="flex items-center">
            {/* Logo */}
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
                  src={
                    isProjectPage && isDark
                      ? "/images/navbar/logo-white-transparent.png"
                      : isNavbarScroll || !isFixed
                      ? "/images/navbar/logo-red-transparent.png"
                      : "/images/navbar/logo-white-transparent.png"
                  }
                  className="transition duration-400 w-full h-full object-contain"
                  alt="motion logo"
                />
              </motion.div>
            </Link>

            {/* Desktop Menu */}
            <ul
              className={`hidden lg:flex gap-x-8 xl:gap-x-10 ps-12 xl:ps-20 font-[inter] text-[15px] xl:text-[16px] transition duration-400 ${getTextColor()}`}
            >
              {links.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.08,
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="#"
                    onClick={() => handleNavigation(item.id)}
                    className={`relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] ${
                      isNavbarScroll
                        ? isProjectPage
                          ? "after:bg-[#332C2B] dark:after:bg-[#F8FAFC]"
                          : "after:bg-[#332C2B]"
                        : "after:bg-white"
                    } after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center`}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Action Cluster: CTA + Theme Toggle (only on project showcase) */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{
                opacity: isNavbarScroll ? 1 : 0,
                scale: isNavbarScroll ? 1 : 0.8,
                y: isNavbarScroll ? 0 : -20,
                display: isNavbarScroll ? "block" : "none",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Link
                href={ctaHref}
                className={`hidden lg:block ${
                  isProjectPage
                    ? "bg-[#332C2B] dark:bg-[#1E293B] hover:bg-black dark:hover:bg-[#334155] border border-transparent dark:border-[#334155]"
                    : "bg-[#332C2B] hover:bg-black"
                } text-white text-[inter] text-[15px] rounded-full px-7 py-2.5 transition duration-300`}
              >
                {ctaLabel}
              </Link>
            </motion.div>

            {/* Dark Mode Theme Switcher Toggle - Only appears on project showcase page */}
            {isProjectPage && <ThemeToggle />}

            {/* Mobile menu trigger button */}
            <motion.button
              onClick={handleNavbarOpened}
              className="lg:hidden p-2 w-10 h-10 text-sm text-gray-500 dark:text-gray-300 rounded-lg focus:outline-none"
              aria-label="Open mobile menu"
              whileHover={{
                scale: 1.15,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className={`w-6 h-6 ${
                  isProjectPage && isDark
                    ? "text-[#F8FAFC]"
                    : !isNavbarScroll && isFixed
                    ? "text-white"
                    : "text-[#F82F1E]"
                }`}
                viewBox="0 0 17 14"
                fill="none"
              >
                <path
                  d="M1 1h15M1 7h15M1 13h15"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isNavbarOpened && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="z-10 bg-black fixed top-0 left-0 right-0 bg-opacity-80 bottom-0"
          >
            <motion.nav
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className={`transition duration-400 text-center m-auto left-0 right-0 ${
                isProjectPage
                  ? "bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-[#1E293B]"
                  : "bg-white border-b border-slate-200"
              } z-20`}
            >
              <div className="container justify-between mx-auto flex items-center py-5">
                <div className="flex items-center">
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
                        src={
                          isProjectPage && isDark
                            ? "/images/navbar/logo-white-transparent.png"
                            : "/images/navbar/logo-red-transparent.png"
                        }
                        className="transition duration-400 w-full h-full object-contain"
                        alt="logo"
                      />
                    </div>
                  </motion.a>
                </div>

                <div className="flex items-center gap-3">
                  {/* ThemeToggle on mobile only when on project showcase */}
                  {isProjectPage && <ThemeToggle />}
                  <motion.button
                    type="button"
                    onClick={handleNavbarOpened}
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 dark:text-gray-300 rounded-lg focus:outline-none"
                    aria-label="Close mobile menu"
                    whileHover={{
                      scale: 1.2,
                      rotate: 90,
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg
                      width="28"
                      height="29"
                      viewBox="0 0 28 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#F82F1E] dark:text-[#F87171]"
                    >
                      <g clipPath="url(#clip0_2133_4484)">
                        <path
                          d="M5.1 5.3c-.6.6-.6 1.6 0 2.3l6.7 6.9-6.7 6.9c-.6.6-.6 1.6 0 2.3.6.6 1.6.6 2.3 0l6.7-6.9 6.7 6.9c.6.6 1.6.6 2.3 0 .6-.6.6-1.6 0-2.3L16.2 14.5l6.7-6.9c.6-.6.6-1.6 0-2.3-.6-.6-1.6-.6-2.3 0l-6.7 6.9-6.7-6.9c-.6-.6-1.6-.6-2.3 0Z"
                          fill="currentColor"
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
              </div>

              <div className="border-b border-black/10 dark:border-[#1E293B]"></div>

              <ul className="text-left container mx-auto py-4">
                {links.map((item, i) => (
                  <motion.li
                    key={item.id}
                    className="my-5"
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
                      onClick={() => handleNavigation(item.id)}
                      className={`hover:text-[#332C2B] ${
                        isProjectPage
                          ? "dark:hover:text-[#F8FAFC] text-[#6A6A6A] dark:text-[#CBD5E1]"
                          : "text-[#6A6A6A]"
                      } text-[inter] text-[16px] transition ease-out duration-300`}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
                <li className="my-6" />
                <motion.li
                  className="w-full"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <motion.button
                    onClick={() => router.push(ctaHref)}
                    className={`bg-[#332C2B] ${
                      isProjectPage
                        ? "dark:bg-[#1E293B] dark:hover:bg-[#334155] border border-transparent dark:border-[#334155]"
                        : ""
                    } w-full text-white text-[inter] text-[16px] rounded-full py-4 hover:bg-opacity-90 transition duration-400`}
                    whileHover={{
                      scale: 1.03,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {ctaLabel}
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

export default Navbar;

