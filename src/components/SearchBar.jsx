import React from 'react';

function SearchBar({ searchQuery, setSearchQuery, setLocation, weather }) {
  const handleSearch = (e) => {
    const newSearch = e.target.value;
    setSearchQuery(newSearch);
    setLocation(newSearch);
  };

  return (
    <div>
      <input
        type="text"
        className="border border-black"
        placeholder="Enter location"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
