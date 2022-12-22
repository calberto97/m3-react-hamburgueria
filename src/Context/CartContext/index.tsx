import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { iProduct, ProductContext } from "../ProductContext";

interface iExport {
  currentSale: iProduct[];
  setCurrentSale: React.Dispatch<React.SetStateAction<iProduct[]>>;
  handleClick: (productID: number) => void;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartContext = createContext({} as iExport);

export const CartProvider = () => {
  const { notify, products } = useContext(ProductContext);

  const [openModal, setOpenModal] = useState(false);

  const [currentSale, setCurrentSale] = useState<iProduct[]>(
    [] as iProduct[]
  );

  const handleClick = (productID: number) => {
    const productOnCart = currentSale?.find(
      (product) => product.id === productID
    );
    if (productOnCart === undefined) {
      const foundProduct = products.find(
        (product) => product.id === productID
      );

      if (foundProduct) {
        setCurrentSale([foundProduct, ...currentSale]);
      }
    } else {
      notify("Esse produto já foi adicionado ✅");
    }
  };

  return (
    <CartContext.Provider
      value={{
        currentSale,
        setCurrentSale,
        handleClick,
        openModal,
        setOpenModal,
      }}
    >
      <Outlet />
    </CartContext.Provider>
  );
};
