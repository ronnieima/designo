import React from "react";
import MaxWidthContainer from "./MaxWidthContainer";
import { qualities } from "@/lib/content";
import Quality from "./Quality";

export default function QualitiesSection() {
  return (
    <section className="py-20">
      <MaxWidthContainer className="gap-20 text-darkGray">
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
