const express = require("express");
const router = express.Router();
const { fetchWeather, getWeather } = require("../controller/appcontroller");

// Route to fetch and save weather data
router.post("/fetch", fetchWeather);

// Route to get all weather records
router.get("/records", getWeather);

module.exports = router;
