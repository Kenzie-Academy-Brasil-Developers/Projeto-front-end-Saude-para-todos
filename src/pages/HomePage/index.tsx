import React, { useContext } from "react";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header";
import { ModalPassword } from "../../Components/ModalPassword";
import { ModalUser } from "../../Components/ModalUser";
import { UserContext } from "../../Providers/UserContext";

export const HomePage = () => {
  const {openModal, setOpenModal, modalPassword, 
    setModalPassword}= useContext(UserContext)

  return (
    <div>
      <Header />
      <main>
        {openModal && <ModalUser/>}
        {modalPassword && <ModalPassword/>}
      <h1>body</h1>
      
      </main>
      <Footer />
    </div>
  );
};
