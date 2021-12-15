import React from 'react';
import './ClickablePicture.css';

class ClickablePicture extends React.Component {
  state = {
    clicked: false,
    img: this.props.img,
  };

  handleToggle = () => {
    this.state.clicked
      ? this.setState({
          clicked: !this.state.clicked,
          img: this.props.imgClicked,
        })
      : this.setState({ clicked: !this.state.clicked, img: this.props.img });
  };

  render() {
    return (
      <div>
        <img
          className="user-wearing-glasses"
          onClick={this.handleToggle}
          src={this.state.img}
          alt="user-pic"
        />
      </div>
    );
  }
}

export default ClickablePicture;
