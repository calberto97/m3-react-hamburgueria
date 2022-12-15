import React from "react";
import uuid from "react-uuid";
import { iProduct } from "../../Context/ProductContext";
import ProductCard from "./ProductCard";
import StyledDiv from "./style";

interface iProps {
  products: iProduct[];
  handleClick: (productID: number) => void;
  inputValue: string;
  setFilteredProducts: React.Dispatch<
    React.SetStateAction<iProduct[]>
  >;
}

const ProductList = ({
  products,
  handleClick,
  inputValue,
  setFilteredProducts,
}: iProps) => {
  // console.log(products)

  if (products?.length === 6) {
    return (
      <StyledDiv>
        <ul>
          {products.map((product) => (
            <ProductCard
              product={product}
              handleClick={handleClick}
              key={uuid()}
            />
          ))}
        </ul>
      </StyledDiv>
    );
  } else if (products?.length > 0) {
    return (
      <>
        <StyledDiv>
          <div>
            <h2>
              Resultados para: <small>{inputValue}</small>
            </h2>
            <button
              className="button-green-small"
              onClick={() => setFilteredProducts([])}
            >
              Limpar Busca
            </button>
          </div>
          <ul>
            {products?.map((product) => (
              <ProductCard
                product={product}
                handleClick={handleClick}
                key={uuid()}
              />
            ))}
          </ul>
        </StyledDiv>
      </>
    );
  } else {
    return null
  }
};

export default ProductList;
