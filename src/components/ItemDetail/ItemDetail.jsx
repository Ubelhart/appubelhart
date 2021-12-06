import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <div>
        <img src={item.pictureUrl} alt="" />
      </div>
      <p>${item.price}</p>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetail;
