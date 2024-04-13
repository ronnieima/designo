import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import Project from "./Project";
import { projects } from "@/lib/content";

export default function ProjectSection() {
  return (
    <section className="py-20">
      <MaxWidthContainer className="gap-6">
        {projects.map((project) => (
          <Project
            key={project.label}
            label={project.label}
            href={project.href}
            backgroundUrl={project.backgroundUrl}
          />
        ))}
      </MaxWidthContainer>
    </section>
  );
}
