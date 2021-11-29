import "./style.scss";
import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = (props) => {
  const onAdd = () => alert("Agregado al Carrito");
  return (
    <>
      <h2>Aca van a ir todos los productos de mi {props.greeting}.</h2>
      <div className="products">
        <ItemCount product="Camisa Tigre" stock="10" onAdd={onAdd} />
        <ItemCount product="Camisa Relampago" stock="7" onAdd={onAdd} />
        <ItemCount product="Camisa Fuego" stock="5" onAdd={onAdd} />
      </div>
    </>
  );
};

export default ItemListContainer;
