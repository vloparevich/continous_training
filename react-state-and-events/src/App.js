import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Counter from './Counter';
import WeatherWidget from './WeatherWidget';

function App() {
  const [theme, setTheme] = useState('light');
  const [unit, setUnit] = useState('C');
  const toggleTheme = (event) => {
    setTheme(event.target.value);
  };
  return (
    <React.Fragment>
      <div className={'App ' + theme}>
        <h1>React - state and events</h1>
        <Counter />

        <select onChange={toggleTheme}>
          <option value='light'>Light</option>
          <option value='dark'>dark</option>
        </select>

        <button onClick={() => setUnit('C')}>°C</button>
        <button onClick={() => setUnit('F')}>°F</button>
        <WeatherWidget city='Miami' icon='☀️' celsius='29' unit={unit} />
        <WeatherWidget city='Mexico City' icon='⛈️' celsius={17} unit={unit} />
        <WeatherWidget city='Berlin' icon='️🌨' celsius={20} unit={unit} />
        <WeatherWidget city='Barcelona' icon='️😎' celsius={28} unit={unit} />
      </div>
    </React.Fragment>
  );
}

export default App;
