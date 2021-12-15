import React from 'react';
import './Greetings.css';

const Greetings = (props) => {
  const { lang, children } = props;
  let greetWord = 'Hello';

  if (lang === 'ru') {
    greetWord = 'Privet';
  }
  if (lang === 'de') {
    greetWord = 'Hallo';
  }

  const stylesGreetings = {
    border: '3px solid black',
    lineHeight: '25px',
    margin: '1px',
  };

  const greetingText = {
    margin: '1px auto',
  };

  return (
    <div className="greetings" style={stylesGreetings}>
      <p style={greetingText} lang={lang}>
        {greetWord} {children}
      </p>
    </div>
  );
};

export default Greetings;
