import { ProjectType } from "@/lib/content";
import React from "react";
import Project from "./Project";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import { cn } from "@/lib/utils";

type Props = {
  projectType: ProjectType;
};

export default function ProjectsSection({ projectType }: Props) {
  return (
    <section>
      <MaxWidthContainer
        className={cn(
          "flex flex-col gap-10 px-6 py-24",
          "xl:grid xl:auto-rows-auto xl:grid-cols-3 xl:py-32 ",
        )}
      >
        {projectType.projects.map((project) => (
          <Project key={project.label} project={project} />
        ))}
      </MaxWidthContainer>
    </section>
  );
}
