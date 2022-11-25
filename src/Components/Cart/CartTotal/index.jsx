import React from "react";

const CartTotal = ({ cartTotal, setCurrentSale }) => {
  return (
    <>
      <section>
        <span>
          <p>Total</p>
          <p>R$ {Math.round(cartTotal)},00</p>
        </span>
        <button
          onClick={() => {
            setCurrentSale([]);
          }}
        >
          Remover Todos
        </button>
      </section>
    </>
  );
};

export default CartTotal;
