import MaxWidthContainer from "@/components/MaxWidthContainer";
import { cn } from "@/lib/utils";
import { getImageProps } from "next/image";
import React from "react";

export default function HeroAbout() {
  const common = {
    alt: "About Page Hero",
    sizes: "100vw",
  };
  const {
    props: { srcSet: desktopHero },
  } = getImageProps({
    ...common,
    width: 0,
    height: 0,
    quality: 80,
    src: "/assets/about/desktop/image-about-hero.jpg",
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
    <section className="h-full">
      <MaxWidthContainer className="px-0">
        <picture className=" w-full">
          <source media="(min-width: 1440px)" srcSet={desktopHero} />
          <source media="(min-width: 768px)" srcSet={tabletHero} />
          <source media="(min-width: 500px)" srcSet={mobileHero} />
          <img
            {...rest}
            style={{ width: "100%", height: "100%" }}
            className="md:rounded-t-border"
          />
        </picture>
        <div
          className={cn(
            "relative flex h-1/2  flex-col items-center justify-center gap-6  bg-peach px-6 py-20 text-center  text-white",
            "md:rounded-b-border",
          )}
        >
          {/* <div className="-translate-y-4/5 absolute right-1/2 h-full  w-full -rotate-90 scale-150 bg-circle bg-clip-padding"></div> */}
          <h1>About Us</h1>
          <p>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
          </p>
        </div>
      </MaxWidthContainer>
    </section>
  );
}
