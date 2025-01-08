const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");



dotenv.config();


app.use(cors());

const corsOptions = {
  origin: process.env.FRONTEND_URL, // Allow only this origin
  methods: 'GET,POST',         // Allow specific methods
  credentials: true,           // Allow cookies
};


app.use(cors(corsOptions));

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

// Routes
const authRoutes = require("./routes/auth");
const geoDataRoutes = require("./routes/geodata");
app.use("/auth", authRoutes);
app.use("/geodata", geoDataRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
