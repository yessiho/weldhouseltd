// app/page.tsx

import HeroSection from "@/components/home/HeroSection";
import OpportunityBanner from "@/components/home/OpportunityBanner";
import KeyStats from "@/components/home/KeyStats";
import WhyNigeria from "@/components/home/WhyNigeria";
import FacilitiesGrid from "@/components/home/FacilitiesGrid";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OpportunityBanner />
      <KeyStats />
      <WhyNigeria />
      <FacilitiesGrid />
      <CTASection />
    </>
  );
}