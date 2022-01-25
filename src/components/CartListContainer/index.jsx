import React, { useContext, useEffect, useState } from "react";
import CartList from "../CartList";
import Form from "../Form";
import CartContext from "../../context/CartContext";
import { NavLink } from "react-router-dom";
import { db } from "../../services/firebase/firebase";
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
  const [transactionId, setTransactionId] = useState();
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
            setTransactionId(id);
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
          <Form
            onSubmit={confirmOrder}
            onChangeName={setName}
            onChangeEmail={setEmail}
            onChangePhone={setPhone}
          />
        </>
      ) : (
        <>
          {transactionId ? (
            <>
              <h3>Su numero de transacción es: {transactionId}</h3>
              <NavLink to="/">
                <button className="btn btn-danger">Volver al Landing</button>
              </NavLink>
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
      )}
    </>
  );
};

export default CartListContainer;
