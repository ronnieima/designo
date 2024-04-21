"use client";
import { projectTypes } from "@/lib/content";
import MaxWidthContainer from "./MaxWidthContainer";
import ProjectTypeLink from "./ui/ProjectTypeLink";
import { usePathname } from "next/navigation";

export default function ProjectTypesSection() {
  const searchParmas = usePathname();
  const projectTypeLinks = searchParmas
    ? projectTypes.filter((projectType) => projectType.href !== searchParmas)
    : projectTypes;

  return (
    <section className="py-20">
      <MaxWidthContainer className="gap-6 xl:grid xl:grid-cols-2 xl:grid-rows-2">
        {projectTypeLinks.map((projectType) => (
          <ProjectTypeLink key={projectType.label} projectType={projectType} />
        ))}
      </MaxWidthContainer>
    </section>
  );
}
