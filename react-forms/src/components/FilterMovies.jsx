import React, { useState } from 'react';

export default function FilterMovies(props) {
  const [firstLetter, setFirstLetter] = useState('All');

  const handleSelect = (e) => {
    setFirstLetter(e.target.value);
    console.log('selected', e.target.value);
    props.filterMovieList(e.target.value);
  };

  return (
    <div>
      <label>Show movies by first letter</label>
      <select value={firstLetter} onChange={handleSelect}>
        <option>All</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>T</option>
      </select>
    </div>
  );
}
