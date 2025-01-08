const mongoose = require("mongoose");

const GeoDataSchema = new mongoose.Schema(
  {
    filename: { type: String, required: true },
    fileType: { type: String, required: true },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    geoJSONData: { type: mongoose.Schema.Types.Mixed }, // Stores GeoJSON data
  },
  { timestamps: true }
);

const GeoData = mongoose.model("GeoData", GeoDataSchema);

module.exports = GeoData;
