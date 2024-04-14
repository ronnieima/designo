import Image from "next/image";
import React from "react";
import NavLinks from "./ui/NavLinks";
import MaxWidthContainer from "./MaxWidthContainer";

export default function Navbar() {
  return (
    <nav className=" h-[96px] flex items-center">
      <MaxWidthContainer className="flex-row justify-between w-full px-4 sm:px-0">

      <Image
        src={"/assets/shared/desktop/logo-dark.png"}
        width={0}
        height={0}
        className="h-auto w-52"
        sizes="100vw"
        alt="Designo Logo"
        />
      <NavLinks className="hidden sm:flex sm:text-black sm:flex-row"/>
      <Image
        src={"/assets/shared/mobile/icon-hamburger.svg"}
        width={0}
        height={0}
        className="size-6 sm:hidden"
        sizes="25vw"
        alt="Designo Logo"
        />
        </MaxWidthContainer>
    </nav>
  );
}
