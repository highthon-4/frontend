import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import SignUpIdPage from "../pages/SignUp/SignUpIdPage";
import SignUpPwdPage from "../pages/SignUp/SignUpPwdPage";
import SignUpNamePage from "../pages/SignUp/SignUpNamePage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup/id" element={<SignUpIdPage />} />
      <Route path="/signup/pwd" element={<SignUpPwdPage />} />
      <Route path="/signup/name" element={<SignUpNamePage />} />
    </Routes>
  );
};

export default AppRouter;
