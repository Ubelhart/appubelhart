import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <>
      <h3>{item.title}</h3>
      <div>
        <img src={`/${item.pictureUrl}`} alt="" />
      </div>
      <p>${item.price}</p>
      <p>{item.description}</p>
    </>
  );
};

export default ItemDetail;
