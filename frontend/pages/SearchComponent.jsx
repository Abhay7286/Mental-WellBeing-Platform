import React, { useState } from 'react';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', flex: '1' }}
      />
      <button
        style={{ marginLeft: '10px', padding: '10px 15px', borderRadius: '4px', backgroundColor: '#007BFF', color: 'white', border: 'none' }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
