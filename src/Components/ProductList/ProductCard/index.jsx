import React from "react";
import StyledLi from "./style";

const ProductCard = ({ product, handleClick }) => {
  const { name, category, price, img, id } = product;

  return (
    <StyledLi id={id}>
      <div>
        <img src={img} alt="" srcset="" />
      </div>
      <section>
        <h4>{name}</h4>
        <small>{category}</small>
        <p>R$ {Math.round(price)},00</p>
        <button
          className="button-green-small"
          onClick={() => handleClick(id, price)}
        >
          Adicionar
        </button>
      </section>
    </StyledLi>
  );
  //   return products.map((product) => <li key={(uuid())}>{name}</li>);
};

export default ProductCard;
