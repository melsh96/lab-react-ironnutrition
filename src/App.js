import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodList from './Components/FoodList';
import reciept from './foods.json';
import 'bulma/css/bulma.css';
import Form from './Components/Form';
import Search from './Components/Search';

function App() {
  const [foods, setFoods] = useState(reciept);
  const [searchedString, setSearchedString] = useState('');

  const addNewFood = (food) => {
    setFoods([...foods, food]);
  };

  let searchedFood = null;
  if (searchedString !== '') {
    searchedFood = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchedString.toLowerCase());
    });
  } else {
    searchedFood = foods;
  }

  return (
    <div className="App">
      <h1>IronNutrition</h1>

      <h1>Add a food</h1>
      <Form addFood={addNewFood} />
      <Search
        searchedString={searchedString}
        callbackSearch={setSearchedString}
      />
      <FoodList foods={searchedFood} />
    </div>
  );
}

export default App;
