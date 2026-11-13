// components/HeroSection.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HERO_SLIDES = [
  {
    src: "/images/hero-1.jpg",
    alt: "Contemporary low-rise residential apartment building with landscaped gardens",
  },
  {
    src: "/images/hero-2.jpg",
    alt: "Modern residential courtyard apartments illuminated at twilight",
  },
  {
    src: "/images/hero-3.jpg",
    alt: "Sunlit luxury apartment building with spacious glass balconies and entrance portico",
  },
];

const HIGHLIGHTS = [
  "Premium 2 & 3 BHK Apartments",
  "Thoughtfully Planned Spaces",
  "Limited Residences",
];

// Currently set to 5 seconds (5,000 ms) so slides rotate naturally while browsing.
// If you literally want 5 minutes, change this to: 5 * 60 * 1000
const SLIDE_INTERVAL_MS = 5000;

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[620px] w-full flex-col justify-end overflow-hidden bg-[#0A140F] text-[#FFFFFF] sm:min-h-[700px] lg:min-h-[86vh]"
    >
      {/* Automatic Cross-Fade Architectural Slides */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.src}
          aria-hidden={index !== activeSlide}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Bottom-Focused Gradient Overlay (Keeps upper building bright & lower text 100% readable) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07120C]/95 via-[#07120C]/65 via-45% to-[#07120C]/10"
      />

      {/* Lower-Middle Centered Editorial Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-5 pb-8 pt-44 text-center sm:px-8 sm:pb-12 sm:pt-56 lg:pt-64">
        {/* Trust Eyebrow */}
        <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#D8C7AA] sm:text-xs">
          RERA Approved Residences
        </p>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="font-serif text-3xl font-medium leading-[1.12] tracking-tight text-[#FFFFFF] drop-shadow-md sm:text-5xl lg:text-6xl"
        >
          A Better Way to Come Home.
        </h1>

        {/* Concise Centered Subheading */}
        <p className="mt-3.5 max-w-xl text-sm leading-relaxed text-[#F7F5F0]/95 drop-shadow-sm sm:mt-4 sm:text-base lg:text-[17px]">
          Thoughtfully designed residences that bring together comfort, modern
          architecture and everyday convenience.
        </p>

        {/* Clean CTAs */}
        <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:gap-4">
          <Link
            href="#apartments"
            className="inline-flex w-full items-center justify-center bg-[#006B38] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#FFFFFF] shadow-md transition-colors duration-200 hover:bg-[#004A26] sm:w-auto"
          >
            Explore Apartments
          </Link>

          <Link
            href="#site-visit"
            className="inline-flex w-full items-center justify-center border border-[#FFFFFF]/75 bg-[#07120C]/40 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#FFFFFF] backdrop-blur-sm transition-colors duration-200 hover:bg-[#FFFFFF] hover:text-[#252525] sm:w-auto"
          >
            Schedule a Site Visit
          </Link>
        </div>

        {/* Minimalist Slide Indicators */}
        <div
          role="tablist"
          aria-label="Hero image slides"
          className="mt-6 flex items-center gap-2.5"
        >
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={index === activeSlide}
              aria-label={`View slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              className={`h-[3px] transition-all duration-300 ${
                index === activeSlide
                  ? "w-8 bg-[#FFFFFF]"
                  : "w-4 bg-[#FFFFFF]/45 hover:bg-[#FFFFFF]/75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Bottom Anchored Highlights Strip */}
      <div className="relative z-10 w-full border-t border-[#FFFFFF]/15 bg-[#07120C]/80 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-5 py-3.5 sm:px-8 sm:py-4">
          <ul className="flex flex-col items-center justify-center gap-2 text-center text-xs font-medium tracking-wide text-[#F7F5F0]/95 sm:flex-row sm:gap-8 sm:text-[13px]">
            {HIGHLIGHTS.map((item, idx) => (
              <li key={item} className="flex items-center gap-2.5 sm:gap-8">
                {idx > 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-1 w-1 rounded-full bg-[#D8C7AA] sm:inline-block"
                  />
                )}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
