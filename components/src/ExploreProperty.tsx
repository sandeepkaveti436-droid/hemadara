// components/ExploreProperty.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type CategoryId =
  | "exterior"
  | "lobby"
  | "living"
  | "bedrooms"
  | "kitchen"
  | "bathrooms"
  | "balcony"
  | "floor-plans";

interface GalleryVisual {
  src: string;
  alt: string;
  caption: string;
  tag: string;
}

interface GalleryCategory {
  id: CategoryId;
  label: string;
  description: string;
  visuals: GalleryVisual[];
}

interface FloorPlanCard {
  id: string;
  type: string;
  orientation: string;
  area: string;
  imageSrc: string;
  imageAlt: string;
  summary: string;
  highlights: string[];
}

const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    id: "exterior",
    label: "Building Exterior",
    description:
      "Clean contemporary lines, balanced proportions, and landscaped surroundings built for lasting appeal.",
    visuals: [
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        alt: "Contemporary residential building facade surrounded by mature greenery",
        caption: "Contemporary Elevation & Landscaped Approach",
        tag: "Architectural Exterior",
      },
      {
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
        alt: "Evening exterior lighting across residential facade",
        caption: "Warm Evening Facade & Low-Density Massing",
        tag: "Exterior Detail",
      },
    ],
  },
  {
    id: "lobby",
    label: "Entrance & Lobby",
    description:
      "A calm, welcoming arrival experience with refined stone textures and controlled resident access.",
    visuals: [
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85",
        alt: "Warm sunlit residential entrance lobby with natural finishes",
        caption: "Main Resident Entrance & Arrival Lounge",
        tag: "Entrance & Lobby",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
        alt: "Minimalist architectural corridor and reception detail",
        caption: "Considered Materials & Natural Daylight",
        tag: "Common Area",
      },
    ],
  },
  {
    id: "living",
    label: "Living Room",
    description:
      "Open, cross-ventilated living and dining areas planned for natural light and unhurried family time.",
    visuals: [
      {
        src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
        alt: "Spacious modern apartment living room with warm wood accents",
        caption: "Open Living & Dining Layout",
        tag: "Living Space",
      },
      {
        src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85",
        alt: "Bright dining and seating area with full-height windows",
        caption: "Seamless Dining & Window Proportion",
        tag: "Interior Visual",
      },
    ],
  },
  {
    id: "bedrooms",
    label: "Bedrooms",
    description:
      "Quiet, generously proportioned bedrooms designed for restful privacy and practical wardrobe planning.",
    visuals: [
      {
        src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85",
        alt: "Serene master bedroom in warm neutral tones",
        caption: "Primary Bedroom Suite with Calm Proportions",
        tag: "Bedrooms",
      },
      {
        src: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85",
        alt: "Secondary bedroom with soft natural lighting and clean storage",
        caption: "Well-Planned Family & Guest Bedroom",
        tag: "Bedroom Detail",
      },
    ],
  },
  {
    id: "kitchen",
    label: "Kitchen",
    description:
      "Ergonomic, well-ventilated kitchens with durable worktops, thoughtful storage, and utility access.",
    visuals: [
      {
        src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1400&q=85",
        alt: "Modern functional kitchen with clean cabinetry and stone counter",
        caption: "Functional Kitchen Layout with Practical Storage",
        tag: "Kitchen",
      },
      {
        src: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1200&q=85",
        alt: "Minimalist kitchen counter and warm timber cabinetry",
        caption: "Clean Finishes & Everyday Utility",
        tag: "Kitchen Detail",
      },
    ],
  },
  {
    id: "bathrooms",
    label: "Bathrooms",
    description:
      "Clean architectural lines paired with refined sanitary ware, slip-resistant flooring, and subtle lighting.",
    visuals: [
      {
        src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1400&q=85",
        alt: "Luxury neutral stone bathroom with walk-in glass shower",
        caption: "Refined Stone Finishes & Walk-In Shower",
        tag: "Bathrooms",
      },
      {
        src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=85",
        alt: "Modern vanity mirror and refined bathroom fixtures",
        caption: "Thoughtful Vanity & Fixture Detailing",
        tag: "Bath Detail",
      },
    ],
  },
  {
    id: "balcony",
    label: "Balcony & Views",
    description:
      "Private sit-out balconies bringing fresh air, morning or evening sunlight, and calm outdoor views.",
    visuals: [
      {
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85",
        alt: "Spacious private residential balcony overlooking greenery",
        caption: "Private Sit-Out Balcony & Open Outlook",
        tag: "Balcony & Views",
      },
      {
        src: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=85",
        alt: "Indoor-outdoor connection through wide sliding balcony doors",
        caption: "East & West Daylight Orientation",
        tag: "Outdoor Space",
      },
    ],
  },
  {
    id: "floor-plans",
    label: "Floor Plans",
    description:
      "Practical 2 & 3 BHK layouts available in East-facing and West-facing orientations with minimal wasted space.",
    visuals: [],
  },
];

const FLOOR_PLANS: FloorPlanCard[] = [
  {
    id: "2bhk-plan",
    type: "2 BHK Residence",
    orientation: "East-Facing Layout",
    area: "1,500 sq. ft.",
    imageSrc: "/images/2bhk-plan.jpeg",
    imageAlt: "Oceanside 2 BHK East-Facing floor plan with room dimensions",
    summary:
      "Efficiently zoned open living and dining core, two spacious bedrooms with walk-in wardrobe, modular kitchen with utility balcony, and two modern bathrooms.",
    highlights: [
      "Spacious Living (16'0\" × 12'0\") & Dining (11'0\" × 11'0\")",
      "Bedroom 1 (12'0\" × 13'0\") with Walk-In Wardrobe",
      "Modular Kitchen (10'0\" × 10'0\") & Utility Balcony",
    ],
  },
  {
    id: "3bhk-plan",
    type: "3 BHK Residence",
    orientation: "West-Facing Layout",
    area: "1,500 sq. ft.",
    imageSrc: "/images/3bhk-plan.jpeg",
    imageAlt: "Oceanside 3 BHK West-Facing floor plan with room dimensions",
    summary:
      "Thoughtfully proportioned three-bedroom layout featuring an expansive living and dining core, modular kitchen with utility balcony, two bathrooms, and dedicated storage.",
    highlights: [
      "Expansive Living (16'0\" × 13'0\") & Dining (12'0\" × 10'0\")",
      "Three Well-Planned Bedrooms + Storage Room",
      "Modular Kitchen (10'0\" × 10'0\") & Utility Balcony",
    ],
  },
];

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

// Smart Directional Curtain Wipe + Slide Variants (Not a dissolve/fade)
const curtainVariants = {
  enter: (dir: number) => ({
    clipPath: dir >= 0 ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)",
    x: dir >= 0 ? 36 : -36,
  }),
  center: {
    clipPath: "inset(0% 0% 0% 0%)",
    x: 0,
    transition: {
      duration: 0.52,
      ease: easeOutExpo,
    },
  },
  exit: (dir: number) => ({
    clipPath: dir >= 0 ? "inset(0% 100% 0% 0%)" : "inset(0% 0% 0% 100%)",
    x: dir >= 0 ? -28 : 28,
    transition: {
      duration: 0.34,
      ease: easeOutExpo,
    },
  }),
};

export default function ExploreProperty() {
  const [activeId, setActiveId] = useState<CategoryId>("exterior");
  const [direction, setDirection] = useState<number>(1);
  const [modalItems, setModalItems] = useState<GalleryVisual[] | null>(null);
  const [modalIndex, setModalIndex] = useState<number>(0);

  const activeIndex = GALLERY_CATEGORIES.findIndex(
    (cat) => cat.id === activeId,
  );
  const activeCategory =
    GALLERY_CATEGORIES[activeIndex] ?? GALLERY_CATEGORIES[0];

  const handleSelectCategory = (nextId: CategoryId, nextIndex: number) => {
    if (nextId === activeId) return;
    setDirection(nextIndex > activeIndex ? 1 : -1);
    setActiveId(nextId);
  };

  const openModal = (items: GalleryVisual[], index: number) => {
    setModalItems(items);
    setModalIndex(index);
  };

  const closeModal = () => setModalItems(null);

  useEffect(() => {
    if (!modalItems) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") {
        setModalIndex((prev) => (prev + 1) % modalItems.length);
      }
      if (e.key === "ArrowLeft") {
        setModalIndex(
          (prev) => (prev - 1 + modalItems.length) % modalItems.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalItems]);

  return (
    <section
      id="explore"
      aria-labelledby="explore-heading"
      className="border-t border-[#D8C7AA]/40 bg-[#F7F5F0] py-20 text-[#252525] sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-12">
        {/* Centered Headline & Intro Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2
            id="explore-heading"
            className="font-serif text-4xl font-normal leading-[1.12] tracking-tight text-[#252525] sm:text-5xl"
          >
            Every Detail, Worth Discovering.
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-[#252525]/75 sm:text-base lg:text-[17px]">
            Explore the project through architectural photographs and actual
            property visuals.
          </p>
        </motion.div>

        {/* Single-Line Category Tab Bar on Desktop (lg:flex-nowrap) */}
        <div
          role="tablist"
          aria-label="Property gallery categories"
          className="mt-10 flex flex-wrap items-center justify-center gap-1.5 border-y border-[#D8C7AA]/60 py-3.5 lg:flex-nowrap lg:justify-between lg:gap-1"
        >
          {GALLERY_CATEGORIES.map((category, index) => {
            const isActive = category.id === activeId;
            return (
              <button
                key={category.id}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => handleSelectCategory(category.id, index)}
                className={`relative whitespace-nowrap px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.09em] transition-colors duration-200 lg:px-3 xl:px-4 xl:tracking-[0.12em] ${
                  isActive
                    ? "text-[#FFFFFF]"
                    : "text-[#252525]/70 hover:text-[#006B38]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="explore-active-pill"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 34,
                    }}
                    className="absolute inset-0 bg-[#006B38]"
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Centered Category Description */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-[#252525]/75 sm:text-base">
          {activeCategory.description}
        </p>

        {/* Smart Directional Wipe Animation Container */}
        <div className="mt-8 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            {activeCategory.id !== "floor-plans" ? (
              <motion.div
                key={activeCategory.id}
                custom={direction}
                variants={curtainVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6"
              >
                {/* Primary Visual (7 cols) */}
                <button
                  type="button"
                  onClick={() => openModal(activeCategory.visuals, 0)}
                  className="group relative aspect-[16/10] w-full overflow-hidden bg-[#0E1813] text-left lg:col-span-7 lg:aspect-auto lg:min-h-[460px]"
                >
                  <motion.div
                    initial={{ scale: 1.07 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.65, ease: easeOutExpo }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={activeCategory.visuals[0].src}
                      alt={activeCategory.visuals[0].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </motion.div>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07120C]/85 via-[#07120C]/20 to-transparent"
                  />
                  <span className="absolute right-5 top-5 border border-[#FFFFFF]/30 bg-[#07120C]/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FFFFFF] opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100">
                    View Larger
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D8C7AA]">
                      {activeCategory.visuals[0].tag}
                    </p>
                    <p className="mt-1 font-serif text-xl text-[#FFFFFF] sm:text-2xl">
                      {activeCategory.visuals[0].caption}
                    </p>
                  </div>
                </button>

                {/* Secondary Visual (5 cols) */}
                <button
                  type="button"
                  onClick={() => openModal(activeCategory.visuals, 1)}
                  className="group relative aspect-[4/3] w-full overflow-hidden bg-[#0E1813] text-left lg:col-span-5 lg:aspect-auto lg:min-h-[460px]"
                >
                  <motion.div
                    initial={{ scale: 1.07 }}
                    animate={{ scale: 1 }}
                    transition={{
                      duration: 0.65,
                      delay: 0.05,
                      ease: easeOutExpo,
                    }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={activeCategory.visuals[1].src}
                      alt={activeCategory.visuals[1].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </motion.div>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07120C]/85 via-[#07120C]/20 to-transparent"
                  />
                  <span className="absolute right-5 top-5 border border-[#FFFFFF]/30 bg-[#07120C]/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FFFFFF] opacity-0 backdrop-blur-md transition-opacity duration-200 group-hover:opacity-100">
                    View Larger
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D8C7AA]">
                      {activeCategory.visuals[1].tag}
                    </p>
                    <p className="mt-1 font-serif text-xl text-[#FFFFFF] sm:text-2xl">
                      {activeCategory.visuals[1].caption}
                    </p>
                  </div>
                </button>
              </motion.div>
            ) : (
              /* Dedicated Floor Plans View with Directional Reveal */
              <motion.div
                key="floor-plans"
                custom={direction}
                variants={curtainVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8"
              >
                {FLOOR_PLANS.map((plan, idx) => {
                  const planModalItems: GalleryVisual[] = FLOOR_PLANS.map(
                    (p) => ({
                      src: p.imageSrc,
                      alt: p.imageAlt,
                      caption: `${p.type} · ${p.area}`,
                      tag: p.orientation,
                    }),
                  );

                  return (
                    <article
                      key={plan.id}
                      className="flex flex-col justify-between border border-[#D8C7AA]/70 bg-[#FFFFFF]"
                    >
                      <div>
                        <button
                          type="button"
                          onClick={() => openModal(planModalItems, idx)}
                          className="group relative block h-[380px] w-full overflow-hidden border-b border-[#D8C7AA]/50 bg-[#FBF8F1] p-4 sm:h-[440px]"
                        >
                          <Image
                            src={plan.imageSrc}
                            alt={plan.imageAlt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-contain p-3 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                          />
                          <span className="absolute right-4 top-4 border border-[#006B38]/30 bg-[#FFFFFF]/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#006B38] shadow-sm backdrop-blur-sm">
                            Inspect Plan
                          </span>
                        </button>

                        <div className="p-7 sm:p-9">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#006B38]">
                              {plan.orientation}
                            </span>
                            <span className="border border-[#D8C7AA] bg-[#F7F5F0] px-3 py-1 text-xs font-semibold text-[#252525]">
                              {plan.area}
                            </span>
                          </div>

                          <h3 className="mt-3 font-serif text-2xl font-normal text-[#252525] sm:text-3xl">
                            {plan.type}
                          </h3>

                          <p className="mt-3 text-sm leading-relaxed text-[#252525]/75 sm:text-base">
                            {plan.summary}
                          </p>

                          <ul className="mt-6 space-y-3 border-t border-[#D8C7AA]/60 pt-5">
                            {plan.highlights.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2.5"
                              >
                                <span
                                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#006B38]"
                                  aria-hidden="true"
                                />
                                <span className="text-sm font-medium text-[#252525]/85">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="border-t border-[#F7F5F0] px-7 pb-7 pt-2 sm:px-9 sm:pb-9">
                        <Link
                          href="#contact"
                          className="inline-flex w-full items-center justify-between bg-[#006B38] px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#FFFFFF] transition-colors duration-200 hover:bg-[#004A26]"
                        >
                          <span>Request Detailed Floor Plan</span>
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Aesthetic Full-View Architectural Lightbox Modal */}
      <AnimatePresence>
        {modalItems && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label="Property visual viewer"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#07120C]/90 p-4 backdrop-blur-md sm:p-8"
          >
            <motion.div
              initial={{ clipPath: "inset(6% 6% 6% 6%)", scale: 0.96 }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
              exit={{ clipPath: "inset(6% 6% 6% 6%)", scale: 0.96 }}
              transition={{ duration: 0.32, ease: easeOutExpo }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex w-full max-w-5xl flex-col overflow-hidden border border-[#D8C7AA]/30 bg-[#F7F5F0] shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[#D8C7AA]/60 bg-[#FFFFFF] px-5 py-3.5 sm:px-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#006B38]">
                    {modalItems[modalIndex].tag}
                  </p>
                  <p className="font-serif text-lg text-[#252525] sm:text-xl">
                    {modalItems[modalIndex].caption}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close viewer"
                  className="flex h-9 w-9 items-center justify-center border border-[#D8C7AA] bg-[#F7F5F0] text-lg font-medium text-[#252525] transition-colors hover:bg-[#006B38] hover:text-[#FFFFFF]"
                >
                  &times;
                </button>
              </div>

              <div className="relative h-[60vh] w-full bg-[#FBF8F1] sm:h-[70vh]">
                <Image
                  src={modalItems[modalIndex].src}
                  alt={modalItems[modalIndex].alt}
                  fill
                  sizes="100vw"
                  className="object-contain p-3 sm:p-6"
                />
              </div>

              {modalItems.length > 1 && (
                <div className="flex items-center justify-between border-t border-[#D8C7AA]/60 bg-[#FFFFFF] px-5 py-3 sm:px-6">
                  <button
                    type="button"
                    onClick={() =>
                      setModalIndex(
                        (prev) =>
                          (prev - 1 + modalItems.length) % modalItems.length,
                      )
                    }
                    className="border border-[#D8C7AA] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#252525] transition-colors hover:border-[#006B38] hover:text-[#006B38]"
                  >
                    &larr; Previous
                  </button>

                  <span className="text-xs font-medium text-[#252525]/60">
                    {modalIndex + 1} / {modalItems.length}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setModalIndex((prev) => (prev + 1) % modalItems.length)
                    }
                    className="border border-[#D8C7AA] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#252525] transition-colors hover:border-[#006B38] hover:text-[#006B38]"
                  >
                    Next &rarr;
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
