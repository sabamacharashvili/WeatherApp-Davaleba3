import React from 'react';

export default function SearchBox({ searchInput, setSearchInput, onSearch }) {
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-input"
        placeholder="Type city here:"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className="search-button" onClick={onSearch}>
        Search
      </button>
    </div>
  );
}