import React, { useState, useEffect } from 'react';

export default function SearchBar(props) {
  const [incomingData, setIncomingData] = useState(props.dataForFiltering);
  const [inputValue, setInputValue] = useState('');
  const [inStock, setInStock] = useState(false);

  useEffect(() => {
    const filteredData = incomingData.filter((good) =>
      good.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    const goodsOnStock = filteredData.filter((good) => good.stocked);

    if (inStock) {
      props.handleSearchQuery(goodsOnStock);
    } else {
      if (inputValue.length > 0) {
        props.handleSearchQuery(filteredData);
      } else {
        props.handleSearchQuery(incomingData);
      }
    }
  }, [inputValue, inStock]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInStock = () => {
    setInStock(!inStock);
  };

  return (
    <div>
      <label>Search</label>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <input type="checkbox" onChange={handleInStock} />
      <label for="inputChecbox">{props.children}</label>
    </div>
  );
}
