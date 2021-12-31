import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';

export default function CountriesList(props) {
  const [countriesList, setCountries] = useState(props.countriesList);
  useEffect(() => {
    setCountries(props.countriesList);
  }, [props.countriesList]);

  return (
    <div>
      <ul>
        {countriesList.map((country, i) => (
          <CountryCard country={country} key={i} />
        ))}
        <hr></hr>
      </ul>
    </div>
  );
}
