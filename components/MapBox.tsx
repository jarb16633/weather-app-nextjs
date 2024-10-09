"use client";
import React, { useEffect } from "react";
import { useGlobalContext } from "@/app/context/globalContext";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

type Props = {};

function FlyToActiveCity({
  activeCityCoords,
}: {
  activeCityCoords: { lat: number; lon: number };
}) {
  const map = useMap();

  useEffect(() => {
    if (activeCityCoords) {
      const zoomLevel = 13;
      const flyToOptions = {
        duration: 1.5,
      };

      map.flyTo(
        [activeCityCoords.lat, activeCityCoords.lon],
        zoomLevel,
        flyToOptions
      );
    }
  }, [activeCityCoords, map]);

  return null;
}

const MapBox = (props: Props) => {
  const { forecast } = useGlobalContext();

  const activeCityCoords = forecast?.coord;

  if (!forecast || !forecast.coord || !activeCityCoords) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="flex-1 basis-[50%] border rounded-lg">
      <MapContainer
        center={[activeCityCoords.lat, activeCityCoords.lon]}
        zoom={13}
        scrollWheelZoom={false}
        className="rounded-lg m-4"
        style={{ height: "calc(100% - 2rem)", width: "calc(100% - 2rem)" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <FlyToActiveCity activeCityCoords={activeCityCoords} />
      </MapContainer>
    </div>
  );
};

export default MapBox;
