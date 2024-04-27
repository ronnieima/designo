import Image, { getImageProps } from "next/image";
import React from "react";
import HeroAbout from "./components/HeroAbout";
import WorldClassTalent from "./components/WorldClassTalent";

export default function AboutPage() {
  return (
    <main className="h-full pb-[500px]">
      <HeroAbout />
      <WorldClassTalent />
    </main>
  );
}
