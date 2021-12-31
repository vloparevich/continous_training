import React from 'react';
import { Link } from 'react-router-dom';
import './CountryCard.css';

export default function CountryCard(props) {
  const { country } = props;
  return (
    <React.Fragment>
      <Link to={`/countries/${country.alpha3Code}`}>
        <li className="countryDetails">
          <div>
            <h3>{country.name.common}</h3>
          </div>
          <div>
            <p>{country.capital}</p>
          </div>
          <div>
            <img
              src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
              alt="flag"
            />
          </div>
        </li>
        <hr></hr>
      </Link>
    </React.Fragment>
  );
}
