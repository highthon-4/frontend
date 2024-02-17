import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/chat" element={<div>chat</div>} />
    </Routes>
  );
};

export default AppRouter;
