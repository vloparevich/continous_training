import React from 'react';
import './IdCard2.css';

export default function IdCard2(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div className="cardBox">
      <div className="imageBox">
        <div className="idCardImage">
          <img className="idCardImage" src={picture} />
        </div>
      </div>
      <div className="contentBox">
        <div>
          <b>First name: </b> {firstName}
        </div>
        <div>
          <b>Last name: </b>
          {lastName}
        </div>
        <div>
          <b>Gender:</b>
          {gender}
        </div>
        <div>
          <b>Height: </b>
          {height}
        </div>
        <div>
          <b>Birth: </b>
          {birth}
        </div>
        {props.children && props.children}
      </div>
    </div>
  );
}
