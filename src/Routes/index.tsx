import { Navigate, Route, Routes } from "react-router-dom";
import { CartProvider } from "../Context/CartContext";
import { ProductProvider } from "../Context/ProductContext";
import { UserProvider } from "../Context/UserContext";
import HomePage from "../Pages/Home";
import LoginPage from "../Pages/Login";
import RegisterPage from "../Pages/Register";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route element={<UserProvider />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route element={<ProductProvider />}>
          <Route element={<CartProvider />}>
            <Route path="/home" element={<HomePage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
