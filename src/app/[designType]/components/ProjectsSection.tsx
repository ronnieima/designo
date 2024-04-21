import { ProjectType } from "@/lib/content";
import React from "react";
import Project from "./Project";

type Props = {
  projectType: ProjectType;
};

export default function ProjectsSection({ projectType }: Props) {
  return (
    <section className="flex flex-col gap-10 px-6 py-24">
      {projectType.projects.map((project) => (
        <Project key={project.label} project={project} />
      ))}
    </section>
  );
}
