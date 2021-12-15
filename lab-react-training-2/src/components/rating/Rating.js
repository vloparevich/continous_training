import React from 'react';

const Rating = (props) => {
  const { children } = props;
  const rating = Math.round(children);
  const stars = '☆☆☆☆☆'.split('');
  stars.splice(0, rating, '★'.repeat(rating));
  return <div>{stars.join('')}</div>;
};

export default Rating;
