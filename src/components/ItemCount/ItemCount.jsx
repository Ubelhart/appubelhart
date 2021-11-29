import "./style.scss";
import React, { useState } from "react";

const ItemCount = ({ product, stock, onAdd }) => {
  const [number, setNumber] = useState(1);

  const increment = () => {
    if (number < stock) {
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
      <h3>{product}</h3>
      <div className="button">
        <button onClick={decrement}>-</button>
        <p>{number}</p>
        <button onClick={increment}>+</button>
      </div>
      <p>Stock: {stock}</p>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
