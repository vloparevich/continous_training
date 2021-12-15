import React from 'react';
import Rating from '.././rating/Rating';

const DriverCard = (props) => {
  const {
    name,
    rating,
    img,
    car: { model, licensePlate },
  } = props;

  return (
    <div>
      <div>
        <img src={img} alt="driver-pic" />
      </div>
      {model} plate: {licensePlate}
      <h4>{name}</h4>
      <Rating>{rating}</Rating>
      <p>
        {model} - {licensePlate}
      </p>
    </div>
  );
};

export default DriverCard;
