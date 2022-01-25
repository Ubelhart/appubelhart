import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase/firebase";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "categories"))
      .then((querySnapshot) => {
        const categories = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setCategories(categories);
      })
      .catch((error) => {
        console.log("Error searching categories", error);
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
                <li key={category.id} className="nav-item">
                  <NavLink className="nav-link" to={`/category/${category.id}`}>
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
