"use client";
import { cn } from "@/lib/utils";
import { getImageProps } from "next/image";
import SectionTemplate from "../../../components/SectionTemplate";

export default function WorldClassTalent() {
  const common = {
    alt: "About Page ",
    sizes: "100vw",
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 0,
    height: 0,
    quality: 80,
    src: "/assets/about/desktop/image-world-class-talent.jpg",
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 0,
    height: 0,
    quality: 80,
    src: "/assets/about/tablet/image-world-class-talent.jpg",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 0,
    height: 0,
    quality: 70,
    src: "/assets/about/mobile/image-world-class-talent.jpg",
  });
  return (
    <SectionTemplate className="bg-lighterPeach">
      <SectionTemplate.Picture>
        <source media="(min-width: 1440px)" srcSet={desktop} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <source media="(min-width: 500px)" srcSet={mobile} />
        <img
          {...rest}
          style={{ width: "100%", height: "100%" }}
          className={cn("md:rounded-t-border", "xl:rounded-l-radius")}
        />
      </SectionTemplate.Picture>
      <SectionTemplate.Content>
        <SectionTemplate.BackgroundPattern />
        <SectionTemplate.Header className="text-peach">
          World-class talent
        </SectionTemplate.Header>
        <SectionTemplate.Description>
          <p>
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms.
          </p>
          <p>
            Our team is multi-disciplinary and we are not merely interested in
            form — content and meaning are just as important. We give great
            importance to craftsmanship, service, and prompt delivery. Clients
            have always been impressed with our high-quality outcomes that
            encapsulates their brand’s story and mission.
          </p>
        </SectionTemplate.Description>
      </SectionTemplate.Content>
    </SectionTemplate>
  );
}
