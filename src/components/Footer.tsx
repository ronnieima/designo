import Image from "next/image";
import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import NavLinks from "./ui/NavLinks";
import SocialLinks from "./ui/SocialLinks";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="relative bg-black pb-16 pt-[253px] text-center">
      <MaxWidthContainer className="gap-8">
        <div className="bg-threeCircles absolute -top-1/4 flex h-[379px] w-[327px] flex-col items-center justify-between gap-8 rounded-lg bg-peach px-6 py-16 text-white">
          <header className="flex flex-col gap-4 ">
            <h1>Let’s talk about your project</h1>
            <p>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </header>
          <Button className="h-[56px] w-[152px] uppercase">Get in touch</Button>
        </div>
        <Image
          src={"/assets/shared/desktop/logo-light.png"}
          width={0}
          height={0}
          className="h-auto w-[202px]"
          sizes="66vw"
          alt="light logo"
        />
        <div className="h-1 w-full bg-darkGray/20"></div>
        <NavLinks />
        <div className="space-y-10">
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
