// components/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Residences", href: "#apartments" },
  { label: "Highlights", href: "#highlights" },
  { label: "Gallery", href: "#explore" },
  { label: "Location", href: "#location" },
  { label: "About", href: "#about-builder" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-200 ${
        isScrolled
          ? "border-[#D8C7AA]/80 bg-[#FFFFFF]/95 shadow-[0_6px_24px_-12px_rgba(37,37,37,0.12)] backdrop-blur-md"
          : "border-[#D8C7AA]/50 bg-[#F7F5F0]/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-12">
        {/* Left Side: Logo + Brand Name + Bold Logo-Green Tagline */}
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="flex shrink-0 items-center gap-3"
        >
          <div className="h-14 w-14 shrink-0 overflow-hidden sm:h-16 sm:w-16">
            <Image
              src="/logo/oceanside.png"
              alt="Oceanside logo"
              width={200}
              height={200}
              priority
              className="h-full w-full scale-[1.10] object-contain mix-blend-multiply"
            />
          </div>

          <div className="flex flex-col border-l border-[#D8C7AA]/70 pl-3">
            <span className="whitespace-nowrap font-serif text-lg font-medium uppercase tracking-[0.08em] text-[#252525] sm:text-xl lg:text-2xl">
              Oceanside
            </span>
            <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.22em] text-[#006B38] sm:text-[11px]">
              Agent Real Estate
            </span>
          </div>
        </Link>

        {/* Center Navigation (Tablet md+ and Desktop) */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-5 text-[13px] font-medium tracking-wide text-[#252525]/80 md:flex lg:gap-8 xl:gap-10"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative whitespace-nowrap py-1 transition-colors hover:text-[#006B38]"
            >
              <span>{link.label}</span>
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#006B38] transition-all duration-200 group-hover:w-full"
              />
            </Link>
          ))}
        </nav>

        {/* Right Side: Bold Contact Number + Logo-Green Enquire CTA + Mobile Toggle */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          <a
            href="tel:+919876543210"
            className="hidden whitespace-nowrap text-[18px] font-bold tracking-wider text-[#006B38] transition-colors hover:text-[#004A26] xl:inline-block"
          >
            +91 98765 43210
          </a>

          <Link
            href="#site-visit"
            className="hidden whitespace-nowrap bg-[#006B38] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-[#FFFFFF] transition-colors duration-200 hover:bg-[#004A26] md:inline-flex lg:px-6 lg:py-3"
          >
            Enquire
          </Link>

          {/* Mobile Menu Toggle (shown below md) */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-[#D8C7AA] bg-[#FFFFFF] md:hidden"
          >
            <span
              className={`h-[1.5px] w-5 bg-[#006B38] transition-transform duration-200 ${
                mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-[#006B38] transition-transform duration-200 ${
                mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#D8C7AA]/60 bg-[#F7F5F0] px-4 py-5 sm:px-6 md:hidden">
          <nav className="flex flex-col divide-y divide-[#D8C7AA]/40">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3.5 text-sm font-medium text-[#252525] transition-colors hover:text-[#006B38]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-5 flex flex-col gap-3 border-t border-[#D8C7AA]/60 pt-5">
            <a
              href="tel:+919876543210"
              className="text-[18px] font-bold text-[#006B38]"
            >
              +91 98765 43210
            </a>
            <Link
              href="#site-visit"
              onClick={() => setMobileOpen(false)}
              className="inline-flex w-full items-center justify-center bg-[#006B38] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-[#FFFFFF] transition-colors hover:bg-[#004A26]"
            >
              Schedule a Site Visit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
