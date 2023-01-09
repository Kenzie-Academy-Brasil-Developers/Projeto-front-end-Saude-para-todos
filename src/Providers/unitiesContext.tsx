import { createContext, useContext, useState } from "react";
import { iDefaultProvidersProps, iUnity } from "./@types";
import { iUnitiesContext } from "./@types";

export const UnitiesContext = createContext({} as iUnitiesContext);
export const UnitiesProvider = ({ children }: iDefaultProvidersProps) => {
  const [allUnities, setAllUnities] = useState([] as iUnity[] | null );
  const [menuHeader, setMenuHeader] = useState(false);


  const createUnity = () => {};
  const deleteUnity = () => {};
  const editUnity = () => {};
  const getUnities = () => {};

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
      }}
    >
      {children}
    </UnitiesContext.Provider>
  );
};
