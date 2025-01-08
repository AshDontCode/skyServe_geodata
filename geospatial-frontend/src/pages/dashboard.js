import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import dynamic from "next/dynamic";

// Dynamically import the MapView component
const MapView = dynamic(() => import("../components/MapView"), {
  ssr: false,
});

const Dashboard = () => {
  const [geoData, setGeoData] = useState([]);

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        const response = await API.get("/geodata");
        console.log("GeoData Response: ", response.data);
        setGeoData(response.data);
      } catch (err) {
        alert("Failed to fetch geospatial data.");
      }
    };
    fetchGeoData();
  }, []);

  return (
    <div className="flex h-screen">
      <Sidebar setGeoData={setGeoData} />
      <div className="flex-1">
        <MapView geoData={geoData} />
      </div>
    </div>
  );
};

export default Dashboard;
