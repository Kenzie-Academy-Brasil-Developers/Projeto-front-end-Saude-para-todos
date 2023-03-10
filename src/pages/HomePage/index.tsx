import React, { useContext } from "react";

import { Footer } from "../../Components/Footer";
import { FormSearch } from "../../Components/FormSearch";
import { Header } from "../../Components/Header";
import { ListPoliclinicas } from "../../Components/ListPoliclinicas";
import { UpasList } from "../../Components/ListUnities";
import { UnityModal } from "../../Components/UnityModal";
import { UnitiesContext } from "../../Providers/unitiesContext";
import { UserContext } from "../../Providers/UserContext";
import { StyledSectionHome } from "./homepage";

export const HomePage = () => {
  const { loading, user, openModal, modalPassword } = useContext(UserContext);
  const { modalInfoUnities } = useContext(UnitiesContext);

  if (loading) {
    return <h2>Carrregando...</h2>;
  }
  return (
    <>
      <StyledSectionHome>
        <Header />
        <FormSearch />
        <UpasList />
        <ListPoliclinicas />
        <Footer />
      {modalInfoUnities && <UnityModal />}
      </StyledSectionHome>
    </>
  );
};
