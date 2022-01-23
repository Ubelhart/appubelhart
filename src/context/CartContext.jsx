import React, { useState } from "react";

const Context = React.createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const itemExists = cart.find((prod) => prod.id === item.id);

    if (itemExists) {
      itemExists.quantity += quantity;
      itemExists.totalPrice = itemExists.price * itemExists.quantity;
      const unrepeatedItem = cart.filter((element) => element.id !== item.id);
      setCart([...unrepeatedItem, itemExists]);
    } else {
      setCart([
        ...cart,
        {
          ...item,
          quantity: quantity,
          totalPrice: item.price * quantity,
        },
      ]);
    }
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const clear = () => {
    setCart([]);
  };

  const countProducts = () => {
    let count = 0;

    cart.forEach((prod) => {
      count += prod.quantity;
    });
    return count;
  };

  const countPrices = () => {
    let total = 0;

    cart.forEach((prod) => {
      total += prod.totalPrice;
    });
    return total;
  };

  return (
    <Context.Provider
      value={{ cart, addItem, removeItem, clear, countProducts, countPrices }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
