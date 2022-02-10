import "./App.css";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductsList/PoructsList";
import Cart from "./components/Cart/Cart";
import Mask from "./imagens/MaskGroup.png";

function App() {
  const [products, setProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [input, setInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log(input);
  console.log(filteredProducts);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  const showProducts = (input) => {
    return products.filter(
      (element) =>
        element.name.toLowerCase() === input.toLowerCase() ||
        element.category.toLowerCase() === input.toLowerCase()
    );
  };

  const handleClick = (productId) => {
    if (currentSale.find((element) => element.id === productId) === undefined) {
      setCurrentSale([
        ...currentSale,
        products.find((element) => element.id === productId),
      ]);
    }
  };
  const remove = (productId) => {
    if (productId === 0) {
      setCurrentSale([]);
    } else {
      setCurrentSale(currentSale.filter((element) => element.id !== productId));
    }
  };

  const productsFilteres = () => {
    if (filteredProducts[0] === undefined) {
      return products;
    } else {
      return filteredProducts;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <header className="header">
          <img
            src={Mask}
            alt="Mask"
            className="img"
            onClick={() => setFilteredProducts([])}
          />
          <div className="input-box">
            <input
              type="text"
              placeholder="Digitar Pesquisa"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />{" "}
            <button onClick={() => setFilteredProducts(showProducts(input))}>
              Pesquisar
            </button>
          </div>
        </header>
        <main className="main-container">
          <ProductList
            products={productsFilteres()}
            HandleClick={handleClick}
          />
          <Cart currentSale={currentSale} remove={remove} />
        </main>
      </header>
    </div>
  );
}

export default App;
