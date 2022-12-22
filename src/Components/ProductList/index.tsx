import React, { useContext } from "react";
import uuid from "react-uuid";
import { CartContext } from "../../Context/CartContext";
import {
  iProduct,
  ProductContext,
} from "../../Context/ProductContext";
import ProductCard from "./ProductCard";
import StyledDiv from "./style";

interface iProps {
  products: iProduct[];
}

const ProductList = ({ products }: iProps) => {
  const { searchText, setFilteredProducts } =
    useContext(ProductContext);

  const { handleClick } = useContext(CartContext);

  if (products?.length === 6) {
    return (
      <StyledDiv>
        <ul>
          {products.map((product) => (
            <ProductCard
              product={product}
              // handleClick={handleClick}
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
              Resultados para: <small>{searchText}</small>
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
                // handleClick={handleClick}
                key={uuid()}
              />
            ))}
          </ul>
        </StyledDiv>
      </>
    );
  } else {
    return null;
  }
};

export default ProductList;
