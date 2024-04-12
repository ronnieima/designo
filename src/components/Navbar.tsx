import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex h-[96px] items-center justify-between px-6">
      <Image
        src={"/assets/shared/desktop/logo-dark.png"}
        width={0}
        height={0}
        className="h-auto w-auto"
        sizes="75vw"
        alt="Designo Logo"
      />
      <Image
        src={"/assets/shared/mobile/icon-hamburger.svg"}
        width={0}
        height={0}
        className="size-6"
        sizes="25vw"
        alt="Designo Logo"
      />
    </nav>
  );
}
