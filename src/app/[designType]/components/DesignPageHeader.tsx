import MaxWidthContainer from "@/components/MaxWidthContainer";
import { ProjectType } from "@/lib/content";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function DesignPageHeader({
  projectType,
}: {
  projectType: ProjectType;
}) {
  return (
    <MaxWidthContainer
      className={cn(
        "relative flex h-80  flex-col items-center justify-center gap-6 overflow-clip bg-peach px-6 text-center text-white",
        "md:rounded-lg",
      )}
    >
      <h1>{projectType.label}</h1>
      <p className="max-w-sm">{projectType.description}</p>
      <Image
        src={projectType.introBgUrl!}
        className={"absolute -right-16 h-auto w-full scale-150 "}
        width={0}
        height={0}
        alt={`${projectType.label} intro background`}
      />
    </MaxWidthContainer>
  );
}
