import React from 'react';
import ProductRow from '../ProductRow/ProductRow';

export default function ProductTable(props) {
  const { goods } = props;
  console.log('in producttable', goods);
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {goods.map((good) => (
          <ProductRow good={good} />
        ))}
      </table>
    </div>
  );
}
