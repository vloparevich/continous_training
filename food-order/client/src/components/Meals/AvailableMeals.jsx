import React, { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import axios from 'axios';

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMeals() {
      const mealsService = axios.create({
        baseURL: `https://dummy-react-lopa-default-rtdb.firebaseio.com/meals.json`,
      });
      await mealsService
        .get('/')
        .then((res) => {
          const mealsAsObject = res.data;
          const mealsAsArr = [];
          console.log(mealsAsObject);
          for (const key in mealsAsObject) {
            mealsAsArr.push({
              id: key,
              name: mealsAsObject[key].name,
              description: mealsAsObject[key].description,
              price: mealsAsObject[key].price,
            });
          }
          setMeals(mealsAsArr);
          setIsLoading(false);
        })
        .catch((err) => {
          return {
            status: false,
            errorMessage: err,
          };
        });
    }
    fetchMeals();
  }, []);
  if (isLoading) {
    return (
      <section className={classes.mealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      price={meal.price}
      description={meal.description}
      name={meal.name}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
