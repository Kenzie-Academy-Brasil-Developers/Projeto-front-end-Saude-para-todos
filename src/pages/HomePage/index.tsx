import React, { useContext } from "react";

import { Footer } from "../../Components/Footer";
import { FormSearch } from "../../Components/FormSearch";
import { Header } from "../../Components/Header";
<<<<<<< HEAD
import { ListPoliclinicas } from "../../Components/ListPoliclinicas";
=======


>>>>>>> b7b33c92b9f23c54b2f7f40c4f9ae48a751581ef
import { UpasList } from "../../Components/ListUnities";
import { UnityModal } from "../../Components/UnityModal";
import { UnitiesContext } from "../../Providers/unitiesContext";

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
    
 <UpasList/>
      
      </main>

      <Footer />
<<<<<<< HEAD
      <UpasList/>
      <ListPoliclinicas/>
=======
     
>>>>>>> b7b33c92b9f23c54b2f7f40c4f9ae48a751581ef
      {modalInfoUnities && <UnityModal/>}
    </div>
  ) : (
    <Navigate to="/" />
  );
};
