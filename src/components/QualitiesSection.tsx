import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import { qualities } from "@/lib/content";
import Quality from "./ui/Quality";

export default function QualitiesSection() {
  return (
    <section>
      <MaxWidthContainer className="gap-20 text-darkGray xl:flex-row">
        {qualities.map((quality) => (
          <Quality
            key={quality.header}
            imageUrl={quality.imageUrl}
            header={quality.header}
            description={quality.description}
            className={quality?.className}
          />
        ))}
      </MaxWidthContainer>
    </section>
  );
}
