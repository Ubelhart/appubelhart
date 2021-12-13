import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory, getProducts } from "../../products";
import ItemList from "../ItemList";
import Loader from "../Loader";

const ItemListContainer = (props) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (categoryId !== undefined) {
      const list = getProductsByCategory(categoryId);
      list.then((list) => {
        setProducts(list);
      });
    } else {
      const list = getProducts();
      list.then((list) => {
        setProducts(list);
      });
    }

    return () => {
      setProducts([]);
    };
  }, [categoryId]);

  return (
    <>
      {products.length !== 0 ? (
        <>
          <h2>{products.length === 2 ? categoryId : props.greeting}</h2>
          <ItemList products={products} />
        </>
      ) : (
        <>
          <Loader />
        </>
      )}
    </>
  );
};

export default ItemListContainer;
