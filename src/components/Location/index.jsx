"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Set the icon for the marker
const DefaultIcon = L.icon({
  iconUrl: "/images/map/marker-icon.png", // You need to provide your own marker icon
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const Location = ({ item }) => {
  const position = [0, 0]; // Default position, will be updated with the actual address

  // Replace the coordinates with the actual ones for the address
  const addressCoordinates = [  -37.80502615067402,144.9827446421601]; // Replace with actual latitude and longitude


  return (
    <div className="max-w-full">
      {/* <div className="mb-4 text-lg leading-8 text-[#343A40]">
        {item?.address || "Dubai Marina, Dubai, United Arab Emirates"}
      </div> */}
      <div className="relative h-[368px] min-w-full rounded bg-slate-400">
      <MapContainer
      className="z-10"
      center={addressCoordinates}
      zoom={14}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={addressCoordinates}>
        <Popup></Popup>
      </Marker>
    </MapContainer>
      </div>
    </div>
  );
};

export default Location;
