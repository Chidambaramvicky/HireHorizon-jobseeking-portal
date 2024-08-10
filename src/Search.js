// SearchBar.js
import React, { useState } from 'react';

function Search({ onSearch, location }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Job title, keywords, or company"
      />
      <input
        type="text"
        value={location}
        readOnly
      />
      <button onClick={handleSearchClick}>Find jobs</button>
    </div>
  );
}

export default Search;
