import React, { useState } from 'react';
import './App.css';
import FoodList from './Components/FoodList';
import reciept from './foods.json';
import 'bulma/css/bulma.css';
import Form from './Components/Form';
import Search from './Components/Search';
import TodaysFood from './Components/TodaysFood';
import TodaysList from './Components/TodaysList';

function App() {
  const [foods, setFoods] = useState(reciept);
  const [searchedString, setSearchedString] = useState('');
  // const [clicked, setClicked] = useState(false);
  const [todaysFoods, setTodaysFoods] = useState('');

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

  const addTodaysFood = (ingredients, count) => {
    ingredients.count = count;
    ingredients.calories = ingredients.calories * count;
    setTodaysFoods([...todaysFoods, ingredients]);
  };

  let calories;
  if (todaysFoods) {
    calories = todaysFoods.map((el) => el.calories).reduce((a, b) => a + b);
    console.log(calories);
  }

  console.log(todaysFoods);
  return (
    <div className="App">
      <h1>IronNutrition</h1>

      <h1>Add a food</h1>
      <Form addFood={addNewFood} />
      <Search
        className="input is-info"
        className="is-rounded"
        searchedString={searchedString}
        callbackSearch={setSearchedString}
      />
      <div className="columns">
        <FoodList foods={searchedFood} addTodaysFood={addTodaysFood} />

        <div className="column">
          <h1>
            <strong>Today's Foods</strong>
          </h1>
          <TodaysList todaysFoods={todaysFoods} />
          Total Calories: {calories && calories}
        </div>
      </div>
    </div>
  );
}

export default App;
