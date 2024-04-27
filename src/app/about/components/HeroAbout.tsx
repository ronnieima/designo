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
    <section className="flex flex-col">
      <picture>
        <source media="(min-width: 1440px)" srcSet={desktopHero} />
        <source media="(min-width: 768px)" srcSet={tabletHero} />
        <source media="(min-width: 500px)" srcSet={mobileHero} />
        <img {...rest} style={{ width: "100%", height: "100%" }} />
      </picture>
      <div className="flex h-full flex-col items-center justify-center gap-6 bg-peach px-6 py-20 text-center text-white">
        <h1>About Us</h1>
        <p>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
    </section>
  );
}
