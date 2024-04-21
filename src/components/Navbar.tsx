"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavLinks from "./ui/NavLinks";
import MaxWidthContainer from "./MaxWidthContainer";
import Link from "next/link";
import { Button } from "./ui/button";
import { createPortal } from "react-dom";

export default function Navbar() {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  console.log(isOpenMobileNav);
  return (
    <>
      <nav className=" flex h-[96px] items-center">
        <MaxWidthContainer className="w-full flex-row justify-between px-4 sm:px-0">
          <Link href={"/"}>
            <Image
              src={"/assets/shared/desktop/logo-dark.png"}
              width={0}
              height={0}
              className="h-auto w-52"
              sizes="100vw"
              alt="Designo Logo"
            />
          </Link>
          <NavLinks className="hidden sm:flex sm:flex-row sm:text-black" />

          <Button
            className="sm:hidden"
            variant={"ghost"}
            onClick={() => setIsOpenMobileNav(!isOpenMobileNav)}
          >
            <Image
              src={"/assets/shared/mobile/icon-hamburger.svg"}
              width={0}
              height={0}
              className="size-6 "
              sizes="25vw"
              alt="Hamburger Menu"
            />
          </Button>
        </MaxWidthContainer>
      </nav>
      {isOpenMobileNav &&
        createPortal(
          <div className="absolute top-[96px] h-full w-full bg-black/50">
            <div className="  h-[235px]  bg-black text-white">
              <ul></ul>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
