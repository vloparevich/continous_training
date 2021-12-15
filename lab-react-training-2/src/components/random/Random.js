import React from 'react';
import './Random.css';

const Random = (props) => {
  const { min, max } = props;
  return (
    <div>
      Random value between {min} and {max} ={' '}
      {~~(Math.random() * (max - min)) + min}
    </div>
  );
};

export default Random;
