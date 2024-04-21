import ProjectTypesSection from "@/components/ProjectSection";
import React from "react";
import DesignPageHeader from "./components/DesignPageHeader";
import { projects } from "@/lib/content";
import { notFound } from "next/navigation";

type Props = {
  params: { designType: string };
};

export default function DesignTypePage({ params }: Props) {
  const project = projects.find(
    (project) => project.href.slice(1) === params.designType,
  );
  if (!project) notFound();

  return (
    <section>
      <DesignPageHeader project={project} />
      <ProjectTypesSection />
    </section>
  );
}
