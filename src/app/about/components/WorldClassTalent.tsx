import Image, { getImageProps } from "next/image";
import AboutSectionContainer from "./AboutSectionContainer";
import { cn } from "@/lib/utils";

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
    <AboutSectionContainer className="bg-lighterPeach">
      <picture className="w-full xl:min-w-[476px]">
        <source media="(min-width: 1440px)" srcSet={desktop} />
        <source media="(min-width: 768px)" srcSet={tablet} />
        <source media="(min-width: 500px)" srcSet={mobile} />
        <img
          {...rest}
          style={{ width: "100%", height: "100%" }}
          className={cn("md:rounded-t-border", "xl:rounded-l-radius")}
        />
      </picture>
      <div
        className={cn(
          "md:rounded-b-border relative flex h-full w-full flex-col items-center justify-center gap-6 overflow-clip px-6 py-20 text-center ",
          "xl:items-start xl:px-[96px] xl:py-[154px] xl:text-left",
        )}
      >
        <Image
          src={"/assets/shared/desktop/bg-pattern-three-circles.svg"}
          alt="three circles"
          width={0}
          height={0}
          style={{ objectFit: "cover" }}
          className={cn(
            "absolute h-full w-full",
            " left-0 top-0 size-[584px]",
            "xl:-left-1/4",
          )}
        />
        <h2 className="text-peach">World-class talent</h2>
        <p>
          We are a crew of strategists, problem-solvers, and technologists.
          Every design is thoughtfully crafted from concept to launch, ensuring
          success in its given market. We are constantly updating our skills in
          a myriad of platforms.
        </p>
        <p>
          Our team is multi-disciplinary and we are not merely interested in
          form — content and meaning are just as important. We give great
          importance to craftsmanship, service, and prompt delivery. Clients
          have always been impressed with our high-quality outcomes that
          encapsulates their brand’s story and mission.
        </p>
      </div>
    </AboutSectionContainer>
  );
}
