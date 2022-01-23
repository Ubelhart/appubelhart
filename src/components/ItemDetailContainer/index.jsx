import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import Loader from "../Loader";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    getDoc(doc(db, "products", id))
      .then((querySnapshot) => {
        const product = { id: querySnapshot.id, ...querySnapshot.data() };
        setItem(product);
      })
      .catch((error) => {
        console.log("Error searching product", error);
      });

    return () => {
      setItem({});
    };
  }, [id]);
  return (
    <>
      {Object.keys(item).length === 0 ? (
        <Loader />
      ) : (
        <>
          <h2>Detalle</h2>
          <div className="items">
            <div className="item">
              <ItemDetail item={item} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ItemDetailContainer;
