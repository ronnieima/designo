import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import Project from "./ui/Project";
import { projects } from "@/lib/content";

export default function ProjectSection() {
  return (
    <section className="py-20">
      <MaxWidthContainer className="gap-6 xl:grid xl:grid-rows-2 xl:grid-cols-2">
        {projects.map((project) => (
          <Project
            key={project.label}
            label={project.label}
            href={project.href}
            backgroundUrl={project.backgroundUrl}
            className={project.className}
          />
        ))}
      </MaxWidthContainer>
    </section>
  );
}
