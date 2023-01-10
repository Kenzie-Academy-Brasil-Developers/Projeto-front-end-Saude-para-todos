import { createContext, useContext, useState } from "react";
import { Api } from "../services/Api";
import { iDefaultProvidersProps, IformData } from "./@types";
import { iUnitiesContext } from "./@types";
import { UserContext } from "./UserContext";

export const UnitiesContext = createContext({} as iUnitiesContext);
export const UnitiesProvider = ({ children }: iDefaultProvidersProps) => {
  const [allUnities, setAllUnities] = useState(false);

  const [menuHeader, setMenuHeader] = useState(false);
  const { localStorageToken } = useContext(UserContext);

  const createUnity = async (formData: IformData) => {
    try {
      await Api.post(`unity`, formData, {
        headers: {
          Authorization: `Bearer ${localStorageToken}`,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUnity = async (id: number | string) => {
    try {
      await Api.post(`unity/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorageToken}`,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };
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
