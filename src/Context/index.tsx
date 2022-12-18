import { CartProvider } from "./CartContext";
import { ProductProvider } from "./ProductContext";
import { UserProvider } from "./UserContext";

interface iChildren {
  children: React.ReactNode;
}

const Providers = ({ children }: iChildren) => {
  return (
    <UserProvider>
      <ProductProvider>
        <CartProvider>{children}</CartProvider>
      </ProductProvider>
    </UserProvider>
  );
};

export default Providers;
