import MaxWidthContainer from "@/components/MaxWidthContainer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative -z-30 mx-auto h-[843px] max-w-[689px] overflow-clip bg-peach md:rounded-lg">
      <MaxWidthContainer className="max-w-[573px] gap-4 pt-20 text-center text-white">
        <h1>Award-winning custom designs and digital branding solutions</h1>
        <p className="max-w-[445px]">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Button>LEARN MORE</Button>
      </MaxWidthContainer>
      <Image
        src={"/assets/home/desktop/image-hero-phone.png"}
        width={0}
        height={0}
        className="absolute bottom-[-22%] -z-10 h-auto w-full scale-[1.75]"
        sizes="100vw"
        alt="smartphone"
      />
      <Image
        width={0}
        height={0}
        className="absolute -right-[5.5rem] top-[17.5rem] -z-20 size-72 scale-[2.22]"
        src={"/assets/home/desktop/bg-pattern-hero-home.svg"}
        alt="circle hero pattern"
      />
    </section>
  );
}
