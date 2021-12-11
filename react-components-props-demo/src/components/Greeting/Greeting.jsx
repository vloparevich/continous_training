import { PromiseProvider } from 'mongoose';
import React from 'react';

const Greeting = (props) => {
  const message = 'Hello My Friend!';
  return (
    <div>
      <u>
        {message}, {props.firstName}
      </u>
    </div>
  );
};

export default Greeting;
