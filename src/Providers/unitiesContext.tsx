import { createContext, useState } from "react";
import { iDefaultProvidersProps } from "./@types";

export const UnitiesContext = createContext({});

export const UserProvider = ({ children }: iDefaultProvidersProps) => {
  const [allUnities, setAllUnities] = useState(false);

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
      }}
    >
      {children}
    </UnitiesContext.Provider>
  );
};
