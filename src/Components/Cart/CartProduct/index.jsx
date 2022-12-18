import React from "react";
import StyledLi from "./style";
import {FaTrash} from 'react-icons/fa'

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
      <FaTrash
        onClick={() => {
          handleRemove(id);
        }}
      />
    </StyledLi>
  );
};

export default CartProduct;
