import HeroSection from "@/components/HeroSection";
import ProjectTypesSection from "@/components/ProjectTypesSection";
import QualitiesSection from "@/components/QualitiesSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-[160px]">
      <div className="relative">
        <HeroSection />
        <Image
          width={0}
          height={0}
          sizes="100vw"
          className="absolute top-[317px] -z-[999] hidden h-auto w-[918px] xl:block"
          src="/assets/shared/desktop/bg-pattern-leaf.svg"
          alt="leaf pattern"
        />
      </div>
      <ProjectTypesSection />
      <div className="relative">
        <QualitiesSection />
        <Image
          width={0}
          height={0}
          sizes="100vw"
          className="absolute right-0 top-[120px] -z-[999] hidden h-[594px] w-[1006px] rotate-180 xl:block"
          src="/assets/shared/desktop/bg-pattern-leaf.svg"
          alt="leaf pattern"
        />
      </div>
    </main>
  );
}
