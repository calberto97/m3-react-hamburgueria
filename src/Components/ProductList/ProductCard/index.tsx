import React from "react";
import { iProduct } from "../../../Context/ProductContext";
import StyledLi from "./style";

interface iProps {
  product: iProduct;
  handleClick: (productID: number) => void;
}

const ProductCard = ({ product, handleClick }: iProps) => {
  const { name, category, price, img, id } = product;

  return (
    <StyledLi id={`${id}`}>
      <div>
        <img src={img} alt="" />
      </div>
      <section>
        <h4>{name}</h4>
        <small>{category}</small>
        <p>R$ {Math.round(price)},00</p>
        <button
          className="button-green-small"
          onClick={() => handleClick(id)}
        >
          Adicionar
        </button>
      </section>
    </StyledLi>
  );
};

export default ProductCard;
