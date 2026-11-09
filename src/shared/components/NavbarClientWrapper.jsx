"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import AnnouncementBar from "./AnnouncementBar";

const NavbarClientWrapper = () => {
  const pathname = usePathname();
  const isInternshipRoute = Boolean(
    pathname?.startsWith("/internship") || pathname?.startsWith("/member")
  );
  const [isInternship, setIsInternship] = useState(isInternshipRoute);
  const [announcementHeight, setAnnouncementHeight] = useState(0);

  // Daftar awalan route yang dianggap sebagai auth route (yang tadinya berada di grup (auth))
  const isAuthRoute = ['/reset-password', '/login', '/register', '/forgot-password'].some(route => pathname?.startsWith(route));

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      setIsInternship(
        hostname.includes("member") ||
        hostname.includes("internship") ||
        window.location.pathname.startsWith("/internship") ||
        window.location.pathname.startsWith("/member")
      );
    }
  }, [pathname]);

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

  const navProps = isInternship
    ? {
        links: [
          { id: "internship-home", label: "Home" },
          { id: "internship-about", label: "About" },
          { id: "requirement", label: "Requirements" },
          { id: "benefit", label: "Benefits" },
          { id: "curriculum", label: "Curriculum" },
        ],
        ctaLabel: "Register Now!",
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
        ctaLabel: "Join Us",
        ctaHref: "/internship",
        isHome: true,
      };

  const activeTopOffset = !isInternship ? announcementHeight : 0;

  return (
    <>
      {!isInternship && (
        <AnnouncementBar
          ctaHref="/internship"
          onHeightChange={setAnnouncementHeight}
        />
      )}
      {activeTopOffset > 0 && (
        <div
          aria-hidden="true"
          style={{ height: `${activeTopOffset}px` }}
        />
      )}
      <Navbar {...navProps} topOffset={activeTopOffset} />
    </>
  );
};

export default NavbarClientWrapper;
