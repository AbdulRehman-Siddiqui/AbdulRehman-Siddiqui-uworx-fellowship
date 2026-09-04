require("dotenv").config();
const express = require("express");
const axios = require("axios");


const app = express();

app.use(express.json());

const API_KEY = process.env.API_KEY;
const WEBHOOK_URL = process.env.WEBHOOK_URL;

app.get("/weather", async (req, res) => {
  try {
    const city = "Lahore";

    console.log("Fetching weather from OpenWeather API...");

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const weatherData = response.data;

    console.log("Weather received successfully.");
   

    console.log("Sending webhook...");

    const payload = {
      event: "weather_loaded",
      status: "success",
      city: city,
      temperature: weatherData.main.temp,
      humidity: weatherData.main.humidity,
      description: weatherData.weather[0].description,
    };

    await axios.post(WEBHOOK_URL, payload);

    console.log("Webhook sent successfully.");
   

    // Return JSON to the browser
    res.json({
      message: "Weather fetched and webhook sent successfully.",
      weather: weatherData,
    });

  } catch (error) {
    console.log("Error:", error.message);

    res.status(500).json({
      error: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
  console.log(" go to http://localhost:3000/weather");
});