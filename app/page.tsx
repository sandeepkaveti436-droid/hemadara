// app/page.tsx
import Navbar from "@/components/src/Navbar";
import HeroSection from "@/components/src/HeroSection";
import ProjectIntroduction from "@/components/src/ProjectIntroduction";
import ApartmentConfigurations from "@/components/src/ApartmentConfigurations";
import ProjectHighlights from "@/components/src/ProjectHighlights";
import ExploreProperty from "@/components/src/ExploreProperty";
import LocationAdvantage from "@/components/src/LocationAdvantage";
import AboutBuilder from "@/components/src/AboutBuilder";
import EnquirySection from "@/components/src/EnquirySection";
import Footer from "@/components/src/Footer";
import FloatingActions from "@/components/src/FloatingActions";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0]">
      <Navbar />
      <HeroSection />
      <ProjectIntroduction />
      <ApartmentConfigurations />
      <ProjectHighlights />
      <ExploreProperty />
      <LocationAdvantage />
      <AboutBuilder />
      <EnquirySection />
      <Footer />
      <FloatingActions />
    </main>
  );
}
