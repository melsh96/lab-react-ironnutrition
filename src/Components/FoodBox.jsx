import React from 'react';
import 'bulma/css/bulma.css';
import { useState } from 'react';

const FoodBox = (props) => {
  const { img, name, calories, quantity } = props;
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  return (
    <div className="container">
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={img} alt={name} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{name}</strong> <br />
                <small>{calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  onChange={handleChange}
                  className="input"
                  type="number"
                  value={count}
                />
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default FoodBox;
