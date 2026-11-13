// components/ProjectHighlights.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HighlightItem {
  number: string;
  tag: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
}

const VERIFIED_HIGHLIGHTS: HighlightItem[] = [
  {
    number: "01",
    tag: "Exclusivity",
    title: "Limited collection of approximately 20 residences",
    imageSrc:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Low-density boutique residential building framed by greenery",
  },
  {
    number: "02",
    tag: "Orientation",
    title: "East-facing and West-facing apartment options",
    imageSrc:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Sunlit private residential balcony welcoming natural daylight",
  },
  {
    number: "03",
    tag: "Planning",
    title: "Thoughtfully planned floor layouts",
    imageSrc:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Open, well-proportioned apartment living and dining layout",
  },
  {
    number: "04",
    tag: "Architecture",
    title: "Contemporary building architecture",
    imageSrc:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Contemporary architectural facade with warm evening lighting",
  },
  {
    number: "05",
    tag: "Connectivity",
    title: "Convenient access to nearby destinations",
    imageSrc:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Clean landscaped residential driveway and entrance approach",
  },
  {
    number: "06",
    tag: "Living Spaces",
    title: "Carefully considered residential spaces",
    imageSrc:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Warm and comfortable modern family living room interior",
  },
];

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOutExpo,
    },
  },
};

export default function ProjectHighlights() {
  return (
    <section
      id="highlights"
      aria-labelledby="highlights-heading"
      className="border-t border-[#D8C7AA]/40 bg-[#FFFFFF] py-20 text-[#252525] sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        {/* Clean Minimalist Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
          className="flex flex-col justify-between gap-6 border-b border-[#D8C7AA]/60 pb-10 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <h2
              id="highlights-heading"
              className="font-serif text-4xl font-normal leading-[1.12] tracking-tight text-[#252525] sm:text-5xl"
            >
              Designed Around Everyday Living.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#252525]/70 sm:text-base lg:text-[17px]">
              Every architectural and planning decision is grounded in long-term
              comfort, orientation, and low-density privacy.
            </p>
          </div>

          <Link
            href="#explore"
            className="inline-flex w-full shrink-0 items-center justify-center gap-3 bg-[#006B38] px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#FFFFFF] transition-colors duration-200 hover:bg-[#004A26] sm:w-auto"
          >
            <span>Explore Gallery</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </motion.div>

        {/* 3x2 Architectural Photo Highlights Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6"
        >
          {VERIFIED_HIGHLIGHTS.map((item) => (
            <motion.article
              key={item.number}
              variants={cardVariants}
              className="group relative aspect-[4/3] w-full overflow-hidden bg-[#0E1813]"
            >
              {/* Full-Bleed Photograph with Subtle Smooth Hover Zoom */}
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Rich Bottom Readability Gradient */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07120C]/90 via-[#07120C]/35 to-[#07120C]/10 transition-opacity duration-300 group-hover:opacity-95"
              />

              {/* Top Frosted Category Pill */}
              <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-2 border border-[#FFFFFF]/25 bg-[#07120C]/45 px-3 py-1.5 backdrop-blur-md">
                <span className="text-[11px] font-semibold tracking-[0.16em] text-[#D8C7AA]">
                  {item.number}
                </span>
                <span
                  className="h-2.5 w-[1px] bg-[#FFFFFF]/30"
                  aria-hidden="true"
                />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FFFFFF]">
                  {item.tag}
                </span>
              </div>

              {/* Bottom Feature Headline */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                <h3 className="font-serif text-xl font-normal leading-snug text-[#FFFFFF] drop-shadow-sm sm:text-2xl">
                  {item.title}
                </h3>
              </div>

              {/* Subtle Logo-Green Hover Accent Line */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 z-20 h-[3px] w-0 bg-[#006B38] transition-all duration-500 ease-out group-hover:w-full"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
