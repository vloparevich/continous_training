import React from 'react';

export default function ProductRow(props) {
  const { name, price } = props.good;
  console.log('in product row', props.good);
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}
