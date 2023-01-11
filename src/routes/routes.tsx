import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { Routes } from "react-router-dom";
import { Route } from "react-router";
import { UnitiesProvider } from "../Providers/unitiesContext";
import { PageUser } from "../pages/PageUser";
import { PagePassword } from "../pages/PagePassword";

// import { ProtectedRoutes } from "./protectedRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/PageUser" element={<PageUser/>}/>
      <Route path="/PagePassword" element={<PagePassword/>}/>
      {/* <Route element={<ProtectedRoutes />}> */}
      <Route
        path="/home"
        element={
          <UnitiesProvider>
            <HomePage />
          </UnitiesProvider>
        }
      />
      {/* </Route> */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
