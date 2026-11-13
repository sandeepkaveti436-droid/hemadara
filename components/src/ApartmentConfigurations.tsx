// components/ApartmentConfigurations.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type PlanType = "2bhk" | "3bhk";
type FacingType = "east" | "west";

interface PlanDetails {
  id: PlanType;
  optionTag: string;
  title: string;
  defaultFacing: FacingType;
  description: string;
  features: string[];
  ctaLabel: string;
  imageSrc: string;
  imageAlt: string;
}

const PLAN_DETAILS: Record<PlanType, PlanDetails> = {
  "2bhk": {
    id: "2bhk",
    optionTag: "Option 01",
    title: "2 BHK Apartments",
    defaultFacing: "east",
    description:
      "Designed for comfortable everyday living, with practical layouts and well-planned spaces.",
    features: [
      "Spacious living and dining area",
      "Well-designed bedrooms",
      "Functional kitchen",
      "Comfortable family spaces",
    ],
    ctaLabel: "Explore 2 BHK",
    imageSrc: "/images/2bhk-plan.jpeg",
    imageAlt: "Oceanside 2 BHK East-Facing floor plan layout",
  },
  "3bhk": {
    id: "3bhk",
    optionTag: "Option 02",
    title: "3 BHK Apartments",
    defaultFacing: "west",
    description:
      "More room for your family, your routines and the moments that matter.",
    features: [
      "Generously planned bedrooms",
      "Spacious living and dining",
      "Functional kitchen",
      "Additional space for flexible living",
    ],
    ctaLabel: "Explore 3 BHK",
    imageSrc: "/images/3bhk-plan.jpeg",
    imageAlt: "Oceanside 3 BHK West-Facing floor plan layout",
  },
};

const FACING_NOTES: Record<
  FacingType,
  { label: string; entranceNote: string; lightNote: string }
> = {
  east: {
    label: "East Facing",
    entranceNote: "East Entrance Orientation",
    lightNote: "Welcomes gentle morning sunlight into living areas.",
  },
  west: {
    label: "West Facing",
    entranceNote: "West Entrance Orientation",
    lightNote: "Captures warm afternoon daylight and evening breeze.",
  },
};

export default function ApartmentConfigurations() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("2bhk");
  const [facing, setFacing] = useState<FacingType>("east");

  // Smooth section reveal animation on scroll
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handlePlanChange = (plan: PlanType) => {
    setSelectedPlan(plan);
    setFacing(PLAN_DETAILS[plan].defaultFacing);
  };

  const activePlan = PLAN_DETAILS[selectedPlan];
  const activeFacing = FACING_NOTES[facing];

  return (
    <section
      ref={sectionRef}
      id="apartments"
      aria-labelledby="apartments-heading"
      className="border-t border-[#D8C7AA]/40 bg-[#F7F5F0] py-20 text-[#252525] sm:py-24 lg:py-32"
    >
      <div
        className={`mx-auto max-w-7xl px-5 transition-all duration-700 ease-out sm:px-6 lg:px-12 ${
          inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
        }`}
      >
        {/* TOP HEADER + PLAN & FACING CONTROLS */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <h2
              id="apartments-heading"
              className="font-serif text-4xl font-normal leading-[1.12] tracking-tight text-[#252525] sm:text-5xl"
            >
              Find the Space That Fits Your Life.
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-[#252525]/75 sm:text-base lg:text-[17px]">
              Whether you are looking for a comfortable family home or more room
              to grow, explore thoughtfully planned apartment options.
            </p>
          </div>

          {/* Plan & Orientation Switchers */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* 2 BHK / 3 BHK Tabs */}
            <div
              role="tablist"
              aria-label="Select apartment configuration"
              className="inline-flex border border-[#D8C7AA] bg-[#FFFFFF] p-1"
            >
              {(["2bhk", "3bhk"] as PlanType[]).map((type) => {
                const isActive = selectedPlan === type;
                return (
                  <button
                    key={type}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => handlePlanChange(type)}
                    className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
                      isActive
                        ? "bg-[#006B38] text-[#FFFFFF]"
                        : "text-[#252525]/75 hover:text-[#006B38]"
                    }`}
                  >
                    {type === "2bhk" ? "2 BHK" : "3 BHK"}
                  </button>
                );
              })}
            </div>

            {/* East / West Facing Switcher */}
            <div
              role="tablist"
              aria-label="Select apartment facing"
              className="inline-flex border border-[#D8C7AA] bg-[#FFFFFF] p-1"
            >
              {(["east", "west"] as FacingType[]).map((dir) => {
                const isActive = facing === dir;
                return (
                  <button
                    key={dir}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    onClick={() => setFacing(dir)}
                    className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
                      isActive
                        ? "bg-[#252525] text-[#FFFFFF]"
                        : "text-[#252525]/75 hover:text-[#252525]"
                    }`}
                  >
                    {dir === "east" ? "East Facing" : "West Facing"}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* MAIN ARCHITECTURAL SHOWCASE */}
        <div className="mt-12 grid grid-cols-1 overflow-hidden border border-[#D8C7AA]/60 bg-[#FFFFFF] lg:mt-14 lg:grid-cols-12">
          {/* Left Column (7 cols): Animated Floor Plan Image Display */}
          <div className="flex flex-col justify-between border-b border-[#D8C7AA]/50 bg-[#FBF8F1] p-4 sm:p-7 lg:col-span-7 lg:border-b-0 lg:border-r lg:p-8">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 text-xs">
              <span className="font-semibold uppercase tracking-[0.18em] text-[#006B38]">
                {selectedPlan === "2bhk" ? "2 BHK" : "3 BHK"} Floor Plan
                &middot; {activeFacing.label}
              </span>
              <span className="font-medium text-[#252525]/60">
                {activeFacing.entranceNote}
              </span>
            </div>

            {/* Smooth Cross-Fade + Subtle Scale Transition Between Plan Images */}
            <div className="relative h-[430px] w-full overflow-hidden sm:h-[540px] lg:h-[600px]">
              {(["2bhk", "3bhk"] as PlanType[]).map((planKey) => {
                const plan = PLAN_DETAILS[planKey];
                const isActive = selectedPlan === planKey;
                return (
                  <div
                    key={planKey}
                    aria-hidden={!isActive}
                    className={`absolute inset-0 transition-all duration-500 ease-out ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "pointer-events-none scale-[0.97] opacity-0"
                    }`}
                  >
                    <Image
                      src={plan.imageSrc}
                      alt={plan.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-contain"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column (5 cols): Details, Features & Logo-Green CTA */}
          <div className="flex flex-col justify-between bg-[#FFFFFF] p-7 sm:p-10 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between border-b border-[#D8C7AA]/60 pb-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#006B38]">
                  {activePlan.optionTag}
                </span>
                <span className="border border-[#006B38]/30 bg-[#F7F5F0] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#006B38]">
                  {activeFacing.label}
                </span>
              </div>

              <h3 className="mt-6 font-serif text-3xl font-normal tracking-tight text-[#252525] sm:text-4xl">
                {activePlan.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#252525]/75 sm:text-base">
                {activePlan.description}
              </p>

              {/* Orientation Benefit */}
              <div className="mt-6 border-l-2 border-[#006B38] bg-[#F7F5F0] px-4 py-3.5 transition-all duration-300">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#006B38]">
                  {activeFacing.label} Advantage
                </p>
                <p className="mt-1 text-sm text-[#252525]/80">
                  {activeFacing.lightNote}
                </p>
              </div>

              {/* Clean Feature List */}
              <div className="mt-8 border-t border-[#D8C7AA]/60 pt-6">
                <ul className="space-y-3.5">
                  {activePlan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#006B38]"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-medium text-[#252525]/90 sm:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Primary Logo-Green CTA */}
            <div className="mt-10 border-t border-[#F7F5F0] pt-6">
              <Link
                href="#contact"
                className="inline-flex w-full items-center justify-between bg-[#006B38] px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#FFFFFF] transition-colors duration-200 hover:bg-[#004A26]"
              >
                <span>{activePlan.ctaLabel}</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
