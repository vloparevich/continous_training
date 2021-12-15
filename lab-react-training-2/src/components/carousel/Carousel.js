import React from 'react';

class Carousel extends React.Component {
  state = {
    imageIndex: 0,
  };

  handleClick = (event) => {
    const direction = event.target.textContent.toLowerCase();
    const lastImageIndex = this.props.imgs.length - 1;

    if (direction === 'previous') {
      this.state.imageIndex !== 0 &&
        this.setState({ imageIndex: this.state.imageIndex - 1 });
    } else {
      this.state.imageIndex !== lastImageIndex &&
        this.setState({ imageIndex: this.state.imageIndex + 1 });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>PREVIOUS</button>
        <img src={this.props.imgs[this.state.imageIndex]} alt="random-pic" />
        <button onClick={this.handleClick}>NEXT</button>
      </div>
    );
  }
}

export default Carousel;
