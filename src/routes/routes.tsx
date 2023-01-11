import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { Routes } from "react-router-dom";
import { Route } from "react-router";
import { UnitiesProvider } from "../Providers/unitiesContext";
import { PageUser } from "../pages/PageUser";
import { PagePassword } from "../pages/PagePassword";
import { AboutPage } from "../pages/AboutUsPage";
import { RegisterUnits } from "../pages/RegisterUnits/index.";
// import { ProtectedRoutes } from "./ProtectedRoutes";


export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/PageUser" element={<PageUser />} />
      <Route path="/PagePassword" element={<PagePassword />} />

      {/* 
      <Route
        element={
  
            <ProtectedRoutes />
   
        }
      > */}
      <Route path="/home" element={<HomePage />} />
      {/* </Route> */}
      <Route path="/about" element={<AboutPage />} />
      <Route path="/RegisterUnits" element={<RegisterUnits />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
