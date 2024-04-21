import React from "react";
import DesignPageHeader from "./components/DesignPageHeader";
import { projectTypes } from "@/lib/content";
import { notFound } from "next/navigation";
import ProjectTypesSection from "@/components/ProjectTypesSection";
import ProjectsSection from "./components/ProjectsSection";

type Props = {
  params: { designType: string };
};

export default function DesignTypePage({ params }: Props) {
  const projectType = projectTypes.find(
    (projectType) => projectType.href.slice(1) === params.designType,
  );
  if (!projectType) notFound();

  return (
    <main>
      <DesignPageHeader projectType={projectType} />
      <ProjectsSection projectType={projectType} />
      <ProjectTypesSection />
    </main>
  );
}
