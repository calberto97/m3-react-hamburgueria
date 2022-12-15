import { CartProvider } from "./CartContext";
import { ProductProvider } from "./ProductContext";

interface iChildren {
  children: React.ReactNode;
}

const Providers = ({ children }: iChildren) => {
  return (
    <ProductProvider>
      <CartProvider>{children}</CartProvider>
    </ProductProvider>
  );
};

export default Providers;
