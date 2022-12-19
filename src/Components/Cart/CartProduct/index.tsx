import React from "react";
import StyledLi from "./style";
import { FaTrash } from 'react-icons/fa'
import { iProduct } from "../../../Context/ProductContext";

interface iProps {
  product: iProduct;
  currentSale: iProduct[];
  setCurrentSale: React.Dispatch<React.SetStateAction<iProduct[]>>;
}

const CartProduct = ({ product, currentSale, setCurrentSale }: iProps) => {
  const { name, category, price, img, id } = product;

  const handleRemove = (id: number) => {
    setCurrentSale(
      currentSale.filter((product) => product.id !== id)
    );
  };

  return (
    <StyledLi>
      <div>
        <figure>
          <img src={img} alt="" />
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
