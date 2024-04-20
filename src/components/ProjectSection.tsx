"use client";
import { projects } from "@/lib/content";
import MaxWidthContainer from "./MaxWidthContainer";
import Project from "./ui/Project";
import { usePathname } from "next/navigation";

export default function ProjectSection() {
  const searchParmas = usePathname();
  const projectLinks = searchParmas
    ? projects.filter((project) => project.href !== searchParmas)
    : projects;

  return (
    <section className="py-20">
      <MaxWidthContainer className="gap-6 xl:grid xl:grid-cols-2 xl:grid-rows-2">
        {projectLinks.map((project) => (
          <Project key={project.label} project={project} />
        ))}
      </MaxWidthContainer>
    </section>
  );
}
