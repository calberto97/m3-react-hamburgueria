import React, { useContext } from "react";
import { Toaster } from "react-hot-toast";

import Header from "../../Components/Header/header";
import ProductList from "../../Components/ProductList";
import { ProductContext } from "../../Context/ProductContext";

const HomePage = () => {
  const { filteredProducts, products } = useContext(ProductContext);

  return (
    <div>
      <Header />
      <main className="container">
        <>
          <ProductList
            products={
              filteredProducts?.length ? filteredProducts : products
            }
          />
          <Toaster />
        </>
      </main>
    </div>
  );
};

export default HomePage;
