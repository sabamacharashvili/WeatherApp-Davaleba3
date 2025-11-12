import React, { useState } from 'react';
import { mockWeatherData } from './data/weatherData';
import SearchBox from './components/SearchBox';
import ErrorCard from './components/ErrorCard';
import WeatherCard from './components/WeatherCard';
import RecentSearches from './components/RecentSearches';
import './App.css';

export default function App() {
 
  const [searchInput, setSearchInput] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  
  const handleSearch = () => {
    
    if (!searchInput.trim()) {
      return;
    }

    const foundCity = mockWeatherData.find(
      city => city.city.toLowerCase() === searchInput.toLowerCase()
    );

    if (foundCity) {
      
      setWeatherData(foundCity);
      setErrorMessage('');
    
      if (!recentSearches.includes(foundCity.city)) {
        const newSearches = [foundCity.city, ...recentSearches].slice(0, 3);
        setRecentSearches(newSearches);
      }
    } else {
      
      setWeatherData(null);
      setErrorMessage('No data found for this city');
    }
  };

  
  const handleRecentClick = (cityName) => {
    setSearchInput(cityName);
    const foundCity = mockWeatherData.find(
      city => city.city.toLowerCase() === cityName.toLowerCase()
    );
    if (foundCity) {
      setWeatherData(foundCity);
      setErrorMessage('');
    }
  };

  return (
    <div className="app">
      <div className="weather-container">
        <h1 className="title">
          <span className="icon">⛅</span> Weather Checker
        </h1>

        <SearchBox 
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          onSearch={handleSearch}
        />

        {errorMessage && <ErrorCard message={errorMessage} />}

        {weatherData && !errorMessage && <WeatherCard data={weatherData} />}

        <RecentSearches 
          searches={recentSearches}
          onCityClick={handleRecentClick}
        />
      </div>
    </div>
  );
}