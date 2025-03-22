import { useEffect, useState } from "react";
import WeatherSearchBox from "./WeatherSearchBox";

const WeatherContainer = () => {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // Function to get user's current location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          setError("Location access denied. Please allow location access.");
          console.error("Geolocation Error:", err);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  // Function to fetch weather data
  const getWeatherData = async (latitude, longitude) => {
    try {
      const API_KEY = "545613764ad3b008220ef37c3476866d"; // Store in .env for security
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

      const response = await fetch(URL);
      if (!response.ok) throw new Error("Failed to fetch weather data");

      const json = await response.json();
      setWeatherData(json);
    } catch (error) {
      console.error("Weather API Error:", error);
      setError("Unable to fetch weather data.");
    }
  };

  // Fetch location on component mount
  useEffect(() => {
    getLocation();
  }, []);

  // Fetch weather data when location is available
  useEffect(() => {
    if (location) {
      getWeatherData(location.latitude, location.longitude);
    }
  }, [location]);

  return (
    <div>
      <WeatherSearchBox />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {location && (
        <div>
          <h3>Your Location</h3>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}

      {weatherData && (
        <div>
          <h2>Weather Data</h2>
          <p>Temperature: {weatherData?.main?.temp}°C</p>
          <p>Humidity: {weatherData?.main?.humidity}%</p>
          <p>Description: {weatherData?.weather[0]?.description}</p>
        </div>
      )}

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
        commodi culpa odio repudiandae aliquam quas. Recusandae maxime dolore
        odit veritatis possimus voluptatum nam!
      </p>
    </div>
  );
};

export default WeatherContainer;
