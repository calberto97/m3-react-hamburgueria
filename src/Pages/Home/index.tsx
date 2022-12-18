import React, { useContext, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/header";
import ProductList from "../../Components/ProductList";
import { ProductContext } from "../../Context/ProductContext";
import API from "../../Services/api";

const HomePage = () => {
  const { filteredProducts, products, setProducts } = useContext(ProductContext);
  const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("@TOKEN");
      if (token) {
        API.get("products", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
          .then((response) => {
            setProducts(response.data);
          })
          .catch((error) => {
            console.error(error);
            navigate("login");
            window.localStorage.clear();
          });
      } else {
        navigate("/login");
        window.localStorage.clear();
      }
    }, []);

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
