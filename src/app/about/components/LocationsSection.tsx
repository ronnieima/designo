import React from "react";
import Location from "./Location";

const locations = [
  {
    label: "Canada",
    value: "canada",
    imageUrl: "/assets/shared/desktop/illustration-canada.svg",
    className: "rotate-90",
  },
  {
    label: "Australia",
    value: "australia",
    imageUrl: "/assets/shared/desktop/illustration-australia.svg",
    className: "",
  },
  {
    label: "United Kingdom",
    value: "united-kingdom",
    imageUrl: "/assets/shared/desktop/illustration-united-kingdom.svg",
    className: "-rotate-90",
  },
];

export type LocationType = (typeof locations)[0];

export default function LocationsSection() {
  return (
    <section className="flex flex-col items-center gap-12 py-32 md:py-0">
      {locations.map((location) => (
        <Location key={location.label} location={location} />
      ))}
    </section>
  );
}
