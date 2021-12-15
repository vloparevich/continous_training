import React from 'react';

class LikeButton extends React.Component {
  state = {
    count: 0,
    bgColor: '',
  };

  handleClick = () => {
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    const color = colors[~~(Math.random() * colors.length)];
    if (this.state.count === 11) {
      this.setState({
        count: 0,
        bgColor: color,
      });
    } else {
      this.setState({
        count: this.state.count + 1,
        bgColor: color,
      });
    }
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleClick}
          style={{ backgroundColor: this.state.bgColor }}
        >
          {this.state.count} {this.state.count !== 1 ? 'Likes' : 'Like'}
        </button>
      </div>
    );
  }
}

export default LikeButton;
