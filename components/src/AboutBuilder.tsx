// components/AboutBuilder.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, motion, useInView } from "framer-motion";

// Update with your verified company metrics, credentials & delivered projects
const TRACK_RECORD = [
  {
    target: 12,
    suffix: "+",
    label: "Years Experience",
    detail: "Residential Development",
  },
  {
    target: 8,
    suffix: "+",
    label: "Projects Delivered",
    detail: "Across Residential Neighbourhoods",
  },
  {
    target: 100,
    suffix: "%",
    label: "Clear Title & RERA",
    detail: "Sanctioned & Bank-Approved",
  },
];

const CREDENTIAL_PILLS = [
  "RERA Registered Developer",
  "Clear Legal & Bank Approvals",
  "Post-Handover Warranty Care",
];

const CONSTRUCTION_STANDARDS = [
  {
    number: "01",
    title: "Structural Engineering",
    summary: "Soil-tested IS-code RCC framing",
  },
  {
    number: "02",
    title: "Material Integrity",
    summary: "Certified steel & branded cement",
  },
  {
    number: "03",
    title: "MEP & Waterproofing",
    summary: "Concealed copper & wet-area sealing",
  },
  {
    number: "04",
    title: "Quality Inspections",
    summary: "Stage-wise engineering checks",
  },
];

const PREVIOUS_PROJECTS = [
  {
    name: "Meridian Courtyard",
    subtitle: "2 & 3 BHK Apartments • Completed & Occupied",
    imageSrc:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "The Verandah Residences",
    subtitle: "Boutique Low-Density Homes • Handed Over",
    imageSrc:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Oakwood Terraces",
    subtitle: "2 & 3 BHK Residences • Completed & Occupied",
    imageSrc:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=85",
  },
];

function getCircularOffset(index: number, activeIndex: number, total: number) {
  let diff = index - activeIndex;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setValue(latest),
    });

    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {Math.round(value)}
      <span className="text-[#6EE7B7]">{suffix}</span>
    </span>
  );
}

export default function AboutBuilder() {
  const [activeIndex, setActiveIndex] = useState(1);
  const total = PREVIOUS_PROJECTS.length;

  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % total);

  return (
    <section
      id="about-builder"
      aria-labelledby="builder-heading"
      className="border-t border-[#D8C7AA]/40 bg-[#0D1611] text-[#FFFFFF]"
    >
      {/* 1. Full-Bleed Architectural Image + Centered Bottom Content */}
      <div className="relative flex min-h-[500px] w-full items-end justify-center overflow-hidden sm:min-h-[580px] lg:min-h-[640px]">
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85"
          alt="Residential architecture by Meridian Estates"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0D1611] via-[#0D1611]/55 to-black/15"
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto max-w-3xl px-4 pb-12 pt-36 text-center sm:px-6 sm:pb-16 lg:pb-20"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6EE7B7]">
            About the Builder &middot; Meridian Estates
          </p>

          <h2
            id="builder-heading"
            className="mt-3 font-serif text-3xl font-normal leading-[1.12] tracking-tight text-[#FFFFFF] sm:text-5xl lg:text-[54px]"
          >
            Built with Purpose. Designed for Living.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            Low-density residences crafted with practical floor plans, enduring
            materials, and on-schedule handover.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {CREDENTIAL_PILLS.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-[#FFFFFF] backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#6EE7B7]" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 2. Scroll-Animated Track Record & Construction Quality */}
      <div className="relative w-full overflow-hidden border-t border-white/10 bg-[#0D1611] py-16 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,107,56,0.28),_transparent_65%)]"
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-8 border-b border-white/15 pb-12 text-center sm:grid-cols-3 sm:gap-6">
            {TRACK_RECORD.map((item) => (
              <div key={item.label}>
                <p className="font-serif text-5xl font-normal tracking-tight text-[#FFFFFF] sm:text-6xl">
                  <AnimatedCounter target={item.target} suffix={item.suffix} />
                </p>
                <p className="mt-2.5 text-sm font-semibold text-[#FFFFFF]">
                  {item.label}
                </p>
                <p className="mt-0.5 text-xs text-white/55">{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 text-center sm:grid-cols-4 sm:text-left">
            {CONSTRUCTION_STANDARDS.map((std) => (
              <div key={std.number}>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-[#6EE7B7]">
                  {std.number}
                </span>
                <p className="mt-1 text-sm font-medium text-[#FFFFFF]">
                  {std.title}
                </p>
                <p className="mt-1 text-xs text-white/60">{std.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Full-Width Coverflow Carousel (Active Image = 65% Screen Width) */}
      <div className="w-full overflow-hidden border-t border-white/10 bg-[#252422] py-16 text-[#FFFFFF] sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h3 className="font-serif text-3xl font-normal tracking-tight text-[#FFFFFF] sm:text-4xl">
            Track Record of Delivery
          </h3>
          <p className="mt-2 text-sm text-white/75 sm:text-base">
            Completed communities by{" "}
            <span className="font-medium text-[#C8A46B]">Meridian Estates</span>
          </p>
        </div>

        {/* Full-Width 100% Stage (Center Card = 65% on Desktop) */}
        <div className="relative mt-10 flex h-[280px] w-full items-center justify-center sm:mt-12 sm:h-[400px] lg:h-[500px]">
          {PREVIOUS_PROJECTS.map((project, idx) => {
            const offset = getCircularOffset(idx, activeIndex, total);
            const isCenter = offset === 0;

            return (
              <motion.div
                key={project.name}
                initial={false}
                animate={{
                  x: offset === 0 ? "0%" : offset < 0 ? "-35%" : "35%",
                  scale: isCenter ? 1 : 0.78,
                  opacity: isCenter ? 1 : 0.45,
                }}
                transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => {
                  if (!isCenter) setActiveIndex(idx);
                }}
                style={{ zIndex: isCenter ? 30 : 10 }}
                className={`absolute h-full w-[84%] overflow-hidden rounded-xl bg-[#1A1918] shadow-[0_28px_70px_-15px_rgba(0,0,0,0.8)] sm:w-[70%] lg:w-[65%] ${
                  !isCenter ? "cursor-pointer" : ""
                }`}
              >
                <Image
                  src={project.imageSrc}
                  alt={project.name}
                  fill
                  sizes="(max-width: 640px) 84vw, (max-width: 1024px) 70vw, 65vw"
                  className={`object-cover transition-all duration-500 ${
                    isCenter ? "brightness-100" : "brightness-75"
                  }`}
                />

                {isCenter && (
                  <>
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/65 via-black/25 to-transparent"
                    />
                    <div className="relative z-10 px-4 pt-5 text-center sm:pt-7">
                      <h4 className="text-lg font-medium tracking-tight text-[#FFFFFF] drop-shadow-sm sm:text-2xl">
                        {project.name}
                      </h4>
                      <p className="mt-1 text-xs text-white/85 drop-shadow-sm sm:text-sm">
                        {project.subtitle}
                      </p>
                    </div>
                  </>
                )}
              </motion.div>
            );
          })}

          {/* Circular White Arrows Straddling Center Card (84% / 70% / 65%) */}
          <div className="pointer-events-none relative z-40 flex w-[84%] items-center justify-between sm:w-[70%] lg:w-[65%]">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous project"
              className="pointer-events-auto -ml-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFFFFF] text-[#252525] shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform hover:scale-105 active:scale-95 sm:-ml-6 sm:h-12 sm:w-12"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next project"
              className="pointer-events-auto -mr-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFFFFF] text-[#252525] shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform hover:scale-105 active:scale-95 sm:-mr-6 sm:h-12 sm:w-12"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div
          className="mt-8 flex items-center justify-center gap-2.5"
          role="tablist"
          aria-label="Previous projects"
        >
          {PREVIOUS_PROJECTS.map((project, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={project.name}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`View ${project.name}`}
                aria-selected={isActive}
                role="tab"
                className={`rounded-full transition-all ${
                  isActive
                    ? "h-2.5 w-2.5 bg-[#FFFFFF]"
                    : "h-2 w-2 border border-white/60 bg-transparent hover:border-white"
                }`}
              />
            );
          })}
        </div>

        {/* Subtle RERA Compliance Note */}
        <p className="mt-8 text-center text-[11px] tracking-[0.12em] text-white/45">
          RERA Reg. No.: [Insert Verified RERA Number]
        </p>
      </div>
    </section>
  );
}
