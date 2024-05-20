// src/components/SearchBar.js
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleSearch = () => {
    onSearch(username);
  };

  return (
    <div>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Enter GitHub username" 
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
