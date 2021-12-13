import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
        <header className="header">
          <NavBar />
        </header>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ItemListContainer greeting="Bienvenido a mi tienda de ropa" />
            }
          />
          <Route
            exact
            path="/category/:categoryId"
            element={
              <ItemListContainer greeting="Bienvenido a mi tienda de ropa" />
            }
          />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
