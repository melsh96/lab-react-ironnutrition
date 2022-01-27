import React from 'react';
import FoodBox from './FoodBox';
import 'bulma/css/bulma.css';

const FoodList = (props) => {
  const { foods, addTodaysFood } = props;

  return (
    <>
      {foods.length > 0 ? (
        <div className="column">
          {foods.map((food) => {
            return (
              <FoodBox
                key={food.name}
                img={food.image}
                name={food.name}
                calories={food.calories}
                addTodaysFood={addTodaysFood}
                count={food.count}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <p>Nothing Yet !</p>
        </div>
      )}
    </>
  );
};

export default FoodList;
