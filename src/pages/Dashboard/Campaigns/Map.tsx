import React from "react";
import {MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function OpenMap() {
  
  return (
    <div className="w-[300px] h-[300px]">
      map here
      <MapContainer
      className="markercluster-map w-[300px] h-[300px]"
      center={[51.0, 19.0]}
      zoom={4}
      maxZoom={18}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=mxqyjStICr9e0GW4sNEn"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
    </div>
  );
}

export default OpenMap;
