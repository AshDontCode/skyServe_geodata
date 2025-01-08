import { useState, useRef } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapView = ({ geoData }) => {
  const [distance, setDistance] = useState(0);
  const mapRef = useRef(null);

  // Function to add a point marker
  const addPointMarker = (e) => {
    const marker = L.marker(e.latlng).addTo(mapRef.current);
  };

  const handleMouseOver = (e) => {
    const { properties } = e.target.feature;
    console.log("Hovered feature: ", properties);
  };

  const handleMouseOut = () => {
    // Clear hover info
  };

  return (
    <div className="relative w-full h-full">
      <MapContainer
        center={[10.1, 125.6]}
        zoom={6}
        style={{ height: "100%" }}
        whenCreated={(map) => (mapRef.current = map)}
        onClick={addPointMarker}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {geoData.map((data, idx) => (
          <GeoJSON
            key={idx}
            data={data.geojson}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          />
        ))}
      </MapContainer>
      {/* Floating distance box */}
      <div className="absolute bottom-5 left-5 bg-white p-4 shadow-md rounded-md">
        <h3 className="text-lg font-semibold">Distance:</h3>
        <p>{distance > 0 ? `${distance.toFixed(2)} km` : "0 km"}</p>
      </div>
    </div>
  );
};

export default MapView;
