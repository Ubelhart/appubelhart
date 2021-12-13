import "./style.scss";
import React from "react";
import Item from "../Item";

const ItemList = ({ products }) => {
  return (
    <div className="items">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ItemList;
