import React, { useEffect, useState } from "react";
import { getItem } from "../../products";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const list = getItem();
    list.then((list) => {
      setItem(list);
    });
    return () => {
      setItem([]);
    };
  }, []);

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
