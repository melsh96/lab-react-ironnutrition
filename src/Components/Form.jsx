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

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="calories">Calories</label>
      <input
        type="text"
        name="calories"
        id="calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />

      <label htmlFor="image">Image</label>
      <input
        type="text"
        name="image"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <label htmlFor="quantity">Quantity</label>
      <input
        type="text"
        name="quantity"
        id="quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button>Add food</button>
    </form>
  );
};

export default Form;
