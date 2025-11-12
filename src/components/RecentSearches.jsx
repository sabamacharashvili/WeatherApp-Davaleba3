import React from 'react';

export default function RecentSearches({ searches, onCityClick }) {
  if (searches.length === 0) return null;

  return (
    <div className="recent-section">
      <h3 className="recent-title">☁️ Recently Searched</h3>
      <div className="recent-buttons">
        {searches.map((city, index) => (
          <button
            key={index}
            className="recent-button"
            onClick={() => onCityClick(city)}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}