import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './Forecast.css';

const Forecast = ({ city }) => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = response.data.list.filter((item) => item.dt_txt.includes('12:00:00'));
        setForecastData(data);
      } catch (error) {
        console.error("Error fetching forecast data", error);
      }
    };

    if (city) {
      fetchForecast();
    }
  }, [city]);

  return (
    <div className="forecast-container">
      <h2>5-Day Forecast</h2>
      <div className="forecast-grid">
        {forecastData.map((day, index) => (
          <motion.div
            className="forecast-item"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3>{new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'long' })}</h3>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
            />
            <p>{day.main.temp}°C</p>
            <p>{day.weather[0].description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
