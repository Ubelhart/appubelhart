import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { CartContextProvider } from "./context/CartContext";
import CartListContainer from "./components/CartListContainer";

function App() {
  return (
    <>
      <CartContextProvider>
        <Router>
          <header className="header">
            <NavBar />
          </header>
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting="Bienvenido a mi tienda de ropa" />
              }
            />
            <Route
              path="/category/:categoryId"
              element={
                <ItemListContainer greeting="Bienvenido a mi tienda de ropa" />
              }
            />
            <Route  path="/item/:id" element={<ItemDetailContainer />} />
            <Route  path="/cart" element={<CartListContainer/>}/>
          </Routes>
        </Router>
      </CartContextProvider>
    </>
  );
}

export default App;
