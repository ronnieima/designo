import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  imageUrl: string;
  header: string;
  description: string;
  className?: string;
};

export default function Quality({
  imageUrl,
  header,
  description,
  className,
}: Props) {
  return (
    <figure
      className={cn(
        " flex flex-col items-center justify-center gap-12 text-center",
        "sm:flex-row",
        "xl:flex-col"
      )}
    >
      <div className="relative size-[202px] h-full w-full">
        <Image
          src={imageUrl}
          width={0}
          height={0}
          className={cn("h-full w-full bg-cover")}
          sizes="100vw"
          alt={header}
        />
        <div
          className={cn(
            "bg-circle absolute top-0 -z-10 h-full w-full bg-cover",
            className,
          )}
        ></div>
      </div>

      <header className="space-y-8 sm:text-left xl:text-center">
        <h3 className="text-[20px]">{header}</h3>
        <figcaption>{description}</figcaption>
      </header>
    </figure>
  );
}
