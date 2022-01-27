import React from 'react';
import TodaysFood from './TodaysFood';
import 'bulma/css/bulma.css';

const TodaysList = (props) => {
  const { todaysFoods } = props;
  return (
    <>
      {todaysFoods.length > 0 ? (
        <div className="column">
          {todaysFoods.map((el) => {
            return <TodaysFood food={el} />;
          })}
        </div>
      ) : (
        <div>
          <p>No Foods Today ! Unhappy</p>
        </div>
      )}
    </>
  );
};

export default TodaysList;
