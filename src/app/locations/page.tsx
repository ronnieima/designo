"use client";
import { locations } from "@/lib/content";
import { cn } from "@/lib/utils";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

// Dynamically import MapContainer and TileLayer with ssr: false
const MapContainer = dynamic(
  () => import("react-leaflet").then((module) => module.MapContainer),
  { ssr: false },
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((module) => module.TileLayer),
  { ssr: false },
);

export default function LocationsPage() {
  return (
    <main className="flex flex-col gap-10 py-8 md:gap-32 xl:gap-8 ">
      {locations.map((location, i) => (
        <section
          id={location.value}
          key={location.value}
          className={cn(
            `mx-auto flex w-full max-w-[689px] flex-col md:gap-6 xl:max-h-[326px] xl:max-w-[1111px] xl:flex-row`,
            { "xl:flex-row-reverse": i !== 1 },
          )}
        >
          <div className="">
            <MapContainer
              center={location.coords as LatLngExpression}
              zoom={11}
              className="h-80 md:rounded-xl xl:w-[350px]"
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </div>
          <div
            className={
              "flex w-full flex-col items-center justify-center gap-6 bg-lighterPeach py-20 text-center md:rounded-xl md:px-[74px] md:text-left"
            }
          >
            <h2 className="text-peach md:self-start">{location.label}</h2>
            <div
              className={cn(
                "flex w-full flex-col items-center gap-6",
                "md:flex-row md:justify-start md:gap-32",
              )}
            >
              <div>
                <p className="font-bold">{location.office}</p>
                <p>{location.addressLineOne}</p>
                <p>{location.addressLineTwo}</p>
              </div>
              <div>
                <p className="font-bold">Contact</p>
                <p>P : {location.phone}</p>
                <p>M : {location.email}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
