// components/ProjectIntroduction.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ARCHITECTURAL_PILLARS = [
  {
    label: "Collection",
    value: "Limited Residences",
    note: "Quiet, low-density living",
    imageSrc:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    imageAlt:
      "Low-density boutique residential architecture surrounded by greenery",
  },
  {
    label: "Layouts",
    value: "2 & 3 BHK Homes",
    note: "Practical, sunlit spaces",
    imageSrc:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    imageAlt:
      "Sunlit open living and dining apartment layout with natural finishes",
  },
  {
    label: "Philosophy",
    value: "Everyday Comfort",
    note: "Designed around family life",
    imageSrc:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    imageAlt:
      "Warm inviting residential living space designed for everyday family comfort",
  },
];

export default function ProjectIntroduction() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="introduction"
      aria-labelledby="intro-heading"
      className="bg-[#FFFFFF] py-20 text-[#252525] sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        {/* TOP ROW: Clean Asymmetric Editorial Spread */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          {/* Left: Headline & Opening Statement */}
          <div className="lg:col-span-6">
            <h2
              id="intro-heading"
              className="font-serif text-4xl font-normal leading-[1.12] tracking-tight text-[#252525] sm:text-5xl lg:text-[52px]"
            >
              A Place That Feels Like Yours.
            </h2>

            <p className="mt-5 max-w-lg text-base font-normal leading-relaxed text-[#252525]/85 sm:text-lg">
              A home is more than just a place to live. It is where everyday
              moments become lasting memories.
            </p>
          </div>

          {/* Right: Concise Context & Logo-Green CTA */}
          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-sm leading-relaxed text-[#252525]/70 sm:text-[15px]">
              Our residential project brings together considered architecture,
              comfortable living spaces and practical design to create a
              welcoming environment for you and your family. With a limited
              collection of residences, every detail is planned to make everyday
              living more comfortable.
            </p>

            <div className="mt-7">
              <Link
                href="#apartments"
                className="inline-flex w-full items-center justify-center gap-3 bg-[#006B38] px-8 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#FFFFFF] transition-colors duration-200 hover:bg-[#004A26] sm:w-auto"
              >
                <span>Discover the Project</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Interactive Photo Switcher + Clickable Pillars */}
        <div className="mt-14 grid grid-cols-1 overflow-hidden border border-[#D8C7AA]/50 lg:mt-16 lg:grid-cols-12">
          {/* Left: Cross-Fading Architectural Visual (8 cols) */}
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F7F5F0] lg:col-span-8 lg:aspect-auto lg:min-h-[500px]">
            {ARCHITECTURAL_PILLARS.map((pillar, index) => (
              <div
                key={pillar.label}
                aria-hidden={index !== activeIndex}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={pillar.imageSrc}
                  alt={pillar.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right: Interactive Warm Ivory Pillar Cards (4 cols) */}
          <div className="flex flex-col justify-between bg-[#F7F5F0] p-6 sm:p-8 lg:col-span-4 lg:p-9">
            <div className="flex items-center justify-between border-b border-[#D8C7AA]/60 pb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#006B38]">
                At a Glance
              </span>
              <span className="text-xs font-medium text-[#252525]/55">
                Select to view
              </span>
            </div>

            <div className="my-4 flex flex-col divide-y divide-[#D8C7AA]/60 lg:my-3">
              {ARCHITECTURAL_PILLARS.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-pressed={isActive}
                    className={`group w-full border-l-[3px] px-4 py-5 text-left transition-all duration-200 sm:px-5 sm:py-6 ${
                      isActive
                        ? "border-[#006B38] bg-[#FFFFFF] shadow-sm"
                        : "border-transparent bg-transparent hover:bg-[#FFFFFF]/60"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#006B38] sm:text-[13px]">
                        {item.label}
                      </p>
                      <span
                        aria-hidden="true"
                        className={`text-sm transition-opacity duration-200 ${
                          isActive
                            ? "text-[#006B38] opacity-100"
                            : "text-[#252525]/40 opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        &rarr;
                      </span>
                    </div>

                    <p className="mt-1.5 font-serif text-2xl font-normal leading-snug text-[#252525] sm:text-[28px]">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm text-[#252525]/70 sm:text-[15px]">
                      {item.note}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="border-t border-[#D8C7AA]/60 pt-5">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#006B38] transition-colors hover:text-[#004A26] sm:text-sm"
              >
                <span>Arrange a Private Walkthrough</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
