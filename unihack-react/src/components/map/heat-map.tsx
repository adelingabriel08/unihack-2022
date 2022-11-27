import React, { useEffect, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { IItem } from "../../interfaces";
import { getStolenItems } from "../../utils/api-service";

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
  const [items, setItems] = useState<IItem[]>([]);

  const google = window.google;

  const handleOnLoad = (map: any) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  const onLoad = (marker: any) => {
    console.log("marker: ", marker);
  };

  useEffect(() => {
    getStolenItems().then((result) =>
      setItems(result.map((item: IItem) => item))
    );
  }, []);

  return (
    <GoogleMap
      onLoad={handleOnLoad}
      mapContainerStyle={{ width: "100vw", height: "100vh" }}
    >
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <Marker
            onLoad={onLoad}
            position={
              {
                lat: Number(item.location.split(",")[1]),
                lng: Number(item.location.split(",")[2]),
              } as google.maps.LatLngLiteral
            }
          />
        </React.Fragment>
      ))}
    </GoogleMap>
  );
}

export default HeatMapComponent;
