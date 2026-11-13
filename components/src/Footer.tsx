// components/Footer.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

const QUICK_LINKS = [
  { label: "Apartments", href: "#apartments" },
  { label: "Highlights", href: "#highlights" },
  { label: "Gallery", href: "#explore" },
  { label: "Location", href: "#location" },
  { label: "Builder", href: "#about-builder" },
  { label: "Enquire", href: "#site-visit" },
];

function OceansideLogo() {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Geometric Oceanside Emblem (or swap with <Image src="/logo.png" ... />) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 120 96"
        className="h-14 w-auto text-[#006B38]"
        fill="none"
      >
        {/* Center Tall Tower */}
        <path
          d="M47 44V18L60 6L73 18V44"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <path d="M60 6L73 18V41L60 29V6Z" fill="currentColor" />
        <path
          d="M47 26L60 15M47 34L60 23M60 23L73 34M60 31L73 42"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Left Tower */}
        <path
          d="M23 64V35L35 24L45 33V52"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
        <path d="M35 24L45 33V50L35 41V24Z" fill="currentColor" />
        <path
          d="M23 44L35 34M23 52L35 42"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
        />

        {/* Right Tower */}
        <path
          d="M75 52V33L85 24L97 35V64"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
        <path d="M85 24L75 33V50L85 41V24Z" fill="currentColor" />
        <path
          d="M85 34L97 44M85 42L97 52"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
        />

        {/* Foreground Pitched Roof */}
        <path
          d="M17 75L60 36L103 75"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25 81L60 49L95 81"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33 87L60 62L87 87"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* 4-Pane Window */}
        <rect x="54" y="75" width="5" height="5" fill="currentColor" />
        <rect x="61" y="75" width="5" height="5" fill="currentColor" />
        <rect x="54" y="82" width="5" height="5" fill="currentColor" />
        <rect x="61" y="82" width="5" height="5" fill="currentColor" />
      </svg>

      <span className="mt-1.5 text-sm font-bold tracking-[0.22em] text-[#006B38]">
        OCEANSIDE
      </span>
      <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.3em] text-[#252525]/70">
        Real Estate
      </span>
    </div>
  );
}

function ArchitecturalElevation() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1600 210"
      fill="none"
      preserveAspectRatio="xMidYMax slice"
      className="pointer-events-none h-28 w-full text-[#252525] sm:h-36 lg:h-44"
    >
      {/* Left Trees & Landscaping */}
      <g opacity="0.22" fill="currentColor">
        <circle cx="58" cy="148" r="28" />
        <circle cx="88" cy="140" r="24" />
        <circle cx="36" cy="158" r="18" />
        <circle cx="136" cy="162" r="20" />
        <circle cx="160" cy="166" r="16" />
        <circle cx="520" cy="148" r="20" />
        <circle cx="545" cy="142" r="22" />
        <circle cx="578" cy="150" r="18" />
        <circle cx="1010" cy="156" r="22" />
        <circle cx="1040" cy="152" r="18" />
        <circle cx="1145" cy="144" r="24" />
        <circle cx="1185" cy="138" r="28" />
        <circle cx="1225" cy="148" r="22" />
        <circle cx="1272" cy="144" r="26" />
        <circle cx="1315" cy="150" r="22" />
        <circle cx="1525" cy="150" r="26" />
        <circle cx="1556" cy="156" r="20" />
      </g>

      {/* Left Grid Residential Tower */}
      <g stroke="currentColor" strokeOpacity="0.32" strokeWidth="1">
        <rect
          x="315"
          y="40"
          width="132"
          height="150"
          fill="#FFFFFF"
          fillOpacity="0.7"
        />
        {/* Vertical Facade Grid */}
        <path
          d="M331 40V190M348 40V190M365 40V190M381 40V190M398 40V190M414 40V190M431 40V190"
          strokeOpacity="0.16"
        />
        {/* Horizontal Floor Plates */}
        <path
          d="M315 58H447M315 76H447M315 94H447M315 112H447M315 130H447M315 148H447M315 166H447"
          strokeOpacity="0.18"
        />
        {/* Recessed Architectural Openings */}
        <rect
          x="408"
          y="54"
          width="32"
          height="14"
          fill="currentColor"
          fillOpacity="0.35"
          stroke="none"
        />
        <rect
          x="320"
          y="150"
          width="30"
          height="14"
          fill="currentColor"
          fillOpacity="0.35"
          stroke="none"
        />
        <rect
          x="408"
          y="170"
          width="22"
          height="20"
          fill="currentColor"
          fillOpacity="0.35"
          stroke="none"
        />
      </g>

      {/* Low Glazed Pavilion */}
      <g stroke="currentColor" strokeOpacity="0.3" strokeWidth="1">
        <rect
          x="462"
          y="156"
          width="108"
          height="34"
          fill="#FFFFFF"
          fillOpacity="0.7"
        />
        <path
          d="M480 156V190M498 156V190M516 156V190M534 156V190M552 156V190"
          strokeOpacity="0.16"
        />
      </g>

      {/* Center Cantilevered Building */}
      <g stroke="currentColor" strokeOpacity="0.34" strokeWidth="1">
        {/* Upper Right Penthouse Volume */}
        <rect
          x="920"
          y="42"
          width="138"
          height="44"
          fill="#FFFFFF"
          fillOpacity="0.8"
        />
        <path
          d="M942 42V86M965 42V86M988 42V86M1011 42V86M1034 42V86M920 58H1058M920 72H1058"
          strokeOpacity="0.16"
        />
        <rect
          x="1032"
          y="44"
          width="20"
          height="16"
          fill="currentColor"
          fillOpacity="0.35"
          stroke="none"
        />
        <rect
          x="928"
          y="60"
          width="24"
          height="14"
          fill="currentColor"
          fillOpacity="0.35"
          stroke="none"
        />

        {/* Stepped Terrace Deck */}
        <rect
          x="650"
          y="74"
          width="370"
          height="22"
          fill="#FFFFFF"
          fillOpacity="0.75"
        />
        <path d="M650 84H1020" strokeOpacity="0.18" />

        {/* Main Cantilevered Fascia */}
        <rect
          x="624"
          y="96"
          width="478"
          height="46"
          fill="#FFFFFF"
          fillOpacity="0.92"
        />
        <path
          d="M644 96V142M664 96V142M684 96V142M704 96V142M724 96V142M744 96V142M764 96V142M784 96V142M804 96V142M824 96V142M844 96V142M864 96V142M884 96V142M904 96V142M924 96V142M944 96V142M964 96V142M984 96V142M1004 96V142M1024 96V142M1044 96V142M1064 96V142M1084 96V142"
          strokeOpacity="0.15"
        />

        {/* Recessed Glazed Ground Floor & Diagonal Shadow */}
        <rect
          x="662"
          y="142"
          width="408"
          height="48"
          fill="#FFFFFF"
          fillOpacity="0.65"
        />
        <polygon
          points="662,142 785,142 662,188"
          fill="currentColor"
          fillOpacity="0.14"
          stroke="none"
        />
        <rect
          x="854"
          y="142"
          width="48"
          height="48"
          fill="currentColor"
          fillOpacity="0.22"
          stroke="none"
        />
        <path
          d="M690 142V190M720 142V190M750 142V190M780 142V190M810 142V190M935 142V190M965 142V190M995 142V190M1025 142V190"
          strokeOpacity="0.16"
        />
      </g>

      {/* Sloped Landscape Horizon & Undercroft Ramp */}
      <path
        d="M0 198L210 190H1360L1600 198"
        stroke="currentColor"
        strokeOpacity="0.38"
        strokeWidth="1.2"
      />
      <path
        d="M652 190L672 208H838L858 190"
        fill="currentColor"
        fillOpacity="0.16"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1"
      />
    </svg>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="w-full border-t border-[#E6DEC8] bg-[#FAF8F4] text-[#252525]">
      {/* Top 3 Columns inside Full-Width Container */}
      <div className="mx-auto max-w-7xl px-6 pt-14 sm:px-10 sm:pt-16 lg:px-12 lg:pt-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Brand, Tagline & Contact */}
          <div className="lg:col-span-5">
            <div>
              <h3 className="font-serif text-2xl font-normal tracking-tight text-[#006B38]">
                OCEANSIDE
              </h3>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9B8060]">
                Real Estate &middot; Crafted for Everyday Living
              </p>
            </div>

            <p className="mt-4 max-w-xs text-xs leading-relaxed text-[#252525]/75 sm:text-sm">
              Thoughtfully planned 2 &amp; 3 BHK residences in Gachibowli,
              Hyderabad.
            </p>

            <ul className="mt-6 space-y-3 text-xs text-[#252525]/80 sm:text-sm">
              <li className="flex items-start gap-2.5">
                <svg
                  aria-hidden="true"
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#006B38]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Gachibowli, Hyderabad</span>
              </li>

              <li className="flex items-center gap-2.5">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-[#006B38]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a
                  href="tel:+919876543210"
                  className="transition-colors hover:text-[#006B38]"
                >
                  +91 98765 43210
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-[#006B38]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a
                  href="mailto:sales@oceanside.in"
                  className="transition-colors hover:text-[#006B38]"
                >
                  sales@oceanside.in
                </a>
              </li>
            </ul>

            <p className="mt-4 text-[11px] text-[#252525]/55">
              RERA Reg. No.: [Insert Verified RERA Number]
            </p>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-xl font-normal text-[#006B38]">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation" className="mt-4">
              <ul className="space-y-2.5 text-xs font-medium text-[#252525]/80 sm:text-sm">
                {QUICK_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-[#006B38]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right Column: Newsletter */}
          <div className="sm:col-span-2 lg:col-span-4">
            <h3 className="font-serif text-xl font-normal text-[#006B38]">
              Newsletter
            </h3>

            {subscribed ? (
              <div className="mt-4 rounded-lg border border-[#006B38]/25 bg-[#006B38]/5 p-4 text-xs text-[#006B38]">
                <p className="font-semibold">Thank you for subscribing.</p>
                <p className="mt-1 text-[#252525]/70">
                  You&apos;ll receive project updates from Oceanside.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="mt-4">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email *"
                    aria-label="Email address for newsletter"
                    className="w-full rounded-md border border-[#D8C7AA] bg-[#FFFFFF] py-3 pl-4 pr-10 text-xs text-[#252525] placeholder:text-[#252525]/45 focus:border-[#006B38] focus:outline-none sm:text-sm"
                  />
                  <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#006B38]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>

                <button
                  type="submit"
                  className="mt-3 rounded-md bg-[#006B38] px-6 py-2.5 text-xs font-semibold tracking-wide text-[#FFFFFF] transition-colors hover:bg-[#004A26]"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Full-Width Architectural Elevation Silhouette */}
      <div className="mt-8 w-full overflow-hidden">
        <ArchitecturalElevation />
      </div>

      {/* Centered Logo + Tagline Badge, Copyright & Social Links */}
      <div className="mx-auto max-w-7xl px-6 pb-10 sm:px-10 lg:px-12">
        <div className="-mt-8 flex flex-col items-center text-center">
          <div className="relative z-10 rounded-2xl border border-[#E6DEC8] bg-[#FFFFFF] px-6 py-4 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.12)]">
            <OceansideLogo />
          </div>

          <p className="mt-5 text-xs text-[#252525]/70">
            Copyright {new Date().getFullYear()} Oceanside Real Estate. All
            rights reserved.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#252525]/75">
            <a
              href="#site-visit"
              aria-label="Facebook"
              className="inline-flex items-center gap-2 transition-colors hover:text-[#006B38]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#D8C7AA] text-[#006B38]">
                <svg
                  aria-hidden="true"
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </span>
              <span>Facebook</span>
            </a>

            <a
              href="#site-visit"
              aria-label="Twitter"
              className="inline-flex items-center gap-2 transition-colors hover:text-[#006B38]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#D8C7AA] text-[#006B38]">
                <svg
                  aria-hidden="true"
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </span>
              <span>Twitter</span>
            </a>

            <a
              href="#site-visit"
              aria-label="Instagram"
              className="inline-flex items-center gap-2 transition-colors hover:text-[#006B38]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#D8C7AA] text-[#006B38]">
                <svg
                  aria-hidden="true"
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </span>
              <span>Instagram</span>
            </a>

            <a
              href="#site-visit"
              aria-label="YouTube"
              className="inline-flex items-center gap-2 transition-colors hover:text-[#006B38]"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#D8C7AA] text-[#006B38]">
                <svg
                  aria-hidden="true"
                  className="h-3 w-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3v6Z" />
                </svg>
              </span>
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
