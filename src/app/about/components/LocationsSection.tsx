import React from "react";
import Location from "./Location";
import { locations } from "@/lib/content";

export type LocationType = (typeof locations)[0];

export default function LocationsSection() {
  return (
    <section className="flex flex-col items-center gap-12  xl:flex-row xl:gap-48">
      {locations.map((location) => (
        <Location key={location.label} location={location} />
      ))}
    </section>
  );
}
