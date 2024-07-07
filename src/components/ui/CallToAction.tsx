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

        "sm:max-h-[350px] sm:max-w-[690px]",
        "xl:h-[292px] xl:max-w-[1111px]",
      )}
    >
      <div
        className={cn(
          " relative flex h-full flex-col items-center justify-center gap-8 overflow-clip md:p-14",
          " xl:pb-[ xl:flex-row xl:justify-between xl:px-24 xl:py-[72px]",
        )}
      >
        <header className="flex w-full flex-col items-center justify-center gap-4 px-6  xl:max-w-lg xl:items-start xl:text-left ">
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
          className="xl:left-a absolute  -z-10 h-[584px] min-w-[876px]   md:-left-8 xl:right-0"
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
