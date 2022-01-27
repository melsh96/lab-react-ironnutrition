import React from 'react';

const TodaysFood = (props) => {
  const { food } = props;
  console.log(food.count);
  return (
    <div>
      <p>
        • {food.count} {food.name} = {food.calories}
      </p>
    </div>
  );
};

export default TodaysFood;
