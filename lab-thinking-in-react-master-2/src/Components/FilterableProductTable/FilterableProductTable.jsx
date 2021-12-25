import './FilterableProductTable.css';
import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ProductTable from '../ProductTable/ProductTable';
import data from '../../data.json';

export default function FilterableProductTable() {
  const [goods, setGoods] = useState(data.data);
  const [dataToBeUsed, setDataToBeUsed] = useState(goods);

  const handleFilter = (searchResult) => {
    setDataToBeUsed(searchResult);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar handleSearchQuery={handleFilter} dataForFiltering={goods}>
        Only show products on stock
      </SearchBar>
      <ProductTable goods={dataToBeUsed} />
    </div>
  );
}
