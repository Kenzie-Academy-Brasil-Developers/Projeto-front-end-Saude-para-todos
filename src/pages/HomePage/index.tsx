import { useContext } from "react";
import { Footer } from "../../Components/Footer";
import { FormSearch } from "../../Components/FormSearch";
import { Header } from "../../Components/Header";
import { UpasList } from "../../Components/ListUnities";
import { UnityModal } from "../../Components/UnityModal";
import { UnitiesContext } from "../../Providers/unitiesContext";

export const HomePage = () => {
  const {modalInfoUnities} = useContext(UnitiesContext)
  return (
    <div>
      <Header />
      <FormSearch/>
      <Footer />
      <UpasList/>
      {modalInfoUnities && <UnityModal/>}
    </div>
  );
};
