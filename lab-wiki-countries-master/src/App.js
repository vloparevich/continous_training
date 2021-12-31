import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [countriesList, setTheListOfCountries] = useState([]);
  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((countries) => {
        setTheListOfCountries(countries.data);
      });
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<CountriesList countriesList={countriesList} />}
        />
        <Route path="/countries/:countryCode" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
