import React from 'react';

class Dice extends React.Component {
  state = {
    diceNumber: 0,
    image: `/img/dice-empty.png`,
  };

  handleClickOnDice = () => {
    setTimeout(() => {
      const num = ~~(Math.random() * 6 + 1);
      this.setState({
        diceNumber: num,
        image: num && `/img/dice${num}.png`,
      });
    }, 1000);
  };

  render = () => {
    return (
      <div onClick={this.handleClickOnDice}>
        <img src={this.state.image} alt={`dice-${this.state.diceNumber}`} />
      </div>
    );
  };
}

export default Dice;
