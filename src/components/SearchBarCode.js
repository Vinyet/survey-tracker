import React, { useState } from 'react';
import SearchBarCodeStyle from '../styles/SearchBarCodeStyle';

const SearchBarCode = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
  }

  return (
    <SearchBarCodeStyle>
        <form onSubmit={handleSubmit}>
          <label htmlFor="searchInput">Código:</label>
          <div className="input-group">
            <input
            type="text"
            placeholder="Ej: 241010111"
            onChange={(e) => onSearch(e.target.value)}
            required
            />
            <button type="submit">Buscar</button>
          </div>
        </form>
    </SearchBarCodeStyle>
  )
}

export default SearchBarCode; 
