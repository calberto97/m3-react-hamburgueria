import "./App.css";
import React, { useState, useEffect } from "react";
import ProductList from "./Components/ProductList";
import Header from "./Components/Header/header";
import Cart from "./Components/Cart";
import toast, { Toaster } from "react-hot-toast";
import Global from "./Styles/global";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch(
      "https://hamburgueria-kenzie-json-serve.herokuapp.com/products"
    )
      .then((response) => response.json())
      .then((response) => setProducts(response))
      .catch((err) => console.log(err));
  }, []);

  function showProducts() {
    let filtered = products.filter((product) =>
      product.name.toUpperCase().includes(inputValue.toUpperCase())
    );

    if (!filtered.length) {
      filtered = products.filter((product) =>
        product.category
          .toUpperCase()
          .includes(inputValue.toUpperCase())
      );
      if (filtered.length) {
        setFilteredProducts(filtered);
      } else {
        notify("A pesquisa não encontrou resultados ❌");
        setFilteredProducts([])
      }
    } else {
      setFilteredProducts(filtered);
    }
  }

  const notify = (text) =>
    toast(text, {
      style: {
        fontSize: "18px",
        fontWeight: "bold",
      },
    });

  function handleClick(productID, price) {
    if (
      currentSale.find((product) => product.id === productID) ===
      undefined
    ) {
      setCurrentSale([
        ...currentSale,
        products.find((product) => product.id === productID),
      ]);
    } else {
      notify("Esse produto já foi adicionado ✅");
    }
  }

  return (
    <div className="App">
      <Global />
      <Header
        showProducts={showProducts}
        setInputValue={setInputValue}
        filteredProducts={filteredProducts}
      />
      <main className="container">
        <>
          <ProductList
            products={
              filteredProducts.length ? filteredProducts : products
            }
            handleClick={handleClick}
            inputValue={inputValue}
            setFilteredProducts={setFilteredProducts}
          />
          <Toaster />
          <Cart
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
          />
        </>
      </main>
    </div>
  );
}

export default App;
