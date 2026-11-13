// components/EnquirySection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ApartmentInterest = "2 BHK" | "3 BHK";

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  interestedIn: ApartmentInterest;
  visitDate: string;
}

const RESIDENCE_OPTIONS: {
  value: ApartmentInterest;
  subtitle: string;
}[] = [
  { value: "2 BHK", subtitle: "Thoughtful Layouts" },
  { value: "3 BHK", subtitle: "Expansive Family Homes" },
];

export default function EnquirySection() {
  const dateInputRef = useRef<HTMLInputElement>(null);
  const [minDate, setMinDate] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [highlightDate, setHighlightDate] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    phone: "",
    email: "",
    interestedIn: "2 BHK",
    visitDate: "",
  });

  // Set min date on client only to prevent SSR hydration mismatch
  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  const handleScheduleFocus = () => {
    setSubmitted(false);
    setHighlightDate(true);
    setTimeout(() => {
      dateInputRef.current?.focus();
      dateInputRef.current?.showPicker?.();
    }, 60);
    setTimeout(() => setHighlightDate(false), 1600);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Connect to your API route / CRM endpoint here (e.g., fetch("/api/enquiry", ...))
    setSubmitted(true);
  };

  return (
    <section
      id="site-visit"
      aria-labelledby="enquiry-heading"
      className="relative border-t border-white/10 bg-[#0D1611] text-[#252525]"
    >
      {/* Anchor targets for navigation clarity */}
      <span id="pricing" className="sr-only" aria-hidden="true" />
      <span id="contact" className="sr-only" aria-hidden="true" />

      {/* Full-Width 50% / 50% Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left 50%: Deep Forest (#0D1611) */}
        <div className="relative overflow-hidden bg-[#0D1611] text-[#FFFFFF]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(0,107,56,0.36),_transparent_65%)]"
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-auto flex h-full w-full max-w-xl flex-col justify-between px-6 py-16 sm:px-10 sm:py-20 lg:ml-auto lg:mr-0 lg:max-w-[640px] lg:px-14 lg:py-24"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6EE7B7]">
                Private Enquiry
              </p>

              <h2
                id="enquiry-heading"
                className="mt-3 font-serif text-3xl font-normal leading-[1.15] tracking-tight text-[#FFFFFF] sm:text-4xl lg:text-[42px]"
              >
                Your New Home Starts Here.
              </h2>

              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
                Share your details for apartment availability, pricing sheets,
                and private site tour arrangements.
              </p>

              <button
                type="button"
                onClick={handleScheduleFocus}
                className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#FFFFFF] backdrop-blur-md transition-all hover:border-[#6EE7B7]/60 hover:bg-[#006B38]"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4 text-[#6EE7B7]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                <span>Schedule a Site Visit</span>
              </button>
            </div>

            {/* Direct Sales Desk Details */}
            <div className="mt-12 border-t border-white/15 pt-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C8A46B]">
                Direct Sales Desk
              </p>

              <dl className="mt-4 space-y-3.5 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="flex items-center gap-2.5 text-white/60">
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 text-[#6EE7B7]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>Telephone</span>
                  </dt>
                  <dd className="font-medium text-[#FFFFFF]">
                    <a
                      href="tel:+919876543210"
                      className="transition-colors hover:text-[#6EE7B7]"
                    >
                      +91 98765 43210
                    </a>
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <dt className="flex items-center gap-2.5 text-white/60">
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 text-[#6EE7B7]"
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
                    <span>Email</span>
                  </dt>
                  <dd className="truncate font-medium text-[#FFFFFF]">
                    <a
                      href="mailto:sales@meridianestates.in"
                      className="transition-colors hover:text-[#6EE7B7]"
                    >
                      sales@meridianestates.in
                    </a>
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <dt className="flex items-center gap-2.5 text-white/60">
                    <svg
                      aria-hidden="true"
                      className="h-4 w-4 text-[#6EE7B7]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    <span>Visit Hours</span>
                  </dt>
                  <dd className="font-medium text-[#FFFFFF]">
                    Daily &middot; 10:00 AM – 6:30 PM
                  </dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </div>

        {/* Right 50%: Pure White (#FFFFFF) */}
        <div className="bg-[#FFFFFF]">
          <div className="mx-auto flex h-full w-full max-w-xl flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:ml-0 lg:mr-auto lg:max-w-[640px] lg:px-14 lg:py-24">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="submitted"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  className="py-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#006B38]/10 text-[#006B38]">
                    <svg
                      aria-hidden="true"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#006B38]">
                    Enquiry Received
                  </p>

                  <h3 className="mt-2 font-serif text-3xl font-normal text-[#252525]">
                    Thank You, {formData.fullName || "Guest"}.
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[#252525]/70 sm:text-base">
                    Our residential advisor will reach out shortly with{" "}
                    <span className="font-semibold text-[#252525]">
                      {formData.interestedIn}
                    </span>{" "}
                    availability, pricing details
                    {formData.visitDate
                      ? `, and confirmation for your site visit on ${formData.visitDate}.`
                      : ", and site visit scheduling."}
                  </p>

                  <div className="mt-8">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="rounded-xl border border-[#E6DEC8] bg-[#FAF8F5] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#252525] transition-colors hover:border-[#006B38] hover:text-[#006B38]"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#EFEAE0] pb-4">
                    <h3 className="font-serif text-2xl font-normal text-[#252525]">
                      Request Pricing &amp; Availability
                    </h3>
                    <span className="rounded-full bg-[#006B38]/10 px-3 py-1 text-[11px] font-semibold text-[#006B38]">
                      Direct Developer Desk
                    </span>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#252525]/70"
                    >
                      Full Name <span className="text-[#006B38]">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="mt-2 w-full rounded-xl border border-[#E6DEC8] bg-[#FAF8F5]/60 px-4 py-3 text-sm text-[#252525] placeholder:text-[#252525]/40 transition-all focus:border-[#006B38] focus:bg-[#FFFFFF] focus:outline-none focus:ring-4 focus:ring-[#006B38]/10"
                    />
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#252525]/70"
                      >
                        Phone Number <span className="text-[#006B38]">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="mt-2 w-full rounded-xl border border-[#E6DEC8] bg-[#FAF8F5]/60 px-4 py-3 text-sm text-[#252525] placeholder:text-[#252525]/40 transition-all focus:border-[#006B38] focus:bg-[#FFFFFF] focus:outline-none focus:ring-4 focus:ring-[#006B38]/10"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#252525]/70"
                      >
                        Email Address <span className="text-[#006B38]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="mt-2 w-full rounded-xl border border-[#E6DEC8] bg-[#FAF8F5]/60 px-4 py-3 text-sm text-[#252525] placeholder:text-[#252525]/40 transition-all focus:border-[#006B38] focus:bg-[#FFFFFF] focus:outline-none focus:ring-4 focus:ring-[#006B38]/10"
                      />
                    </div>
                  </div>

                  {/* Configuration Selector + Visit Date */}
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#252525]/70">
                        Interested In
                      </span>
                      <div className="mt-2 grid grid-cols-2 gap-3">
                        {RESIDENCE_OPTIONS.map((option) => {
                          const selected =
                            formData.interestedIn === option.value;
                          return (
                            <button
                              key={option.value}
                              type="button"
                              aria-pressed={selected}
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  interestedIn: option.value,
                                })
                              }
                              className={`flex flex-col items-start rounded-xl border px-3.5 py-2.5 text-left transition-all ${
                                selected
                                  ? "border-[#006B38] bg-[#F4F8F5] ring-2 ring-[#006B38]/15"
                                  : "border-[#E6DEC8] bg-[#FAF8F5]/60 hover:border-[#006B38]/40 hover:bg-[#FFFFFF]"
                              }`}
                            >
                              <div className="flex w-full items-center justify-between">
                                <span
                                  className={`text-sm font-semibold ${
                                    selected
                                      ? "text-[#006B38]"
                                      : "text-[#252525]"
                                  }`}
                                >
                                  {option.value}
                                </span>
                                <span
                                  className={`h-2 w-2 rounded-full ${
                                    selected
                                      ? "bg-[#006B38]"
                                      : "bg-[#D8C7AA]/60"
                                  }`}
                                />
                              </div>
                              <span className="mt-0.5 text-[10px] text-[#252525]/55">
                                {option.subtitle}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="visitDate"
                        className="block text-[11px] font-semibold uppercase tracking-[0.15em] text-[#252525]/70"
                      >
                        Preferred Site Visit Date
                      </label>
                      <input
                        ref={dateInputRef}
                        id="visitDate"
                        name="visitDate"
                        type="date"
                        min={minDate}
                        value={formData.visitDate}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            visitDate: e.target.value,
                          })
                        }
                        className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-[#252525] transition-all focus:border-[#006B38] focus:bg-[#FFFFFF] focus:outline-none focus:ring-4 focus:ring-[#006B38]/10 ${
                          highlightDate
                            ? "border-[#006B38] bg-[#F4F8F5] ring-4 ring-[#006B38]/20"
                            : "border-[#E6DEC8] bg-[#FAF8F5]/60"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Submit CTA + Assurance */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#006B38] px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#FFFFFF] shadow-[0_12px_28px_-10px_rgba(0,107,56,0.5)] transition-all hover:bg-[#004A26] active:scale-[0.99] sm:w-auto sm:min-w-[240px]"
                    >
                      <span>Request a Call Back</span>
                      <span aria-hidden="true">&rarr;</span>
                    </button>

                    <p className="mt-4 flex items-center gap-2 text-xs text-[#252525]/55">
                      <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5 shrink-0 text-[#006B38]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          width="18"
                          height="11"
                          x="3"
                          y="11"
                          rx="2"
                          ry="2"
                        />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      <span>
                        Your details are used solely by our direct sales team to
                        coordinate availability and site visits.
                      </span>
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
