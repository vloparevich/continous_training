import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import AuthContext from '../../context/auth-context';

// In this case AuthContext is as an example
const MainHeader = (props) => {
  return (
    <AuthContext.Consumer>
      {(ctx) => {
        return (
          <header className={classes['main-header']}>
            <h1>A Typical Page</h1>
            <Navigation />
          </header>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default MainHeader;
