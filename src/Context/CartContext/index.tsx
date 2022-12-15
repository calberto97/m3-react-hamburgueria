import { createContext, useContext, useState } from "react";
import { iProduct, ProductContext } from "../ProductContext";

interface iChildren {
  children: React.ReactNode;
}

interface iExport {
  currentSale: iProduct[];
  setCurrentSale: React.Dispatch<React.SetStateAction<iProduct[]>>;
  handleClick: (productID: number) => void;
}

export const CartContext = createContext({} as iExport);

export const CartProvider = ({ children }: iChildren) => {
  const { notify, products } = useContext(ProductContext);

  const [currentSale, setCurrentSale] = useState<iProduct[]>([] as iProduct[]);

  const handleClick = (productID: number) => {
    const productOnCart = currentSale?.find(
      (product) => product.id === productID
    );
      if (productOnCart === undefined
      ) {
        const foundProduct  = products.find(
          (product) => product.id === productID
        );
        console.log(currentSale)
        console.log(foundProduct)
        if (foundProduct) {
          setCurrentSale([foundProduct, ...currentSale])
          // setCurrentSale([foundProduct as iProduct, ...currentSale]);          
        }

    } else {
      notify("Esse produto já foi adicionado ✅");
    }
  };

  return (
    <CartContext.Provider value={{currentSale, setCurrentSale, handleClick}}>{children}</CartContext.Provider>
  );
};
