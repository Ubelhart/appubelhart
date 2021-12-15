import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";

const ItemDetail = ({ item }) => {
  const [cart, setCart] = useState(1);

  const onAdd = (quantityToAdd) => {
    setCart(item.stock - quantityToAdd);
  };

  console.log(cart);

  return (
    <>
      {cart > 0 ? (
        <>
          <h3>{item.title}</h3>
          <div>
            <img src={`/${item.pictureUrl}`} alt="" />
          </div>
          <p>${item.price}</p>
          <p>{item.description}</p>
          <ItemCount item={item} onAdd={onAdd} />
        </>
      ) : (
        <>
          <Link to="/cart">
            <button className="btn btn-primary">Terminar Compra</button>
          </Link>
        </>
      )}
    </>
  );
};

export default ItemDetail;
