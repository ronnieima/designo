"use client";
import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function CallToAction() {
  const pathName = usePathname();

  if (pathName === "/contact") return;

  return (
    <div
      className={cn(
        "absolute -top-1/4 left-1/2 h-[379px] w-full  max-w-[327px] -translate-x-1/2  rounded-lg bg-peach text-white",

        "md:max-w-[690px]",
        "lg:h-[292px] lg:max-w-[1111px]",
      )}
    >
      <div
        className={cn(
          " relative flex h-full flex-col items-center justify-center gap-8 overflow-clip md:p-14",
          " lg:pb-[ lg:flex-row lg:justify-between lg:px-24 lg:py-[72px]",
        )}
      >
        <header className="flex w-full flex-col items-center justify-center gap-4 px-6  lg:max-w-lg lg:items-start lg:text-left ">
          <h2 className="md:max-w-sm ">Let’s talk about your project</h2>
          <p>
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </header>
        <Button asChild className="h-[56px] w-[152px] uppercase">
          <Link href={"/contact"}>Get in touch</Link>
        </Button>
        <Image
          className="absolute right-0 -z-10 h-[584px] w-[876px]"
          src="assets/shared/desktop/bg-pattern-call-to-action.svg"
          width={0}
          height={0}
          sizes="100vw"
          alt="call to action pattern"
        />
      </div>
    </div>
  );
}
