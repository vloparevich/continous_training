import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CountryDetails() {
  let params = useParams();
  const [retrievedCountry, setRetrievedCountry] = useState({});
  const [listOfCountries, setCountries] = useState([]);
  //   const [neighboursCodes, setCodes] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://ih-countries-api.herokuapp.com/countries/${params.countryCode}`
      )
      .then((country) => {
        setRetrievedCountry(country.data);
      });

    axios
      .get(`https://ih-countries-api.herokuapp.com/countries`)
      .then((countries) => {
        console.log(countries.data);
        setCountries(countries.data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.countryCode]);

  //   const neighboursCodesFound = retrievedCountry?.borders;
  //   setCodes(neighboursCodesFound);

  return (
    <div className="country-details">
      <h2 id="country-name">{retrievedCountry.name?.common}</h2>
      <div>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${retrievedCountry.alpha2Code?.toLowerCase()}.png`}
          alt="flag"
        />
      </div>
      <div id="country-capital">Region: {retrievedCountry?.region}</div>
      <div id="country-area">Area {retrievedCountry?.area} ㎢</div>
      <div id="country-borders">
        <div className="country-borders-left-col">Borders</div>
        <div className="country-neighbours">
          <ul>
            {retrievedCountry?.borders?.map((alpha3Code, i) => {
              return (
                <Link key={i} to={`/countries/${alpha3Code}`}>
                  <li>
                    {
                      listOfCountries?.find(
                        (country) => country.alpha3Code === alpha3Code
                      ).name.common
                    }
                    <hr></hr>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
