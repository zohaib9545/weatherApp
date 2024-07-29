const express = require("express");
const connectDB = require("./config/db");
const weatherRoutes = require("./routes/ApiRoute");
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/weather", weatherRoutes);

// Start server
const port = 3000; // Hardcoded port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
