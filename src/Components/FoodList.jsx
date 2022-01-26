import React from 'react';
import FoodBox from './FoodBox';
import 'bulma/css/bulma.css';

const FoodList = (props) => {
  const { foods } = props;

  return (
    <>
      {foods.length > 0 ? (
        <div className="container">
          {foods.map((food) => {
            return (
              <FoodBox
                img={food.image}
                name={food.name}
                calories={food.calories}
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
