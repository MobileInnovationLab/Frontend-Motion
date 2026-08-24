"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";

const NavbarClientWrapper = () => {
  const pathname = usePathname();
  const [isInternship, setIsInternship] = useState(null);

  // Daftar awalan route yang dianggap sebagai auth route (yang tadinya berada di grup (auth))
  const isAuthRoute = ['/reset-password', '/login', '/register', '/forgot-password'].some(route => pathname?.startsWith(route));

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      setIsInternship(hostname.includes("internship"));
    }
  }, []);

  useEffect(() => {
    if (!isInternship) return;

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const id = hash.slice(1);
      let retries = 0;

      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else if (retries < 10) {
          retries++;
          setTimeout(tryScroll, 100);
        }
      };

      tryScroll();
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [isInternship]);

  if (isAuthRoute) return null; // Hide navbar di halaman auth
  if (isInternship === null) return null; // Wait until client-side resolves

  const navProps = isInternship
    ? {
        links: [
          { id: "internship-home", label: "Home" },
          { id: "internship-about", label: "About" },
          { id: "requirement", label: "Requirements" },
          { id: "benefit", label: "Benefits" },
          { id: "curriculum", label: "Curriculum" },
        ],
        ctaLabel: "Join Us!",
        ctaHref: "/register",
        isHome: false,
      }
    : {
        links: [
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "project", label: "Projects" },
          { id: "people", label: "People" },
          { id: "news", label: "News" },
          { id: "contact", label: "Contact Us" },
        ],
        ctaLabel: "Internship",
        ctaHref: "/internship/register",
        isHome: true,
      };

  return <Navbar {...navProps} />;
};

export default NavbarClientWrapper;
