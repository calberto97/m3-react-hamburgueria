import React from "react";
import StyledLi from "./style";

const CartProduct = ({ product, currentSale, setCurrentSale }) => {
  const { name, category, price, img, id } = product;

  const handleRemove = (id) => {
    setCurrentSale(
      currentSale.filter((product) => product.id !== id)
    );
  };

  return (
    <StyledLi>
      <div>
        <figure>
          <img src={img} alt="" srcset="" />
        </figure>
        <span>
          <h4>{name}</h4>
          <small>{category}</small>
        </span>
      </div>
      <small
        onClick={() => {
          handleRemove(id);
        }}
      >
        Remover
      </small>
    </StyledLi>
  );
};

export default CartProduct;
