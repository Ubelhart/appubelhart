import "./style.scss";
import React, { useState } from "react";

const ItemCount = ({ item }) => {
  const [number, setNumber] = useState(1);

  const onAdd = () => alert(item.title + " ha sido agregado al Carrito");

  const increment = () => {
    if (number < item.stock) {
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
      <div className="count">
        <button className="btn btn-danger" onClick={decrement}>
          -
        </button>
        <p>{number}</p>
        <button className="btn btn-success" onClick={increment}>
          +
        </button>
      </div>
      <p>Stock: {item.stock}</p>
      <button className="btn btn-primary" onClick={onAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
