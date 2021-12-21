import React from 'react';
import './FoodList.css';
import FoodBox from './FoodBox';
import FeedbackMessage from './FeedbackMessage';

export default function FoodList(props) {
  console.log(props.foods.length);
  return (
    <div>
      <hr id='divider' />
      <h2>Food List</h2>
      <div className='foodList'>
        {props.foods.length === 0 ? (
          <FeedbackMessage />
        ) : (
          props.foods.map((food) => {
            return <FoodBox food={food} deleteFood={props.handleDeletion} />;
          })
        )}
      </div>
    </div>
  );
}
