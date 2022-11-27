import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const markers = [
  {
    id: 1000,
    name: "Chicago, Illinois",
    position: { lat: 45.760762909219224, lng: 21.225275850772704 },
  },
  {
    id: 2,
    name: "Tm, Illinois",
    position: { lat: 45.720760909219524, lng: 21.225275850772704 },
  },
];

function HeatMapComponent() {
  const google = window.google;

  const handleOnLoad = (map: any) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  const onLoad = (marker: any) => {
    console.log("marker: ", marker);
  };

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      mapContainerStyle={{ width: "100vw", height: "100vh" }}
    >
      {markers.map((marker) => (
        <React.Fragment key={marker.id}>
          <Marker onLoad={onLoad} position={marker.position} />
        </React.Fragment>
      ))}
    </GoogleMap>
  );
}

export default HeatMapComponent;
