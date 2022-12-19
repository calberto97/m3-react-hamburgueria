import React, { useContext } from "react";
import uuid from "react-uuid";
import CartProduct from "./CartProduct";
import CartTotal from "./CartTotal";
import StyledDiv from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { CartContext } from "../../Context/CartContext";
import { iProduct } from "../../Context/ProductContext";

interface iProps {
  currentSale: iProduct[];
  setCurrentSale: React.Dispatch<React.SetStateAction<iProduct[]>>;
}

const Cart = ({ currentSale, setCurrentSale }: iProps) => {
  const total = currentSale?.reduce(
    (acc, next) => acc + next.price,
    0
  );

  const { setOpenModal } = useContext(CartContext);

  if (currentSale?.length) {
    return (
      <StyledDiv className="not-empty">
        <div>
          <h2>Carrinho de compras</h2>
          <AiOutlineClose onClick={() => setOpenModal(false)} />
        </div>
        <ul>
          {currentSale?.map((product) => (
            <CartProduct
              product={product}
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
              key={uuid()}
            />
          ))}
        </ul>
        <hr />
        <CartTotal
          cartTotal={total}
          setCurrentSale={setCurrentSale}
        />
      </StyledDiv>
    );
  } else {
    return (
      <StyledDiv>
        <div>
          <h2>Carrinho de compras</h2>
          <AiOutlineClose onClick={() => setOpenModal(false)} />
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
