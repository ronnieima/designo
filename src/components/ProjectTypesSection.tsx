"use client";
import { projectTypes } from "@/lib/content";
import MaxWidthContainer from "./MaxWidthContainer";
import ProjectTypeLink from "./ui/ProjectTypeLink";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function ProjectTypesSection() {
  const pathname = usePathname();
  const projectTypeLinks = pathname
    ? projectTypes.filter((projectType) => projectType.href !== pathname)
    : projectTypes;
  return (
    <section className="py-20">
      <MaxWidthContainer
        className={cn("gap-6 xl:grid xl:grid-cols-2 xl:grid-rows-2", {
          "xl:flex xl:flex-row": pathname !== "/",
        })}
      >
        {projectTypeLinks.map((projectType) => (
          <ProjectTypeLink key={projectType.label} projectType={projectType} />
        ))}
      </MaxWidthContainer>
    </section>
  );
}
