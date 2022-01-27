import React, { useState } from 'react';

const Form = ({ addFood }) => {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const food = { name, calories, image, quantity };
    addFood(food);
    setName('');
    setCalories('');
    setImage('');
    setQuantity('');
  };

  const addForm = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name"></label>
      <input
        class="input is-rounded"
        placeholder="Name"
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="calories"></label>
      <input
        class="input is-rounded"
        placeholder="Calories"
        type="text"
        name="calories"
        id="calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />

      <label htmlFor="image"></label>
      <input
        class="input is-rounded"
        placeholder="Image"
        type="text"
        name="image"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <label htmlFor="quantity"></label>
      <input
        class="input is-rounded"
        placeholder="Quantity"
        type="text"
        name="quantity"
        id="quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button class="button is-info">Add food</button>
    </form>
  );
};

export default Form;
