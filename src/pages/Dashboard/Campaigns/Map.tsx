// import { TileLayer } from "leaflet";
import { Slider, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  useMapEvents,
  Circle,
} from "react-leaflet";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import SearchControls from "./SearchControls";

const marks = [
  {
    value: 0,
    label: "0 km",
  },
  {
    value: 100,
    label: "100 km",
  },
];

const provider = new OpenStreetMapProvider();

function MyComponent(props: any) {
  const [zoomLevel, setZoomLevel] = useState(5); // initial zoom level provided for MapContainer
  const { setRadius, place } = props;

  const mapEvents = useMapEvents({
    zoomend: () => {
      setZoomLevel(mapEvents.getZoom());
    },
  });

  return null;
}

function OpenMap(props: any) {
  const { handleClose, setLocationArray, locationArray } = props;
  const [radius, setRadius] = useState(50);
  const [place, setPlace] = useState({
    lat: 20.5937,
    long: 78.9629,
    venue: "",
    radius:radius,
  });

  useEffect(()=>{
  setPlace({...place,radius:radius})
  },[radius])

  return (
    <div className="w-full h-full rounded-xl flex">
      <div className="w-full">
        <MapContainer
          className="markercluster-map w-full h-full"
          center={[place.lat, place.long]}
          zoom={2}
          maxZoom={24}
        >
          <TileLayer
            url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=mxqyjStICr9e0GW4sNEn"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <MyComponent setRadius={setRadius} place={place} />
          <SearchControls
            provider={provider}
            showMarker={true}
            showPopup={false}
            popupFormat={({ query, result }: any) => {
              setPlace({
                ...place,
                lat: result?.y,
                long: result?.x,
                venue: result.label,
                radius:radius,
              });
              return result.label;
            }}
            maxMarkers={1}
            retainZoomLevel={false}
            animateZoom={true}
            autoClose={false}
            searchLabel={"Enter address, please"}
            keepResult={true}
          />
          {place?.venue.length > 0 && (
            <Circle center={[place.lat, place.long]} radius={radius * 1000} />
          )}
        </MapContainer>
        <div className="w-full bg-white rounded-b-lg min-h-12 flex items-center">
          <div className="w-full flex items-center">
            <div className="h-10 bg-blue-500 rounded-md p-3 text-white font-semibold flex items-center ml-3">
              Radius adjust
            </div>
            <div className="w-1/2 ml-4">
              <Slider
                className="mt-8"
                size="medium"
                aria-label="Small"
                value={radius}
                onChange={(e: any) => {
                  setRadius(e.target.value);
                }}
                valueLabelDisplay="auto"
                marks={marks}
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-end">
            <button
              className="bg-blue-500  mr-4 p-2 text-white font-semibold rounded-md"
              onClick={() => {
                if (!locationArray.includes(place) && place.venue.length > 0) {
                  setLocationArray([...locationArray, place]);
                  handleClose();
                }
              }}
            >
              Add Location
            </button>
            <button
              className="bg-red-500 w-[70px] ml-4 mr-8 p-2 text-white font-semibold rounded-md"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenMap;
