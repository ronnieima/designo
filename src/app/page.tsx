import HeroSection from "@/components/HeroSection";
import ProjectTypesSection from "@/components/ProjectSection";
import QualitiesSection from "@/components/QualitiesSection";

export default function Home() {
  return (
    <main className="pb-[311px]">
      <HeroSection />
      <ProjectTypesSection />
      <QualitiesSection />
    </main>
  );
}
