import React from 'react';
import { motion } from 'framer-motion';

const WeatherInfo = ({ weather }) => {
  const { name, main, weather: weatherDetails } = weather;

  return (
    <motion.div 
      className="weather-info"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{name}</h2>
      <h3>{main.temp}°C</h3>
      <p>{weatherDetails[0].description}</p>
      <motion.img 
        src={`http://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`}
        alt="Weather Icon"
        whileHover={{ scale: 1.1 }}
      />
    </motion.div>
  );
};

export default WeatherInfo;
