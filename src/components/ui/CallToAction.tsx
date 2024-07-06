"use client";
import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function CallToAction() {
  const pathName = usePathname();

  if (pathName === "/contact") return;

  return (
    <div
      className={cn(
        "absolute -top-1/4 left-1/2 h-[379px] w-full  max-w-[327px] -translate-x-1/2  rounded-lg bg-peach text-white",

        "md:max-w-[690px]",
        "lg:max-w-[1111px] ",
      )}
    >
      <div
        className={cn(
          "flex h-full flex-col items-center justify-center gap-8 md:p-14",
          " lg:flex-row lg:justify-between",
        )}
      >
        <header className="flex w-full flex-col items-center justify-center gap-4 px-6  lg:max-w-lg lg:items-start lg:text-left ">
          <h1 className="md:max-w-sm ">Let’s talk about your project</h1>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </header>
        <Button className="h-[56px] w-[152px] uppercase">Get in touch</Button>
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-threeCircles  bg-contain"></div>
      </div>
    </div>
  );
}
