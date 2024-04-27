import Image from "next/image";
import React from "react";
import { LocationType } from "./LocationsSection";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Location({ location }: { location: LocationType }) {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <div className="relative">
        <Image
          src={location.imageUrl}
          width={0}
          height={0}
          sizes="100vw"
          alt={location.label}
          className="h-full w-auto"
        />
        <div
          className={cn(
            "absolute top-0 -z-10 h-full w-full bg-circle bg-cover",
            location.className,
          )}
        ></div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <h3 className="uppercase">{location.label}</h3>
        <Button variant={"dark"}>SEE LOCATION</Button>
      </div>
    </div>
  );
}
