import { rgb } from 'chalk';
import React from 'react';
import './BoxColor.css';

const BoxColor = (props) => {
  let { r, g, b } = props;
  const styles = {
    backgroundColor: `rgb(${r}, ${g}, ${b}`,
    width: '250px',
    lineHeight: '50px',
    textAlign: 'center',
    border: '3px solid black',
    marginTop: '.5rem',
  };
  const RGBToHex = () => {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length === 1) r = '0' + r;
    if (g.length === 1) g = '0' + g;
    if (b.length === 1) b = '0' + b;

    return '#' + r + g + b;
  };

  return (
    <div className="boxcolor">
      <div style={styles}>
        {styles.backgroundColor} <br />
        {RGBToHex()}
      </div>
    </div>
  );
};

export default BoxColor;
