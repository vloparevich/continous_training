import React from 'react';
import classes from './MeailItemForm.module.css';
import Input from '../../UI/Input';

export default function MealItemForm(props) {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+Add</button>
    </form>
  );
}
