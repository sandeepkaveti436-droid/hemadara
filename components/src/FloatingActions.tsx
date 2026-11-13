// components/FloatingActions.tsx
import Link from "next/link";

const PHONE_NUMBER = "+919876543210";
const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello, I would like to know more about Oceanside 2 & 3 BHK residences.",
);

export default function FloatingActions() {
  return (
    <>
      {/* =========================================================
          MOBILE ONLY: Fixed Bottom Bar (hidden on md and above)
      ========================================================= */}
      <div
        aria-label="Quick contact actions"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-[#006B38]/20 bg-[#FFFFFF] pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_-8px_rgba(0,74,38,0.16)] md:hidden"
      >
        <div className="grid grid-cols-12 items-stretch">
          {/* Chat */}
          <Link
            href="#site-visit"
            className="col-span-2 flex flex-col items-center justify-center gap-1 border-r border-[#006B38]/15 py-2.5 text-[#006B38] transition-colors active:bg-[#F7F5F0]"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span className="text-[11px] font-medium tracking-wide">Chat</span>
          </Link>

          {/* Call */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="col-span-3 flex flex-col items-center justify-center gap-1 border-r border-[#006B38]/15 py-2.5 text-[#006B38] transition-colors active:bg-[#F7F5F0]"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="text-[11px] font-medium tracking-wide">Call</span>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-3 flex flex-col items-center justify-center gap-1 py-2.5 text-[#006B38] transition-colors active:bg-[#F7F5F0]"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-5.2A8.5 8.5 0 1 1 21 11.5z" />
              <path d="M9.5 9.2c.2-.4.4-.4.6-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4 0 .6l-.4.5c-.1.1-.2.3-.1.5.4.8 1.1 1.5 1.9 1.9.2.1.4 0 .5-.1l.5-.4c.2-.1.4-.1.6 0l1.4.6c.3.1.4.3.4.5v.5c0 .3-.2.6-.5.8-.5.3-1.3.4-2.3.1-1.4-.4-2.8-1.5-3.7-2.8-.8-1.1-1.3-2.3-1-3.3.1-.3.3-.6.5-.8z" />
            </svg>
            <span className="text-[11px] font-medium tracking-wide">
              WhatsApp
            </span>
          </a>

          {/* Enquire Now CTA */}
          <Link
            href="#site-visit"
            className="col-span-4 flex items-center justify-center gap-1.5 bg-[#006B38] px-2 py-2.5 text-xs font-medium tracking-wide text-[#FFFFFF] transition-colors active:bg-[#004A26]"
          >
            <span>Enquire Now</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>

      {/* =========================================================
          DESKTOP ONLY: Fixed Right-Side Floating Dock (hidden on mobile)
      ========================================================= */}
      <aside
        aria-label="Quick enquiry dock"
        className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center rounded-l-2xl border border-r-0 border-[#FFFFFF]/20 bg-[#004A26] p-2 shadow-lg md:flex"
      >
        {/* Vertical ENQUIRE Pill */}
        <Link
          href="#site-visit"
          className="flex items-center justify-center rounded-xl bg-[#006B38] px-2.5 py-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#FFFFFF] ring-1 ring-[#FFFFFF]/20 transition-colors duration-200 hover:bg-[#FFFFFF] hover:text-[#006B38]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Enquire
        </Link>

        {/* Subtle Divider */}
        <div
          className="my-2.5 h-[1px] w-7 bg-[#FFFFFF]/25"
          aria-hidden="true"
        />

        {/* Call Icon Button */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          aria-label="Call Oceanside Sales Desk"
          title="Call +91 98765 43210"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#FFFFFF]/20 bg-[#006B38]/60 text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FFFFFF] hover:text-[#006B38]"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>

        {/* WhatsApp Icon Button */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="WhatsApp Us"
          className="mt-2 flex h-10 w-10 items-center justify-center rounded-xl border border-[#FFFFFF]/20 bg-[#006B38]/60 text-[#FFFFFF] transition-colors duration-200 hover:bg-[#FFFFFF] hover:text-[#006B38]"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.6-5.2A8.5 8.5 0 1 1 21 11.5z" />
            <path d="M9.5 9.2c.2-.4.4-.4.6-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4 0 .6l-.4.5c-.1.1-.2.3-.1.5.4.8 1.1 1.5 1.9 1.9.2.1.4 0 .5-.1l.5-.4c.2-.1.4-.1.6 0l1.4.6c.3.1.4.3.4.5v.5c0 .3-.2.6-.5.8-.5.3-1.3.4-2.3.1-1.4-.4-2.8-1.5-3.7-2.8-.8-1.1-1.3-2.3-1-3.3.1-.3.3-.6.5-.8z" />
          </svg>
        </a>
      </aside>

      {/* Desktop Bottom-Right Quick Chat / Enquiry Circle */}
      <Link
        href="#site-visit"
        aria-label="Quick Enquiry"
        title="Schedule a Site Visit or Enquire"
        className="fixed bottom-6 right-6 z-40 hidden h-12 w-12 items-center justify-center rounded-full border border-[#FFFFFF]/30 bg-[#006B38] text-[#FFFFFF] shadow-lg transition-colors duration-200 hover:bg-[#004A26] md:flex"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </Link>
    </>
  );
}
