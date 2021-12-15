import React from 'react';
import './Greetings2.css';

export default function Greetings2(props) {
  return (
    <div className="greetingsBox">
      {props.lang === 'de' ? 'Ludwig' : 'Bonjpur'} {props.children}
    </div>
  );
}
