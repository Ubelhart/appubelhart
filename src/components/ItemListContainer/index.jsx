import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList";
import Loader from "../Loader";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

const ItemListContainer = (props) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDocs(collection(db, "products"))
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        if (categoryId !== undefined) {
          const productsByCategory = products.filter((prod) => {
            return prod.category === categoryId;
          });
          setProducts(productsByCategory);
        } else {
          setProducts(products);
        }
      })
      .catch((error) => {
        console.log("Error searching products", error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      setProducts([]);
    };
  }, [categoryId]);

  useEffect(() => {
    if (categoryId !== undefined) {
      getDocs(collection(db, "categories"))
        .then((querySnapshot) => {
          const categories = querySnapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          const category = categories.find((item) => categoryId === item.id);
          setCategory(category);
        })
        .catch((error) => {
          console.log("Error searching categories", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    return () => {
      setCategory({});
    };
  }, [categoryId]);

  return (
    <>
      {loading ? (
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
