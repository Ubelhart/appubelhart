import React from "react";

const Cart = ({ item, removeItem }) => {
  return (
    <div className="items">
      <div className="item">
        <h3>{item.title}</h3>
        <div>
          <img src={`/${item.pictureUrl}`} alt="" />
        </div>
        <p>Precio por unidad: ${item.price}</p>
        <p>Precio Total: ${item.totalPrice}</p>
        <p>Cantidad:{item.quantity}</p>
        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
          Remover
        </button>
      </div>
    </div>
  );
};

export default Cart;
