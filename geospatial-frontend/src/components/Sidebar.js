import { useState } from "react";
import API from "../utils/api";

const Sidebar = ({ setGeoData }) => {
  const [file, setFile] = useState(null);

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);

    try {
      await API.post("/geodata/upload", formData);
      alert("File uploaded successfully!");
      fetchGeoData();
    } catch (err) {
      alert("Failed to upload file.");
    }
  };

  const fetchGeoData = async () => {
    try {
      const response = await API.get("/geodata");
      setGeoData(response.data);
    } catch (err) {
      alert("Failed to fetch geospatial data.");
    }
  };

  return (
    <div className="w-1/4 p-4 bg-gray-900 text-white h-screen">
      <div className="text-center mb-8">
        <img
          src="https://storage.tally.so/d554bfb0-4a55-4e99-9552-cf749ed63d4f/Logo.png"
          alt="Skyserver Logo"
          className="mx-auto w-20"
        />
      </div>
      <form onSubmit={handleFileUpload} className="space-y-4">
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full bg-gray-700 text-white p-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-yellow-500 p-2 rounded hover:bg-yellow-400"
        >
          Upload File
        </button>
      </form>
      <button
        onClick={fetchGeoData}
        className="w-full mt-4 bg-blue-500 p-2 rounded hover:bg-blue-400"
      >
        Refresh Data
      </button>
    </div>
  );
};

export default Sidebar;
