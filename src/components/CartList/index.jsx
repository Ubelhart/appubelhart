import React from "react";
import Cart from "../Cart";

const CartList = ({ cart, removeItem, clear, total }) => {
  return (
    <div>
      {cart.map((item) => (
        <Cart key={item.id} item={item} removeItem={removeItem} />
      ))}
      <p>Total: ${total}</p>
      <button className="btn btn-danger" onClick={clear}>
        Limpiar Carrito
      </button>
    </div>
  );
};

export default CartList;
