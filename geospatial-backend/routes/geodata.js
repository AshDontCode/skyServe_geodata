const express = require("express");
const multer = require("multer");
const GeoData = require("../models/GeoData");
const authMiddleware = require("../middleware/authmiddleware");

const router = express.Router();

// Configure Multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "./uploads"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Upload GeoData file (GeoJSON file)
router.post("/upload", authMiddleware, upload.single("file"), async (req, res) => {
  try {
    const newGeoData = new GeoData({
      filename: req.file.filename,
      fileType: req.file.mimetype,
      uploadedBy: req.user._id,
    });

    const savedData = await newGeoData.save();
    res.status(201).json(savedData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Save GeoJSON shapes drawn on the map
router.post("/save-shapes", authMiddleware, async (req, res) => {
  try {
    const { geoJSONData } = req.body;

    if (!geoJSONData) {
      return res.status(400).json({ message: "No GeoJSON data provided" });
    }

    // Save GeoJSON data into the database
    const newGeoData = new GeoData({
      geoJSONData,
      uploadedBy: req.user._id,
    });

    const savedGeoData = await newGeoData.save();
    res.status(201).json(savedGeoData);
  } catch (err) {
    console.error("Error saving shapes:", err);
    res.status(500).json({ message: "Error saving shapes", error: err });
  }
});

// Fetch saved GeoJSON shapes for the logged-in user
router.get("/", authMiddleware, async (req, res) => {
  try {
    // Find all geoData uploaded by the logged-in user
    const geoData = await GeoData.find({ uploadedBy: req.user._id });
    res.status(200).json(geoData);
  } catch (err) {
    console.error("Error fetching GeoData:", err);
    res.status(500).json(err);
  }
});

module.exports = router;
