import classes from './Card.module.css';

import React from 'react';

export default function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}
