import React from 'react';
import './FoodList.css';
import FoodBox from './FoodBox';
import AddFood from './AddFood';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

export default function FoodList(props) {
  return (
    <div>
      <hr id='divider' />
      <h2>Food List</h2>
      <div className='foodList'>
        {props.foods.map((food) => {
          return <FoodBox food={food} deleteFood={props.handleDeletion} />;
        })}
      </div>
    </div>
  );
}
