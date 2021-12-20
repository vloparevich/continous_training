import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodList from './components/FoodList';
import AddFood from './components/AddFood';
import Search from './components/Search';

function App() {
  const [allFoods, setFoods] = useState(foods);
  const [filteredFood, setFilteredFood] = useState(allFoods);

  const handleAddNewFood = (newFood) => {
    setFoods([...allFoods, newFood]);
  };

  const handleDeletion = (name) => {
    const updatedFoodds = allFoods.filter((food) => food.name !== name);
    setFoods(updatedFoodds);
  };

  const handleSearch = (filtered) => {
    setFilteredFood(filtered);
  };

  return (
    <div className='App'>
      <AddFood addNewFood={handleAddNewFood} />
      <Search allFoods={allFoods} handleSearch={handleSearch} />
      <FoodList foods={filteredFood} handleDeletion={handleDeletion} />
    </div>
  );
}

export default App;
