import React from 'react';
import classes from './MealsSummary.module.css';

export default function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2 className={classes['.summary h2']}>
        Delicious food, Delivered to you
      </h2>
      <p>First Paragraph</p>
      <p>Second Paragraph</p>
    </section>
  );
}
