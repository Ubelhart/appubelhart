import "./App.scss";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <header className="header">
        <NavBar />
        <ItemListContainer greeting="tienda de ropa" />
        <ItemDetailContainer />
      </header>
    </>
  );
}

export default App;
