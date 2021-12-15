import React from 'react';

export default function Rating2(props) {
  const stars = ['☆', '☆', '☆', '☆', '☆'];
  stars.splice(0, props.stars, '★'.repeat(props.stars));
  return <div>{stars.join('')}</div>;
}
