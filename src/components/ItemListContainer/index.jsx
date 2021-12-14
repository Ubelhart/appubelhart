import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByCategory, getProducts } from "../../services/products";
import ItemList from "../ItemList";
import Loader from "../Loader";
import { getCategoryById } from "../../services/categories";

const ItemListContainer = (props) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

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

  useEffect(() => {
    if (categoryId !== undefined) {
      getCategoryById(categoryId).then((list) => {
        setCategory(list);
      });
    }
    return () => {
      setCategory([]);
    };
  }, [categoryId]);

  return (
    <>
      {products.length === 0 ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <h2>{categoryId ? category.name : props.greeting}</h2>
          <ItemList products={products} />
        </>
      )}
    </>
  );
};

export default ItemListContainer;
