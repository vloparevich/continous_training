import './Random2.css';
import React from 'react';

const Random2 = (props) => {
  const { min, max } = props;
  const randomVal1 = ~~(Math.random() * (max - min)) + min + 1;
  console.log(+max - Math.random() * +min);
  return (
    <div className="greetingsBox">
      Random value between {min} and {max} = {randomVal1}
    </div>
  );
};

export default Random2;
