import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";

const ItemDetail = ({ item }) => {
  return (
    <>
      {item.stock > 0 ? (
        <>
          <h3>{item.title}</h3>
          <div>
            <img src={`/${item.pictureUrl}`} alt="" />
          </div>
          <p>${item.price}</p>
          <p>{item.description}</p>
          <ItemCount item={item} />
        </>
      ) : (
        <>
          <Link to="/">
            <button className="btn btn-primary">
              Volver al Listado de Productos
            </button>
          </Link>
          <Link to="/cart">
            <button className="btn btn-primary">Ir al Carrito</button>
          </Link>
        </>
      )}
    </>
  );
};

export default ItemDetail;
