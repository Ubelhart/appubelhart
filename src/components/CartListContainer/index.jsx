import React, { useContext, useEffect, useState } from "react";
import CartList from "../CartList";
import CartContext from "../../context/CartContext";
import { NavLink } from "react-router-dom";

const CartListContainer = () => {
  const { cart, removeItem, clear, countPrices } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(countPrices);

    return () => {
      setTotal(0);
    };
  }, [countPrices]);

  return (
    <>
      {total > 0 ? (
        <div>
          <CartList
            cart={cart}
            removeItem={removeItem}
            clear={clear}
            total={total}
          />
        </div>
      ) : (
        <>
          <h2>No has agregado ningun producto</h2>
          <NavLink to="/">
            <button className="btn btn-danger">Volver al Landing</button>
          </NavLink>
        </>
      )}
    </>
  );
};

export default CartListContainer;
