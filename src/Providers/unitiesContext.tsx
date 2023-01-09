import { createContext, useEffect, useState } from "react";
import { Api } from "../services/Api";
import { iDefaultProvidersProps, iListUpasData } from "./@types";
import { iUnitiesContext } from "./@types";

export const UnitiesContext = createContext({} as iUnitiesContext);
export const UnitiesProvider = ({ children }: iDefaultProvidersProps) => {
  const [allUnities, setAllUnities] = useState(false);

  const [menuHeader, setMenuHeader] = useState(false);

  const createUnity = () => {};
  const deleteUnity = () => {};
  const editUnity = () => {};
  const getUnities = () => {};

  const [listUpas, setListUpas] = useState<iListUpasData[]>([] as iListUpasData[] );
  
  useEffect(() => {
    (async () => {
      try {
        const response = await Api.get("unity");
        setListUpas(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <UnitiesContext.Provider
      value={{
        allUnities,
        setAllUnities,
        createUnity,
        deleteUnity,
        editUnity,
        getUnities,
        menuHeader,
        setMenuHeader,
        listUpas,
        setListUpas,
      }}
    >
      {children}
    </UnitiesContext.Provider>
  );
};
