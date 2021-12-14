import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
import ItemDetail from "../ItemDetail";
import ItemCount from "../ItemCount";
import Loader from "../Loader";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const product = getProductById(id);
    product.then((product) => {
      setItem(product);
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
              <ItemCount item={item} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ItemDetailContainer;
