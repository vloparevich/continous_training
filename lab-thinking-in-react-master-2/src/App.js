import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './Components/FilterableProductTable/FilterableProductTable';

function App() {
  return (
    <div className="App">
      <div id="logoReact">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <FilterableProductTable />
    </div>
  );
}

export default App;
