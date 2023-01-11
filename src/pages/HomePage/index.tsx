import React, { useContext } from "react";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { ModalPassword } from "../../Components/ModalPassword";
import { ModalUser } from "../../Components/ModalUser";
import { UserContext } from "../../Providers/UserContext";
import { Navigate } from "react-router-dom";


export const HomePage = () => {
  const { loading, user } = useContext(UserContext);
  if (loading) {
    return <h2>Carrregando...</h2>;
  }
  return user ? (

    <div>
      <Header />
      <main>
        {openModal && <ModalUser/>}
        {modalPassword && <ModalPassword/>}
      <h1>body</h1>
      
      </main>
      <Footer />
    </div>
  ) : (
    <Navigate to="/" />
  );
};
