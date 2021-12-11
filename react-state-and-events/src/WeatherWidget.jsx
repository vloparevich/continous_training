import React, { useState } from 'react';

const WeatherWidget = (props) => {
  let temperature = +props.celsius;
  const unitIsFahrenheit = props.unit === 'F';

  if (unitIsFahrenheit) {
    temperature = +props.celsius * 1.8 + 32;
  }
  console.log(typeof +temperature + 'test');
  console.log(typeof props.unit + 'test');

  return (
    <React.Fragment>
      <div className='WeatherWidget'>
        <span>{props.icon}</span>
        <h3>{props.city}</h3>
        <h2>
          {temperature} °{props.unit}
        </h2>
      </div>
    </React.Fragment>
  );
};

export default WeatherWidget;
