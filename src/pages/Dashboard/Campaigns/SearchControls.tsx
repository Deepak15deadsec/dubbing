import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { GeoSearchControl } from "leaflet-geosearch";
import 'leaflet-geosearch/dist/geosearch.css';
import { Cipher } from "crypto";

const SearchControls = (props:any) => {
  const map = useMap();

//@ts-ignore
  useEffect(() => {
    //@ts-ignore
    const searchControl = new GeoSearchControl({
      provider: props?.provider,
      style:'bar',
      ...props
    });

    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, [map, props]);

  return null;
};
export default SearchControls;