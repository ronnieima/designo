"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavLinks from "./ui/NavLinks";
import MaxWidthContainer from "./MaxWidthContainer";
import Link from "next/link";
import { Button } from "./ui/button";
import { createPortal } from "react-dom";
import { links } from "@/lib/content";

export default function Navbar() {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  return (
    <>
      <nav className=" flex h-[96px] items-center md:h-[128px]">
        <MaxWidthContainer className="w-full flex-row justify-between px-4 sm:px-0">
          {/* <Link href={"/"}>
            <Image
              src={"/assets/shared/desktop/logo-dark.png"}
              width={0}
              height={0}
              className="h-auto w-52"
              sizes="100vw"
              alt="Designo Logo"
            />
          </Link> */}
          <h2>BACKUPGENX</h2>
          <NavLinks className="hidden sm:flex sm:flex-row sm:text-black" />

          <Button
            className="sm:hidden"
            variant={"ghost"}
            onClick={() => setIsOpenMobileNav(!isOpenMobileNav)}
          >
            <Image
              src={
                isOpenMobileNav
                  ? "/assets/shared/mobile/icon-close.svg"
                  : "/assets/shared/mobile/icon-hamburger.svg"
              }
              width={0}
              height={0}
              className="size-6"
              sizes="25vw"
              alt="Hamburger Menu"
            />
          </Button>
        </MaxWidthContainer>
      </nav>
      {isOpenMobileNav &&
        createPortal(
          <div className="absolute top-[96px] h-[calc(100%-96px)] w-full bg-black/50 md:hidden">
            <ul className="flex h-[235px] flex-col items-start justify-center gap-8 bg-black px-6 py-12 text-[24px] uppercase leading-[25px] text-white">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>,
          document.body,
        )}
    </>
  );
}
