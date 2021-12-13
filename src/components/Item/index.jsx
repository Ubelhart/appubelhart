import "./style.scss";
import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="item">
      <h3>{product.title}</h3>
      <div>
        <img src={`/${product.pictureUrl}`} alt="" />
      </div>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`}>
        <button className="btn btn-primary">Ver Detalle</button>
      </Link>
    </div>
  );
};

export default Item;
