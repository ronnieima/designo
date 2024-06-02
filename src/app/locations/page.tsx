"use client";
import "leaflet/dist/leaflet.css";
import SectionTemplate from "@/components/SectionTemplate";
import { MapContainer, TileLayer } from "react-leaflet";
import { locations } from "@/lib/content";
import { LatLngExpression } from "leaflet";
export default function LocationsPage() {
  return (
    <main className="flex flex-col gap-10 py-8">
      {locations.map((location, i) => (
        <div key={location.value}>
          <div>
            <MapContainer
              center={location.coords as LatLngExpression}
              zoom={12}
              className="h-64"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </div>
          <div>
            <div>{location.label}</div>
            <div>
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
        </div>
      ))}
    </main>
  );
}
