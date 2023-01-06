import { createContext, useState } from "react";
import { iDefaultProvidersProps } from "./@types";
import { iUnitiesContext } from "./@types";

export const UnitiesContext = createContext({} as iUnitiesContext);
export const UnitiesProvider = ({ children }: iDefaultProvidersProps) => {
  const [allUnities, setAllUnities] = useState(false);
  
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
