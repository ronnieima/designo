"use client";
import { cn } from "@/lib/utils";
import Image, { getImageProps } from "next/image";
import SectionTemplate from "../../../components/SectionTemplate";

export default function HeroAbout() {
  const common = {
    alt: "About Page Hero",
    sizes: "(max-width: 768px) 100vw, 33vw",
  };
  const {
    props: { srcSet: desktopHero },
  } = getImageProps({
    ...common,
    width: 0,
    height: 0,
    quality: 80,
    // src: "/assets/about/desktop/image-about-hero.jpg",
    src: "/aboutus.jpeg",
  });
  const {
    props: { srcSet: tabletHero },
  } = getImageProps({
    ...common,
    width: 0,
    height: 0,
    quality: 80,
    src: "/assets/about/tablet/image-about-hero.jpg",
  });
  const {
    props: { srcSet: mobileHero, ...rest },
  } = getImageProps({
    ...common,
    width: 0,
    height: 0,
    quality: 70,
    src: "/assets/about/mobile/image-about-hero.jpg",
  });
  return (
    <SectionTemplate reverseRow variant="peach">
      <SectionTemplate.Picture>
        <source media="(min-width: 1440px)" srcSet={desktopHero} />
        <source media="(min-width: 768px)" srcSet={tabletHero} />
        <source media="(min-width: 500px)" srcSet={mobileHero} />
        <img
          {...rest}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className={cn(
            "md:rounded-t-radius",
            "xl:rounded-r-radius xl:rounded-tl-none",
          )}
        />
      </SectionTemplate.Picture>
      <SectionTemplate.Content>
        <Image
          src={"/assets/shared/desktop/bg-pattern-small-circle.svg"}
          width={0}
          height={0}
          className={cn(
            "absolute z-0 rotate-180",
            "-top-1/3 right-0 size-[292px] -rotate-90",
            "md:-left-[130px] md:-top-[400px] md:size-[640px]",
            "xl:bottom-0 xl:left-auto xl:right-0 xl:top-auto xl:size-[640px] xl:rotate-180",
          )}
          alt="small circle"
        />
        <div className="z-10 space-y-6 md:space-y-8">
          <h1>About Us</h1>
          <p>
            {/* Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences. */}
            Welcome to BackupGenX, the brainchild of two innovative and
            passionate young men, Jonathan and Scot. With a shared vision of
            revolutionizing men's health and wellness, they embarked on a
            mission to make high-quality, effective solutions for common health
            concerns more accessible and approachable.
          </p>
        </div>
      </SectionTemplate.Content>
    </SectionTemplate>
  );
}
