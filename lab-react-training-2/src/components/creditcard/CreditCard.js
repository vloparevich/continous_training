import React from 'react';
import './CreditCard.css';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationYear,
    expirationMonth,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const maskedNumber = '**** **** **** ';
  const preparedCardNumber = maskedNumber + number.substr(number.length - 4);

  return (
    <div
      className="creditCard"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <img
        id="logo-image"
        src={type === 'Visa' ? 'img/visa.png' : 'img/master-card.svg'}
        alt="credit-card"
      />
      <h3 className="cardNumber">{preparedCardNumber}</h3>
      <p>
        {expirationMonth}/{expirationYear} {bank}
      </p>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
