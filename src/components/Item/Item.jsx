import React, { useState } from "react";

const Item = ({ product }) => {
  const [number, setNumber] = useState(1);

  const onAdd = () => alert(product.title + " ha sido agregado al Carrito");

  const increment = () => {
    if (number < product.stock) {
      setNumber(number + 1);
    }
  };

  const decrement = () => {
    if (number > 1) {
      setNumber(number - 1);
    }
  };
  return (
    <div>
      <h2>{product.title}</h2>
      <div>
        <img src={product.pictureUrl} alt="" />
      </div>
      <p>{product.price}</p>
      <div>
        <button onClick={decrement}>-</button>
        <p>{number}</p>
        <button onClick={increment}>+</button>
      </div>
      <p>Stock: {product.stock}</p>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};

export default Item;
