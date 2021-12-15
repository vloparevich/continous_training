import React from 'react';
import './IdCard.css';

const IdCard = (props) => {
  const { lastName, firstName, gender, birth, picture, height } = props;

  return (
    <div className="card">
      <div className="main-pic">
        <img id="profile-pic" src={picture} alt="user-pic" />
      </div>
      <div className="user-details">
        <p>
          <b>First Name </b>
          {firstName}
        </p>
        <p>
          <b>Last Name </b>
          {lastName}
        </p>
        <p>
          <b>Gender </b>
          {gender}
        </p>
        <p>
          <b>Height </b>
          {height}
        </p>
        <p>
          <b>Birth </b>
          {birth.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
