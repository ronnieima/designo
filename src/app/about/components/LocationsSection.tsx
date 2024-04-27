import React from "react";
import Location from "./Location";

const locations = [
  {
    label: "canada",
    imageUrl: "/assets/shared/desktop/illustration-canada.svg",
    className: "rotate-90",
  },
  {
    label: "australia",
    imageUrl: "/assets/shared/desktop/illustration-australia.svg",
    className: "",
  },
  {
    label: "united kingdom",
    imageUrl: "/assets/shared/desktop/illustration-united-kingdom.svg",
    className: "-rotate-90",
  },
];

export type LocationType = (typeof locations)[0];

export default function LocationsSection() {
  return (
    <section className="flex flex-col items-center gap-12 py-32">
      {locations.map((location) => (
        <Location key={location.label} location={location} />
      ))}
    </section>
  );
}
