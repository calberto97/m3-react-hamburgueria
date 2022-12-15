import React, { useContext } from 'react'
import { Toaster } from 'react-hot-toast';
import Cart from '../../Components/Cart';
import Header from '../../Components/Header/header';
import ProductList from '../../Components/ProductList';
import { CartContext } from '../../Context/CartContext';
import { ProductContext } from '../../Context/ProductContext';
import Global from '../../Styles/global';

const HomePage = () => {

  const {
    filteredProducts,
    setFilteredProducts,
    inputValue,
    setInputValue,
    showProducts,
    products,
  } = useContext(ProductContext);

  const { currentSale, setCurrentSale, handleClick } =
    useContext(CartContext);
  

  return (
    <div className="App">
      <Header
        showProducts={showProducts}
        setInputValue={setInputValue}
        filteredProducts={filteredProducts}
      />
      <main className="container">
        <>
          <ProductList
            products={
              filteredProducts?.length ? filteredProducts : products
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
          <Global />
        </>
      </main>
    </div>
  );
}

export default HomePage