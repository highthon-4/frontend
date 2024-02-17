import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/chat" element={<div>chat</div>} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRouter;
