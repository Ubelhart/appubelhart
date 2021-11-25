import "./App.scss";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <header className="header">
        <NavBar />
        <ItemListContainer greeting="tienda de ropa" />
      </header>
    </>
  );
}

export default App;
