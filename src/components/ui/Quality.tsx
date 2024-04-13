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
        "relative flex flex-col items-center justify-center gap-12 text-center",
      )}
    >
      <Image
        src={imageUrl}
        width={0}
        height={0}
        className={cn("size-[202px] bg-cover ")}
        sizes="100vw"
        alt={header}
      />
      <div
        className={cn(
          "bg-circle absolute top-0 -z-10 size-[202px] bg-cover",
          className,
        )}
      ></div>

      <header className="space-y-8">
        <h3 className="text-[20px]">{header}</h3>
        <figcaption>{description}</figcaption>
      </header>
    </figure>
  );
}
