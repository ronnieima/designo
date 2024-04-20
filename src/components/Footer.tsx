import { cn } from "@/lib/utils";
import Image from "next/image";
import MaxWidthContainer from "./MaxWidthContainer";
import CallToAction from "./ui/CallToAction";
import NavLinks from "./ui/NavLinks";
import SocialLinks from "./ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="relative bg-black pb-16 pt-[253px] text-center">
      <MaxWidthContainer
        className={cn("gap-8", "sm:grid sm:grid-cols-3 sm:grid-rows-[1fr_0.1fr_4fr] sm:pt-20")}
      >
        <CallToAction/>
        <Image
          src={"/assets/shared/desktop/logo-light.png"}
          width={0}
          height={0}
          className="h-auto w-[202px] col-span"
          sizes="66vw"
          alt="light logo"
        />
        <div className="h-1 w-full bg-darkGray/20 sm:col-span-full sm:row-span-1"></div>
        <NavLinks className="sm:col-[2_/_4] sm:row-[1_/_1] sm:flex-row sm:justify-self-end" />
        <div className="sm:col-span-2 sm:row-span-2 flex-col gap-10  flex sm:flex-row sm:text-left">
          <div className="text-lightGray/50">
            <p className="font-bold">Designo Central Office </p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>

          <div className="text-lightGray/50">
            <p className="font-bold">Contact Us (Central Office)</p>
            <p>P : +1 253-863-8967</p>
            <p>M : contact@designo.co</p>
          </div>
        </div>

        <SocialLinks />
      </MaxWidthContainer>
    </footer>
  );
}
