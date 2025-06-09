import React, { useState } from 'react';
import SearchBarCourseStyle from '../styles/SearchBarCodeStyle';

const SearchBarCourse = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDeafult();
    onSearch(inputValue);
  }

  return (
    <SearchBarCourseStyle>
        <form onSubmit={handleSubmit}>
          <label htmlFor="searchInput">Asignatura:</label>
          <div className="input-group">
            <input
            type="text"
            placeholder="Ej: Data Analytics para la obtención de insights"
            onChange={(e) => onSearch(e.target.value)}
            required
            />
            <button type="submit">Buscar</button>
          </div>
        </form>
    </SearchBarCourseStyle>
  )
}

export default SearchBarCourse; 
