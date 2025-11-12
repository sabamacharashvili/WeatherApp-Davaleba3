import React from 'react';

export default function WeatherCard({ data }) {
  return (
    <div className="weather-card">
      <h2 className="city-name">
        {data.icon} {data.city}, {data.country}
      </h2>
      <div className="weather-info">
        <p>🌡️ {data.temperature}°C (Feels like {data.feelsLike}°C)</p>
        <p>💧 Humidity: {data.humidity}%</p>
        <p>💨 Wind Speed: {data.windSpeed} km/h</p>
        <p>🌤️ Condition: {data.condition}</p>
      </div>
    </div>
  );
}