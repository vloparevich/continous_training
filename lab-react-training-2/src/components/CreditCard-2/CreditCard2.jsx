import React from 'react';

export default function CreditCard2(test) {
  console.log(test.color);
  console.log(test.bgColor);
  const maskedNumber = '**** **** **** ';
  const preparedCardNumber =
    maskedNumber + test.number.substr(test.number.length - 4);
  return (
    <div
      style={{
        backgroundColor: `${test.bgColor}`,
        color: `${test.color}`,
        textAlign: 'left',
        padding: '1rem',
        borderRadius: `7px`,
        maxWidth: '45%',
        margin: `1rem auto`,
      }}
    >
      <div style={{ color: '#fff' }}></div>
      <div>{test.type}</div>
      <div>{preparedCardNumber}</div>
      <div>{test.expirationMonth}</div>
      <div>{test.expirationYear}</div>
      <div>{test.bank}</div>
      <div>{test.owner}</div>
    </div>
  );
}
