import React from 'react';
import { useState, useEffect } from 'react';

export default function Search(props) {
  const [searchQuery, setQuery] = useState('');

  useEffect(() => {
    let filtered;
    if (searchQuery.length > 0) {
      filtered = props.allFoods.filter((food) =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      filtered = props.allFoods;
    }
    props.handleSearch(filtered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input type='text' value={searchQuery} onChange={handleInput} />
    </div>
  );
}
