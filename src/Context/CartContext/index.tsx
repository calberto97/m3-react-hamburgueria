import { createContext, useContext, useState } from "react";
import { iProduct, ProductContext } from "../ProductContext";

interface iChildren {
  children: React.ReactNode;
}

interface iExport {
  currentSale: iProduct[];
  setCurrentSale: React.Dispatch<React.SetStateAction<iProduct[]>>;
  handleClick: (productID: number) => void;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CartContext = createContext({} as iExport);

export const CartProvider = ({ children }: iChildren) => {
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
        // setCurrentSale([foundProduct as iProduct, ...currentSale]);
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
      {children}
    </CartContext.Provider>
  );
};
