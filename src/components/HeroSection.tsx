import MaxWidthContainer from "@/components/MaxWidthContainer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative -z-30 mx-auto h-[843px] max-w-[689px] overflow-clip bg-peach sm:rounded-lg xl:h-[640px] xl:max-w-[1111px] xl:px-24">
      <MaxWidthContainer className="h-full max-w-[573px] justify-start gap-4 pt-20 text-center text-white xl:mx-0 xl:flex xl:max-w-[540px] xl:flex-col xl:items-start xl:justify-between xl:py-36 xl:text-left">
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p className="max-w-[445px]">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button>LEARN MORE</Button>
      </MaxWidthContainer>
      <img
        src={"/assets/home/desktop/image-hero-phone.png"}
        width={0}
        height={0}
        className="absolute -bottom-40 -z-10 h-auto w-full scale-[1.75] sm:scale-100  md:-bottom-96 xl:-bottom-[600px] xl:-right-1/4 xl:scale-[0.6]"
        sizes="100vw"
        alt="smartphone"
      />
      <Image
        width={640}
        height={640}
        className={cn(
          "absolute left-0 top-28 -z-20 min-h-[640px] min-w-[640px]",
          "sm:-right-28 sm:left-auto",
          "xl:right-0 xl:top-0",
        )}
        src={"/assets/home/desktop/bg-pattern-hero-home.svg"}
        alt="circle hero pattern"
      />
    </section>
  );
}
