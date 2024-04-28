"use client";
import { cn } from "@/lib/utils";
import { getImageProps } from "next/image";
import SectionTemplate from "../../../components/SectionTemplate";

export default function RealDealSection() {
  const common = {
    alt: "The real deal",
    sizes: "100vw",
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 0,
    height: 0,
    quality: 80,
    src: "/assets/about/desktop/image-real-deal.jpg",
  });
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    width: 0,
    height: 0,
    quality: 80,
    src: "/assets/about/tablet/image-real-deal.jpg",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 0,
    height: 0,
    quality: 70,
    src: "/assets/about/mobile/image-real-deal.jpg",
  });
  return (
    <SectionTemplate reverseRow>
      <SectionTemplate.Picture>
        <source media="(min-width: 1440px)" srcSet={desktop} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <source media="(min-width: 500px)" srcSet={mobile} />
        <img
          {...rest}
          style={{ width: "100%", height: "100%" }}
          className={cn(
            "md:rounded-t-radius",
            "xl:rounded-r-radius xl:rounded-tl-none",
          )}
        />
      </SectionTemplate.Picture>
      <SectionTemplate.Content>
        <SectionTemplate.BackgroundPattern />
        <SectionTemplate.Header className="text-peach">
          The real deal
        </SectionTemplate.Header>
        <p>
          As strategic partners in our clients’ businesses, we are ready to take
          on any challenge as our own. Solving real problems require empathy and
          collaboration, and we strive to bring a fresh perspective to every
          opportunity. We make design and technology more accessible and give
          you tools to measure success.
        </p>
        <p>
          We are visual storytellers in appealing and captivating ways. By
          combining business and marketing strategies, we inspire audiences to
          take action and drive real results.
        </p>
      </SectionTemplate.Content>
    </SectionTemplate>
  );
}
