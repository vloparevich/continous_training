import React, { Component } from 'react';
import Button from '../Button/Button';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <p>React - Components & props</p>
        <Button />
        <Button />
      </nav>
    );
  }
}
