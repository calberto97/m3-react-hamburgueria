import React from "react";
import { iProduct } from "../../../Context/ProductContext";

interface iProps {
  cartTotal: number;
  setCurrentSale: React.Dispatch<React.SetStateAction<iProduct[]>>;
}

const CartTotal = ({ cartTotal, setCurrentSale }: iProps) => {
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
