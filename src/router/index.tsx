import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import LandingPage from "../pages/LandingPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/chat" element={<div>chat</div>} />
    </Routes>
  );
};

export default AppRouter;
