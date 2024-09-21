import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './Components/SearchBar';
import WeatherInfo from './Components/WeatherInfo';
import { SpeedInsights } from "@vercel/speed-insights/react";

import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const API_KEY = 'f3a4987d0e8d8770279cfbc68baae680';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  return (
    <SpeedInsights>
    <div className="app">
      <SearchBar onSearch={fetchWeather} />
      {weather && <WeatherInfo weather={weather} />}
    </div>
    </SpeedInsights>
  );
};

export default App;

