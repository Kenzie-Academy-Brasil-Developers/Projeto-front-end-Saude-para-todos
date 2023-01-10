import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { UserContext } from "../../Providers/UserContext";

export const HomePage = () => {
  const { loading, user } = useContext(UserContext);
  if (loading) {
    return <h2>Carrregando...</h2>;
  }
  return user ? (
    <div>
      <Header />
      <h1>body</h1>
      <Footer />
    </div>
  ) : (
    <Navigate to="/" />
  );
};
