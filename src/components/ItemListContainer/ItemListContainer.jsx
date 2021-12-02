import "./style.scss";
import React, { useEffect, useState } from "react";
import { getProducts } from "../../products";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const list = getProducts();
    list.then((list) => {
      setProducts(list);
    });

    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <>
      <h2>Aca van a ir todos los productos de mi {props.greeting}.</h2>
      <div className="products">
        <ItemList products={products} />
      </div>
    </>
  );
};

export default ItemListContainer;
