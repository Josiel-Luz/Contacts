import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import { HomePage } from "../pages/HomePage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
  );
};

export default RoutesMain;
