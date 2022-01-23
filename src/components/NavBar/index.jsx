import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getCategories } from "../../services/categories";
import CartWidget from "../CartWidget";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((list) => {
      setCategories(list);
    });
    return () => {
      setCategories([]);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          MASTER
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {categories.map((category) => {
              return (
                <li key={category.idCategory} className="nav-item">
                  <NavLink
                    className="nav-link"
                    to={`/category/${category.idCategory}`}
                  >
                    {category.name}
                  </NavLink>
                </li>
              );
            })}
            <li>
              <NavLink to="/cart">
                <CartWidget />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
