import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button, Form } from 'antd';
import './AddFoodForm.css';

export default function AddFood(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);
  const [isFormShown, setFormVisibility] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.value);
  };
  const handleCalories = (e) => {
    setCalories(e.target.value);
  };
  const handleServings = (e) => {
    setServings(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNewFood({ name, image, calories, servings });
    setName('');
    setImage('');
    setCalories(0);
    setServings(0);
  };

  const handleFormVisibility = () => {
    setFormVisibility(!isFormShown);
  };

  return (
    <div>
      <Button type='primary' onClick={handleFormVisibility}>
        {isFormShown ? 'Hide Form' : 'Add Food Entry'}
      </Button>
      {isFormShown && (
        <form id='addFoodForm' onSubmit={handleSubmit}>
          <label>Name</label>
          <input name='name' type='text' value={name} onChange={handleName} />
          <label>Image</label>
          <input
            name='image'
            type='text'
            value={image}
            onChange={handleImage}
          />
          <label>Calories</label>
          <input
            name='calories'
            type='number'
            value={calories}
            onChange={handleCalories}
          />
          <label>Servings</label>
          <input
            name='servings'
            type='number'
            value={servings}
            onChange={handleServings}
          />
          <Button id='createEntryButton' type='primary'>
            Create Entry
          </Button>
        </form>
      )}
    </div>
  );
}
