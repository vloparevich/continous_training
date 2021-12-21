import React from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';

export default function FoodBox(props) {
  const { name, calories, image, servings } = props.food;
  const handleDelete = (name) => {
    props.deleteFood(name);
  };
  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button type='primary' onClick={() => handleDelete(name)}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}
