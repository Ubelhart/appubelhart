import React, { useContext, useEffect, useState } from "react";
import CartList from "../CartList";
import CartContext from "../../context/CartContext";
import { NavLink } from "react-router-dom";
import { db } from "../../services/firebase";
import {
  addDoc,
  collection,
  doc,
  writeBatch,
  Timestamp,
  getDoc,
} from "firebase/firestore";

const CartListContainer = () => {
  const { cart, removeItem, clear, countPrices } = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const confirmOrder = (e) => {
    e.preventDefault();
    const objOrder = {
      buyer: name,
      items: cart,
      total: total,
      email: email,
      phone: phone,
      date: Timestamp.fromDate(new Date()),
    };

    const batch = writeBatch(db);
    const outOfStock = [];

    objOrder.items.forEach((prod) => {
      getDoc(doc(db, "products", prod.id))
        .then((documentSnapshot) => {
          if (documentSnapshot.data().stock >= prod.quantity) {
            batch.update(doc(db, "products", documentSnapshot.id), {
              stock: documentSnapshot.data().stock - prod.quantity,
            });
          } else {
            outOfStock.push({
              id: documentSnapshot.id,
              ...documentSnapshot.data(),
            });
          }
        })
        .catch((error) => {
          console.log("Error updating product", error);
        });
    });

    if (outOfStock.length === 0) {
      addDoc(collection(db, "orders"), objOrder)
        .then(({ id }) => {
          batch.commit().then(() => {
            console.log(id);
          });
        })
        .catch((error) => {
          console.log("Error pushing new order", error);
        });
    }

    clear();
  };

  useEffect(() => {
    setTotal(countPrices);

    return () => {
      setTotal(0);
    };
  }, [countPrices]);

  return (
    <>
      {total > 0 ? (
        <>
          <div>
            <CartList
              cart={cart}
              removeItem={removeItem}
              clear={clear}
              total={total}
            />
          </div>
          <form onSubmit={confirmOrder}>
            <div>
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                placeholder="Fulano Letal"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="fulanoletal@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="tel">Telefono</label>
              <input
                type="tel"
                id="tel"
                placeholder="341699632"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button className="btn btn-primary">Terminar Compra</button>
          </form>
        </>
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
