import React from 'react';
import classes from './Input.module.css';

export default function InputField(props) {
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.content}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.blur}
        isValid={props.isValid}
      />
    </div>
  );
}
