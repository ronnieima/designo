import HeroAbout from "./components/HeroAbout";
import LocationsSection from "./components/LocationsSection";
import RealDealSection from "./components/RealDealSection";
import WorldClassTalent from "./components/WorldClassTalent";

export default function AboutPage() {
  return (
    <main className="flex h-full flex-col items-center pb-[120px] md:gap-32">
      <HeroAbout reverseRow />
      <WorldClassTalent />
      <LocationsSection />
      <RealDealSection />
    </main>
  );
}
