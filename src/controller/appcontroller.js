const axios = require("axios");
const Weather = require("../models/appmodel");
require("dotenv").config();

const apiKey = process.env.API_KEY;

const fetchWeather = async (req, res) => {
  const city = req.body.city;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(apiUrl);
    const weatherData = response.data;

    const weather = new Weather({
      city: weatherData.name,
      temperature: weatherData.main.temp,
      description: weatherData.weather[0].description,
    });

    await weather.save();
    res.status(201).json(weather);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching weather data" });
  }
};

const getWeather = async (req, res) => {
  try {
    const weatherRecords = await Weather.find();
    res.status(200).json(weatherRecords);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error retrieving weather data" });
  }
};

module.exports = { fetchWeather, getWeather };
