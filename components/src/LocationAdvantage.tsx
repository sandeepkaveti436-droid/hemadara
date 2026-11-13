// components/LocationAdvantage.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface DestinationItem {
  id: string;
  category: string;
  landmarkName: string;
  address: string;
  distance: string;
  driveTime: string;
  imageSrc: string;
  lat: number;
  lng: number;
}

// Replace with your exact Oceanside coordinates
const PROJECT_LOCATION = {
  name: "Oceanside, Gachibowli",
  lat: 17.4372,
  lng: 78.3444,
};

const DESTINATIONS: DestinationItem[] = [
  {
    id: "schools",
    category: "Education",
    landmarkName: "Oakridge International School",
    address: "Khajaguda, Nanakramguda Rd",
    distance: "2.8 km",
    driveTime: "8 mins",
    imageSrc:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80",
    lat: 17.4196,
    lng: 78.3639,
  },
  {
    id: "hospitals",
    category: "Healthcare",
    landmarkName: "AIG Hospitals, Gachibowli",
    address: "Mindspace Road, Gachibowli",
    distance: "2.5 km",
    driveTime: "7 mins",
    imageSrc:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80",
    lat: 17.442,
    lng: 78.3665,
  },
  {
    id: "shopping",
    category: "Shopping",
    landmarkName: "Sarath City Capital Mall",
    address: "Gachibowli – Miyapur Rd, Kondapur",
    distance: "3.1 km",
    driveTime: "10 mins",
    imageSrc:
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=600&q=80",
    lat: 17.457,
    lng: 78.364,
  },
  {
    id: "restaurants",
    category: "Dining",
    landmarkName: "SLN Terminus & Dining Hub",
    address: "Botanical Garden Rd, Gachibowli",
    distance: "2.7 km",
    driveTime: "8 mins",
    imageSrc:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    lat: 17.4525,
    lng: 78.3632,
  },
  {
    id: "transport",
    category: "Transit",
    landmarkName: "Raidurg Metro & ORR Link",
    address: "HITEC City – Gachibowli Corridor",
    distance: "3.6 km",
    driveTime: "10 mins",
    imageSrc:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80",
    lat: 17.4421,
    lng: 78.3772,
  },
];

const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${PROJECT_LOCATION.lat},${PROJECT_LOCATION.lng}`;

function CategoryIcon({ id }: { id: string }) {
  const props = {
    className: "h-4 w-4",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (id) {
    case "schools":
      return (
        <svg {...props}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      );
    case "hospitals":
      return (
        <svg {...props}>
          <path d="M12 6v12M6 12h12" />
          <rect x="3" y="3" width="18" height="18" rx="4" />
        </svg>
      );
    case "shopping":
      return (
        <svg {...props}>
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
          <path d="M3 6h18" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      );
    case "restaurants":
      return (
        <svg {...props}>
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <rect x="4" y="3" width="16" height="14" rx="3" />
          <path d="M4 11h16" />
          <path d="M12 3v8" />
          <path d="m8 19-2 3" />
          <path d="m18 22-2-3" />
        </svg>
      );
  }
}

export default function LocationAdvantage() {
  const [selectedId, setSelectedId] = useState<string>(DESTINATIONS[0].id);
  const [mapFocus, setMapFocus] = useState<"project" | "landmark">("project");

  const active =
    DESTINATIONS.find((item) => item.id === selectedId) ?? DESTINATIONS[0];

  const directionsLink = `https://www.google.com/maps/dir/?api=1&origin=${PROJECT_LOCATION.lat},${PROJECT_LOCATION.lng}&destination=${active.lat},${active.lng}`;

  // Replace this URL with your own Google Maps Share -> Embed URL if preferred
  const embedSrc =
    mapFocus === "project"
      ? `https://maps.google.com/maps?q=${PROJECT_LOCATION.lat},${PROJECT_LOCATION.lng}&z=15&output=embed`
      : `https://maps.google.com/maps?q=${encodeURIComponent(
          `${active.landmarkName}, ${active.address}, Hyderabad`,
        )}&z=15&output=embed`;

  return (
    <section
      id="location"
      aria-labelledby="location-heading"
      className="border-t border-[#E6DEC8]/70 bg-[#FAF8F5] py-16 text-[#252525] sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Centered Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#006B38]">
            Location Advantage
          </p>
          <h2
            id="location-heading"
            className="mt-2.5 font-serif text-3xl font-normal tracking-tight text-[#252525] sm:text-4xl lg:text-[44px]"
          >
            Connected to Everything.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#252525]/70 sm:text-base">
            Minutes from leading schools, hospitals, shopping, and metro links
            in Gachibowli.
          </p>
        </motion.div>

        {/* Main Architectural Container */}
        <div className="mt-10 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#E6DEC8] bg-[#FFFFFF] shadow-[0_20px_60px_-20px_rgba(37,37,37,0.1)] lg:mt-12 lg:grid-cols-12">
          {/* Google Maps Panel (Top on Mobile, Right on Desktop) */}
          <div className="relative order-1 h-[380px] border-b border-[#EFEAE0] bg-[#EFEFEF] sm:h-[460px] lg:order-2 lg:col-span-7 lg:h-[560px] lg:border-b-0 lg:border-l">
            <iframe
              key={embedSrc}
              src={embedSrc}
              title={
                mapFocus === "project"
                  ? PROJECT_LOCATION.name
                  : active.landmarkName
              }
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />

            {/* Top-Right Toggle Pill */}
            <div className="absolute right-3 top-3 z-10 flex gap-1 rounded-full border border-[#E6DEC8] bg-[#FFFFFF]/95 p-1 shadow-md backdrop-blur-md">
              <button
                type="button"
                onClick={() => setMapFocus("project")}
                className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors ${
                  mapFocus === "project"
                    ? "bg-[#006B38] text-[#FFFFFF]"
                    : "text-[#252525]/70 hover:text-[#252525]"
                }`}
              >
                Oceanside
              </button>
              <button
                type="button"
                onClick={() => setMapFocus("landmark")}
                className={`rounded-full px-3 py-1.5 text-[11px] font-semibold transition-colors ${
                  mapFocus === "landmark"
                    ? "bg-[#006B38] text-[#FFFFFF]"
                    : "text-[#252525]/70 hover:text-[#252525]"
                }`}
              >
                Landmark
              </button>
            </div>

            {/* Floating Landmark Preview Card */}
            <div className="absolute inset-x-3 bottom-3 z-10 sm:inset-x-auto sm:bottom-4 sm:left-4 sm:w-[340px]">
              <div className="flex items-center gap-3 rounded-xl border border-[#E6DEC8] bg-[#FFFFFF]/95 p-2.5 shadow-xl backdrop-blur-md">
                <div className="relative h-14 w-16 shrink-0 overflow-hidden rounded-lg bg-[#FAF8F5]">
                  <Image
                    src={active.imageSrc}
                    alt={active.landmarkName}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#006B38]">
                    <span>{active.distance}</span>
                    <span className="text-[#252525]/30">&bull;</span>
                    <span className="text-[#252525]/65">
                      {active.driveTime} drive
                    </span>
                  </div>
                  <p className="mt-0.5 truncate text-xs font-semibold text-[#252525] sm:text-sm">
                    {active.landmarkName}
                  </p>
                  <p className="truncate text-[11px] text-[#252525]/55">
                    {active.address}
                  </p>
                </div>

                <a
                  href={directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Get directions in Google Maps"
                  className="shrink-0 rounded-lg bg-[#006B38] px-3 py-2 text-[11px] font-semibold text-[#FFFFFF] transition-colors hover:bg-[#004A26]"
                >
                  Directions
                </a>
              </div>
            </div>
          </div>

          {/* Premium Side List Panel (Clean White + Hairline Dividers) */}
          <div className="order-2 flex flex-col justify-between bg-[#FFFFFF] lg:order-1 lg:col-span-5">
            <div>
              {/* Panel Top Bar */}
              <div className="flex items-center justify-between border-b border-[#EFEAE0] px-5 py-4 lg:px-6">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#252525]/55">
                  Nearby Essentials
                </span>
                <span className="text-xs font-medium text-[#006B38]">
                  Gachibowli Radius
                </span>
              </div>

              {/* Mobile: Sleek Horizontal Cards | Desktop: Clean Hairline List */}
              <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto p-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-col lg:gap-0 lg:divide-y lg:divide-[#EFEAE0] lg:overflow-visible lg:p-0">
                {DESTINATIONS.map((item) => {
                  const isActive = item.id === selectedId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setSelectedId(item.id);
                        setMapFocus("landmark");
                      }}
                      aria-pressed={isActive}
                      className={`group flex min-w-[255px] snap-start items-center gap-3.5 rounded-xl border p-3.5 text-left transition-all duration-200 lg:min-w-0 lg:rounded-none lg:border-0 lg:border-l-[3px] lg:px-6 lg:py-4 ${
                        isActive
                          ? "border-[#006B38] bg-[#F4F8F5] lg:border-l-[#006B38]"
                          : "border-[#EFEAE0] bg-[#FFFFFF] hover:bg-[#FAF8F5] lg:border-l-transparent"
                      }`}
                    >
                      {/* Minimal Category Icon */}
                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                          isActive
                            ? "bg-[#006B38] text-[#FFFFFF]"
                            : "bg-[#FAF8F5] text-[#8C7A5B] group-hover:bg-[#EFEAE0]"
                        }`}
                      >
                        <CategoryIcon id={item.id} />
                      </div>

                      {/* Landmark Details */}
                      <div className="min-w-0 flex-1">
                        <p
                          className={`text-[10px] font-semibold uppercase tracking-[0.14em] ${
                            isActive ? "text-[#006B38]" : "text-[#252525]/45"
                          }`}
                        >
                          {item.category}
                        </p>
                        <p className="mt-0.5 truncate text-sm font-semibold text-[#252525] lg:text-[15px]">
                          {item.landmarkName}
                        </p>
                        <p className="mt-0.5 truncate text-xs text-[#252525]/55">
                          {item.address}
                        </p>
                      </div>

                      {/* Right Distance & Time */}
                      <div className="shrink-0 pl-2 text-right tabular-nums">
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            isActive
                              ? "bg-[#006B38]/10 text-[#006B38]"
                              : "bg-[#FAF8F5] text-[#252525]"
                          }`}
                        >
                          {item.distance}
                        </span>
                        <p className="mt-1 text-[11px] font-medium text-[#252525]/50">
                          {item.driveTime}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Clean Bottom Map Link */}
            <div className="border-t border-[#EFEAE0] bg-[#FAF8F5]/60 p-4 lg:px-6">
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#006B38]/25 bg-[#FFFFFF] px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#006B38] transition-all hover:border-[#006B38] hover:bg-[#006B38] hover:text-[#FFFFFF]"
              >
                <span>Open Oceanside in Google Maps</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
