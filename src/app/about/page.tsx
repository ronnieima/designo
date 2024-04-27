import HeroAbout from "./components/HeroAbout";
import LocationsSection from "./components/LocationsSection";
import WorldClassTalent from "./components/WorldClassTalent";

export default function AboutPage() {
  return (
    <main className="h-full pb-[500px]">
      <HeroAbout />
      <WorldClassTalent />
      <LocationsSection />
    </main>
  );
}
