import React from "react";
import uuid from "react-uuid";
import CartProduct from "./CartProduct";
import CartTotal from "./CartTotal";
import StyledDiv from "./style";

const Cart = ({ currentSale, setCurrentSale }) => {
  const total = currentSale.reduce(
    (acc, next) => acc + next.price,
    0
  );

  if (currentSale.length) {
    return (
      <StyledDiv>
        <div>
          <h2>Carrinho de compras</h2>
        </div>
        <ul>
          {currentSale.map((product) => (
            <CartProduct
              product={product}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
              key={uuid()}
            />
          ))}
        </ul>
        <CartTotal cartTotal={total} setCurrentSale={setCurrentSale} />
      </StyledDiv>
    );
  } else {
    return (
      <StyledDiv>
        <div>
          <h2>Carrinho de compras</h2>
        </div>
        <div>
          <h2>Sua sacola está vazia</h2>
          <p>Adicione itens</p>
        </div>
      </StyledDiv>
    );
  }

};

export default Cart;
