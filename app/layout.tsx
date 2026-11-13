import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant-garamond",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Aurelia Residences | Thoughtfully Designed 2 & 3 BHK Homes",
  description:
    "Thoughtfully designed residences that bring together comfort, modern architecture and everyday convenience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} scroll-smooth`}
    >
      <body className="bg-[#F7F5F0] font-sans text-[#252525] antialiased selection:bg-[#D8C7AA]/40 selection:text-[#252525]">
        {children}
      </body>
    </html>
  );
}
