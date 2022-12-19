import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/Home";
import LoginPage from "../Pages/Login";
import RegisterPage from "../Pages/Register";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default RoutesComponent;
