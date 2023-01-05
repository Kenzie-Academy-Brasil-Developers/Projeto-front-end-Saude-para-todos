import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../Providers/UserContext";

export const ProtectedRoutes = () => {
  const { loading, userToken } = useContext(UserContext);
  if (loading) {
    return null;
  }
  return userToken ? <Outlet /> : <Navigate to="/" replace />;
};
